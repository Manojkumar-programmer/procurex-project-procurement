import { useState, useEffect } from "react";
import { Boxes } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center animate-fade-in">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-ai flex items-center justify-center">
          <Boxes className="w-10 h-10 text-ai-foreground" />
        </div>
        <h1 className="text-5xl font-bold text-primary-foreground tracking-tight">
          PROCUREX
        </h1>
        <p className="text-primary-foreground/60 mt-3 text-lg">
          Industrial Procurement Platform
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
