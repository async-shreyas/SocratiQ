'use client';

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useApiContext } from "@/contexts/api-context";
import { CreateProblemRequest } from "@/types/api";
import { createErrorHandler, createSuccessHandler } from "@/lib/api-utils";
import { useEffect } from "react";

export default function NewProblemPage() {
  const { api } = useApiContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');
  
  const [formData, setFormData] = useState<CreateProblemRequest>({
    title: '',
    description: '',
    category: '',
    status: 'NOT_STARTED',
    progress: 0,
    templateId: templateId || undefined,
  });
  
  const [loading, setLoading] = useState(false);
  const [templateLoading, setTemplateLoading] = useState(!!templateId);
  
  useEffect(() => {
    // If a template ID is provided, fetch the template details
    if (templateId) {
      const fetchTemplate = async () => {
        try {
          setTemplateLoading(true);
          const template = await api.fetchTemplate(templateId);
          setFormData(prev => ({
            ...prev,
            category: template.category,
            templateId
          }));
        } catch (error) {
          createErrorHandler('Failed to load template details')(error);
        } finally {
          setTemplateLoading(false);
        }
      };
      
      fetchTemplate();
    }
  }, [templateId, api]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const problem = await api.createProblem(formData)
        .then(createSuccessHandler('Problem created successfully'));
      
      // Redirect to the problem detail page
      router.push(`/problems/${problem.id}/decompose`);
    } catch (error) {
      createErrorHandler('Failed to create problem')(error);
      setLoading(false);
    }
  };

  if (templateLoading) {
    return (
      <div className="container max-w-3xl py-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-muted-foreground">Loading template information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Create New Problem</h1>
      
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Problem Details</CardTitle>
            <CardDescription>
              Define your problem clearly to begin the first principles analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Problem Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="E.g., How to reduce customer churn by 20%"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Problem Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the problem in detail..."
                rows={5}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleSelectChange('category', value)}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Product">Product</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                    <SelectItem value="Strategy">Strategy</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timeframe">Timeframe</Label>
                <Select
                  onValueChange={(value) => handleSelectChange('timeframe', value)}
                >
                  <SelectTrigger id="timeframe">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (&lt; 1 week)</SelectItem>
                    <SelectItem value="short">Short-term (1-4 weeks)</SelectItem>
                    <SelectItem value="medium">Medium-term (1-3 months)</SelectItem>
                    <SelectItem value="long">Long-term (3+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="constraints">Constraints & Limitations</Label>
              <Textarea
                id="constraints"
                name="constraints"
                placeholder="List any constraints or limitations to consider..."
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="success">Success Criteria</Label>
              <Textarea
                id="success"
                name="success"
                placeholder="How will you know when this problem is solved?"
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/problems">
              <Button variant="outline" type="button">Cancel</Button>
            </Link>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Continue'
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}