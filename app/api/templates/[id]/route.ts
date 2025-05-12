// app/api/templates/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

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

// Get a specific template
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const template = await prisma.template.findUnique({
      where: { id: params.id }
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
      where: { id: params.id },
      data: { popularity: { increment: 1 } }
    });

    return NextResponse.json(template);
  } catch (error) {
    console.error('Error fetching template:', error);
    return NextResponse.json(
      { error: 'Failed to fetch template' },
      { status: 500 }
    );
  }
}

// Update a template
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

    // Check if template exists and belongs to user
    const existingTemplate = await prisma.template.findUnique({
      where: { id: params.id }
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
    
    // Steps array is already in the correct format, no conversion needed

    const updatedTemplate = await prisma.template.update({
      where: { id: params.id },
      data: updateData
    });

    return NextResponse.json(updatedTemplate);
  } catch (error) {
    console.error('Error updating template:', error);
    return NextResponse.json(
      { error: 'Failed to update template' },
      { status: 500 }
    );
  }
}

// Delete a template
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

    // Check if template exists and belongs to user
    const existingTemplate = await prisma.template.findUnique({
      where: { id: params.id }
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
      where: { templateId: params.id }
    });

    if (problemsUsingTemplate > 0) {
      return NextResponse.json(
        { error: 'Cannot delete template that is in use by problems', count: problemsUsingTemplate },
        { status: 400 }
      );
    }

    await prisma.template.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting template:', error);
    return NextResponse.json(
      { error: 'Failed to delete template' },
      { status: 500 }
    );
  }
}