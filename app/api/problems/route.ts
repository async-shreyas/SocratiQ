// app/api/problems/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { problemSchema } from '@/validators/problem';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

// Get all problems for the current user
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const problems = await prisma.problem.findMany({
      where: {
        userId: userId
      },
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return NextResponse.json(problems);
  } catch (error) {
    console.error('Error fetching problems:', error);
    return NextResponse.json(
      { error: 'Failed to fetch problems' },
      { status: 500 }
    );
  }
}

// Create a new problem
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
    const validation = problemSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const problem = await prisma.problem.create({
      data: {
        ...validation.data,
        userId
      },
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      }
    });

    return NextResponse.json(problem, { status: 201 });
  } catch (error) {
    console.error('Error creating problem:', error);
    return NextResponse.json(
      { error: 'Failed to create problem' },
      { status: 500 }
    );
  }
}