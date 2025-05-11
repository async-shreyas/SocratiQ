// app/api/problems/[problemId]/solutions/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

// Solution schema for validation
const solutionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  feasibility: z.string().min(1, 'Feasibility rating is required'),
  impact: z.string().min(1, 'Impact rating is required'),
  cost: z.string().min(1, 'Cost rating is required'),
  time: z.string().min(1, 'Time rating is required')
});

// Get a specific solution
export async function GET(
  req: NextRequest,
  { params }: { params: { problemId: string, id: string } }
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
      where: { id: params.problemId }
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

    const solution = await prisma.solution.findFirst({
      where: {
        id: params.id,
        problemId: params.problemId
      }
    });

    if (!solution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(solution);
  } catch (error) {
    console.error('Error fetching solution:', error);
    return NextResponse.json(
      { error: 'Failed to fetch solution' },
      { status: 500 }
    );
  }
}

// Update a solution
export async function PATCH(
  req: NextRequest,
  { params }: { params: { problemId: string, id: string } }
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
      where: { id: params.problemId }
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

    // Check if solution exists
    const existingSolution = await prisma.solution.findFirst({
      where: {
        id: params.id,
        problemId: params.problemId
      }
    });

    if (!existingSolution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }

    const body = await req.json();
    const validation = solutionSchema.partial().safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const updatedSolution = await prisma.solution.update({
      where: { id: params.id },
      data: validation.data
    });

    return NextResponse.json(updatedSolution);
  } catch (error) {
    console.error('Error updating solution:', error);
    return NextResponse.json(
      { error: 'Failed to update solution' },
      { status: 500 }
    );
  }
}

// Delete a solution
export async function DELETE(
  req: NextRequest,
  { params }: { params: { problemId: string, id: string } }
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
      where: { id: params.problemId }
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

    // Check if solution exists
    const existingSolution = await prisma.solution.findFirst({
      where: {
        id: params.id,
        problemId: params.problemId
      }
    });

    if (!existingSolution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }

    await prisma.solution.delete({
      where: { id: params.id }
    });

    // Update problem progress
    await updateProblemProgress(params.problemId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting solution:', error);
    return NextResponse.json(
      { error: 'Failed to delete solution' },
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