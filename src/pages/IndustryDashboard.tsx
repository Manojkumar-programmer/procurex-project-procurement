import { 
  FolderKanban, 
  FileText, 
  TrendingDown, 
  Clock, 
  Sparkles,
  ArrowRight,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import ProjectCard from "@/components/dashboard/ProjectCard";
import RFQStatusCard from "@/components/dashboard/RFQStatusCard";
import { Link } from "react-router-dom";

const mockProjects = [
  {
    id: "1",
    name: "Metro Rail Phase II",
    location: "Mumbai, Maharashtra",
    status: "active" as const,
    progress: 75,
    rfqCount: 12,
    budget: "45Cr",
    deadline: "Mar 2025"
  },
  {
    id: "2",
    name: "Highway Expansion NH-48",
    location: "Gujarat",
    status: "active" as const,
    progress: 45,
    rfqCount: 8,
    budget: "28Cr",
    deadline: "Jun 2025"
  },
  {
    id: "3",
    name: "Industrial Park Setup",
    location: "Pune, Maharashtra",
    status: "on-hold" as const,
    progress: 20,
    rfqCount: 3,
    budget: "15Cr",
    deadline: "Dec 2025"
  }
];

const mockRFQs = [
  {
    id: "rfq-1",
    title: "TMT Steel Bars - 500 Ton",
    project: "Metro Rail Phase II",
    itemCount: 4,
    status: "quoted" as const,
    quotesReceived: 4,
    totalQuotesExpected: 5,
    deadline: "Due in 2 days",
    estimatedValue: "₹2.5 Cr"
  },
  {
    id: "rfq-2",
    title: "Cement (OPC 53 Grade)",
    project: "Highway Expansion",
    itemCount: 2,
    status: "sent" as const,
    quotesReceived: 2,
    totalQuotesExpected: 5,
    deadline: "Due in 5 days",
    estimatedValue: "₹85 L"
  },
  {
    id: "rfq-3",
    title: "Electrical Cables & Wiring",
    project: "Industrial Park",
    itemCount: 8,
    status: "negotiation" as const,
    deadline: "Due in 1 day",
    estimatedValue: "₹45 L"
  }
];

const IndustryDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="industry" />
      
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back, Rajesh</h1>
            <p className="text-muted-foreground">Here's what's happening with your procurement today</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cta rounded-full" />
            </Button>
            <Link to="/industry/rfq/create">
              <Button variant="cta">
                <Sparkles className="w-4 h-4" />
                Create New RFQ
              </Button>
            </Link>
          </div>
        </div>

        {/* AI Insights Banner */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-ai/10 to-accent/10 border border-ai/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ai/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ai" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Insight</h3>
                <p className="text-sm text-muted-foreground">
                  3 RFQs have received quotes. Steel prices dropped 5% this week - good time to finalize orders.
                </p>
              </div>
            </div>
            <Button variant="ai" size="sm">
              View Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Projects"
            value="3"
            icon={FolderKanban}
            iconColor="accent"
          />
          <MetricCard
            title="Open RFQs"
            value="8"
            change="+2 this week"
            changeType="neutral"
            icon={FileText}
            iconColor="ai"
          />
          <MetricCard
            title="Cost Savings"
            value="₹45L"
            change="+12%"
            changeType="positive"
            icon={TrendingDown}
            iconColor="success"
          />
          <MetricCard
            title="Avg. Response Time"
            value="4.2 hrs"
            change="-30%"
            changeType="positive"
            icon={Clock}
            iconColor="cta"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Active Projects</h2>
              <Link to="/industry/projects">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {mockProjects.slice(0, 2).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>

          {/* RFQ Status Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Recent RFQs</h2>
              <Link to="/industry/rfq">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {mockRFQs.map((rfq) => (
                <RFQStatusCard key={rfq.id} {...rfq} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryDashboard;
