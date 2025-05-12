'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProblemStatusBadge } from "@/components/problem-status-badge";
import { useApiContext } from "@/contexts/api-context";
import { Problem } from "@/types/api";
import { createErrorHandler, mapStatusToUI } from "@/lib/api-utils";

export default function ProblemsPage() {
  const { api } = useApiContext();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setLoading(true);
        const data = await api.fetchProblems();
        setProblems(data);
      } catch (error) {
        createErrorHandler('Failed to load problems')(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, [api]);

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

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="text-muted-foreground">Loading problems...</p>
          </div>
        </div>
      ) : problems.length === 0 ? (
        <div className="text-center p-12 border rounded-lg bg-white">
          <h3 className="font-medium text-lg mb-2">No problems found</h3>
          <p className="text-muted-foreground mb-6">
            Get started by creating your first problem
          </p>
          <Link href="/problems/new">
            <Button className="gap-2">
              <Plus size={16} />
              Create Your First Problem
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <Card key={problem.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                  <ProblemStatusBadge status={mapStatusToUI(problem.status)} />
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
      )}
    </div>
  );
}