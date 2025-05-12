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
 * GET /api/templates
 * Get all templates (both system templates and user's custom templates)
 */
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    // For templates, we'll allow unauthenticated access to system templates
    // but require auth for user templates
    const searchParams = req.nextUrl.searchParams;
    const type = searchParams.get('type') || 'all'; // 'all', 'system', 'user'
    
    let templates = [];
    
    if (type === 'all' || type === 'system') {
      // System templates (authorId = 'system')
      const systemTemplates = await prisma.template.findMany({
        where: { authorId: 'system' },
        orderBy: { popularity: 'desc' }
      });
      templates = [...templates, ...systemTemplates];
    }
    
    if ((type === 'all' || type === 'user') && userId) {
      // User's custom templates
      const userTemplates = await prisma.template.findMany({
        where: { authorId: userId },
        orderBy: { updatedAt: 'desc' }
      });
      templates = [...templates, ...userTemplates];
    }
    
    return NextResponse.json(templates);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch templates');
  }
}

/**
 * POST /api/templates
 * Create a new template
 */
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validation = templateSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    // Convert steps array to JSON
    const templateData = {
      ...validation.data,
      steps: JSON.stringify(validation.data.steps),
      authorId: userId
    };

    const template = await prisma.template.create({
      data: templateData
    });

    return NextResponse.json(template, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'Failed to create template');
  }
}