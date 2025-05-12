This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# First Principles Problem Solver API Documentation

This document outlines all the API endpoints available in the First Principles Problem Solver application.

## Problems API

### Get All Problems
- **Endpoint**: `GET /api/problems`
- **Description**: Retrieves all problems for the current user
- **Authentication**: Required
- **Response**: Array of problem objects with components, fundamental truths, and solutions

### Create New Problem
- **Endpoint**: `POST /api/problems`
- **Description**: Creates a new problem
- **Authentication**: Required
- **Request Body**: Problem object with title, description, status, category, progress (optional)
- **Response**: Created problem object

### Get Problem by ID
- **Endpoint**: `GET /api/problems/[id]`
- **Description**: Retrieves a specific problem
- **Authentication**: Required
- **Response**: Problem object with components, fundamental truths, and solutions

### Update Problem
- **Endpoint**: `PATCH /api/problems/[id]`
- **Description**: Updates a problem
- **Authentication**: Required
- **Request Body**: Partial problem object with fields to update
- **Response**: Updated problem object

### Delete Problem
- **Endpoint**: `DELETE /api/problems/[id]`
- **Description**: Deletes a problem and all related data
- **Authentication**: Required
- **Response**: Success confirmation

## Problem Components API

### Get All Components
- **Endpoint**: `GET /api/problems/[id]/components`
- **Description**: Retrieves all components for a problem
- **Authentication**: Required
- **Response**: Array of component objects

### Create Component
- **Endpoint**: `POST /api/problems/[id]/components`
- **Description**: Creates a new component for a problem
- **Authentication**: Required
- **Request Body**: Component with name, description, isCritical (optional)
- **Response**: Created component object

### Get Component by ID
- **Endpoint**: `GET /api/problems/[problemId]/components/[id]`
- **Description**: Retrieves a specific component
- **Authentication**: Required
- **Response**: Component object

### Update Component
- **Endpoint**: `PATCH /api/problems/[problemId]/components/[id]`
- **Description**: Updates a component
- **Authentication**: Required
- **Request Body**: Partial component object with fields to update
- **Response**: Updated component object

### Delete Component
- **Endpoint**: `DELETE /api/problems/[problemId]/components/[id]`
- **Description**: Deletes a component
- **Authentication**: Required
- **Response**: Success confirmation

## Fundamental Truths API

### Get All Truths
- **Endpoint**: `GET /api/problems/[id]/truths`
- **Description**: Retrieves all fundamental truths for a problem
- **Authentication**: Required
- **Response**: Array of truth objects

### Create Truth
- **Endpoint**: `POST /api/problems/[id]/truths`
- **Description**: Creates a new fundamental truth for a problem
- **Authentication**: Required
- **Request Body**: Truth with truth statement and description
- **Response**: Created truth object

### Get Truth by ID
- **Endpoint**: `GET /api/problems/[problemId]/truths/[id]`
- **Description**: Retrieves a specific fundamental truth
- **Authentication**: Required
- **Response**: Truth object

### Update Truth
- **Endpoint**: `PATCH /api/problems/[problemId]/truths/[id]`
- **Description**: Updates a fundamental truth
- **Authentication**: Required
- **Request Body**: Partial truth object with fields to update
- **Response**: Updated truth object

### Delete Truth
- **Endpoint**: `DELETE /api/problems/[problemId]/truths/[id]`
- **Description**: Deletes a fundamental truth
- **Authentication**: Required
- **Response**: Success confirmation

## Solutions API

### Get All Solutions
- **Endpoint**: `GET /api/problems/[id]/solutions`
- **Description**: Retrieves all solutions for a problem
- **Authentication**: Required
- **Response**: Array of solution objects

### Create Solution
- **Endpoint**: `POST /api/problems/[id]/solutions`
- **Description**: Creates a new solution for a problem
- **Authentication**: Required
- **Request Body**: Solution with title, description, feasibility, impact, cost, time
- **Response**: Created solution object

### Get Solution by ID
- **Endpoint**: `GET /api/problems/[problemId]/solutions/[id]`
- **Description**: Retrieves a specific solution
- **Authentication**: Required
- **Response**: Solution object

### Update Solution
- **Endpoint**: `PATCH /api/problems/[problemId]/solutions/[id]`
- **Description**: Updates a solution
- **Authentication**: Required
- **Request Body**: Partial solution object with fields to update
- **Response**: Updated solution object

### Delete Solution
- **Endpoint**: `DELETE /api/problems/[problemId]/solutions/[id]`
- **Description**: Deletes a solution
- **Authentication**: Required
- **Response**: Success confirmation

## Templates API

### Get All Templates
- **Endpoint**: `GET /api/templates`
- **Description**: Retrieves all templates (system templates and user's custom templates)
- **Authentication**: Optional (required for user templates)
- **Query Parameters**: type=all|system|user
- **Response**: Array of template objects

### Create Template
- **Endpoint**: `POST /api/templates`
- **Description**: Creates a new custom template
- **Authentication**: Required
- **Request Body**: Template with title, description, category, steps
- **Response**: Created template object

### Get Template by ID
- **Endpoint**: `GET /api/templates/[id]`
- **Description**: Retrieves a specific template
- **Authentication**: Required for user templates, optional for system templates
- **Response**: Template object

### Update Template
- **Endpoint**: `PATCH /api/templates/[id]`
- **Description**: Updates a template
- **Authentication**: Required
- **Request Body**: Partial template object with fields to update
- **Response**: Updated template object

### Delete Template
- **Endpoint**: `DELETE /api/templates/[id]`
- **Description**: Deletes a custom template
- **Authentication**: Required
- **Response**: Success confirmation

## Dashboard API

### Get Dashboard Data
- **Endpoint**: `GET /api/dashboard`
- **Description**: Retrieves dashboard statistics and data
- **Authentication**: Required
- **Response**: Dashboard data object with stats, categories, recent problems, and insights

## Problem Progress API

### Get Problem Progress
- **Endpoint**: `GET /api/problems/[id]/progress`
- **Description**: Retrieves progress information for a problem
- **Authentication**: Required
- **Response**: Progress object with progress percentage and status

### Update Problem Progress
- **Endpoint**: `PATCH /api/problems/[id]/progress`
- **Description**: Manually updates progress for a problem
- **Authentication**: Required
- **Request Body**: Progress percentage and optional status
- **Response**: Updated progress object

### Calculate Problem Progress
- **Endpoint**: `POST /api/problems/[id]/progress`
- **Description**: Automatically calculates and updates problem progress
- **Authentication**: Required
- **Response**: Updated progress object

## Authentication

All endpoints use [Clerk](https://clerk.dev) for authentication. The APIs verify the user's identity and ensure users can only access and modify their own data.

## Error Handling

All APIs follow a consistent error handling pattern:
- 400 Bad Request: Invalid input data
- 401 Unauthorized: Missing authentication
- 403 Forbidden: Not allowed to access resource
- 404 Not Found: Resource not found
- 500 Internal Server Error: Server-side error

## Data Models

### Problem
```typescript
{
  id: string;
  title: string;
  description: string;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  category: string;
  progress: number; // 0-100
  userId: string;
  templateId?: string;
  components: ProblemComponent[];
  fundamentalTruths: FundamentalTruth[];
  solutions: Solution[];
  createdAt: Date;
  updatedAt: Date;
}
```

### ProblemComponent
```typescript
{
  id: string;
  name: string;
  description: string;
  isCritical: boolean;
  problemId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### FundamentalTruth
```typescript
{
  id: string;
  truth: string;
  description: string;
  problemId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Solution
```typescript
{
  id: string;
  title: string;
  description: string;
  feasibility: string; // 'low', 'medium', 'high'
  impact: string; // 'low', 'medium', 'high'
  cost: string; // 'low', 'medium', 'high'
  time: string; // 'low', 'medium', 'high'
  problemId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Template
```typescript
{
  id: string;
  title: string;
  description: string;
  category: string;
  steps: Array<{
    name: string;
    description: string;
    order: number;
  }>;
  popularity: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## API Usage Examples

### Creating a New Problem

```javascript
// Example using fetch API
const createProblem = async (problemData) => {
  try {
    const response = await fetch('/api/problems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(problemData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create problem');
    }
    
    const newProblem = await response.json();
    return newProblem;
  } catch (error) {
    console.error('Error creating problem:', error);
    throw error;
  }
};

// Example usage
const problemData = {
  title: 'Optimize customer acquisition costs',
  description: 'Our customer acquisition costs have increased by 30% over the last quarter...',
  status: 'NOT_STARTED',
  category: 'Business',
  progress: 0
};

createProblem(problemData)
  .then(problem => console.log('Created problem:', problem))
  .catch(error => console.error(error));
```

### Breaking Down a Problem into Components

```javascript
// Add a component to a problem
const addComponent = async (problemId, componentData) => {
  try {
    const response = await fetch(`/api/problems/${problemId}/components`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(componentData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to add component');
    }
    
    const newComponent = await response.json();
    return newComponent;
  } catch (error) {
    console.error('Error adding component:', error);
    throw error;
  }
};

// Example usage
const componentData = {
  name: 'Marketing channel efficiency',
  description: 'Different marketing channels have different acquisition costs and conversion rates.',
  isCritical: true
};

addComponent('problem-id-here', componentData)
  .then(component => console.log('Added component:', component))
  .catch(error => console.error(error));
```

### Adding a Fundamental Truth

```javascript
// Add a fundamental truth to a problem
const addTruth = async (problemId, truthData) => {
  try {
    const response = await fetch(`/api/problems/${problemId}/truths`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(truthData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to add fundamental truth');
    }
    
    const newTruth = await response.json();
    return newTruth;
  } catch (error) {
    console.error('Error adding fundamental truth:', error);
    throw error;
  }
};

// Example usage
const truthData = {
  truth: 'Customer acquisition cost (CAC) must be less than customer lifetime value (LTV)',
  description: 'This is a basic economic reality that cannot be violated for a sustainable business.'
};

addTruth('problem-id-here', truthData)
  .then(truth => console.log('Added truth:', truth))
  .catch(error => console.error(error));
```

### Creating and Evaluating a Solution

```javascript
// Add a solution to a problem
const addSolution = async (problemId, solutionData) => {
  try {
    const response = await fetch(`/api/problems/${problemId}/solutions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(solutionData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to add solution');
    }
    
    const newSolution = await response.json();
    return newSolution;
  } catch (error) {
    console.error('Error adding solution:', error);
    throw error;
  }
};

// Example usage
const solutionData = {
  title: 'Customer segmentation & targeted marketing',
  description: 'Focus marketing efforts on high-value customer segments with better LTV/CAC ratios.',
  feasibility: 'high',
  impact: 'high',
  cost: 'low',
  time: 'medium'
};

addSolution('problem-id-here', solutionData)
  .then(solution => console.log('Added solution:', solution))
  .catch(error => console.error(error));
```

### Using Templates

```javascript
// Get all available templates
const getTemplates = async () => {
  try {
    const response = await fetch('/api/templates');
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch templates');
    }
    
    const templates = await response.json();
    return templates;
  } catch (error) {
    console.error('Error fetching templates:', error);
    throw error;
  }
};

// Create a problem from a template
const createProblemFromTemplate = async (problemData, templateId) => {
  try {
    const data = {
      ...problemData,
      templateId
    };
    
    const response = await fetch('/api/problems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create problem from template');
    }
    
    const newProblem = await response.json();
    return newProblem;
  } catch (error) {
    console.error('Error creating problem from template:', error);
    throw error;
  }
};

// Example usage
getTemplates()
  .then(templates => {
    // Find a suitable template
    const template = templates.find(t => t.title === '5 Whys Root Cause Analysis');
    
    if (template) {
      const problemData = {
        title: 'Reduce manufacturing defect rate',
        description: 'Our manufacturing defect rate has increased by 15% in the last quarter.',
        status: 'NOT_STARTED',
        category: 'Operations',
        progress: 0
      };
      
      return createProblemFromTemplate(problemData, template.id);
    }
  })
  .then(problem => console.log('Created problem from template:', problem))
  .catch(error => console.error(error));
```

### Getting Dashboard Data

```javascript
// Fetch dashboard data
const getDashboardData = async () => {
  try {
    const response = await fetch('/api/dashboard');
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch dashboard data');
    }
    
    const dashboardData = await response.json();
    return dashboardData;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

// Example usage
getDashboardData()
  .then(data => {
    console.log('Total problems:', data.stats.totalProblems);
    console.log('Active problems:', data.stats.activeProblems);
    console.log('Completed problems:', data.stats.completedProblems);
    console.log('Average solution time:', data.stats.avgSolutionDays, 'days');
    console.log('Recent problems:', data.recentProblems);
    console.log('Insights:', data.insights);
  })
  .catch(error => console.error(error));
```

## Implementation Notes

1. **Progress Tracking**: Problem progress is automatically calculated when components, truths, or solutions are added/removed.

2. **Authentication**: All requests require authentication via Clerk except for retrieving system templates.

3. **Optimistic Updates**: Frontend implementation should use optimistic updates for better user experience.

4. **Error Handling**: Always check response status and handle errors appropriately.

5. **Rate Limiting**: API endpoints have rate limiting to prevent abuse.

6. **CORS Protection**: Only requests from the same origin are allowed.

7. **Data Validation**: All input data is validated using Zod schemas.

8. **Performance**: The Prisma client is instantiated as a singleton to avoid connection pool issues.