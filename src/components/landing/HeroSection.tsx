import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { value: "₹500Cr+", label: "Procurement Managed" },
    { value: "2,000+", label: "Verified Suppliers" },
    { value: "40%", label: "Cost Savings" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-ai/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">AI-Powered Procurement Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up animate-delay-100">
              One Platform.{" "}
              <span className="text-gradient-ai">All Industrial</span>{" "}
              Procurement.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up animate-delay-200">
              Manage suppliers, RFQs, pricing, verification, and project-based procurement in one intelligent system. Built for India's project-based industries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up animate-delay-300">
              <Link to="/industry/dashboard">
                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Start as Industry
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/supplier/dashboard">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Join as Supplier
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-slide-up animate-delay-400">
              {[
                "GST Verified Suppliers",
                "Project-Based RFQs",
                "AI Price Optimization"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-primary-foreground/60">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats/Visual */}
          <div className="relative animate-slide-up animate-delay-300">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${(i + 4) * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-primary-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Preview */}
            <div className="mt-6 glass rounded-2xl p-1 shadow-strong">
              <div className="bg-sidebar rounded-xl p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                  <span className="text-xs text-sidebar-foreground/50 ml-2">Industry Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-sidebar-accent rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-sidebar-foreground">Metro Rail Phase II</div>
                        <div className="text-xs text-sidebar-foreground/50">3 Active RFQs</div>
                      </div>
                    </div>
                    <span className="badge-ai text-xs">AI Matched</span>
                  </div>
                  <div className="h-2 bg-sidebar-accent rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-ai rounded-full" />
                  </div>
                  <div className="text-xs text-sidebar-foreground/50 text-right">75% Procurement Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
