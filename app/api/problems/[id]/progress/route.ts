import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';
import { updateProblemProgress } from '@/lib/problem-utils';
import { ProblemStatus } from '@/validators/problem';

// Progress update schema
const progressUpdateSchema = z.object({
  progress: z.number().int().min(0).max(100),
  status: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED']).optional()
});

/**
 * GET /api/problems/[id]/progress
 * Get current progress for a problem
 */
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
      where: { 
        id: params.id,
        userId
      }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      progress: problem.progress,
      status: problem.status
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch problem progress');
  }
}

/**
 * PATCH /api/problems/[id]/progress
 * Update progress manually
 */
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
      where: { 
        id: params.id,
        userId
      }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    const body = await req.json();
    const validation = progressUpdateSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    // Prepare update data
    const updateData: { progress: number; status?: ProblemStatus } = {
      progress: validation.data.progress
    };

    // If status is provided, use it; otherwise, calculate based on progress
    if (validation.data.status) {
      updateData.status = validation.data.status;
    } else {
      // Calculate status based on progress
      if (updateData.progress >= 100) {
        updateData.status = 'COMPLETED';
      } else if (updateData.progress > 0) {
        updateData.status = 'IN_PROGRESS';
      } else {
        updateData.status = 'NOT_STARTED';
      }
    }

    // Update the problem
    const updatedProblem = await prisma.problem.update({
      where: { id: params.id },
      data: updateData
    });

    return NextResponse.json({
      progress: updatedProblem.progress,
      status: updatedProblem.status
    });
  } catch (error) {
    return handleApiError(error, 'Failed to update problem progress');
  }
}

/**
 * POST /api/problems/[id]/progress
 * Calculate progress automatically
 */
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
      where: { 
        id: params.id,
        userId
      }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    // Calculate and update progress
    await updateProblemProgress(params.id);

    // Get the updated problem
    const updatedProblem = await prisma.problem.findUnique({
      where: { id: params.id }
    });

    return NextResponse.json({
      progress: updatedProblem?.progress || 0,
      status: updatedProblem?.status || 'NOT_STARTED'
    });
  } catch (error) {
    return handleApiError(error, 'Failed to calculate problem progress');
  }
}