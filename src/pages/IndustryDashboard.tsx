import { useState } from "react";
import { 
  Sparkles,
  ArrowRight,
  Bell,
  Package,
  FolderKanban,
  RefreshCw,
  CheckCircle2,
  ShoppingCart,
  Trash2,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  price: string;
}

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
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", name: "TMT Steel Bars Fe-500D", quantity: 100, unit: "Tons", price: "₹52,000/ton" },
    { id: "2", name: "Cement OPC 53 Grade", quantity: 500, unit: "Bags", price: "₹350/bag" }
  ]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleReorder = () => {
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="industry" />
      
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-in fade-in zoom-in duration-300 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Reorder successfully placed</h3>
          </div>
        </div>
      )}
      
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Orders & Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* Completed Orders Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Package className="w-5 h-5 text-accent" />
                  Completed Orders
                </h2>
                <Link to="/industry/orders/tracking">
                  <Button variant="ghost" size="sm">
                    Track Orders
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
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
                      <Button variant="outline" size="sm" onClick={handleReorder}>
                        <RefreshCw className="w-4 h-4" />
                        Reorder
                      </Button>
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
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </p>
                      </div>
                      <span className="font-semibold text-foreground">{project.totalProcurement}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {project.ordersCount} orders • Completed {project.completedDate}
                      </div>
                      <Button variant="outline" size="sm" onClick={handleReorder}>
                        <RefreshCw className="w-4 h-4" />
                        Reorder
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Cart */}
          <div>
            <div className="card-elevated p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Cart</h3>
                {cart.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {cart.length}
                  </span>
                )}
              </div>

              {cart.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.quantity} {item.unit} • {item.price}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Button variant="cta" className="w-full">
                    Proceed to Order
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryDashboard;
