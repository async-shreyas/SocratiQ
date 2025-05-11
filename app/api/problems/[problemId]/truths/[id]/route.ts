// app/api/problems/[problemId]/truths/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

// Truth schema for validation
const truthSchema = z.object({
  truth: z.string().min(1, 'Truth statement is required'),
  description: z.string().min(1, 'Description is required')
});

// Get a specific fundamental truth
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

    const truth = await prisma.fundamentalTruth.findFirst({
      where: {
        id: params.id,
        problemId: params.problemId
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
    console.error('Error fetching fundamental truth:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fundamental truth' },
      { status: 500 }
    );
  }
}

// Update a fundamental truth
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

    // Check if truth exists
    const existingTruth = await prisma.fundamentalTruth.findFirst({
      where: {
        id: params.id,
        problemId: params.problemId
      }
    });

    if (!existingTruth) {
      return NextResponse.json(
        { error: 'Fundamental truth not found' },
        { status: 404 }
      );
    }

    const body = await req.json();
    const validation = truthSchema.partial().safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const updatedTruth = await prisma.fundamentalTruth.update({
      where: { id: params.id },
      data: validation.data
    });

    return NextResponse.json(updatedTruth);
  } catch (error) {
    console.error('Error updating fundamental truth:', error);
    return NextResponse.json(
      { error: 'Failed to update fundamental truth' },
      { status: 500 }
    );
  }
}

// Delete a fundamental truth
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

    // Check if truth exists
    const existingTruth = await prisma.fundamentalTruth.findFirst({
      where: {
        id: params.id,
        problemId: params.problemId
      }
    });

    if (!existingTruth) {
      return NextResponse.json(
        { error: 'Fundamental truth not found' },
        { status: 404 }
      );
    }

    await prisma.fundamentalTruth.delete({
      where: { id: params.id }
    });

    // Update problem progress
    await updateProblemProgress(params.problemId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting fundamental truth:', error);
    return NextResponse.json(
      { error: 'Failed to delete fundamental truth' },
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