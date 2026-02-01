import { Upload, Sparkles, Send, Truck, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Add Requirements",
    description: "Manually add products with specs, quantities, and delivery dates. Upload BOQ optionally.",
    color: "primary"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Shortlists Suppliers",
    description: "Within 30 seconds, AI matches you with 3-5 pre-verified suppliers based on your requirements.",
    color: "ai"
  },
  {
    number: "03",
    icon: Send,
    title: "Send RFQ",
    description: "Send your request for quotation to selected suppliers and receive competitive quotes.",
    color: "accent"
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Compare & Select",
    description: "Compare supplier quotes side-by-side and select the best match for your project.",
    color: "cta"
  },
  {
    number: "05",
    icon: Truck,
    title: "Track Delivery",
    description: "Real-time delivery tracking from dispatch to final delivery at your site.",
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
            Simple RFQ-Based Procurement
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
