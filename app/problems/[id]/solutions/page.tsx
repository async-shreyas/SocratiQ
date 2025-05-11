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
import { Trash2, Plus, ArrowRight, ThumbsUp, ThumbsDown } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProblemSolutionsPage({ params }) {
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
      
      <Tabs defaultValue="generate">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="generate">Generate Solutions</TabsTrigger>
          <TabsTrigger value="evaluate">Evaluate & Rank</TabsTrigger>
          <TabsTrigger value="implement">Implementation Plan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="generate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Solution Generation</CardTitle>
              <CardDescription>
                Create solutions based on first principles analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Solution 1 Evaluation */}
              <div className="space-y-4 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Customer segmentation & targeted marketing</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-gray-500">Feasibility</Label>
                    <Select defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">Impact</Label>
                    <Select defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">Cost</Label>
                    <Select defaultValue="low">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">Time</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Short-term</SelectItem>
                        <SelectItem value="medium">Medium-term</SelectItem>
                        <SelectItem value="high">Long-term</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="sol1risks">Risks & Challenges</Label>
                  <Textarea
                    id="sol1risks"
                    defaultValue="May require additional data collection and analytics capabilities. Risk of over-focusing on existing high-value segments while missing emerging opportunities."
                    rows={2}
                  />
                </div>
              </div>
              
              {/* Solution 2 Evaluation */}
              <div className="space-y-4 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Conversion funnel optimization</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-gray-500">Feasibility</Label>
                    <Select defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">Impact</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">Cost</Label>
                    <Select defaultValue="low">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">Time</Label>
                    <Select defaultValue="low">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Short-term</SelectItem>
                        <SelectItem value="medium">Medium-term</SelectItem>
                        <SelectItem value="high">Long-term</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="sol2risks">Risks & Challenges</Label>
                  <Textarea
                    id="sol2risks"
                    defaultValue="Requires ongoing testing and optimization. Results may vary and improvements might plateau after initial gains."
                    rows={2}
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">Solutions Ranking</h3>
                <ol className="space-y-2 pl-5 list-decimal">
                  <li className="text-green-700 font-medium">Customer segmentation & targeted marketing <span className="text-gray-500 font-normal">(Score: 18/20)</span></li>
                  <li className="text-green-700 font-medium">Conversion funnel optimization <span className="text-gray-500 font-normal">(Score: 16/20)</span></li>
                </ol>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                Next: Implementation Plan <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="implement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Plan</CardTitle>
              <CardDescription>
                Create a practical action plan based on your top solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 pb-4">
                <div className="space-y-1">
                  <Label>Selected Solution</Label>
                  <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg">
                    Customer segmentation & targeted marketing
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Implementation Timeline</Label>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ol className="space-y-4 relative border-l border-gray-300 ml-3 pl-6">
                      <li className="relative">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-7.5 border border-white"></div>
                        <h4 className="font-medium">Week 1-2: Data Analysis</h4>
                        <p className="text-sm text-gray-600">Analyze customer data to identify key segments based on LTV and acquisition costs.</p>
                      </li>
                      <li className="relative">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-7.5 border border-white"></div>
                        <h4 className="font-medium">Week 3: Strategy Development</h4>
                        <p className="text-sm text-gray-600">Create targeted marketing strategies for high-value segments.</p>
                      </li>
                      <li className="relative">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-7.5 border border-white"></div>
                        <h4 className="font-medium">Week 4-6: Implementation</h4>
                        <p className="text-sm text-gray-600">Adjust marketing campaigns and budget allocation based on segmentation.</p>
                      </li>
                      <li className="relative">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-7.5 border border-white"></div>
                        <h4 className="font-medium">Week 7-8: Monitoring & Optimization</h4>
                        <p className="text-sm text-gray-600">Track results and adjust strategies based on performance data.</p>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="resources">Required Resources</Label>
                  <Textarea
                    id="resources"
                    defaultValue="- Marketing team time (20 hours/week)
- Data analyst (10 hours/week)
- Marketing analytics tools
- Budget for A/B testing new campaigns ($5,000)"
                    rows={4}
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="kpis">Key Performance Indicators</Label>
                  <Textarea
                    id="kpis"
                    defaultValue="- Overall CAC reduction (target: 15%)
- Segment-specific conversion rates
- Customer acquisition by segment
- ROI by marketing channel
- Customer lifetime value by segment"
                    rows={4}
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="challenges">Anticipated Challenges & Mitigations</Label>
                  <Textarea
                    id="challenges"
                    defaultValue="- Challenge: Insufficient customer data for effective segmentation
  Mitigation: Implement enhanced data collection for 30 days before finalizing segments

- Challenge: Team resistance to budget reallocation
  Mitigation: Present clear data showing ROI potential and run small test campaigns first"
                    rows={4}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/problems/${problemId}`}>
                <Button variant="outline">Save & Exit</Button>
              </Link>
              <Button className="gap-2">
                Complete & Add to Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}