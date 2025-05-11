// app/api/problems/[id]/truths/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

// Truth schema for validation
const truthSchema = z.object({
  truth: z.string().min(1, 'Truth statement is required'),
  description: z.string().min(1, 'Description is required')
});

// Get all fundamental truths for a problem
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

    const truths = await prisma.fundamentalTruth.findMany({
      where: { problemId: params.id },
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json(truths);
  } catch (error) {
    console.error('Error fetching fundamental truths:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fundamental truths' },
      { status: 500 }
    );
  }
}

// Create a new fundamental truth for a problem
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
    const validation = truthSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const truth = await prisma.fundamentalTruth.create({
      data: {
        ...validation.data,
        problemId: params.id
      }
    });

    // Update problem progress
    await updateProblemProgress(params.id);

    return NextResponse.json(truth, { status: 201 });
  } catch (error) {
    console.error('Error creating fundamental truth:', error);
    return NextResponse.json(
      { error: 'Failed to create fundamental truth' },
      { status: 500 }
    );
  }
}

// Helper function to update problem progress
async function updateProblemProgress(problemId: string) {
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