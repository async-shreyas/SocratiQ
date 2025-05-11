// app/api/problems/[id]/components/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

// Component schema for validation
const componentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  isCritical: z.boolean().default(false)
});

// Get all components for a problem
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify problem exists and belongs to user
    const problem = await prisma.problem.findUnique({
      where: { id: params.id }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    if (problem.userId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const components = await prisma.problemComponent.findMany({
      where: { problemId: params.id },
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json(components);
  } catch (error) {
    console.error('Error fetching components:', error);
    return NextResponse.json(
      { error: 'Failed to fetch components' },
      { status: 500 }
    );
  }
}

// Create a new component for a problem
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify problem exists and belongs to user
    const problem = await prisma.problem.findUnique({
      where: { id: params.id }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    if (problem.userId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const validation = componentSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const component = await prisma.problemComponent.create({
      data: {
        ...validation.data,
        problemId: params.id
      }
    });

    // Update problem progress if needed
    await updateProblemProgress(params.id);

    return NextResponse.json(component, { status: 201 });
  } catch (error) {
    console.error('Error creating component:', error);
    return NextResponse.json(
      { error: 'Failed to create component' },
      { status: 500 }
    );
  }
}

// Helper function to update problem progress
async function updateProblemProgress(problemId: string) {
  // This is a simple example that updates progress based on the number of components, truths, and solutions
  // You might want to implement a more sophisticated approach
  try {
    const [components, truths, solutions] = await Promise.all([
      prisma.problemComponent.count({ where: { problemId } }),
      prisma.fundamentalTruth.count({ where: { problemId } }),
      prisma.solution.count({ where: { problemId } })
    ]);
    
    // Calculate progress (simple algorithm, adjust as needed)
    let progress = 0;
    
    if (components > 0) progress += 30;
    if (truths > 0) progress += 30;
    if (solutions > 0) progress += 30;
    
    // Cap at 100
    progress = Math.min(progress, 100);
    
    // Update status based on progress
    let status = 'NOT_STARTED';
    if (progress >= 100) {
      status = 'COMPLETED';
    } else if (progress > 0) {
      status = 'IN_PROGRESS';
    }
    
    await prisma.problem.update({
      where: { id: problemId },
      data: { 
        progress, 
        status: status as 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
      }
    });
  } catch (error) {
    console.error('Error updating problem progress:', error);
  }
}