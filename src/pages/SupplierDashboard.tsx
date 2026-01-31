import { useState } from "react";
import { 
  FileText, 
  Package, 
  Clock, 
  Sparkles,
  ArrowRight,
  Bell,
  Edit,
  Trash2,
  ShoppingCart,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  stock: string;
  unit: string;
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "TMT Steel Bars Fe-500D",
    category: "Steel",
    priceRange: "₹52,000 - ₹55,000/ton",
    stock: "500 Tons",
    unit: "Tons"
  },
  {
    id: "2",
    name: "MS Plates 10mm",
    category: "Steel",
    priceRange: "₹54,000 - ₹57,000/ton",
    stock: "200 Tons",
    unit: "Tons"
  },
  {
    id: "3",
    name: "Steel Angles 50x50mm",
    category: "Steel",
    priceRange: "₹48,000 - ₹51,000/ton",
    stock: "150 Tons",
    unit: "Tons"
  },
  {
    id: "4",
    name: "HR Coils 2mm",
    category: "Steel",
    priceRange: "₹56,000 - ₹59,000/ton",
    stock: "300 Tons",
    unit: "Tons"
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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState(mockProducts);

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { id: product.id, name: product.name, quantity: 1, unit: product.unit }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
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
            <Button variant="ghost" size="icon" className="relative">
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Package className="w-5 h-5 text-accent" />
                Your Products
              </h2>
              <Link to="/supplier/catalog">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4" />
                  Add Product
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="card-elevated p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <span className="font-medium text-foreground">{product.priceRange}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                        In Stock: {product.stock}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => addToCart(product)}>
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </Button>
                      <Link to="/supplier/catalog">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-destructive"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Incoming RFQs */}
            <div className="mt-8">
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
              <div className="space-y-4">
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
          </div>

          {/* Cart Sidebar */}
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
                          <p className="text-xs text-muted-foreground">{item.quantity} {item.unit}</p>
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
                    Proceed to Quote
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

export default SupplierDashboard;
