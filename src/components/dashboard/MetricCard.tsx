import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral",
  icon: Icon,
  iconColor = "accent"
}: MetricCardProps) => {
  return (
    <div className="card-metric group hover:shadow-medium transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
          iconColor === "accent" && "bg-accent/10",
          iconColor === "ai" && "bg-ai/10",
          iconColor === "cta" && "bg-cta/10",
          iconColor === "success" && "bg-success/10",
          iconColor === "warning" && "bg-warning/10"
        )}>
          <Icon className={cn(
            "w-6 h-6",
            iconColor === "accent" && "text-accent",
            iconColor === "ai" && "text-ai",
            iconColor === "cta" && "text-cta",
            iconColor === "success" && "text-success",
            iconColor === "warning" && "text-warning"
          )} />
        </div>
        {change && (
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            changeType === "positive" && "bg-success/10 text-success",
            changeType === "negative" && "bg-destructive/10 text-destructive",
            changeType === "neutral" && "bg-muted text-muted-foreground"
          )}>
            {change}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
};

export default MetricCard;
