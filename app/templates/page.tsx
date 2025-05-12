'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, ArrowRight, Star, ListOrdered, Loader2 } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApiContext } from "@/contexts/api-context";
import { Template } from "@/types/api";
import { createErrorHandler, formatDate } from "@/lib/api-utils";

export default function TemplatesPage() {
  const { api } = useApiContext();
  const [allTemplates, setAllTemplates] = useState<Template[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [userTemplates, setUserTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        
        // Fetch all templates (system + user)
        const templates = await api.fetchTemplates('all');
        
        // Separate system and user templates
        const system = templates.filter(t => t.authorId === 'system');
        const user = templates.filter(t => t.authorId !== 'system');
        
        setAllTemplates(system);
        setFilteredTemplates(system);
        setUserTemplates(user);
      } catch (error) {
        createErrorHandler('Failed to load templates')(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, [api]);

  // Apply filters when search query or category filter changes
  useEffect(() => {
    const filtered = allTemplates.filter(template => {
      const matchesSearch = 
        searchQuery === '' || 
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        categoryFilter === 'all' || 
        template.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredTemplates(filtered);
  }, [searchQuery, categoryFilter, allTemplates]);

  // Get unique categories from all templates
  const categories = [...new Set(allTemplates.map(t => t.category))];

  // Format popularity
  const formatPopularity = (popularity: number): string => {
    if (popularity > 20) return 'High';
    if (popularity > 5) return 'Medium';
    return 'Low';
  };

  if (loading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-muted-foreground">Loading templates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
          <p className="text-muted-foreground">
            Pre-built frameworks for structured problem solving
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/templates/new">
            <Button className="gap-2">
              <Plus size={16} />
              New Template
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 flex gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search templates..." 
            className="pl-8" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select 
          value={categoryFilter} 
          onValueChange={setCategoryFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Templates Grid */}
      {filteredTemplates.length === 0 ? (
        <div className="text-center p-12 border rounded-lg bg-white">
          <h3 className="font-medium text-lg mb-2">No templates found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters or search query
          </p>
          <Button variant="outline" onClick={() => {
            setSearchQuery('');
            setCategoryFilter('all');
          }}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => {
            // Parse the steps array (if it's a string)
            const steps = typeof template.steps === 'string' 
              ? JSON.parse(template.steps as unknown as string) 
              : template.steps;
            
            const stepsCount = Array.isArray(steps) ? steps.length : 0;
            
            return (
              <Card key={template.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">{template.title}</CardTitle>
                      <Badge variant="outline" className="mb-2">
                        {template.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500" />
                      <span>{formatPopularity(template.popularity)} Usage</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ListOrdered size={14} className="text-blue-500" />
                      <span>{stepsCount} Steps</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-4">
                  <Link href={`/templates/${template.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Preview Framework
                    </Button>
                  </Link>
                  <Link
                    href={`/problems/new?template=${template.id}`}
                    className="w-full"
                  >
                    <Button className="w-full gap-2">
                      Use Template
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      {/* Custom Templates Section */}
      <div className="mt-16 border-t pt-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Your Custom Templates</h2>
            <p className="text-muted-foreground">
              Templates you've created or modified
            </p>
          </div>
        </div>

        {userTemplates.length === 0 ? (
          <div className="bg-muted/50 rounded-lg p-8 text-center border-2 border-dashed">
            <div className="mb-4 text-muted-foreground">
              <Plus size={32} className="mx-auto" />
            </div>
            <p className="text-muted-foreground mb-4">
              Save your own problem-solving frameworks as reusable templates
            </p>
            <Link href="/templates/new">
              <Button variant="ghost" className="gap-2">
                Create Custom Template
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userTemplates.map((template) => {
              // Parse the steps array (if it's a string)
              const steps = typeof template.steps === 'string' 
                ? JSON.parse(template.steps as unknown as string) 
                : template.steps;
              
              const stepsCount = Array.isArray(steps) ? steps.length : 0;
              
              return (
                <Card key={template.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="mb-2">{template.title}</CardTitle>
                        <Badge variant="outline" className="mb-2">
                          {template.category}
                        </Badge>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Created {formatDate(template.createdAt)}
                      </Badge>
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" />
                        <span>{formatPopularity(template.popularity)} Usage</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ListOrdered size={14} className="text-blue-500" />
                        <span>{stepsCount} Steps</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-4">
                    <Link href={`/templates/${template.id}/edit`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Edit Template
                      </Button>
                    </Link>
                    <Link
                      href={`/problems/new?template=${template.id}`}
                      className="w-full"
                    >
                      <Button className="w-full gap-2">
                        Use Template
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}