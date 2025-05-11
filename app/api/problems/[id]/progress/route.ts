// app/api/problems/[id]/progress/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

// Schema for progress update
const progressSchema = z.object({
  progress: z.number().int().min(0).max(100),
  status: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED']).optional()
});

// Get progress for a problem
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

    return NextResponse.json({
      progress: problem.progress,
      status: problem.status
    });
  } catch (error) {
    console.error('Error fetching problem progress:', error);
    return NextResponse.json(
      { error: 'Failed to fetch problem progress' },
      { status: 500 }
    );
  }
}

// Update progress for a problem
export async function PATCH(
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
    const validation = progressSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    // Determine status based on progress if not explicitly provided
    let status = validation.data.status;
    if (!status) {
      if (validation.data.progress >= 100) {
        status = 'COMPLETED';
      } else if (validation.data.progress > 0) {
        status = 'IN_PROGRESS';
      } else {
        status = 'NOT_STARTED';
      }
    }

    const updatedProblem = await prisma.problem.update({
      where: { id: params.id },
      data: { 
        progress: validation.data.progress,
        status: status
      }
    });

    return NextResponse.json({
      progress: updatedProblem.progress,
      status: updatedProblem.status
    });
  } catch (error) {
    console.error('Error updating problem progress:', error);
    return NextResponse.json(
      { error: 'Failed to update problem progress' },
      { status: 500 }
    );
  }
}

// Calculate and update progress for a problem automatically
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

    // Calculate progress based on completed steps
    const progress = await calculateProblemProgress(params.id);
    
    // Determine status based on progress
    let status = 'NOT_STARTED';
    if (progress >= 100) {
      status = 'COMPLETED';
    } else if (progress > 0) {
      status = 'IN_PROGRESS';
    }

    const updatedProblem = await prisma.problem.update({
      where: { id: params.id },
      data: { 
        progress,
        status: status as 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
      }
    });

    return NextResponse.json({
      progress: updatedProblem.progress,
      status: updatedProblem.status
    });
  } catch (error) {
    console.error('Error calculating problem progress:', error);
    return NextResponse.json(
      { error: 'Failed to calculate problem progress' },
      { status: 500 }
    );
  }
}

// Helper function to calculate problem progress
async function calculateProblemProgress(problemId: string) {
  try {
    const [components, truths, solutions] = await Promise.all([
      prisma.problemComponent.count({ where: { problemId } }),
      prisma.fundamentalTruth.count({ where: { problemId } }),
      prisma.solution.count({ where: { problemId } })
    ]);
    
    // Calculate progress based on steps completed
    let progress = 0;
    
    // Problem decomposition (30%)
    if (components > 0) {
      progress += 30;
    }
    
    // Fundamental truths (30%)
    if (truths > 0) {
      progress += 30;
    }
    
    // Solutions (40%)
    if (solutions > 0) {
      const solutionProgress = Math.min(solutions * 10, 40); // Max 40%
      progress += solutionProgress;
    }
    
    // Cap at 100
    return Math.min(progress, 100);
  } catch (error) {
    console.error('Error in calculateProblemProgress:', error);
    return 0;
  }
}