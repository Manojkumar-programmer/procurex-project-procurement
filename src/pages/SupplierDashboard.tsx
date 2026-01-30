import { 
  FileText, 
  TrendingUp, 
  Package, 
  Clock, 
  Sparkles,
  ArrowRight,
  Bell,
  Star,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import { Link } from "react-router-dom";

const mockIncomingRFQs = [
  {
    id: "1",
    product: "TMT Steel Bars Fe-500D",
    quantity: "500 Tons",
    buyer: "Metro Rail Corp",
    location: "Mumbai",
    deadline: "2 days left",
    estimatedValue: "₹2.6 Cr",
    matchScore: 95,
    isUrgent: true
  },
  {
    id: "2",
    product: "Cement OPC 53 Grade",
    quantity: "10,000 Bags",
    buyer: "Highway Authority",
    location: "Gujarat",
    deadline: "5 days left",
    estimatedValue: "₹35 L",
    matchScore: 88,
    isUrgent: false
  },
  {
    id: "3",
    product: "MS Plates 10mm",
    quantity: "200 Tons",
    buyer: "Industrial Builders",
    location: "Pune",
    deadline: "3 days left",
    estimatedValue: "₹1.1 Cr",
    matchScore: 92,
    isUrgent: false
  }
];

const SupplierDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="supplier" />
      
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back, Steel India Ltd</h1>
            <p className="text-muted-foreground">You have 8 new RFQs waiting for your response</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cta rounded-full" />
            </Button>
            <Link to="/supplier/catalog/add">
              <Button variant="cta">
                Update Catalog
              </Button>
            </Link>
          </div>
        </div>

        {/* Verification Status Banner */}
        <div className="mb-8 p-4 rounded-xl bg-success/5 border border-success/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">Verified Supplier</h3>
                  <span className="badge-verified">
                    <CheckCircle2 className="w-3 h-3" />
                    GST Verified
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your trust score is <span className="font-medium text-success">94%</span> • 98% on-time delivery • 0 disputes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-warning text-warning" />
              <span className="text-lg font-bold text-foreground">4.8</span>
              <span className="text-sm text-muted-foreground">(156 reviews)</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Incoming RFQs"
            value="8"
            change="This week"
            changeType="neutral"
            icon={FileText}
            iconColor="ai"
          />
          <MetricCard
            title="Quote Win Rate"
            value="68%"
            change="+5%"
            changeType="positive"
            icon={TrendingUp}
            iconColor="success"
          />
          <MetricCard
            title="Active Orders"
            value="12"
            icon={Package}
            iconColor="accent"
          />
          <MetricCard
            title="Avg. Response Time"
            value="2.4 hrs"
            change="-15%"
            changeType="positive"
            icon={Clock}
            iconColor="cta"
          />
        </div>

        {/* AI Suggestions */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-ai/10 to-accent/10 border border-ai/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ai/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ai" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Pricing Suggestion</h3>
                <p className="text-sm text-muted-foreground">
                  Market prices for TMT Steel are currently <span className="font-medium text-success">5% below average</span>. 
                  Consider competitive pricing at ₹52,000-53,000/ton for higher win probability.
                </p>
              </div>
            </div>
            <Button variant="ai" size="sm">
              Update Prices
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Incoming RFQs */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Incoming RFQs</h2>
              <Link to="/supplier/rfqs">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {mockIncomingRFQs.map((rfq) => (
                <div key={rfq.id} className="card-elevated p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{rfq.product}</h4>
                        {rfq.isUrgent && (
                          <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {rfq.quantity} • {rfq.buyer} • {rfq.location}
                      </p>
                    </div>
                    <span className="badge-ai">
                      <Sparkles className="w-3 h-3" />
                      {rfq.matchScore}% Match
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {rfq.deadline}
                      </span>
                      <span className="font-medium text-foreground">{rfq.estimatedValue}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="ai" size="sm">Submit Quote</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Performance Overview</h2>
            
            {/* Trust Score Card */}
            <div className="card-elevated p-6 mb-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Trust Score Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: "On-Time Delivery", value: 98, color: "success" },
                  { label: "Quality Rating", value: 95, color: "accent" },
                  { label: "Response Rate", value: 92, color: "ai" },
                  { label: "Dispute Resolution", value: 100, color: "success" }
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-sm font-medium text-foreground">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-${item.color}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Win Rate Trend */}
            <div className="card-elevated p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Quote Win Rate (Last 6 months)</h3>
              <div className="h-24 flex items-end justify-around gap-2">
                {[45, 52, 58, 62, 65, 68].map((height, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-accent/20 rounded-t-lg transition-all hover:bg-accent/40 relative group"
                    style={{ height: `${height}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {height}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Aug</span>
                <span>Jan</span>
              </div>
              <p className="text-sm text-success font-medium mt-3">
                +23% improvement over 6 months
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupplierDashboard;
