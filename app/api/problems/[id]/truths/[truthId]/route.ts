import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { fundamentalTruthSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';
import { updateProblemProgress } from '@/lib/problem-utils';

/**
 * GET /api/problems/[id]/truths/[truthId]
 * Get a specific fundamental truth
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string, truthId: string } }
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

    const truth = await prisma.fundamentalTruth.findFirst({
      where: {
        id: params.truthId,
        problemId: params.id
      }
    });

    if (!truth) {
      return NextResponse.json(
        { error: 'Fundamental truth not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(truth);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch fundamental truth');
  }
}

/**
 * PATCH /api/problems/[id]/truths/[truthId]
 * Update a fundamental truth
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string, truthId: string } }
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

    // Check if truth exists
    const existingTruth = await prisma.fundamentalTruth.findFirst({
      where: {
        id: params.truthId,
        problemId: params.id
      }
    });

    if (!existingTruth) {
      return NextResponse.json(
        { error: 'Fundamental truth not found' },
        { status: 404 }
      );
    }

    const body = await req.json();
    const validation = fundamentalTruthSchema.partial().safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const updatedTruth = await prisma.fundamentalTruth.update({
      where: { id: params.truthId },
      data: validation.data
    });

    return NextResponse.json(updatedTruth);
  } catch (error) {
    return handleApiError(error, 'Failed to update fundamental truth');
  }
}

/**
 * DELETE /api/problems/[id]/truths/[truthId]
 * Delete a fundamental truth
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string, truthId: string } }
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

    // Check if truth exists
    const existingTruth = await prisma.fundamentalTruth.findFirst({
      where: {
        id: params.truthId,
        problemId: params.id
      }
    });

    if (!existingTruth) {
      return NextResponse.json(
        { error: 'Fundamental truth not found' },
        { status: 404 }
      );
    }

    await prisma.fundamentalTruth.delete({
      where: { id: params.truthId }
    });

    // Update problem progress
    await updateProblemProgress(params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error, 'Failed to delete fundamental truth');
  }
}