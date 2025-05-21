import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { problemSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';

/**
 * GET /api/problems/[id]
 * Get a specific problem
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
    const { id } = params;

    const problem = await prisma.problem.findUnique({
      where: { 
        id,
        userId
      },
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      }
    });

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(problem);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch problem');
  }
}

/**
 * PATCH /api/problems/[id]
 * Update a problem
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    const { id } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if problem exists and belongs to user
    const existingProblem = await prisma.problem.findUnique({
      where: {
        id,
        userId
      }
    });

    if (!existingProblem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    const body = await req.json();
    const validation = problemSchema.partial().safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const updatedProblem = await prisma.problem.update({
      where: { id },
      data: validation.data,
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      }
    });

    return NextResponse.json(updatedProblem);
  } catch (error) {
    return handleApiError(error, 'Failed to update problem');
  }
}

/**
 * DELETE /api/problems/[id]
 * Delete a problem
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    const { id } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if problem exists and belongs to user
    const existingProblem = await prisma.problem.findUnique({
      where: {
        id,
        userId
      }
    });

    if (!existingProblem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    // Delete related components, truths, and solutions
    await prisma.$transaction([
      prisma.problemComponent.deleteMany({
        where: { problemId: params.id }
      }),
      prisma.fundamentalTruth.deleteMany({
        where: { problemId: params.id }
      }),
      prisma.solution.deleteMany({
        where: { problemId: params.id }
      }),
      prisma.problem.delete({
        where: { id: params.id }
      })
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error, 'Failed to delete problem');
  }
}