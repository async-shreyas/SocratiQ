'use client';
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, CheckCircle2, Blocks, Brain } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const MethodologyPage = () => {
  const handleContactClick = () => {
    alert("Get in touch!");
  };

  return (
    <div className="container max-w-4xl py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Our Methodology
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover how we approach problem-solving with a focus on research,
          design, development, and testing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-blue-600" />
            </div>
            <CardTitle>Research</CardTitle>
            <CardDescription>Understanding user needs</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We conduct thorough research to understand the needs and
              challenges of our users, ensuring our solutions are grounded in
              real-world insights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="text-blue-600" />
            </div>
            <CardTitle>Design</CardTitle>
            <CardDescription>Creating intuitive interfaces</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our design process focuses on creating intuitive and
              user-friendly interfaces that enhance the overall user
              experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Blocks className="text-blue-600" />
            </div>
            <CardTitle>Development</CardTitle>
            <CardDescription>Building high-quality solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We follow best practices in development to ensure high-quality
              code, scalability, and performance in all our projects.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="text-blue-600" />
            </div>
            <CardTitle>Testing</CardTitle>
            <CardDescription>Ensuring quality and reliability</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Rigorous testing is conducted to ensure our products meet the
              highest quality standards and perform reliably in all scenarios.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Learn more about our methodology and approach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why is research important in your methodology?
              </AccordionTrigger>
              <AccordionContent>
                Research helps us understand the core needs and challenges of
                our users, ensuring our solutions are relevant and impactful.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do you ensure quality in development?
              </AccordionTrigger>
              <AccordionContent>
                We follow industry best practices, conduct code reviews, and
                perform extensive testing to ensure high-quality solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What makes your design process unique?
              </AccordionTrigger>
              <AccordionContent>
                Our design process is user-centric, focusing on creating
                intuitive and accessible interfaces that enhance user
                satisfaction.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Contact us</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            Stay in the loop, and get notified when we release new features and updates.
          </AlertDialogDescription>
          <AlertDialogCancel>Close</AlertDialogCancel> 
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  );
};

export default MethodologyPage;