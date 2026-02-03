import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProductCarousel from "@/components/landing/ProductCarousel";
import SuppliersSection from "@/components/landing/SuppliersSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import SplashScreen from "@/components/landing/SplashScreen";
import NavigationArrows from "@/components/navigation/NavigationArrows";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Navbar />
      <HeroSection />
      <ProductCarousel />
      <SuppliersSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AboutSection />
      <CTASection />
      <Footer />
      <NavigationArrows showBack={false} showForward={true} forwardPath="/industry/dashboard" />
    </div>
  );
};

export default Index;
