// app/dashboard/page.js - Dashboard overview page
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
  ArrowRight
} from "lucide-react";

export default function DashboardPage() {
  // Sample problem data
  const recentProblems = [
    {
      id: "1",
      title: "Optimize customer acquisition costs",
      status: "in-progress",
      createdAt: "2025-05-01",
      category: "Business",
      progress: 60,
    },
    {
      id: "2",
      title: "Reduce manufacturing defect rate",
      status: "completed",
      createdAt: "2025-04-28",
      category: "Operations",
      progress: 100,
    },
    {
      id: "3",
      title: "Improve remote team communication",
      status: "not-started",
      createdAt: "2025-05-02",
      category: "Management",
      progress: 0,
    },
  ];

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
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Problems</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-gray-500">-1 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-gray-500">+3 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Solution Time</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9.2 days</div>
            <p className="text-xs text-gray-500">-2.1 days from last month</p>
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
              {recentProblems.map((problem) => (
                <div key={problem.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <Link href={`/problems/${problem.id}`}>
                      <h3 className="font-medium hover:text-blue-600 transition-colors">
                        {problem.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{new Date(problem.createdAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{problem.category}</span>
                    </div>
                  </div>
                  <ProblemStatusBadge status={problem.status} />
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t text-center">
              <Link href="/problems">
                <Button variant="ghost" className="gap-2">
                  View All Problems <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
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
                  <p className="text-sm text-gray-500">You tend to rely on confirmation bias in your problem analysis.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start pb-3 border-b">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Strongest problem category</h3>
                  <p className="text-sm text-gray-500">You excel at solving operational efficiency problems.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">First principles progress</h3>
                  <p className="text-sm text-gray-500">Your last 3 problems showed improved fundamental analysis.</p>
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