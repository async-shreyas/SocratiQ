import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProblemStatusBadge } from "@/components/problem-status-badge";

export default async function ProblemsPage() {
  // Sample problem data (would come from API/DB in real app)
  const problems = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/problems`).then((res) =>
    res.json()
  );

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Problems</h1>
          <p className="text-muted-foreground">
            Manage and work through your complex problems
          </p>
        </div>
        <Link href="/problems/new">
          <Button className="gap-2">
            <Plus size={16} />
            New Problem
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{problem.title}</CardTitle>
                <ProblemStatusBadge status={problem.status} />
              </div>
              <CardDescription>
                Created on {new Date(problem.createdAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-2 w-full bg-gray-100 rounded-full mb-4">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${problem.progress}%` }}
                ></div>
              </div>
              <Badge variant="outline" className="bg-gray-50">
                {problem.category}
              </Badge>
            </CardContent>
            <CardFooter className="bg-gray-50 px-6 py-3">
              <Link href={`/problems/${problem.id}`} className="w-full">
                <Button variant="ghost" className="w-full justify-between">
                  <span>Continue Working</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
