import { Button } from "@/components/ui/button";
import { ArrowRight, Search, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
        <div className="max-w-4xl mx-auto text-center">
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
          <p className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto animate-slide-up animate-delay-200">
            Manage suppliers, RFQs, pricing, and project-based procurement in one intelligent system.
          </p>

          {/* Large Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-300">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search materials, products, or suppliers..."
                className="w-full pl-14 pr-32 py-5 text-lg rounded-2xl bg-white/95 border-0 shadow-xl focus:ring-4 focus:ring-accent/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="cta" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2">
                Search
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animate-delay-300">
            <Link to="/industry/dashboard">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Start as Industry
              </Button>
            </Link>
            <Link to="/supplier/dashboard">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Join as Supplier
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 justify-center mb-12 animate-slide-up animate-delay-400">
            {[
              "Verified Suppliers",
              "Project-Based RFQs",
              "AI Price Optimization"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-primary-foreground/60">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats Cards - Vertical Layout with Lighter Color */}
          <div className="flex flex-col gap-4 max-w-xs mx-auto animate-slide-up animate-delay-500">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-5 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
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
