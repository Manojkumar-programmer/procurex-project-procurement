import { Sparkles, Zap, BarChart3, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered RFQ Matching",
    description: "Get 3-5 verified suppliers shortlisted in 30 seconds based on your requirements.",
    color: "ai"
  },
  {
    icon: Zap,
    title: "Project-Based Procurement",
    description: "Organize all materials by project with BOQ upload and tracking.",
    color: "cta"
  },
  {
    icon: BarChart3,
    title: "Smart Price Comparison",
    description: "Compare quotes side-by-side with AI-highlighted best value options.",
    color: "accent"
  },
  {
    icon: RefreshCw,
    title: "One-Click Reorders",
    description: "Reorder materials from past projects with updated pricing instantly.",
    color: "success"
  }
];

const comparisons = [
  { feature: "Project-Based Tracking", procurex: true, others: false },
  { feature: "AI-Powered Matching", procurex: true, others: false },
  { feature: "Bulk RFQ Management", procurex: true, others: false },
  { feature: "Performance Analytics", procurex: true, others: false },
  { feature: "Delivery Tracking", procurex: true, others: false },
];

const SolutionSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Procurex is Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A centralized, AI-assisted procurement ecosystem designed for project-based purchasing
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="card-elevated p-8 bg-gradient-ai text-ai-foreground text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Procurement?</h3>
            <p className="text-ai-foreground/80 mb-6">
              Join 500+ companies already saving time and money.
            </p>
            <Link to="/industry/dashboard">
              <Button variant="hero" className="bg-white text-primary hover:bg-white/90">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Procurex vs Traditional Methods
            </h3>
            <p className="text-muted-foreground">
              See why leading industries are switching to Procurex
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              <div className="text-sm font-medium text-muted-foreground">Feature</div>
              <div className="text-sm font-semibold text-accent">Procurex</div>
              <div className="text-sm font-medium text-muted-foreground">Others</div>
            </div>
            
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="text-sm font-medium text-foreground">{item.feature}</div>
                  <div className="flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">—</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
