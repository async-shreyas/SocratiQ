import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { fundamentalTruthSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';
import { updateProblemProgress } from '@/lib/problem-utils';

/**
 * GET /api/problems/[id]/truths
 * Get all fundamental truths for a problem
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

    const truths = await prisma.fundamentalTruth.findMany({
      where: { problemId: params.id },
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json(truths);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch fundamental truths');
  }
}

/**
 * POST /api/problems/[id]/truths
 * Create a new fundamental truth
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
    const validation = fundamentalTruthSchema.safeParse(body);
    
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
    return handleApiError(error, 'Failed to create fundamental truth');
  }
}