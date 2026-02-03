import { 
  FileText, 
  Package, 
  Clock, 
  Sparkles,
  ArrowRight,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import NavigationArrows from "@/components/navigation/NavigationArrows";

interface Product {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  stock: string;
  unit: string;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "TMT Steel Bars Fe-500D",
    category: "Steel",
    priceRange: "₹52,000 - ₹55,000/ton",
    stock: "500 Tons",
    unit: "Tons",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop"
  },
  {
    id: "2",
    name: "MS Plates 10mm",
    category: "Steel",
    priceRange: "₹54,000 - ₹57,000/ton",
    stock: "200 Tons",
    unit: "Tons",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=200&h=200&fit=crop"
  },
  {
    id: "3",
    name: "Steel Angles 50x50mm",
    category: "Steel",
    priceRange: "₹48,000 - ₹51,000/ton",
    stock: "150 Tons",
    unit: "Tons",
    image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=200&h=200&fit=crop"
  },
  {
    id: "4",
    name: "HR Coils 2mm",
    category: "Steel",
    priceRange: "₹56,000 - ₹59,000/ton",
    stock: "300 Tons",
    unit: "Tons",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=200&h=200&fit=crop"
  }
];

const mockIncomingRFQs = [
  {
    id: "1",
    product: "TMT Steel Bars Fe-500D",
    quantity: "500 Tons",
    buyer: "Metro Rail Corp",
    location: "Mumbai",
    deadline: "2 days left",
    estimatedValue: "₹2.6 Cr",
    matchScore: 95
  },
  {
    id: "2",
    product: "MS Plates 10mm",
    quantity: "200 Tons",
    buyer: "Industrial Builders",
    location: "Pune",
    deadline: "3 days left",
    estimatedValue: "₹1.1 Cr",
    matchScore: 92
  }
];

const SupplierDashboard = () => {
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "New RFQ received from Metro Rail Corp",
      duration: 1000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="supplier" />
      
      <main className="p-8 pl-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back, Steel India Ltd</h1>
            <p className="text-muted-foreground">Manage your products and respond to RFQs</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={handleNotificationClick}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cta rounded-full" />
            </Button>
            <Link to="/supplier/catalog">
              <Button variant="cta">
                Update Catalog
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content - Reordered: Incoming RFQs first, then Products */}
        <div>
          {/* Incoming RFQs - FIRST */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-ai" />
                Incoming RFQs
              </h2>
              <Link to="/supplier/rfqs">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {mockIncomingRFQs.map((rfq) => (
                <div key={rfq.id} className="card-elevated p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{rfq.product}</h4>
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

          {/* Products List - SECOND (Read-only, no add/edit/delete) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Package className="w-5 h-5 text-accent" />
                Your Products
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {mockProducts.map((product) => (
                <div key={product.id} className="card-elevated p-5">
                  <div className="flex items-start gap-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-border"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{product.name}</h4>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                        </div>
                        <span className="font-medium text-foreground text-sm">{product.priceRange}</span>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                        In Stock: {product.stock}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <NavigationArrows showBack={true} backPath="/" />
    </div>
  );
};

export default SupplierDashboard;
