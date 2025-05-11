import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Brain, Lightbulb, Workflow, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            First Principles <span className="text-blue-600">Problem Solver</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Break down complex problems to their fundamental truths and build innovative solutions from the ground up.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/problems">
              <Button size="lg" className="px-8 gap-2">
                Start Solving <ChevronRight size={16} />
              </Button>
            </Link>
            <Link href="/methodology">
              <Button size="lg" variant="outline" className="px-8">
                Learn Methodology
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Problem Decomposition</h3>
            <p className="text-gray-600">
              Break complex problems into their fundamental components to avoid assumptions and cognitive biases.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Workflow className="text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Structured Thinking</h3>
            <p className="text-gray-600">
              Guide your thinking with proven frameworks that lead to clearer understanding and better solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Solution Generation</h3>
            <p className="text-gray-600">
              Create innovative solutions based on foundational truths rather than existing conventions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Knowledge Repository</h3>
            <p className="text-gray-600">
              Build a personal library of problems, insights, and solutions for future reference.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 py-12 px-6 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to think differently?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            First principles thinking has been used by innovators from Aristotle to Elon Musk to solve seemingly impossible problems.
          </p>
          <Link href="/problems/new">
            <Button size="lg" className="px-8">Create Your First Problem</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}