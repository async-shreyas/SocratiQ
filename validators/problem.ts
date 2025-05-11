import { z } from 'zod'

export const problemSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED']),
  category: z.string().min(1, 'Category is required'),
  progress: z.number().int().min(0).max(100),
  templateId: z.string().optional(),
  components: z.array(z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    isCritical: z.boolean()
  })).optional(),
  fundamentalTruths: z.array(z.object({
    truth: z.string().min(1),
    description: z.string().min(1)
  })).optional()
})

export type ProblemFormValues = z.infer<typeof problemSchema>