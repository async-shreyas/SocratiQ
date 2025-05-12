import { z } from 'zod';

// Problem status enum
export const ProblemStatus = z.enum([
  'NOT_STARTED',
  'IN_PROGRESS',
  'COMPLETED'
]);

// Problem component schema
export const problemComponentSchema = z.object({
  name: z.string().min(1, 'Component name is required'),
  description: z.string().min(1, 'Component description is required'),
  isCritical: z.boolean().default(false)
});

// Fundamental truth schema
export const fundamentalTruthSchema = z.object({
  truth: z.string().min(1, 'Truth statement is required'),
  description: z.string().min(1, 'Truth description is required')
});

// Problem schema
export const problemSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title is too long'),
  description: z.string().min(1, 'Description is required'),
  status: ProblemStatus.default('NOT_STARTED'),
  category: z.string().min(1, 'Category is required'),
  progress: z.number().int().min(0).max(100).default(0),
  templateId: z.string().optional(),
  components: z.array(problemComponentSchema).optional(),
  fundamentalTruths: z.array(fundamentalTruthSchema).optional()
});

// Solution schema
export const solutionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  feasibility: z.string().min(1, 'Feasibility rating is required'),
  impact: z.string().min(1, 'Impact rating is required'),
  cost: z.string().min(1, 'Cost rating is required'),
  time: z.string().min(1, 'Time rating is required')
});

// Types based on the schemas
export type ProblemStatusType = z.infer<typeof ProblemStatus>;
export type ProblemFormValues = z.infer<typeof problemSchema>;
export type ProblemComponentFormValues = z.infer<typeof problemComponentSchema>;
export type FundamentalTruthFormValues = z.infer<typeof fundamentalTruthSchema>;
export type SolutionFormValues = z.infer<typeof solutionSchema>;