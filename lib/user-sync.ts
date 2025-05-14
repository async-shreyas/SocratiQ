// lib/user-sync.ts
import {  currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

export async function syncUser(userId: string) {
  // const { userId } = await auth();
  
  if (!userId) {
    return null;
  }
  
  try {
    // Check if user exists in database
    let user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    // If user doesn't exist, create it
    if (!user) {
      // Get user data from Clerk
      const clerkUser = await currentUser();
      
      if (!clerkUser) {
        throw new Error('User authenticated but details not found in Clerk');
      }

      // Find primary email address
      const primaryEmail = clerkUser.emailAddresses.find(
        email => email.id === clerkUser.primaryEmailAddressId
      );

      if (!primaryEmail) {
        throw new Error('User has no primary email address');
      }

      user = await prisma.user.create({
        data: {
          id: userId,
          email: primaryEmail.emailAddress,
          name: clerkUser.firstName 
            ? `${clerkUser.firstName} ${clerkUser.lastName || ''}`.trim() 
            : null,
          password: 'clerk-managed', // Placeholder password since auth is handled by Clerk
        },
      });
      
      console.log(`Created new user in database with ID: ${userId}`);
    }
    
    return user;
  } catch (error) {
    console.error('Error syncing user:', error);
    return null;
  }
}