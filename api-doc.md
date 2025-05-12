# API Changes Documentation

This document outlines the changes made to standardize the API routes in the SocratiQ application.

## Key Changes

1. **Authentication Standardization**
   - Removed custom JWT authentication in favor of Clerk Auth
   - Standardized auth checks across all routes
   - Removed duplicate auth-related routes that are now handled by Clerk

2. **Error Handling**
   - Added a standardized `handleApiError` utility
   - Consistent error responses across all API routes
   - Better error typing with TypeScript

3. **Route Parameter Naming**
   - Standardized on `id` as the main parameter for resources
   - Consistent naming for nested resources (e.g., `componentId`, `truthId`, `solutionId`)

4. **URL Structure Consistency**
   - Consistent URL path structure for all API routes
   - Proper nesting of related resources
   - RESTful endpoint design

5. **Code Duplication Reduction**
   - Extracted `updateProblemProgress` to a shared utility function
   - Centralized validation schemas in the validators directory
   - Standardized response formats

## API Route Structure

The API routes now follow this consistent structure:

- `/api/problems` - Collection of problems
- `/api/problems/[id]` - Specific problem
- `/api/problems/[id]/components` - Components for a problem
- `/api/problems/[id]/components/[componentId]` - Specific component
- `/api/problems/[id]/truths` - Fundamental truths for a problem
- `/api/problems/[id]/truths/[truthId]` - Specific truth
- `/api/problems/[id]/solutions` - Solutions for a problem
- `/api/problems/[id]/solutions/[solutionId]` - Specific solution
- `/api/problems/[id]/progress` - Problem progress
- `/api/templates` - Collection of templates
- `/api/templates/[id]` - Specific template
- `/api/dashboard` - Dashboard statistics

## Authentication Flow

The authentication flow now uses Clerk exclusively:

1. User signs in through Clerk UI
2. Clerk manages the session and token
3. API routes verify the user using `auth()` from '@clerk/nextjs/server'
4. The middleware protects routes that require authentication

## Removed Routes

The following routes were removed as they're replaced by Clerk functionality:

- `/api/auth/login`
- `/api/auth/request-reset`
- `/api/auth/reset-password`
- `/api/users/me`

## New Utilities

New utility files were added to support the standardized approach:

- `lib/problem-utils.ts` - Shared functions for problem management
- `lib/api-utils.ts` - Error handling and API response utilities
- `lib/email.ts` - Email sending utilities (for future integration with Clerk)

## Migration Strategy

When migrating existing applications to use the new API structure:

1. Update frontend API calls to use the new URL structure
2. Update frontend auth to use Clerk components
3. Replace any custom JWT token handling with Clerk session management

## Future Improvements

Future API improvements can include:

1. Adding rate limiting
2. Implementing request validation middleware
3. Adding caching for frequently accessed data
4. Supporting bulk operations for better performance