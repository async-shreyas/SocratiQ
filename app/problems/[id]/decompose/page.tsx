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
import { Trash2, Plus, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function DecomposeProblemPage({ params }:{ params: { id: string } }) {
  const problemId = params.id;
  
  // In a real app, we would fetch the problem data using the ID
  const problem = {
    id: problemId,
    title: "Optimize customer acquisition costs",
    description: "Our customer acquisition costs have increased by 30% over the last quarter while conversion rates remain unchanged. We need to find ways to efficiently acquire new customers without increasing our marketing budget.",
  };

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
            {/* Component 1 */}
            <div className="space-y-4 pb-4 border-b">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Label htmlFor="component1">Component</Label>
                  <Input
                    id="component1"
                    defaultValue="Marketing channel efficiency"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                <Label htmlFor="comp1desc">Description & Assumptions</Label>
                <Textarea
                  id="comp1desc"
                  defaultValue="Different marketing channels have different acquisition costs and conversion rates. We're assuming our current channel mix is suboptimal."
                  rows={3}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="comp1critical" />
                <Label htmlFor="comp1critical">Critical component</Label>
              </div>
            </div>
            
            {/* Component 2 */}
            <div className="space-y-4 pb-4 border-b">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Label htmlFor="component2">Component</Label>
                  <Input
                    id="component2"
                    defaultValue="Conversion funnel optimization"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                <Label htmlFor="comp2desc">Description & Assumptions</Label>
                <Textarea
                  id="comp2desc"
                  defaultValue="The steps potential customers take from awareness to purchase. We're assuming there are inefficiencies or friction points in our current funnel."
                  rows={3}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="comp2critical" defaultChecked />
                <Label htmlFor="comp2critical">Critical component</Label>
              </div>
            </div>
            
            {/* Add Component Button */}
            <Button variant="outline" className="w-full gap-2">
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
            {/* Truth 1 */}
            <div className="space-y-4 pb-4 border-b">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Label htmlFor="truth1">Fundamental Truth</Label>
                  <Input
                    id="truth1"
                    defaultValue="Customer acquisition cost (CAC) must be less than customer lifetime value (LTV)"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                <Label htmlFor="truth1why">Why is this fundamental?</Label>
                <Textarea
                  id="truth1why"
                  defaultValue="This is a basic economic reality that cannot be violated for a sustainable business. If you spend more to acquire a customer than they generate in revenue, you'll eventually go out of business."
                  rows={3}
                />
              </div>
            </div>
            
            {/* Truth 2 */}
            <div className="space-y-4 pb-4 border-b">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Label htmlFor="truth2">Fundamental Truth</Label>
                  <Input
                    id="truth2"
                    defaultValue="Different customer segments have different acquisition costs and lifetime values"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                <Label htmlFor="truth2why">Why is this fundamental?</Label>
                <Textarea
                  id="truth2why"
                  defaultValue="This is an empirical truth based on customer data. We can directly observe that some segments are more profitable than others over their lifetime and some are more expensive to acquire."
                  rows={3}
                />
              </div>
            </div>
            
            {/* Add Truth Button */}
            <Button variant="outline" className="w-full gap-2">
              <Plus className="h-4 w-4" /> Add Fundamental Truth
            </Button>
          </CardContent>
        </Card>
        
        <div className="flex justify-end space-x-4">
          <Link href={`/problems/${problemId}`}>
            <Button variant="outline">Save & Exit</Button>
          </Link>
          <Link href={`/problems/${problemId}/solutions`}>
            <Button className="gap-2">
              Continue to Solutions <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}