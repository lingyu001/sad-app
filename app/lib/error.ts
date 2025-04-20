'use client';

// Custom API error class
export class ApiError extends Error {
  status: number;
  
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

// Error response function
export function createErrorResponse(error: unknown) {
  console.error('API error:', error);
  
  const status = error instanceof ApiError ? error.status : 500;
  const message = error instanceof Error ? error.message : 'Unknown error occurred';
  
  return Response.json(
    { success: false, error: message },
    { status }
  );
} 