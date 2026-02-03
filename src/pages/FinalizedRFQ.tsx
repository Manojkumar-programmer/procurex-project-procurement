import { useState } from "react";
import { 
  ArrowLeft, 
  Sparkles, 
  Download,
  CheckCircle2,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import NavigationArrows from "@/components/navigation/NavigationArrows";

interface Supplier {
  id: string;
  name: string;
  location: string;
  priceRange: string;
  deliveryDays: string;
  isRecommended?: boolean;
  recommendationReason?: string;
}

const shortlistedSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "Tata Steel Distributors",
    location: "Mumbai, Maharashtra",
    priceRange: "₹52,000 - ₹54,000/ton",
    deliveryDays: "5-7 days",
    isRecommended: true,
    recommendationReason: "Best value based on price, delivery & availability"
  },
  {
    id: "s2",
    name: "JSW Steel India",
    location: "Pune, Maharashtra",
    priceRange: "₹51,000 - ₹53,000/ton",
    deliveryDays: "7-10 days"
  },
  {
    id: "s3",
    name: "SAIL Authorized Dealer",
    location: "Nagpur, Maharashtra",
    priceRange: "₹50,500 - ₹52,500/ton",
    deliveryDays: "10-12 days"
  },
  {
    id: "s4",
    name: "Jindal Steel Supplies",
    location: "Ahmedabad, Gujarat",
    priceRange: "₹51,500 - ₹53,500/ton",
    deliveryDays: "8-10 days"
  }
];

const FinalizedRFQ = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const recommendedSupplier = shortlistedSuppliers.find(s => s.isRecommended);
  const otherSuppliers = shortlistedSuppliers.filter(s => !s.isRecommended);

  const handlePlaceOrder = (supplierName: string) => {
    setShowOrderPopup(true);
    setTimeout(() => {
      setShowOrderPopup(false);
      navigate("/industry/orders/tracking");
    }, 2000);
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Finalized RFQ document is being downloaded...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="industry" />
      
      {/* Order Success Popup */}
      {showOrderPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-in fade-in zoom-in duration-300 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Order placed successfully</h3>
          </div>
        </div>
      )}
      
      <main className="p-8 pl-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/industry/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Finalized RFQ</h1>
              <p className="text-muted-foreground">RFQ sent to {shortlistedSuppliers.length} suppliers</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleDownload}>
            <Download className="w-4 h-4" />
            Download Finalized RFQ
          </Button>
        </div>

        <div className="max-w-4xl">
          {/* AI Recommendation Section */}
          {recommendedSupplier && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-ai" />
                <h2 className="text-lg font-semibold text-foreground">AI Recommended Supplier</h2>
              </div>
              <div className="card-elevated p-6 border-2 border-ai/30 bg-ai/5">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ai/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-ai" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-foreground text-lg">{recommendedSupplier.name}</h3>
                        <span className="badge-ai">
                          <Sparkles className="w-3 h-3" />
                          AI Recommended
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{recommendedSupplier.location}</p>
                      <p className="text-sm text-ai font-medium">{recommendedSupplier.recommendationReason}</p>
                      <div className="flex items-center gap-6 mt-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Est. Price: </span>
                          <span className="font-medium text-foreground">{recommendedSupplier.priceRange}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Delivery: </span>
                          <span className="font-medium text-foreground">{recommendedSupplier.deliveryDays}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="cta" onClick={() => handlePlaceOrder(recommendedSupplier.name)}>
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Other Shortlisted Suppliers */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Other Shortlisted Suppliers</h2>
            <div className="space-y-4">
              {otherSuppliers.map((supplier) => (
                <div key={supplier.id} className="card-elevated p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{supplier.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{supplier.location}</p>
                        <div className="flex items-center gap-6 text-sm">
                          <div>
                            <span className="text-muted-foreground">Est. Price: </span>
                            <span className="font-medium text-foreground">{supplier.priceRange}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Delivery: </span>
                            <span className="font-medium text-foreground">{supplier.deliveryDays}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" onClick={() => handlePlaceOrder(supplier.name)}>
                      Place Order
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <NavigationArrows showBack={true} backPath="/industry/dashboard" />
    </div>
  );
};

export default FinalizedRFQ;
