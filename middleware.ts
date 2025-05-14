import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',                  // Homepage
  '/sign-in(.*)',       // Sign in pages
  '/sign-up(.*)',       // Sign up pages
  '/api/webhooks/(.*)', // Webhooks
  '/methodology'        // Public methodology page
])

export default clerkMiddleware(async (auth, req) => {
  // const { userId } = await auth()
  if (!isPublicRoute(req)) {
    auth.protect();
    // if (userId) {
    //   await syncUser(userId);
    // }
  }
  
  return NextResponse.next();
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}