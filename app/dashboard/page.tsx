'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ProblemStatusBadge } from "@/components/problem-status-badge";
import { 
  BarChart, 
  Activity, 
  CheckCircle, 
  Clock, 
  Lightbulb,
  ArrowRight,
  Loader2
} from "lucide-react";
import { useApiContext } from "@/contexts/api-context";
import { DashboardStats } from "@/types/api";
import { createErrorHandler, formatDate } from "@/lib/api-utils";

export default function DashboardPage() {
  const { api, loading } = useApiContext();
  const [dashboardData, setDashboardData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await api.fetchDashboardData();
        setDashboardData(data);
      } catch (error) {
        createErrorHandler('Failed to load dashboard data')(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [api]);

  if (isLoading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-muted-foreground">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground mb-4">Failed to load dashboard data</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { stats, recentProblems, insights } = dashboardData;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Problems</CardTitle>
            <BarChart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProblems}</div>
            <p className="text-xs text-gray-500">
              {stats.changes.totalFromLastMonth > 0 && '+'}{stats.changes.totalFromLastMonth} from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Problems</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeProblems}</div>
            <p className="text-xs text-gray-500">
              {stats.changes.activeFromLastMonth > 0 && '+'}{stats.changes.activeFromLastMonth} from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedProblems}</div>
            <p className="text-xs text-gray-500">
              {stats.changes.completedFromLastMonth > 0 && '+'}{stats.changes.completedFromLastMonth} from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Solution Time</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgSolutionDays} days</div>
            <p className="text-xs text-gray-500">Based on completed problems</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-7 mb-8">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Recent Problems</CardTitle>
            <CardDescription>
              Your most recently created or updated problems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProblems.length > 0 ? (
                recentProblems.map((problem) => (
                  <div key={problem.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <Link href={`/problems/${problem.id}`}>
                        <h3 className="font-medium hover:text-blue-600 transition-colors">
                          {problem.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{formatDate(problem.createdAt)}</span>
                        <span>•</span>
                        <span>{problem.category}</span>
                      </div>
                    </div>
                    <ProblemStatusBadge status={problem.status.toLowerCase()} />
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <p>No problems created yet</p>
                  <Link href="/problems/new">
                    <Button variant="link" className="mt-2">Create your first problem</Button>
                  </Link>
                </div>
              )}
            </div>
            
            {recentProblems.length > 0 && (
              <div className="mt-4 pt-4 border-t text-center">
                <Link href="/problems">
                  <Button variant="ghost" className="gap-2">
                    View All Problems <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Thinking Insights</CardTitle>
            <CardDescription>
              Patterns and insights from your problem solving
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start pb-3 border-b">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Most common cognitive bias</h3>
                  <p className="text-sm text-gray-500">{insights.commonCognitiveBias}</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start pb-3 border-b">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Strongest problem category</h3>
                  <p className="text-sm text-gray-500">You excel at solving {insights.strongestCategory.toLowerCase()} problems.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">First principles progress</h3>
                  <p className="text-sm text-gray-500">{insights.firstPrinciplesProgress}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-center">
        <Link href="/problems/new">
          <Button size="lg" className="gap-2">
            Start New Problem <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}