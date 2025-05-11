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

export default function NewProblemPage() {
  return (
    <div className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Create New Problem</h1>
      
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
              placeholder="E.g., How to reduce customer churn by 20%"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Problem Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the problem in detail..."
              rows={5}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timeframe">Timeframe</Label>
              <Select>
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
              placeholder="List any constraints or limitations to consider..."
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="success">Success Criteria</Label>
            <Textarea
              id="success"
              placeholder="How will you know when this problem is solved?"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/problems">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Link href="/problems/1/decompose">
            <Button>Continue</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}