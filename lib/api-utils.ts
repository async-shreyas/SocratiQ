import { NextResponse } from 'next/server';
import { toast } from 'sonner';
import { ApiError } from '@/types/api';

/**
 * Standardized API error response handler
 */
export function handleApiError(error: unknown, defaultMessage = 'An error occurred') {
  console.error('API error:', error);
  
  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
  
  return NextResponse.json(
    { error: defaultMessage },
    { status: 500 }
  );
}

/**
 * Creates a standardized error handler for client-side
 */
export function createErrorHandler(message: string) {
  return (error: unknown) => {
    console.error(message, error);
    
    if (error && typeof error === 'object' && 'error' in error) {
      toast.error((error as ApiError).error || message);
    } else if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error(message);
    }
    
    return error;
  };
}

/**
 * Creates a standardized success handler for client-side
 */
export function createSuccessHandler<T>(message: string) {
  return (data: T): T => {
    toast.success(message);
    return data;
  };
}

/**
 * Maps API status enum to UI-friendly status
 */
export function mapStatusToUI(status: string): string {
  const statusMap: Record<string, string> = {
    'NOT_STARTED': 'not-started',
    'IN_PROGRESS': 'in-progress',
    'COMPLETED': 'completed'
  };
  
  return statusMap[status] || 'not-started';
}

/**
 * Format date to a readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}