import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ai/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Join hundreds of industries and suppliers already experiencing the future of B2B procurement
          </p>
        </div>

        {/* Two CTA Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Industries */}
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-cta/20 flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-cta" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">For Industries</h3>
            <p className="text-muted-foreground mb-6">
              Manage all your project procurement in one place with AI-powered supplier matching
            </p>
            <ul className="text-left space-y-3 mb-8">
              {["Create unlimited projects", "AI supplier shortlisting", "Compare quotes instantly", "Track all deliveries"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-success" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/industry/dashboard">
              <Button variant="cta" size="lg" className="w-full">
                Start as Industry
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* For Suppliers */}
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <Factory className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">For Suppliers</h3>
            <p className="text-muted-foreground mb-6">
              Get matched with verified buyers and grow your industrial supply business
            </p>
            <ul className="text-left space-y-3 mb-8">
              {["Get verified badge", "Receive qualified RFQs", "AI pricing suggestions", "Build trust score"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/supplier/dashboard">
              <Button variant="ai" size="lg" className="w-full">
                Join as Supplier
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-primary-foreground/50 text-sm mb-4">Trusted by leading companies across India</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {["L&T", "Tata Projects", "Shapoorji", "Godrej", "Jindal"].map((company, i) => (
              <div key={i} className="text-primary-foreground/70 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
