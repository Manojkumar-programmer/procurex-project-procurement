import { Clock, CheckCircle2, AlertCircle, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface RFQStatusCardProps {
  id: string;
  title: string;
  project: string;
  itemCount: number;
  status: "draft" | "sent" | "quoted" | "negotiation" | "finalized" | "completed";
  quotesReceived?: number;
  totalQuotesExpected?: number;
  deadline: string;
  estimatedValue: string;
}

const RFQStatusCard = ({
  id,
  title,
  project,
  itemCount,
  status,
  quotesReceived = 0,
  totalQuotesExpected = 5,
  deadline,
  estimatedValue
}: RFQStatusCardProps) => {
  const statusConfig = {
    draft: { label: "Draft", icon: FileText, color: "bg-muted text-muted-foreground" },
    sent: { label: "Sent", icon: Clock, color: "bg-ai/10 text-ai" },
    quoted: { label: "Quotes Received", icon: CheckCircle2, color: "bg-accent/10 text-accent" },
    negotiation: { label: "In Negotiation", icon: AlertCircle, color: "bg-warning/10 text-warning" },
    finalized: { label: "Finalized", icon: CheckCircle2, color: "bg-success/10 text-success" },
    completed: { label: "Completed", icon: CheckCircle2, color: "bg-success/10 text-success" }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div className="card-elevated p-5 hover:border-accent/30 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{project} • {itemCount} items</p>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}>
          <StatusIcon className="w-3.5 h-3.5" />
          {config.label}
        </span>
      </div>

      {/* Quote Progress */}
      {(status === "sent" || status === "quoted") && (
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-muted-foreground">Quotes received</span>
            <span className="text-xs font-medium text-foreground">
              {quotesReceived}/{totalQuotesExpected}
            </span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${(quotesReceived / totalQuotesExpected) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Meta Info */}
      <div className="flex items-center justify-between text-sm mb-4">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{deadline}</span>
        </div>
        <span className="font-medium text-foreground">{estimatedValue}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Link to={`/industry/rfq/${id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        </Link>
        {status === "quoted" && (
          <Link to={`/industry/rfq/${id}/compare`}>
            <Button variant="ai" size="sm">
              Compare
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RFQStatusCard;
