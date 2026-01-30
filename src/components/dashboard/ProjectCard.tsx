import { MoreVertical, MapPin, Calendar, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  name: string;
  location: string;
  status: "active" | "completed" | "on-hold";
  progress: number;
  rfqCount: number;
  budget: string;
  deadline: string;
}

const ProjectCard = ({
  id,
  name,
  location,
  status,
  progress,
  rfqCount,
  budget,
  deadline
}: ProjectCardProps) => {
  const statusColors = {
    active: "bg-success/10 text-success",
    completed: "bg-ai/10 text-ai",
    "on-hold": "bg-warning/10 text-warning"
  };

  const statusLabels = {
    active: "Active",
    completed: "Completed",
    "on-hold": "On Hold"
  };

  return (
    <div className="card-elevated p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-foreground">{name}</h3>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[status]}`}>
              {statusLabels[status]}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Procurement Progress</span>
          <span className="text-sm font-medium text-foreground">{progress}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Package className="w-4 h-4 mx-auto text-muted-foreground mb-1" />
          <p className="text-sm font-semibold text-foreground">{rfqCount}</p>
          <p className="text-xs text-muted-foreground">RFQs</p>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Calendar className="w-4 h-4 mx-auto text-muted-foreground mb-1" />
          <p className="text-sm font-semibold text-foreground">{deadline}</p>
          <p className="text-xs text-muted-foreground">Deadline</p>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <span className="text-muted-foreground text-xs">₹</span>
          <p className="text-sm font-semibold text-foreground">{budget}</p>
          <p className="text-xs text-muted-foreground">Budget</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Link to={`/industry/projects/${id}`} className="flex-1">
          <Button variant="outline" className="w-full" size="sm">
            View Details
          </Button>
        </Link>
        <Link to="/industry/rfq/create" className="flex-1">
          <Button variant="ai" className="w-full" size="sm">
            Create RFQ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
