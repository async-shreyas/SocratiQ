import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { solutionSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';
import { updateProblemProgress } from '@/lib/problem-utils';

/**
 * GET /api/problems/[id]/solutions
 * Get all solutions for a problem
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

    const solutions = await prisma.solution.findMany({
      where: { problemId: params.id },
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json(solutions);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch solutions');
  }
}

/**
 * POST /api/problems/[id]/solutions
 * Create a new solution
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

    const body = await req.json();
    const validation = solutionSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const solution = await prisma.solution.create({
      data: {
        ...validation.data,
        problemId: params.id
      }
    });

    // Update problem progress
    await updateProblemProgress(params.id);

    return NextResponse.json(solution, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'Failed to create solution');
  }
}