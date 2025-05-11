// app/api/dashboard/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

// Get dashboard statistics
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get one month ago date for comparisons
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    // Get all problems for the user
    const problems = await prisma.problem.findMany({
      where: { userId },
      include: {
        components: true,
        fundamentalTruths: true,
        solutions: true
      },
      orderBy: { updatedAt: 'desc' }
    });

    // Get problems created in the past month
    const recentProblems = problems.filter(
      (problem) => new Date(problem.createdAt) >= oneMonthAgo
    );

    // Get category count
    const categories = problems.reduce((acc, problem) => {
      acc[problem.category] = (acc[problem.category] || 0) + 1;
      return acc;
    }, {});

    // Calculate average solution time for completed problems
    const completedProblems = problems.filter(
      (problem) => problem.status === 'COMPLETED'
    );
    
    let avgSolutionDays = 0;
    if (completedProblems.length > 0) {
      const totalDays = completedProblems.reduce((acc, problem) => {
        const created = new Date(problem.createdAt);
        const updated = new Date(problem.updatedAt);
        const days = Math.round((updated.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));
        return acc + days;
      }, 0);
      avgSolutionDays = totalDays / completedProblems.length;
    }

    // Calculate stats from the previous month for comparison
    const previousMonthCompletedCount = completedProblems.filter(
      (problem) => new Date(problem.updatedAt) >= oneMonthAgo
    ).length;

    // Count problems by status
    const totalProblems = problems.length;
    const activeProblems = problems.filter(
      (problem) => problem.status === 'IN_PROGRESS'
    ).length;
    const completedProblemsCount = completedProblems.length;

    // Count changes from last month
    const lastMonthProblems = await prisma.problem.count({
      where: {
        userId,
        createdAt: { lt: oneMonthAgo }
      }
    });
    
    const lastMonthActive = await prisma.problem.count({
      where: {
        userId,
        status: 'IN_PROGRESS',
        createdAt: { lt: oneMonthAgo }
      }
    });
    
    const lastMonthCompleted = await prisma.problem.count({
      where: {
        userId,
        status: 'COMPLETED',
        createdAt: { lt: oneMonthAgo }
      }
    });

    // Get recent problems for display (top 3)
    const recentProblemsList = problems.slice(0, 3).map(problem => ({
      id: problem.id,
      title: problem.title,
      status: problem.status,
      createdAt: problem.createdAt,
      category: problem.category,
      progress: problem.progress
    }));

    // Calculate problem-solving insights
    const insights = calculateUserInsights(problems);

    return NextResponse.json({
      stats: {
        totalProblems,
        activeProblems,
        completedProblems: completedProblemsCount,
        avgSolutionDays: avgSolutionDays.toFixed(1),
        changes: {
          totalFromLastMonth: totalProblems - lastMonthProblems,
          activeFromLastMonth: activeProblems - lastMonthActive,
          completedFromLastMonth: completedProblemsCount - lastMonthCompleted
        }
      },
      categories,
      recentProblems: recentProblemsList,
      insights
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}

// Helper function to calculate user insights
function calculateUserInsights(problems) {
  // This is just an example - you would implement more sophisticated
  // analysis in a real application
  
  // Find most common category
  const categoryCount = {};
  problems.forEach(problem => {
    categoryCount[problem.category] = (categoryCount[problem.category] || 0) + 1;
  });
  
  const mostCommonCategory = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0])[0] || 'None';
  
  // Check for first principles progress
  const hasComponents = problems.some(p => p.components && p.components.length > 0);
  const hasTruths = problems.some(p => p.fundamentalTruths && p.fundamentalTruths.length > 0);
  const hasSolutions = problems.some(p => p.solutions && p.solutions.length > 0);
  
  const firstPrinciplesProgress = hasComponents && hasTruths && hasSolutions 
    ? 'Strong' 
    : (hasComponents || hasTruths) && hasSolutions 
      ? 'Improving' 
      : 'Needs work';
  
  // Check for cognitive bias (simplified example)
  // In a real app, this would be based on analyzing problem texts and solution patterns
  const cognitiveBias = 'Confirmation bias';
  
  return {
    strongestCategory: mostCommonCategory,
    firstPrinciplesProgress,
    commonCognitiveBias: cognitiveBias
  };
}