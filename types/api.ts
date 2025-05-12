// types/api.ts
export type ProblemStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export interface Problem {
  id: string;
  title: string;
  description: string;
  status: ProblemStatus;
  category: string;
  progress: number;
  userId: string;
  templateId?: string;
  components?: ProblemComponent[];
  fundamentalTruths?: FundamentalTruth[];
  solutions?: Solution[];
  createdAt: string;
  updatedAt: string;
}

export interface ProblemComponent {
  id: string;
  name: string;
  description: string;
  isCritical: boolean;
  problemId: string;
  createdAt: string;
  updatedAt: string;
}

export interface FundamentalTruth {
  id: string;
  truth: string;
  description: string;
  problemId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  feasibility: string;
  impact: string;
  cost: string;
  time: string;
  problemId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: TemplateStep[];
  popularity: number;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TemplateStep {
  name: string;
  description: string;
  order: number;
}

export interface DashboardStats {
  stats: {
    totalProblems: number;
    activeProblems: number;
    completedProblems: number;
    avgSolutionDays: string;
    changes: {
      totalFromLastMonth: number;
      activeFromLastMonth: number;
      completedFromLastMonth: number;
    };
  };
  categories: Record<string, number>;
  recentProblems: {
    id: string;
    title: string;
    status: ProblemStatus;
    createdAt: string;
    category: string;
    progress: number;
  }[];
  insights: {
    strongestCategory: string;
    firstPrinciplesProgress: string;
    commonCognitiveBias: string;
  };
}

export interface ApiError {
  error: string;
  status?: number;
}

export interface CreateProblemRequest {
  title: string;
  description: string;
  status?: ProblemStatus;
  category: string;
  progress?: number;
  templateId?: string;
}

export interface CreateComponentRequest {
  name: string;
  description: string;
  isCritical?: boolean;
}

export interface CreateFundamentalTruthRequest {
  truth: string;
  description: string;
}

export interface CreateSolutionRequest {
  title: string;
  description: string;
  feasibility: string;
  impact: string;
  cost: string;
  time: string;
}

export interface UpdateProblemRequest {
  title?: string;
  description?: string;
  status?: ProblemStatus;
  category?: string;
  progress?: number;
  templateId?: string;
}

export interface UpdateProgressRequest {
  progress: number;
  status?: ProblemStatus;
}

export interface CreateTemplateRequest {
  title: string;
  description: string;
  category: string;
  steps: TemplateStep[];
}

export interface UpdateTemplateRequest {
  title?: string;
  description?: string;
  category?: string;
  steps?: TemplateStep[];
}