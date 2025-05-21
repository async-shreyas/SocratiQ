import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { problemComponentSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';
import { updateProblemProgress } from '@/lib/problem-utils';

/**
 * GET /api/problems/[id]/components
 * Get all components for a problem
 */
export async function GET(
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

    const components = await prisma.problemComponent.findMany({
      where: { problemId: id },
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json(components);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch components');
  }
}

/**
 * POST /api/problems/[id]/components
 * Create a new component
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
    const validation = problemComponentSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const component = await prisma.problemComponent.create({
      data: {
        ...validation.data,
        problemId: params.id
      }
    });

    // Update problem progress
    await updateProblemProgress(params.id);

    return NextResponse.json(component, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'Failed to create component');
  }
}