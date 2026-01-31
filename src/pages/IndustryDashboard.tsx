import { 
  Sparkles,
  ArrowRight,
  Bell,
  Package,
  FolderKanban,
  RefreshCw,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";

const mockCompletedOrders = [
  {
    id: "1",
    product: "TMT Steel Bars Fe-500D",
    quantity: "500 Tons",
    supplier: "Tata Steel Distributors",
    completedDate: "Jan 15, 2026",
    totalValue: "₹2.6 Cr",
    project: "Metro Rail Phase II"
  },
  {
    id: "2",
    product: "Cement OPC 53 Grade",
    quantity: "10,000 Bags",
    supplier: "UltraTech Cement",
    completedDate: "Jan 10, 2026",
    totalValue: "₹35 L",
    project: "Highway Expansion"
  },
  {
    id: "3",
    product: "Electrical Cables",
    quantity: "5,000 meters",
    supplier: "Havells India",
    completedDate: "Dec 28, 2025",
    totalValue: "₹45 L",
    project: "Industrial Park"
  }
];

const mockCompletedProjects = [
  {
    id: "1",
    name: "Industrial Park Phase I",
    location: "Pune, Maharashtra",
    completedDate: "Dec 2025",
    totalProcurement: "₹12 Cr",
    ordersCount: 45
  },
  {
    id: "2",
    name: "Warehouse Complex",
    location: "Nagpur, Maharashtra",
    completedDate: "Nov 2025",
    totalProcurement: "₹8 Cr",
    ordersCount: 32
  }
];

const IndustryDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="industry" />
      
      <main className="p-8 pl-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back, Rajesh</h1>
            <p className="text-muted-foreground">Here's your procurement overview</p>
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Completed Orders Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Package className="w-5 h-5 text-accent" />
                Completed Orders
              </h2>
            </div>
            <div className="space-y-4">
              {mockCompletedOrders.map((order) => (
                <div key={order.id} className="card-elevated p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{order.product}</h4>
                        <span className="badge-verified">
                          <CheckCircle2 className="w-3 h-3" />
                          Completed
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.quantity} • {order.supplier}
                      </p>
                    </div>
                    <span className="font-semibold text-foreground">{order.totalValue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {order.project} • {order.completedDate}
                    </div>
                    <Link to="/industry/reorder">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4" />
                        Reorder
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Projects Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FolderKanban className="w-5 h-5 text-ai" />
                Completed Projects
              </h2>
            </div>
            <div className="space-y-4">
              {mockCompletedProjects.map((project) => (
                <div key={project.id} className="card-elevated p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{project.name}</h4>
                        <span className="badge-verified">
                          <CheckCircle2 className="w-3 h-3" />
                          Completed
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <span className="font-semibold text-foreground">{project.totalProcurement}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {project.ordersCount} orders • Completed {project.completedDate}
                    </div>
                    <Link to="/industry/reorder">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4" />
                        Reorder
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reorder CTA */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-ai/10 to-accent/10 border border-ai/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-ai/20 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-ai" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Quick Reorder</h3>
                <p className="text-sm text-muted-foreground">
                  Reorder materials from your completed orders with updated pricing
                </p>
              </div>
            </div>
            <Link to="/industry/reorder">
              <Button variant="ai">
                View Reorder Options
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryDashboard;
