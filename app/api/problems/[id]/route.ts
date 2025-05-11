// app/api/problems/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { problemSchema } from '@/validators/problem';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

// Get a specific problem by ID
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

    const problem = await prisma.problem.findUnique({
      where: {
        id: params.id
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

    // Ensure the user owns this problem
    if (problem.userId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    return NextResponse.json(problem);
  } catch (error) {
    console.error('Error fetching problem:', error);
    return NextResponse.json(
      { error: 'Failed to fetch problem' },
      { status: 500 }
    );
  }
}

// Update a problem
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

    // Check if problem exists and belongs to user
    const existingProblem = await prisma.problem.findUnique({
      where: {
        id: params.id
      }
    });

    if (!existingProblem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    if (existingProblem.userId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
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
      where: {
        id: params.id
      },
      data: validation.data,
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      }
    });

    return NextResponse.json(updatedProblem);
  } catch (error) {
    console.error('Error updating problem:', error);
    return NextResponse.json(
      { error: 'Failed to update problem' },
      { status: 500 }
    );
  }
}

// Delete a problem
export async function DELETE(
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

    // Check if problem exists and belongs to user
    const existingProblem = await prisma.problem.findUnique({
      where: {
        id: params.id
      }
    });

    if (!existingProblem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    if (existingProblem.userId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Delete related entities first (due to cascade constraints)
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
    console.error('Error deleting problem:', error);
    return NextResponse.json(
      { error: 'Failed to delete problem' },
      { status: 500 }
    );
  }
}