import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { solutionSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';
import { updateProblemProgress } from '@/lib/problem-utils';

/**
 * GET /api/problems/[id]/solutions/[solutionId]
 * Get a specific solution
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string, solutionId: string } }
) {
  try {
    const { userId } = await auth();
    const { id, solutionId } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify problem exists and belongs to user
    const problem = await prisma.problem.findUnique({
      where: { 
        id,
        userId
      }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    const solution = await prisma.solution.findFirst({
      where: {
        id: solutionId,
        problemId: id
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
    return handleApiError(error, 'Failed to fetch solution');
  }
}

/**
 * PATCH /api/problems/[id]/solutions/[solutionId]
 * Update a solution
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string, solutionId: string } }
) {
  try {
    const { userId } = await auth();
    const { id, solutionId } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify problem exists and belongs to user
    const problem = await prisma.problem.findUnique({
      where: { 
        id,
        userId
      }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    // Check if solution exists
    const existingSolution = await prisma.solution.findFirst({
      where: {
        id: solutionId,
        problemId: id
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
      where: { id: solutionId },
      data: validation.data
    });

    return NextResponse.json(updatedSolution);
  } catch (error) {
    return handleApiError(error, 'Failed to update solution');
  }
}

/**
 * DELETE /api/problems/[id]/solutions/[solutionId]
 * Delete a solution
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string, solutionId: string } }
) {
  try {
    const { userId } = await auth();
    const { id, solutionId } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify problem exists and belongs to user
    const problem = await prisma.problem.findUnique({
      where: { 
        id,
        userId
      }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    // Check if solution exists
    const existingSolution = await prisma.solution.findFirst({
      where: {
        id: solutionId,
        problemId: id
      }
    });

    if (!existingSolution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }

    await prisma.solution.delete({
      where: { id: solutionId }
    });

    // Update problem progress
    await updateProblemProgress(params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error, 'Failed to delete solution');
  }
}