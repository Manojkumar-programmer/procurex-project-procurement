import { useState } from "react";
import { 
  ArrowLeft, 
  RefreshCw, 
  Plus, 
  Minus,
  ShoppingCart,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ReorderItem {
  id: string;
  product: string;
  lastOrdered: string;
  lastQuantity: string;
  unit: string;
  lastPrice: string;
  supplier: string;
  newQuantity: number;
  selected: boolean;
}

const mockReorderItems: ReorderItem[] = [
  {
    id: "1",
    product: "TMT Steel Bars Fe-500D",
    lastOrdered: "Jan 15, 2026",
    lastQuantity: "500",
    unit: "Tons",
    lastPrice: "₹52,000/ton",
    supplier: "Tata Steel Distributors",
    newQuantity: 500,
    selected: false
  },
  {
    id: "2",
    product: "Cement OPC 53 Grade",
    lastOrdered: "Jan 10, 2026",
    lastQuantity: "10,000",
    unit: "Bags",
    lastPrice: "₹350/bag",
    supplier: "UltraTech Cement",
    newQuantity: 10000,
    selected: false
  },
  {
    id: "3",
    product: "Electrical Cables 4mm",
    lastOrdered: "Dec 28, 2025",
    lastQuantity: "5,000",
    unit: "meters",
    lastPrice: "₹85/meter",
    supplier: "Havells India",
    newQuantity: 5000,
    selected: false
  },
  {
    id: "4",
    product: "MS Pipes 2 inch",
    lastOrdered: "Dec 20, 2025",
    lastQuantity: "200",
    unit: "pieces",
    lastPrice: "₹1,200/piece",
    supplier: "Jindal Steel",
    newQuantity: 200,
    selected: false
  }
];

const ReorderPage = () => {
  const { toast } = useToast();
  const [items, setItems] = useState(mockReorderItems);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const toggleSelection = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, newQuantity: Math.max(1, item.newQuantity + delta) } : item
    ));
  };

  const setQuantity = (id: string, value: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, newQuantity: Math.max(1, value) } : item
    ));
  };

  const selectedItems = items.filter(item => item.selected);

  const handlePlaceOrder = () => {
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
        <div className="flex items-center gap-4 mb-8">
          <Link to="/industry/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reorder Products</h1>
            <p className="text-muted-foreground">Select products from your previous orders to reorder</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleSelection(item.id)}
                className={`card-elevated p-5 cursor-pointer transition-all ${
                  item.selected 
                    ? "border-accent ring-2 ring-accent/20" 
                    : "hover:border-accent/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    item.selected 
                      ? "bg-accent border-accent" 
                      : "border-muted"
                  }`}>
                    {item.selected && (
                      <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{item.product}</h4>
                        <p className="text-sm text-muted-foreground">
                          Last ordered: {item.lastQuantity} {item.unit} on {item.lastOrdered}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supplier: {item.supplier}
                        </p>
                      </div>
                      <span className="font-medium text-foreground">{item.lastPrice}</span>
                    </div>

                    {item.selected && (
                      <div 
                        className="flex items-center gap-4 pt-3 border-t border-border"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-sm font-medium text-foreground">New Quantity:</span>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -100)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.newQuantity}
                            onChange={(e) => setQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-24 h-8 text-center"
                          />
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 100)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground">{item.unit}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-elevated p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Order Summary</h3>
              </div>

              {selectedItems.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Select products to add to your order
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-6">
                    {selectedItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.product}</p>
                          <p className="text-xs text-muted-foreground">{item.newQuantity} {item.unit}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Items selected</span>
                      <span className="font-semibold text-foreground">{selectedItems.length}</span>
                    </div>
                    <Button 
                      variant="cta" 
                      className="w-full"
                      onClick={handlePlaceOrder}
                    >
                      <RefreshCw className="w-4 h-4" />
                      Place Reorder
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReorderPage;
