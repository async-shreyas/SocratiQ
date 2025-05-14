// app/api/problems/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { problemSchema } from '@/validators/problem';
import prisma from '@/lib/prisma';
import { handleApiError } from '@/lib/api-utils';

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user exists in database
    let user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    // If user doesn't exist, create it
    if (!user) {
      // Get user data from Clerk
      const clerkUser = await currentUser();
      
      if (!clerkUser) {
        return NextResponse.json(
          { error: 'Failed to get user details' },
          { status: 500 }
        );
      }

      // Find primary email address
      const primaryEmail = clerkUser.emailAddresses.find(
        email => email.id === clerkUser.primaryEmailAddressId
      )?.emailAddress;

      if (!primaryEmail) {
        return NextResponse.json(
          { error: 'User has no primary email address' },
          { status: 400 }
        );
      }

      user = await prisma.user.create({
        data: {
          id: userId,
          email: primaryEmail,
          name: clerkUser.firstName 
            ? `${clerkUser.firstName} ${clerkUser.lastName || ''}`.trim() 
            : null,
          password: 'clerk-managed', // Placeholder password
        },
      });
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
        userId: user.id
      },
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      }
    });

    return NextResponse.json(problem, { status: 201 });
  } catch (error) {
    return handleApiError(error, 'Failed to create problem');
  }
}