import prisma from '@/lib/prisma';
import { ProblemStatus } from '@/types/api';

/**
 * Updates a problem's progress based on its components, truths, and solutions
 * @param problemId The ID of the problem to update
 */
export async function updateProblemProgress(problemId: string): Promise<void> {
  try {
    const [components, truths, solutions] = await Promise.all([
      prisma.problemComponent.count({ where: { problemId } }),
      prisma.fundamentalTruth.count({ where: { problemId } }),
      prisma.solution.count({ where: { problemId } })
    ]);
    
    // Calculate progress (simple algorithm, adjust as needed)
    let progress = 0;
    
    if (components > 0) progress += 30;
    if (truths > 0) progress += 30;
    if (solutions > 0) progress += 30;
    
    // Cap at 100
    progress = Math.min(progress, 100);
    
    // Update status based on progress
    let status: ProblemStatus = 'NOT_STARTED';
    if (progress >= 100) {
      status = 'COMPLETED';
    } else if (progress > 0) {
      status = 'IN_PROGRESS';
    }
    
    // Update the problem in the database
    await prisma.problem.update({
      where: { id: problemId },
      data: { 
        progress, 
        status
      }
    });
  } catch (error) {
    console.error('Error updating problem progress:', error);
    throw error;
  }
}