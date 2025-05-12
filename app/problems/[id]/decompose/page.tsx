'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Trash2, Plus, ArrowRight, Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useApiContext } from "@/contexts/api-context";
import { Problem, ProblemComponent, FundamentalTruth, CreateComponentRequest, CreateFundamentalTruthRequest } from "@/types/api";
import { createErrorHandler, createSuccessHandler } from "@/lib/api-utils";
import { v4 as uuidv4 } from 'uuid';

interface TempComponent extends CreateComponentRequest {
  tempId: string;
}

interface TempTruth extends CreateFundamentalTruthRequest {
  tempId: string;
}

export default function DecomposeProblemPage({ params }: { params: { id: string } }) {
  const problemId = params.id;
  const { api } = useApiContext();
  const router = useRouter();
  
  const [problem, setProblem] = useState<Problem | null>(null);
  const [components, setComponents] = useState<(ProblemComponent | TempComponent)[]>([]);
  const [truths, setTruths] = useState<(FundamentalTruth | TempTruth)[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingComponentId, setSavingComponentId] = useState<string | null>(null);
  const [savingTruthId, setSavingTruthId] = useState<string | null>(null);
  const [deletingComponentId, setDeletingComponentId] = useState<string | null>(null);
  const [deletingTruthId, setDeletingTruthId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch problem details
        const problemData = await api.fetchProblem(problemId);
        setProblem(problemData);
        
        // Fetch components
        const componentsData = await api.fetchComponents(problemId);
        setComponents(componentsData);
        
        // Fetch fundamental truths
        const truthsData = await api.fetchTruths(problemId);
        setTruths(truthsData);
      } catch (error) {
        createErrorHandler('Failed to load problem data')(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [problemId, api]);

  // Add a new component
  const addComponent = () => {
    const newComponent: TempComponent = {
      tempId: uuidv4(),
      name: '',
      description: '',
      isCritical: false
    };
    
    setComponents([...components, newComponent]);
  };
  
  // Add a new fundamental truth
  const addTruth = () => {
    const newTruth: TempTruth = {
      tempId: uuidv4(),
      truth: '',
      description: ''
    };
    
    setTruths([...truths, newTruth]);
  };
  
  // Update component field
  const updateComponent = (id: string, field: keyof CreateComponentRequest, value: string | boolean) => {
    setComponents(components.map(comp => {
      if ('id' in comp && comp.id === id || 'tempId' in comp && comp.tempId === id) {
        return { ...comp, [field]: value };
      }
      return comp;
    }));
  };
  
  // Update truth field
  const updateTruth = (id: string, field: keyof CreateFundamentalTruthRequest, value: string) => {
    setTruths(truths.map(truth => {
      if ('id' in truth && truth.id === id || 'tempId' in truth && truth.tempId === id) {
        return { ...truth, [field]: value };
      }
      return truth;
    }));
  };
  
  // Save a component
  const saveComponent = async (component: TempComponent | ProblemComponent) => {
    try {
      if ('tempId' in component) {
        // It's a new component
        setSavingComponentId(component.tempId);
        
        const payload: CreateComponentRequest = {
          name: component.name,
          description: component.description,
          isCritical: component.isCritical
        };
        
        const savedComponent = await api.createComponent(problemId, payload)
          .then(createSuccessHandler('Component saved'));
        
        // Replace the temp component with the saved one
        setComponents(components.map(comp => 
          'tempId' in comp && comp.tempId === component.tempId ? savedComponent : comp
        ));
      } else {
        // It's an existing component
        setSavingComponentId(component.id);
        
        const payload: Partial<CreateComponentRequest> = {
          name: component.name,
          description: component.description,
          isCritical: component.isCritical
        };
        
        const updatedComponent = await api.updateComponent(problemId, component.id, payload)
          .then(createSuccessHandler('Component updated'));
        
        // Update the component in the list
        setComponents(components.map(comp => 
          'id' in comp && comp.id === component.id ? updatedComponent : comp
        ));
      }
    } catch (error) {
      createErrorHandler('Failed to save component')(error);
    } finally {
      setSavingComponentId(null);
    }
  };
  
  // Save a truth
  const saveTruth = async (truth: TempTruth | FundamentalTruth) => {
    try {
      if ('tempId' in truth) {
        // It's a new truth
        setSavingTruthId(truth.tempId);
        
        const payload: CreateFundamentalTruthRequest = {
          truth: truth.truth,
          description: truth.description
        };
        
        const savedTruth = await api.createTruth(problemId, payload)
          .then(createSuccessHandler('Fundamental truth saved'));
        
        // Replace the temp truth with the saved one
        setTruths(truths.map(t => 
          'tempId' in t && t.tempId === truth.tempId ? savedTruth : t
        ));
      } else {
        // It's an existing truth
        setSavingTruthId(truth.id);
        
        const payload: Partial<CreateFundamentalTruthRequest> = {
          truth: truth.truth,
          description: truth.description
        };
        
        const updatedTruth = await api.updateTruth(problemId, truth.id, payload)
          .then(createSuccessHandler('Fundamental truth updated'));
        
        // Update the truth in the list
        setTruths(truths.map(t => 
          'id' in t && t.id === truth.id ? updatedTruth : t
        ));
      }
    } catch (error) {
      createErrorHandler('Failed to save fundamental truth')(error);
    } finally {
      setSavingTruthId(null);
    }
  };
  
  // Delete a component
  const deleteComponent = async (component: TempComponent | ProblemComponent) => {
    if ('tempId' in component) {
      // It's a new component, just remove it from the state
      setComponents(components.filter(comp => 
        !('tempId' in comp) || comp.tempId !== component.tempId
      ));
      return;
    }
    
    try {
      setDeletingComponentId(component.id);
      
      await api.deleteComponent(problemId, component.id)
        .then(createSuccessHandler('Component deleted'));
      
      // Remove the component from the list
      setComponents(components.filter(comp => 
        !('id' in comp) || comp.id !== component.id
      ));
    } catch (error) {
      createErrorHandler('Failed to delete component')(error);
    } finally {
      setDeletingComponentId(null);
    }
  };
  
  // Delete a truth
  const deleteTruth = async (truth: TempTruth | FundamentalTruth) => {
    if ('tempId' in truth) {
      // It's a new truth, just remove it from the state
      setTruths(truths.filter(t => 
        !('tempId' in t) || t.tempId !== truth.tempId
      ));
      return;
    }
    
    try {
      setDeletingTruthId(truth.id);
      
      await api.deleteTruth(problemId, truth.id)
        .then(createSuccessHandler('Fundamental truth deleted'));
      
      // Remove the truth from the list
      setTruths(truths.filter(t => 
        !('id' in t) || t.id !== truth.id
      ));
    } catch (error) {
      createErrorHandler('Failed to delete fundamental truth')(error);
    } finally {
      setDeletingTruthId(null);
    }
  };
  
  // Save all and continue
  const saveAndContinue = async () => {
    try {
      setSaving(true);
      
      // Save all unsaved components
      for (const component of components) {
        if ('tempId' in component && component.name.trim() && component.description.trim()) {
          await saveComponent(component);
        }
      }
      
      // Save all unsaved truths
      for (const truth of truths) {
        if ('tempId' in truth && truth.truth.trim() && truth.description.trim()) {
          await saveTruth(truth);
        }
      }
      
      // Calculate progress
      await api.calculateProgress(problemId);
      
      // Navigate to solutions page
      router.push(`/problems/${problemId}/solutions`);
    } catch (error) {
      createErrorHandler('Failed to save changes')(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container max-w-4xl py-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-muted-foreground">Loading problem data...</p>
        </div>
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="container max-w-4xl py-10">
        <div className="text-center p-12 border rounded-lg bg-white">
          <h3 className="font-medium text-lg mb-2">Problem not found</h3>
          <p className="text-muted-foreground mb-6">
            The problem you're looking for doesn't exist or you don't have access to it.
          </p>
          <Link href="/problems">
            <Button variant="outline">Go Back to Problems</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{problem.title}</h1>
        <p className="text-gray-600">{problem.description}</p>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Break Down Into Components</CardTitle>
            <CardDescription>
              Identify the fundamental components of this problem
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {components.length === 0 ? (
              <div className="text-center p-8 border border-dashed rounded-lg">
                <p className="text-muted-foreground mb-4">
                  Break down your problem into smaller components to make it more manageable
                </p>
                <Button onClick={addComponent} variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" /> Add Your First Component
                </Button>
              </div>
            ) : (
              components.map((component, index) => {
                const compId = 'id' in component ? component.id : component.tempId;
                const isSaving = savingComponentId === compId;
                const isDeleting = deletingComponentId === compId;
                
                return (
                  <div key={compId} className="space-y-4 pb-4 border-b">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1 w-full mr-4">
                        <Label htmlFor={`component${index}`}>Component</Label>
                        <Input
                          id={`component${index}`}
                          value={'name' in component ? component.name : ''}
                          onChange={(e) => updateComponent(compId, 'name', e.target.value)}
                          placeholder="E.g., Marketing channel efficiency"
                        />
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => deleteComponent(component)}
                        disabled={isDeleting || isSaving}
                      >
                        {isDeleting ? 
                          <Loader2 className="h-4 w-4 animate-spin" /> : 
                          <Trash2 className="h-4 w-4" />
                        }
                      </Button>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor={`comp${index}desc`}>Description & Assumptions</Label>
                      <Textarea
                        id={`comp${index}desc`}
                        value={'description' in component ? component.description : ''}
                        onChange={(e) => updateComponent(compId, 'description', e.target.value)}
                        placeholder="Describe this component and any assumptions about it..."
                        rows={3}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id={`comp${index}critical`} 
                        checked={'isCritical' in component ? component.isCritical : false}
                        onCheckedChange={(checked) => updateComponent(compId, 'isCritical', checked)}
                      />
                      <Label htmlFor={`comp${index}critical`}>Critical component</Label>
                    </div>
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => saveComponent(component)}
                        disabled={isSaving || !component.name || !component.description}
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          'Save Component'
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
            
            {/* Add Component Button */}
            <Button variant="outline" className="w-full gap-2" onClick={addComponent}>
              <Plus className="h-4 w-4" /> Add Component
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Step 2: Identify Fundamental Truths</CardTitle>
            <CardDescription>
              What are the core truths or principles that apply to this problem?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {truths.length === 0 ? (
              <div className="text-center p-8 border border-dashed rounded-lg">
                <p className="text-muted-foreground mb-4">
                  Identify fundamental truths that cannot be argued with or assumptions that must be true
                </p>
                <Button onClick={addTruth} variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" /> Add Your First Truth
                </Button>
              </div>
            ) : (
              truths.map((truth, index) => {
                const truthId = 'id' in truth ? truth.id : truth.tempId;
                const isSaving = savingTruthId === truthId;
                const isDeleting = deletingTruthId === truthId;
                
                return (
                  <div key={truthId} className="space-y-4 pb-4 border-b">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1 w-full mr-4">
                        <Label htmlFor={`truth${index}`}>Fundamental Truth</Label>
                        <Input
                          id={`truth${index}`}
                          value={'truth' in truth ? truth.truth : ''}
                          onChange={(e) => updateTruth(truthId, 'truth', e.target.value)}
                          placeholder="E.g., Customer acquisition cost must be less than customer lifetime value"
                        />
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => deleteTruth(truth)}
                        disabled={isDeleting || isSaving}
                      >
                        {isDeleting ? 
                          <Loader2 className="h-4 w-4 animate-spin" /> : 
                          <Trash2 className="h-4 w-4" />
                        }
                      </Button>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor={`truth${index}why`}>Why is this fundamental?</Label>
                      <Textarea
                        id={`truth${index}why`}
                        value={'description' in truth ? truth.description : ''}
                        onChange={(e) => updateTruth(truthId, 'description', e.target.value)}
                        placeholder="Explain why this truth is fundamental to the problem..."
                        rows={3}
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => saveTruth(truth)}
                        disabled={isSaving || !truth.truth || !truth.description}
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          'Save Truth'
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
            
            {/* Add Truth Button */}
            <Button variant="outline" className="w-full gap-2" onClick={addTruth}>
              <Plus className="h-4 w-4" /> Add Fundamental Truth
            </Button>
          </CardContent>
        </Card>
        
        <div className="flex justify-end space-x-4">
          <Link href={`/problems/${problemId}`}>
            <Button variant="outline">Save & Exit</Button>
          </Link>
          <Button 
            className="gap-2" 
            onClick={saveAndContinue}
            disabled={saving}
          >
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                Continue to Solutions <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}