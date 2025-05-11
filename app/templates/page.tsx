// app/templates/page.tsx
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
import { Plus, Search, ArrowRight, Star, ListOrdered } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample template data
const templates = [
  {
    id: "1",
    title: "Socratic Questioning Framework",
    category: "Critical Thinking",
    description:
      "Systematic questioning process to challenge assumptions and reveal underlying truths",
    popularity: "High",
    lastUsed: "2025-05-15",
    steps: 5,
  },
  {
    id: "2",
    title: "5 Whys Root Cause Analysis",
    category: "Root Cause",
    description:
      "Iterative interrogative technique to explore cause-and-effect relationships",
    popularity: "High",
    lastUsed: "2025-05-10",
    steps: 5,
  },
  {
    id: "3",
    title: "MECE Framework",
    category: "Structuring",
    description:
      "Mutually Exclusive, Collectively Exhaustive problem segmentation",
    popularity: "Medium",
    lastUsed: null,
    steps: 4,
  },
  {
    id: "4",
    title: "First Principles Decomposition",
    category: "Foundational",
    description:
      "Step-by-step guide to breaking down problems to basic elements",
    popularity: "High",
    lastUsed: "2025-05-12",
    steps: 6,
  },
  {
    id: "5",
    title: "Cost-Benefit Matrix",
    category: "Decision Making",
    description: "Structured approach to evaluate solution tradeoffs",
    popularity: "Medium",
    lastUsed: null,
    steps: 3,
  },
  {
    id: "6",
    title: "Hypothesis-Driven Approach",
    category: "Scientific",
    description: "Formulate and test hypotheses in iterative cycles",
    popularity: "Low",
    lastUsed: "2025-04-28",
    steps: 4,
  },
];

export default function TemplatesPage() {
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
          <Input placeholder="Search templates..." className="pl-8" />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Critical Thinking">Critical Thinking</SelectItem>
            <SelectItem value="Root Cause">Root Cause</SelectItem>
            <SelectItem value="Structuring">Structuring</SelectItem>
            <SelectItem value="Decision Making">Decision Making</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Templates Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="mb-2">{template.title}</CardTitle>
                  <Badge variant="outline" className="mb-2">
                    {template.category}
                  </Badge>
                </div>
                {template.lastUsed && (
                  <Badge variant="secondary" className="text-xs">
                    Last used {new Date(template.lastUsed).toLocaleDateString()}
                  </Badge>
                )}
              </div>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" />
                  <span>{template.popularity} Usage</span>
                </div>
                <div className="flex items-center gap-1">
                  <ListOrdered size={14} className="text-blue-500" />
                  <span>{template.steps} Steps</span>
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
        ))}
      </div>

      {/* Custom Templates Section */}
      <div className="mt-16 border-t pt-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Your Custom Templates</h2>
            <p className="text-muted-foreground">
              Templates you&apos;ve created or modified
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
}
