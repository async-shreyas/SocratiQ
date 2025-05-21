import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';

// Template schema for validation
const templateSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  steps: z.array(z.object({
    name: z.string().min(1, 'Step name is required'),
    description: z.string().min(1, 'Step description is required'),
    order: z.number().int().min(0)
  })).min(1, 'At least one step is required')
});

/**
 * GET /api/templates/[id]
 * Get a specific template
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const {id} = params;
    const template = await prisma.template.findUnique({
      where: { id }
    });

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // For user templates, check authorization
    if (template.authorId !== 'system') {
      const { userId } = await auth();
      
      if (!userId || template.authorId !== userId) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 403 }
        );
      }
    }

    // Increment the popularity count when a template is viewed
    await prisma.template.update({
      where: { id },
      data: { popularity: { increment: 1 } }
    });

    return NextResponse.json(template);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch template');
  }
}

/**
 * PATCH /api/templates/[id]
 * Update a template
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

    // Check if template exists and belongs to user
    const existingTemplate = await prisma.template.findUnique({
      where: { id }
    });

    if (!existingTemplate) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // System templates can't be updated by users
    if (existingTemplate.authorId === 'system') {
      return NextResponse.json(
        { error: 'System templates cannot be modified' },
        { status: 403 }
      );
    }

    if (existingTemplate.authorId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const validation = templateSchema.partial().safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    // Prepare the data for update
    const updateData = { ...validation.data };
    
    // If steps are included, convert to JSON string
    if (updateData.steps) {
      updateData.steps = JSON.stringify(updateData.steps);
    }

    const updatedTemplate = await prisma.template.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json(updatedTemplate);
  } catch (error) {
    return handleApiError(error, 'Failed to update template');
  }
}

/**
 * DELETE /api/templates/[id]
 * Delete a template
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

    // Check if template exists and belongs to user
    const existingTemplate = await prisma.template.findUnique({
      where: { id }
    });

    if (!existingTemplate) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // System templates can't be deleted by users
    if (existingTemplate.authorId === 'system') {
      return NextResponse.json(
        { error: 'System templates cannot be deleted' },
        { status: 403 }
      );
    }

    if (existingTemplate.authorId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Make sure there are no problems using this template
    const problemsUsingTemplate = await prisma.problem.count({
      where: { templateId: id }
    });

    if (problemsUsingTemplate > 0) {
      return NextResponse.json(
        { error: 'Cannot delete template that is in use by problems', count: problemsUsingTemplate },
        { status: 400 }
      );
    }

    await prisma.template.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error, 'Failed to delete template');
  }
}