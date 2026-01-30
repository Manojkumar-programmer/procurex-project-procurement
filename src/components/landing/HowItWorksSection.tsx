import { Upload, Sparkles, GitCompare, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Create Project & Add Requirements",
    description: "Upload your BOQ (Excel/PDF) or manually add products with specs, quantities, and delivery dates.",
    color: "primary"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Shortlists Verified Suppliers",
    description: "Within 30 seconds, AI matches you with 3-5 pre-verified suppliers based on your requirements.",
    color: "ai"
  },
  {
    number: "03",
    icon: GitCompare,
    title: "Compare Quotes & Negotiate",
    description: "View side-by-side comparisons with AI-highlighted best value. Request final quotes if needed.",
    color: "accent"
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "Place Order with Confidence",
    description: "Select your preferred supplier and place order with full transparency on pricing and terms.",
    color: "cta"
  },
  {
    number: "05",
    icon: Truck,
    title: "Track & Complete Delivery",
    description: "Real-time delivery tracking with quality verification and payment milestones.",
    color: "success"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            End-to-End Procurement in 5 Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From requirement to delivery, experience a seamless procurement journey
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-${step.color}/10 flex items-center justify-center`}>
                      <step.icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two Paths Explanation */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-success" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Direct Order Path</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              When you know the approximate price range and want quick fulfillment:
            </p>
            <ol className="space-y-2">
              {["Place order based on known price range", "Supplier sends final bill", "Delivery completed"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-success/10 text-success text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ai/10 flex items-center justify-center">
                <GitCompare className="w-5 h-5 text-ai" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Final Quote Path</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              When you need precise quotes and want to negotiate:
            </p>
            <ol className="space-y-2">
              {["Request final quotes from shortlisted suppliers", "Suppliers submit quotes within deadline", "AI highlights best-value supplier", "Place order with selected supplier"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-ai/10 text-ai text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
