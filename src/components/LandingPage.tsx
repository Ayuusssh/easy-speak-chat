import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Shield, Heart } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-2xl">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              SimplifyAI
            </span>
          </h1>
          
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Complex topics, made simple
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get clear, easy-to-understand explanations for anything. 
            No jargon, no confusion – just simple answers that make sense.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3"
              onClick={onGetStarted}
            >
              Get Started for Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 border-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Why Choose SimplifyAI?</h3>
          <p className="text-xl text-muted-foreground">
            Built for everyone who wants to learn and understand better
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Get instant answers without waiting. Our AI responds quickly with clear explanations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Easy to Understand</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                No complex jargon or confusing terms. Everything explained in simple, everyday language.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Safe & Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Your conversations are private and secure. We respect your privacy and protect your data.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Always Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our AI continuously improves to give you better, clearer explanations every day.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <CardContent className="text-center p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to start learning?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are already getting simple, clear explanations for everything they want to know.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3"
              onClick={onGetStarted}
            >
              Start Chatting Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}