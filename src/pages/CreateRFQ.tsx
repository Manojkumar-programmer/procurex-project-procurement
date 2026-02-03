import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight,
  Plus, 
  Trash2, 
  Sparkles, 
  Clock,
  CheckCircle2,
  Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link, useNavigate } from "react-router-dom";
import NavigationArrows from "@/components/navigation/NavigationArrows";

interface RFQItem {
  id: string;
  product: string;
  specifications: string;
  quantity: string;
  unit: string;
  requiredDate: string;
}

interface ShortlistedSupplier {
  id: string;
  name: string;
  location: string;
  matchScore: number;
  deliveryDays: string;
  priceRange: string;
}

const mockSuppliers: ShortlistedSupplier[] = [
  {
    id: "s1",
    name: "Tata Steel Distributors",
    location: "Mumbai, Maharashtra",
    matchScore: 95,
    deliveryDays: "5-7 days",
    priceRange: "₹52,000 - ₹54,000/ton"
  },
  {
    id: "s2",
    name: "JSW Steel India",
    location: "Pune, Maharashtra",
    matchScore: 92,
    deliveryDays: "7-10 days",
    priceRange: "₹51,000 - ₹53,000/ton"
  },
  {
    id: "s3",
    name: "SAIL Authorized Dealer",
    location: "Nagpur, Maharashtra",
    matchScore: 88,
    deliveryDays: "10-12 days",
    priceRange: "₹50,500 - ₹52,500/ton"
  },
  {
    id: "s4",
    name: "Jindal Steel Supplies",
    location: "Ahmedabad, Gujarat",
    matchScore: 85,
    deliveryDays: "8-10 days",
    priceRange: "₹51,500 - ₹53,500/ton"
  }
];

const CreateRFQ = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isShortlisting, setIsShortlisting] = useState(false);
  const [shortlistedSuppliers, setShortlistedSuppliers] = useState<ShortlistedSupplier[]>([]);
  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  
  const [items, setItems] = useState<RFQItem[]>([
    { id: "1", product: "", specifications: "", quantity: "", unit: "tons", requiredDate: "" }
  ]);

  const addItem = () => {
    setItems([...items, { 
      id: Date.now().toString(), 
      product: "", 
      specifications: "", 
      quantity: "", 
      unit: "tons", 
      requiredDate: "" 
    }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof RFQItem, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleAIShortlist = () => {
    setIsShortlisting(true);
    setTimeout(() => {
      setShortlistedSuppliers(mockSuppliers);
      setIsShortlisting(false);
      setStep(2);
    }, 2500);
  };

  const toggleSupplierSelection = (supplierId: string) => {
    setSelectedSuppliers(prev => 
      prev.includes(supplierId) 
        ? prev.filter(id => id !== supplierId)
        : [...prev, supplierId]
    );
  };

  const handleSendRFQ = () => {
    setStep(3);
  };

  const handleSelectAndPlaceOrder = () => {
    setShowOrderPopup(true);
    setTimeout(() => {
      setShowOrderPopup(false);
      navigate("/industry/dashboard");
    }, 2000);
  };

  const handleConfirmSend = () => {
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
      navigate("/industry/rfq/finalized");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="industry" />
      
      {/* RFQ Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-in fade-in zoom-in duration-300 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">RFQ sent successfully</h3>
          </div>
        </div>
      )}

      {/* Order Placed Success Popup */}
      {showOrderPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-in fade-in zoom-in duration-300 text-center max-w-md">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Order placed successfully</h3>
            <p className="text-sm text-muted-foreground">Final bill will be shared within a few hours.</p>
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
            <h1 className="text-2xl font-bold text-foreground">Create New RFQ</h1>
            <p className="text-muted-foreground">Add requirements and get AI-matched suppliers</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-4 mb-8">
          {[
            { num: 1, label: "Add Requirements" },
            { num: 2, label: "AI Shortlist" },
            { num: 3, label: "Send RFQ" }
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                step >= s.num 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {step > s.num ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                    {s.num}
                  </span>
                )}
                <span className="text-sm font-medium">{s.label}</span>
              </div>
              {i < 2 && <div className="w-12 h-0.5 bg-border mx-2" />}
            </div>
          ))}
        </div>

        {/* Step 1: Add Requirements */}
        {step === 1 && !isShortlisting && (
          <div className="max-w-4xl">
            {/* Manual Entry - First */}
            <div className="card-elevated p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Add Requirements Manually</h3>
                <Button variant="outline" size="sm" onClick={addItem}>
                  <Plus className="w-4 h-4" />
                  Add Item
                </Button>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id} className="p-4 bg-muted/30 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Item {index + 1}</span>
                      {items.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-muted-foreground">Product Name</Label>
                        <Input 
                          placeholder="e.g., TMT Steel Bars Fe-500D"
                          value={item.product}
                          onChange={(e) => updateItem(item.id, "product", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Specifications</Label>
                        <Input 
                          placeholder="e.g., 12mm, 16mm diameter"
                          value={item.specifications}
                          onChange={(e) => updateItem(item.id, "specifications", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs text-muted-foreground">Quantity</Label>
                          <Input 
                            type="number"
                            placeholder="500"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, "quantity", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Unit</Label>
                          <Input 
                            value={item.unit}
                            onChange={(e) => updateItem(item.id, "unit", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Required By</Label>
                        <Input 
                          type="date"
                          value={item.requiredDate}
                          onChange={(e) => updateItem(item.id, "requiredDate", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload BOQ - Optional */}
            <div className="card-elevated p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Upload BOQ (Optional)</h3>
                <span className="text-sm text-muted-foreground">Excel or PDF</span>
              </div>
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Drag and drop your BOQ file here or click to browse</p>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="card-elevated p-6 mb-6">
              <Label className="text-foreground font-medium">Additional Notes (Optional)</Label>
              <Textarea 
                placeholder="Any specific requirements, delivery location, payment terms..."
                className="mt-2"
                rows={3}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="ai" onClick={handleAIShortlist}>
                <Sparkles className="w-4 h-4" />
                AI Shortlist Suppliers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* AI Shortlisting Animation */}
        {isShortlisting && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-ai to-accent flex items-center justify-center mb-6 animate-pulse">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">AI is finding best suppliers...</h2>
            <p className="text-muted-foreground mb-8">
              Analyzing 2,000+ verified suppliers based on your requirements
            </p>
            <div className="space-y-3">
              {["Matching product specifications...", "Checking delivery capabilities...", "Analyzing pricing history..."].map((text, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-center gap-3 text-sm text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${i * 500}ms` }}
                >
                  <Clock className="w-4 h-4 animate-spin" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Shortlisted Suppliers */}
        {step === 2 && !isShortlisting && (
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Shortlisted 4 Suppliers</h3>
                <p className="text-sm text-muted-foreground">Based on your requirements and delivery location</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {shortlistedSuppliers.map((supplier) => (
                <div 
                  key={supplier.id}
                  onClick={() => toggleSupplierSelection(supplier.id)}
                  className={`card-elevated p-5 cursor-pointer transition-all ${
                    selectedSuppliers.includes(supplier.id) 
                      ? "border-accent ring-2 ring-accent/20" 
                      : "hover:border-accent/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedSuppliers.includes(supplier.id) 
                        ? "bg-accent border-accent" 
                        : "border-muted"
                    }`}>
                      {selectedSuppliers.includes(supplier.id) && (
                        <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-foreground">{supplier.name}</h4>
                        <span className="badge-ai">
                          <Sparkles className="w-3 h-3" />
                          {supplier.matchScore}% Match
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{supplier.location}</p>
                      <div className="flex items-center gap-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Delivery: </span>
                          <span className="font-medium text-foreground">{supplier.deliveryDays}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Est. Price: </span>
                          <span className="font-medium text-foreground">{supplier.priceRange}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {selectedSuppliers.length} suppliers selected
                </span>
                <Button 
                  variant="success" 
                  disabled={selectedSuppliers.length === 0}
                  onClick={handleSelectAndPlaceOrder}
                >
                  Select & Place Order
                </Button>
                <Button 
                  variant="cta" 
                  disabled={selectedSuppliers.length === 0}
                  onClick={handleSendRFQ}
                >
                  Send RFQ to Selected
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Send RFQ Confirmation */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-success/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">RFQ Ready to Send</h2>
            <p className="text-muted-foreground mb-8">
              Your RFQ will be sent to {selectedSuppliers.length} selected suppliers. They will receive a notification and can submit their quotes.
            </p>
            
            <div className="card-elevated p-6 mb-8 text-left">
              <h4 className="font-semibold text-foreground mb-4">Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Products</span>
                  <span className="font-medium text-foreground">{items.length} items</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Suppliers</span>
                  <span className="font-medium text-foreground">{selectedSuppliers.length} selected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Response</span>
                  <span className="font-medium text-foreground">Within 48 hours</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button variant="cta" onClick={handleConfirmSend}>
                Confirm & Send RFQ
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </main>
      <NavigationArrows showBack={true} backPath="/industry/dashboard" />
    </div>
  );
};

export default CreateRFQ;
