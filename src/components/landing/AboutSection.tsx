import { Zap, Shield, Clock, Users, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const steps = [
    {
      step: "1",
      title: "Select Project",
      description: "Choose or create a project and add your requirements"
    },
    {
      step: "2", 
      title: "AI Shortlists Suppliers",
      description: "Our AI matches you with 3-5 verified suppliers in 30 seconds"
    },
    {
      step: "3",
      title: "Choose Your Path",
      description: "Direct order based on known prices, or request final quotes"
    },
    {
      step: "4",
      title: "Place Order",
      description: "Select the best supplier and complete your procurement"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Procurex Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A centralized, AI-assisted procurement ecosystem designed for project-based purchasing
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="card-elevated p-6 h-full">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Order Paths */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Two Flexible Order Paths
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Order */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cta" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Direct Order Path</h4>
                  <p className="text-sm text-muted-foreground">For known price ranges</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Place order based on established price range",
                  "Supplier sends final bill",
                  "Delivery completed"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Final Quote */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-ai/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-ai" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Final Quote Path</h4>
                  <p className="text-sm text-muted-foreground">For competitive pricing</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Request final quotes from 2-3 shortlisted suppliers",
                  "Suppliers submit quotes within defined time",
                  "AI highlights best-value supplier",
                  "Place order with chosen supplier"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
