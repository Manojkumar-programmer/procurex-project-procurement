import { 
  ArrowLeft, 
  Package, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Building2,
  MapPin,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";
import NavigationArrows from "@/components/navigation/NavigationArrows";

const trackingSteps = [
  { id: 1, label: "Order Placed", status: "completed", date: "Jan 20, 2026 • 10:30 AM" },
  { id: 2, label: "Supplier Confirmed", status: "completed", date: "Jan 20, 2026 • 2:15 PM" },
  { id: 3, label: "Processing", status: "completed", date: "Jan 21, 2026 • 9:00 AM" },
  { id: 4, label: "Dispatched", status: "current", date: "Jan 22, 2026 • 11:45 AM" },
  { id: 5, label: "Delivered", status: "pending", date: "Expected: Jan 25, 2026" }
];

const mockOrders = [
  {
    id: "ORD-2026-001",
    product: "TMT Steel Bars Fe-500D",
    quantity: "500 Tons",
    supplier: "Tata Steel Distributors",
    currentStatus: "Dispatched",
    expectedDelivery: "Jan 25, 2026",
    value: "₹2.6 Cr",
    project: "Metro Rail Phase II"
  },
  {
    id: "ORD-2026-002",
    product: "Cement OPC 53 Grade",
    quantity: "10,000 Bags",
    supplier: "UltraTech Cement",
    currentStatus: "Processing",
    expectedDelivery: "Jan 28, 2026",
    value: "₹35 L",
    project: "Highway Expansion"
  }
];

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="industry" />
      
      <main className="p-8 pl-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/industry/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Order Tracking</h1>
            <p className="text-muted-foreground">Track your active orders in real-time</p>
          </div>
        </div>

        {/* Orders List */}
        <div className="grid lg:grid-cols-2 gap-8">
          {mockOrders.map((order) => (
            <div key={order.id} className="card-elevated p-6">
              {/* Order Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-muted-foreground">{order.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      order.currentStatus === "Dispatched" 
                        ? "bg-ai/10 text-ai" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      {order.currentStatus}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{order.product}</h3>
                  <p className="text-sm text-muted-foreground">{order.quantity} • {order.supplier}</p>
                </div>
                <span className="font-semibold text-foreground">{order.value}</span>
              </div>

              {/* Progress Tracker */}
              <div className="relative mb-6">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                
                <div className="space-y-4">
                  {trackingSteps.map((step, index) => (
                    <div key={step.id} className="flex items-start gap-4 relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                        step.status === "completed" 
                          ? "bg-success text-success-foreground" 
                          : step.status === "current"
                            ? "bg-ai text-white animate-pulse"
                            : "bg-muted text-muted-foreground"
                      }`}>
                        {step.status === "completed" ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : step.status === "current" ? (
                          <Truck className="w-4 h-4" />
                        ) : (
                          <Clock className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className={`font-medium ${
                          step.status === "pending" ? "text-muted-foreground" : "text-foreground"
                        }`}>
                          {step.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{order.project}</p>
                    <p className="text-xs text-muted-foreground">Expected: {order.expectedDelivery}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <NavigationArrows showBack={true} backPath="/industry/dashboard" />
    </div>
  );
};

export default OrderTracking;
