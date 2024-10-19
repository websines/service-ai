"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  MessageSquare,
  Zap,
  BarChart,
  Lock,
  CheckCircle,
  Users,
  Globe,
  Headphones,
  Menu,
} from "lucide-react";
import { Lato } from "next/font/google";
import { useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Demo" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${lato.className}`}>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b sticky top-0 bg-background z-50">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">Service AI</span>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col justify-between h-full py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-1 text-lg transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="mt-auto"
              >
                Close Menu
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/20 via-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Customer Support with AI
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Provide instant, accurate, and personalized support 24/7.
                    Boost customer satisfaction by 50% and reduce response times
                    by 80% with our cutting-edge AI technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Trusted by 10,000+ companies worldwide
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="AI Customer Support Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-b overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">
              Trusted by Industry Leaders
            </h2>
            <div className="flex justify-center">
              <div className="w-full overflow-hidden">
                <div className="flex animate-marquee">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-shrink-0 mx-4 w-32">
                      <Image
                        alt={`Client logo ${i + 1}`}
                        className="h-8 w-full object-contain"
                        height="32"
                        src="/placeholder.svg"
                        width="128"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Powerful Features for Exceptional Support
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Zap className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl">
                      Real-time AI Responses
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>
                    Instant answers to customer queries, 24/7. Our AI
                    understands context and provides accurate responses in
                    milliseconds.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Globe className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl">
                      Multilingual Support
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>
                    Break language barriers with AI that communicates fluently
                    in over 100 languages, expanding your global reach.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Users className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl">
                      Seamless Human Handoff
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>
                    AI knows when to involve human agents, ensuring complex
                    issues are handled with care and expertise.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <BarChart className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl">
                      Advanced Analytics
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>
                    Gain deep insights into customer interactions, trends, and
                    satisfaction levels with our comprehensive dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Headphones className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl">
                      Omnichannel Integration
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>
                    Provide consistent support across email, chat, social media,
                    and voice calls with our unified AI platform.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Lock className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl">
                      Enterprise-grade Security
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>
                    Rest easy with end-to-end encryption, data anonymization,
                    and compliance with GDPR, HIPAA, and other standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="demo"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              See Service AI in Action
            </h2>
            <Tabs defaultValue="chat" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chat">Live Chat</TabsTrigger>
                <TabsTrigger value="email">Email Support</TabsTrigger>
                <TabsTrigger value="voice">Voice Assistant</TabsTrigger>
              </TabsList>
              <TabsContent
                value="chat"
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700 mt-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="font-medium">Customer</p>
                      <p>
                        Hello, I'm having trouble resetting my password. Can you
                        help?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="font-medium">Service AI</p>
                      <p>
                        Of course! I'd be happy to help you reset your password.
                        Here are the steps:
                      </p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>
                          Go to the login page and click on "Forgot Password"
                        </li>
                        <li>
                          Enter the email address associated with your account
                        </li>
                        <li>Check your email for a password reset link</li>
                        <li>
                          Click the link and follow the instructions to create a
                          new password
                        </li>
                      </ol>
                      <p>Let me know if you need any further assistance!</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="email"
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700 mt-6"
              >
                <div className="space-y-4">
                  <p className="font-medium">Email Response Preview</p>
                  <div className="border p-4 rounded-lg">
                    <p>
                      <strong>Subject:</strong> Re: Order #12345 - Shipping
                      Delay
                    </p>
                    <p>
                      <strong>Dear Valued Customer,</strong>
                    </p>
                    <p>
                      Thank you for reaching out about your order #12345. I
                      apologize for the delay in shipping.
                    </p>
                    <p>
                      After checking our system, I can see that your order has
                      been processed and is scheduled to ship within the next 24
                      hours. You will receive a tracking number as soon as it's
                      dispatched.
                    </p>
                    <p>
                      As a gesture of goodwill for the inconvenience, we've
                      applied a 10% discount to your next order. The coupon code
                      SORRY10 has been added to your account.
                    </p>
                    <p>
                      If you have any further questions, please don't hesitate
                      to ask. We appreciate your patience and understanding.
                    </p>
                    <p>
                      <strong>
                        Best regards,
                        <br />
                        Service AI Support Team
                      </strong>
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="voice"
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700 mt-6"
              >
                <div className="space-y-4">
                  <p className="font-medium">Voice Assistant Transcript</p>
                  <div className="space-y-2">
                    <p>
                      <strong>Customer:</strong> "I'd like to check the status
                      of my refund for order number 98765."
                    </p>
                    <p>
                      <strong>Service AI:</strong> "I'd be happy to help you
                      check the status of your refund. Can you please confirm
                      the order number is 98765?"
                    </p>
                    <p>
                      <strong>Customer:</strong> "Yes, that's correct."
                    </p>
                    <p>
                      <strong>Service AI:</strong> "Thank you for confirming.
                      I've located your order and I can see that the refund for
                      order 98765 was processed on June 15th, 2023. It typically
                      takes 3-5 business days for the refund to appear in your
                      account, depending on your bank. As of today, it should
                      have been credited to your account. If you haven't seen it
                      yet, I recommend checking with your bank. Is there
                      anything else I can help you with today?"
                    </p>
                    <p>
                      <strong>Customer:</strong> "No, that's all. Thank you."
                    </p>
                    <p>
                      <strong>Service AI:</strong> "You're welcome! If you need
                      any further assistance, don't hesitate to call back. Have
                      a great day!"
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Success Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Giant Boosts Satisfaction</CardTitle>
                  <CardDescription>Global Online Retailer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    "Implementing Service AI has been a game-changer for our
                    customer support. We've seen a 50% increase in customer
                    satisfaction scores and a 30% reduction in support costs.
                    The AI's ability to handle multiple languages has helped us
                    expand into new markets with ease."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image
                      alt="Sarah Johnson"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Director of Customer Experience
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tech Startup Scales Support</CardTitle>
                  <CardDescription>Innovative SaaS Company</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    "As a rapidly growing startup, we needed a solution that
                    could scale with us. Service AI not only handled our
                    increasing support volume but also provided valuable
                    insights that helped us improve our product. Our response
                    times decreased by 80%, and we've been able to maintain 24/7
                    support without expanding our team."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image
                      alt="Alex Chen"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium">Alex Chen</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Co-founder & CTO
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Services Ensure Compliance</CardTitle>
                  <CardDescription>Leading Bank</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    "In the highly regulated financial industry, we were
                    skeptical about using AI for customer support. Service AI
                    surprised us with its robust compliance features and ability
                    to handle complex queries. We've reduced our average
                    handling time by 40% while maintaining 100% compliance with
                    industry regulations."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image
                      alt="Maria Rodriguez"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium">Maria Rodriguez</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Head of Customer Operations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Flexible Pricing for Every Business
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$299",
                  description: "Perfect for small businesses",
                  features: [
                    "24/7 AI Support",
                    "1,000 AI Interactions/month",
                    "Email & Chat Integration",
                    "Basic Analytics",
                    "5 Team Members",
                  ],
                },
                {
                  name: "Pro",
                  price: "$799",
                  description: "Ideal for growing companies",
                  features: [
                    "24/7 AI Support",
                    "10,000 AI Interactions/month",
                    "Email, Chat & Voice Integration",
                    "Advanced Analytics & Reporting",
                    "Custom AI Training",
                    "20 Team Members",
                    "Priority Support",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large-scale operations",
                  features: [
                    "Unlimited AI Support",
                    "Full Omnichannel Integration",
                    "Custom Analytics & Dashboards",
                    "Dedicated Account Manager",
                    "On-Premise Deployment Option",
                    "Custom Compliance Settings",
                    "24/7 Premium Support",
                  ],
                },
              ].map((plan) => (
                <Card key={plan.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {plan.description}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full">
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Start Free Trial"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Seamless Integration
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Connect with Your Favorite Tools
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Service AI integrates effortlessly with your existing tech
                  stack. From CRM systems to helpdesk software, we ensure a
                  smooth workflow for your team.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Salesforce
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Zendesk
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Intercom
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Slack
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    And many more...
                  </li>
                </ul>
                <Button className="w-fit">View All Integrations</Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Integration Diagram"
                  className="rounded-xl shadow-xl"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {[
                {
                  question:
                    "How does Service AI handle complex customer inquiries?",
                  answer:
                    "Service AI uses advanced natural language processing to understand and respond to a wide range of customer queries. For complex issues that require human intervention, our AI seamlessly transfers the conversation to a human agent, ensuring a smooth customer experience.",
                },
                {
                  question: "Is Service AI available in multiple languages?",
                  answer:
                    "Yes, Service AI supports over 100 languages, allowing you to provide multilingual support to your global customer base. Our AI can detect the language of the incoming query and respond in the same language.",
                },
                {
                  question:
                    "How does Service AI ensure data security and privacy?",
                  answer:
                    "We prioritize data security and privacy. Service AI uses end-to-end encryption, adheres to GDPR, CCPA, and other relevant data protection regulations. We also offer data residency options for businesses with specific compliance requirements.",
                },
                {
                  question:
                    "Can Service AI integrate with our existing CRM and helpdesk systems?",
                  answer:
                    "Service AI is designed to integrate seamlessly with popular CRM and helpdesk systems like Salesforce, Zendesk, and many others. We also offer API access for custom integrations with your proprietary systems.",
                },
                {
                  question:
                    "How long does it take to set up Service AI for our business?",
                  answer:
                    "The basic setup can be completed in as little as a day. For more complex integrations or custom AI training, it may take a few weeks. Our dedicated support team will guide you through the entire process to ensure a smooth implementation.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Customer Support?
                </h2>
                <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses providing exceptional AI-powered
                  support. Start your free trial today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                    placeholder="Enter your work email"
                    type="email"
                  />
                  <Button type="submit" variant="secondary">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs">
                  14-day free trial · No credit card required · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Service AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
