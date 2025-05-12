# API Integration Guide for DeFiGuardian AI Project

This guide explains how to use the API hooks and utilities that have been implemented for the DeFiGuardian AI project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Using the API Context](#using-the-api-context)
3. [API Functions](#api-functions)
4. [Error Handling](#error-handling)
5. [Loading States](#loading-states)
6. [Type Definitions](#type-definitions)
7. [Examples](#examples)

## Getting Started

The application uses a React context to provide API functions throughout the app. The context is set up in the root layout, so you can use the API hooks anywhere in your components.

```tsx
// In your component
import { useApiContext } from '@/contexts/api-context';

export default function MyComponent() {
  const { api, loading, error } = useApiContext();
  
  // Use API functions here
  // ...
}
```

## Using the API Context

The API context provides three main values:

- `api`: An object containing all API functions
- `loading`: A boolean indicating if any API request is currently loading
- `error`: An error object (if any) from the most recent API request

## API Functions

The API hooks provide the following function categories:

### Problems

- `fetchProblems()`: Get all problems for the current user
- `fetchProblem(id)`: Get a specific problem by ID
- `createProblem(data)`: Create a new problem
- `updateProblem(id, data)`: Update an existing problem
- `deleteProblem(id)`: Delete a problem

### Components

- `fetchComponents(problemId)`: Get all components for a problem
- `createComponent(problemId, data)`: Create a new component
- `updateComponent(problemId, componentId, data)`: Update a component
- `deleteComponent(problemId, componentId)`: Delete a component

### Fundamental Truths

- `fetchTruths(problemId)`: Get all fundamental truths for a problem
- `createTruth(problemId, data)`: Create a new truth
- `updateTruth(problemId, truthId, data)`: Update a truth
- `deleteTruth(problemId, truthId)`: Delete a truth

### Solutions

- `fetchSolutions(problemId)`: Get all solutions for a problem
- `createSolution(problemId, data)`: Create a new solution
- `updateSolution(problemId, solutionId, data)`: Update a solution
- `deleteSolution(problemId, solutionId)`: Delete a solution

### Progress

- `fetchProgress(problemId)`: Get current progress for a problem
- `updateProgress(problemId, data)`: Update progress manually
- `calculateProgress(problemId)`: Calculate progress automatically

### Templates

- `fetchTemplates(type)`: Get templates (type can be 'all', 'system', or 'user')
- `fetchTemplate(id)`: Get a specific template
- `createTemplate(data)`: Create a new template
- `updateTemplate(id, data)`: Update a template
- `deleteTemplate(id)`: Delete a template

### Dashboard

- `fetchDashboardData()`: Get dashboard statistics and metrics

## Error Handling

We provide utility functions for consistent error handling:

```tsx
import { createErrorHandler, createSuccessHandler } from '@/lib/api-utils';

// In your component's async function
try {
  const result = await api.createProblem(data)
    .then(createSuccessHandler('Problem created successfully'));
  
  // Success! Do something with result
} catch (error) {
  createErrorHandler('Failed to create problem')(error);
  // Error handled with toast notification
}
```

## Loading States

You can track loading states for individual operations:

```tsx
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  try {
    setLoading(true);
    await api.createProblem(data);
    // Success!
  } catch (error) {
    // Error handling
  } finally {
    setLoading(false);
  }
};

return (
  <Button disabled={loading}>
    {loading ? 'Creating...' : 'Create Problem'}
  </Button>
);
```

## Type Definitions

All type definitions are available in `types/api.ts`. Make sure to import them:

```tsx
import { Problem, CreateProblemRequest } from '@/types/api';
```

## Examples

### Fetching Problems

```tsx
const [problems, setProblems] = useState<Problem[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
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

  fetchData();
}, [api]);
```

### Creating a New Problem

```tsx
const [formData, setFormData] = useState<CreateProblemRequest>({
  title: '',
  description: '',
  category: '',
  status: 'NOT_STARTED',
  progress: 0,
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    setLoading(true);
    const problem = await api.createProblem(formData)
      .then(createSuccessHandler('Problem created successfully'));
    
    // Redirect to the problem detail page
    router.push(`/problems/${problem.id}`);
  } catch (error) {
    createErrorHandler('Failed to create problem')(error);
    setLoading(false);
  }
};
```

### Updating Components

```tsx
const saveComponent = async (component: ProblemComponent) => {
  try {
    setSavingComponentId(component.id);
    
    const payload = {
      name: component.name,
      description: component.description,
      isCritical: component.isCritical
    };
    
    const updatedComponent = await api.updateComponent(problemId, component.id, payload)
      .then(createSuccessHandler('Component updated'));
    
    // Update the component in the list
    setComponents(components.map(comp => 
      comp.id === component.id ? updatedComponent : comp
    ));
  } catch (error) {
    createErrorHandler('Failed to update component')(error);
  } finally {
    setSavingComponentId(null);
  }
};
```

### Deleting Templates

```tsx
const handleDeleteTemplate = async (templateId: string) => {
  if (!confirm('Are you sure you want to delete this template?')) return;
  
  try {
    setDeletingId(templateId);
    await api.deleteTemplate(templateId)
      .then(createSuccessHandler('Template deleted successfully'));
    
    // Remove the template from the list
    setTemplates(templates.filter(t => t.id !== templateId));
  } catch (error) {
    createErrorHandler('Failed to delete template')(error);
  } finally {
    setDeletingId(null);
  }
};
```

### Fetching Dashboard Data

```tsx
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
```

These examples demonstrate how to integrate the API hooks into your components for common operations. Refer to the type definitions for full details on the request and response structures.