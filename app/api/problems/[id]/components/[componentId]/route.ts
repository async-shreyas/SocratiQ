import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { problemComponentSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';
import { updateProblemProgress } from '@/lib/problem-utils';

/**
 * GET /api/problems/[id]/components/[componentId]
 * Get a specific component
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string, componentId: string } }
) {
  try {
    const { userId } = await auth();
    const { id, componentId } = params;
    
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

    const component = await prisma.problemComponent.findFirst({
      where: {
        id: componentId,
        problemId: id
      }
    });

    if (!component) {
      return NextResponse.json(
        { error: 'Component not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(component);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch component');
  }
}

/**
 * PATCH /api/problems/[id]/components/[componentId]
 * Update a component
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string, componentId: string } }
) {
  try {
    const { userId } = await auth();
    const { id, componentId } = params;
    
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

    // Check if component exists
    const existingComponent = await prisma.problemComponent.findFirst({
      where: {
        id: componentId,
        problemId: id
      }
    });

    if (!existingComponent) {
      return NextResponse.json(
        { error: 'Component not found' },
        { status: 404 }
      );
    }

    const body = await req.json();
    const validation = problemComponentSchema.partial().safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const updatedComponent = await prisma.problemComponent.update({
      where: { id: componentId },
      data: validation.data
    });

    return NextResponse.json(updatedComponent);
  } catch (error) {
    return handleApiError(error, 'Failed to update component');
  }
}

/**
 * DELETE /api/problems/[id]/components/[componentId]
 * Delete a component
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string, componentId: string } }
) {
  try {
    const { userId } = await auth();
    const { id, componentId } = params;
    
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

    // Check if component exists
    const existingComponent = await prisma.problemComponent.findFirst({
      where: {
        id: componentId,
        problemId: id
      }
    });

    if (!existingComponent) {
      return NextResponse.json(
        { error: 'Component not found' },
        { status: 404 }
      );
    }

    await prisma.problemComponent.delete({
      where: { id: componentId }
    });

    // Update problem progress
    await updateProblemProgress(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error, 'Failed to delete component');
  }
}