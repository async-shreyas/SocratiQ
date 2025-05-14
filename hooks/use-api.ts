// hooks/use-api.ts
import { useState } from 'react';
import { 
  Problem, 
  ProblemComponent, 
  FundamentalTruth, 
  Solution, 
  Template,
  DashboardStats,
  CreateProblemRequest,
  CreateComponentRequest,
  CreateFundamentalTruthRequest,
  CreateSolutionRequest,
  UpdateProblemRequest,
  UpdateProgressRequest,
  CreateTemplateRequest,
  UpdateTemplateRequest,
  ApiError
} from '@/types/api';

interface ApiHook {
  loading: boolean;
  error: ApiError | null;
  // Problems
  fetchProblems: () => Promise<Problem[]>;
  fetchProblem: (problemId: string) => Promise<Problem>;
  createProblem: (data: CreateProblemRequest) => Promise<Problem>;
  updateProblem: (id: string, data: UpdateProblemRequest) => Promise<Problem>;
  deleteProblem: (id: string) => Promise<{ success: boolean }>;
  // Components
  fetchComponents: (problemId: string) => Promise<ProblemComponent[]>;
  createComponent: (problemId: string, data: CreateComponentRequest) => Promise<ProblemComponent>;
  updateComponent: (problemId: string, componentId: string, data: Partial<CreateComponentRequest>) => Promise<ProblemComponent>;
  deleteComponent: (problemId: string, componentId: string) => Promise<{ success: boolean }>;
  // Fundamental Truths
  fetchTruths: (problemId: string) => Promise<FundamentalTruth[]>;
  createTruth: (problemId: string, data: CreateFundamentalTruthRequest) => Promise<FundamentalTruth>;
  updateTruth: (problemId: string, truthId: string, data: Partial<CreateFundamentalTruthRequest>) => Promise<FundamentalTruth>;
  deleteTruth: (problemId: string, truthId: string) => Promise<{ success: boolean }>;
  // Solutions
  fetchSolutions: (problemId: string) => Promise<Solution[]>;
  createSolution: (problemId: string, data: CreateSolutionRequest) => Promise<Solution>;
  updateSolution: (problemId: string, solutionId: string, data: Partial<CreateSolutionRequest>) => Promise<Solution>;
  deleteSolution: (problemId: string, solutionId: string) => Promise<{ success: boolean }>;
  // Progress
  fetchProgress: (problemId: string) => Promise<{ progress: number; status: string }>;
  updateProgress: (problemId: string, data: UpdateProgressRequest) => Promise<{ progress: number; status: string }>;
  calculateProgress: (problemId: string) => Promise<{ progress: number; status: string }>;
  // Templates
  fetchTemplates: (type?: 'all' | 'system' | 'user') => Promise<Template[]>;
  fetchTemplate: (id: string) => Promise<Template>;
  createTemplate: (data: CreateTemplateRequest) => Promise<Template>;
  updateTemplate: (id: string, data: UpdateTemplateRequest) => Promise<Template>;
  deleteTemplate: (id: string) => Promise<{ success: boolean }>;
  // Dashboard
  fetchDashboardData: () => Promise<DashboardStats>;
}

export const useApi = (): ApiHook => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const handleRequest = async <T>(
    requestFn: () => Promise<Response>
  ): Promise<T> => {
    setLoading(true);
    setError(null);

    try {
      const response = await requestFn();
      const data = await response.json();

      if (!response.ok) {
        const apiError: ApiError = {
          error: data.error || 'An error occurred',
          status: response.status
        };
        setError(apiError);
        throw apiError;
      }

      return data as T;
    } catch (err) {
      if (!(err as ApiError).error) {
        const apiError: ApiError = {
          error: (err as Error).message || 'An unknown error occurred'
        };
        setError(apiError);
        throw apiError;
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Problem API functions
  const fetchProblems = () => handleRequest<Problem[]>(() => 
    fetch('/api/problems')
  );

  const fetchProblem = (problemId: string) => handleRequest<Problem>(() => 
    fetch(`/api/problems/${problemId}`)
  );

  const createProblem = (data: CreateProblemRequest) => handleRequest<Problem>(() => 
    fetch('/api/problems', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const updateProblem = (id: string, data: UpdateProblemRequest) => handleRequest<Problem>(() => 
    fetch(`/api/problems/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const deleteProblem = (id: string) => handleRequest<{ success: boolean }>(() => 
    fetch(`/api/problems/${id}`, {
      method: 'DELETE'
    })
  );

  // Problem Component API functions
  const fetchComponents = (problemId: string) => handleRequest<ProblemComponent[]>(() => 
    fetch(`/api/problems/${problemId}/components`)
  );

  const createComponent = (problemId: string, data: CreateComponentRequest) => handleRequest<ProblemComponent>(() => 
    fetch(`/api/problems/${problemId}/components`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const updateComponent = (problemId: string, componentId: string, data: Partial<CreateComponentRequest>) => handleRequest<ProblemComponent>(() => 
    fetch(`/api/problems/${problemId}/components/${componentId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const deleteComponent = (problemId: string, componentId: string) => handleRequest<{ success: boolean }>(() => 
    fetch(`/api/problems/${problemId}/components/${componentId}`, {
      method: 'DELETE'
    })
  );

  // Fundamental Truth API functions
  const fetchTruths = (problemId: string) => handleRequest<FundamentalTruth[]>(() => 
    fetch(`/api/problems/${problemId}/truths`)
  );

  const createTruth = (problemId: string, data: CreateFundamentalTruthRequest) => handleRequest<FundamentalTruth>(() => 
    fetch(`/api/problems/${problemId}/truths`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const updateTruth = (problemId: string, truthId: string, data: Partial<CreateFundamentalTruthRequest>) => handleRequest<FundamentalTruth>(() => 
    fetch(`/api/problems/${problemId}/truths/${truthId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const deleteTruth = (problemId: string, truthId: string) => handleRequest<{ success: boolean }>(() => 
    fetch(`/api/problems/${problemId}/truths/${truthId}`, {
      method: 'DELETE'
    })
  );

  // Solution API functions
  const fetchSolutions = (problemId: string) => handleRequest<Solution[]>(() => 
    fetch(`/api/problems/${problemId}/solutions`)
  );

  const createSolution = (problemId: string, data: CreateSolutionRequest) => handleRequest<Solution>(() => 
    fetch(`/api/problems/${problemId}/solutions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const updateSolution = (problemId: string, solutionId: string, data: Partial<CreateSolutionRequest>) => handleRequest<Solution>(() => 
    fetch(`/api/problems/${problemId}/solutions/${solutionId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const deleteSolution = (problemId: string, solutionId: string) => handleRequest<{ success: boolean }>(() => 
    fetch(`/api/problems/${problemId}/solutions/${solutionId}`, {
      method: 'DELETE'
    })
  );

  // Progress API functions
  const fetchProgress = (problemId: string) => handleRequest<{ progress: number; status: string }>(() => 
    fetch(`/api/problems/${problemId}/progress`)
  );

  const updateProgress = (problemId: string, data: UpdateProgressRequest) => handleRequest<{ progress: number; status: string }>(() => 
    fetch(`/api/problems/${problemId}/progress`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const calculateProgress = (problemId: string) => handleRequest<{ progress: number; status: string }>(() => 
    fetch(`/api/problems/${problemId}/progress`, {
      method: 'POST'
    })
  );

  // Template API functions
  const fetchTemplates = (type: 'all' | 'system' | 'user' = 'all') => handleRequest<Template[]>(() => 
    fetch(`/api/templates?type=${type}`)
  );

  const fetchTemplate = (id: string) => handleRequest<Template>(() => 
    fetch(`/api/templates/${id}`)
  );

  const createTemplate = (data: CreateTemplateRequest) => handleRequest<Template>(() => 
    fetch('/api/templates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const updateTemplate = (id: string, data: UpdateTemplateRequest) => handleRequest<Template>(() => 
    fetch(`/api/templates/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  );

  const deleteTemplate = (id: string) => handleRequest<{ success: boolean }>(() => 
    fetch(`/api/templates/${id}`, {
      method: 'DELETE'
    })
  );

  // Dashboard API function
  const fetchDashboardData = () => handleRequest<DashboardStats>(() => 
    fetch('/api/dashboard')
  );

  return {
    loading,
    error,
    fetchProblems,
    fetchProblem,
    createProblem,
    updateProblem,
    deleteProblem,
    fetchComponents,
    createComponent,
    updateComponent,
    deleteComponent,
    fetchTruths,
    createTruth,
    updateTruth,
    deleteTruth,
    fetchSolutions,
    createSolution,
    updateSolution,
    deleteSolution,
    fetchProgress,
    updateProgress,
    calculateProgress,
    fetchTemplates,
    fetchTemplate,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    fetchDashboardData
  };
};