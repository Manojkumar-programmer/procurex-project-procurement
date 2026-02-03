import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface NavigationArrowsProps {
  showBack?: boolean;
  showForward?: boolean;
  backPath?: string;
  forwardPath?: string;
  onBack?: () => void;
  onForward?: () => void;
}

const NavigationArrows = ({
  showBack = true,
  showForward = false,
  backPath,
  forwardPath,
  onBack,
  onForward,
}: NavigationArrowsProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  const handleForward = () => {
    if (onForward) {
      onForward();
    } else if (forwardPath) {
      navigate(forwardPath);
    } else {
      navigate(1);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
      {showBack && (
        <Button
          variant="outline"
          size="icon"
          onClick={handleBack}
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg border-border/50 hover:bg-accent/10 hover:border-accent/50 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      )}
      {showForward && (
        <Button
          variant="outline"
          size="icon"
          onClick={handleForward}
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg border-border/50 hover:bg-accent/10 hover:border-accent/50 transition-all"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default NavigationArrows;
