// contexts/api-context.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useApi } from '@/hooks/use-api';
import { ApiError } from '@/types/api';

interface ApiContextType {
  loading: boolean;
  error: ApiError | null;
  api: ReturnType<typeof useApi>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export function ApiProvider({ children }: { children: ReactNode }) {
  const api = useApi();

  const value = {
    loading: api.loading,
    error: api.error,
    api
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApiContext() {
  const context = useContext(ApiContext);
  
  if (context === undefined) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  
  return context;
}