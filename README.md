# SocratiQ - First Principles Problem Solver

SocratiQ is a structured approach to breaking down and solving complex problems using first principles thinking. This application helps users decompose problems, identify fundamental truths, and generate innovative solutions.

## Technology Stack

- **Frontend**: Next.js 15, React, Tailwind CSS, ShadCN UI Components
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk Auth
- **State Management**: React Hooks + Context API
- **Form Handling**: React Hook Form + Zod validation
- **Styling**: Tailwind CSS
- **Notifications**: Sonner Toast

## Project Structure

```
socratiq/
├── app/                  # Next.js App Router
│   ├── api/              # API Routes
│   ├── (auth)/           # Authentication pages
│   ├── dashboard/        # Dashboard pages
│   ├── problems/         # Problem management
│   ├── templates/        # Template management
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── ui/               # UI components
│   ├── auth/             # Auth components
│   └── layout/           # Layout components
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prisma/               # Prisma schema and migrations
│   └── schema.prisma     # Database schema
├── public/               # Static assets
├── validators/           # Zod schemas
└── types/                # TypeScript type definitions
```

## Coding Standards

This project follows strict coding standards to ensure maintainability and consistency:

1. **TypeScript**: All code is written in TypeScript with proper type definitions.
2. **Authentication**: Clerk is used for authentication throughout the app.
3. **Prisma Client**: A singleton instance is used for database access.
4. **API Structure**: Follows REST conventions with consistent route naming.
5. **Error Handling**: Standardized error handling across API routes and components.
6. **Form Handling**: React Hook Form with Zod validation for all forms.
7. **Components**: Props interfaces are defined for all components.
8. **Data Fetching**: The API context is used for all data fetching.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run database migrations: `npx prisma migrate dev`
5. Start the development server: `npm run dev`

## Authentication

This application uses Clerk for authentication. Clerk provides:

- Email/password authentication
- Social login (Google, GitHub, etc.)
- User management
- Secure sessions

## Data Model

The main entities in the application are:

- **Users**: Application users
- **Problems**: User-defined problems to solve
- **Components**: Building blocks of problems
- **Fundamental Truths**: Core principles related to problems
- **Solutions**: Proposed solutions to problems
- **Templates**: Reusable problem-solving frameworks

## API Structure

The API follows a consistent RESTful structure:

- GET `/api/problems` - List all problems
- GET `/api/problems/:id` - Get a specific problem
- POST `/api/problems` - Create a new problem
- PATCH `/api/problems/:id` - Update a problem
- DELETE `/api/problems/:id` - Delete a problem

Nested resources follow the pattern:
- `/api/problems/:id/components`
- `/api/problems/:id/truths`
- `/api/problems/:id/solutions`

## Form Validation

All forms use Zod schemas for validation. Schemas are defined in the `validators/` directory and used with React Hook Form.

## Contributors

- SocratiQ Team

## License

MIT