import { 
  ArrowLeft, 
  Star, 
  ShieldCheck, 
  Truck, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ThumbsUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";

interface SupplierQuote {
  id: string;
  name: string;
  logo: string;
  location: string;
  rating: number;
  verified: boolean;
  trustScore: number;
  pricePerUnit: number;
  totalPrice: number;
  deliveryDays: number;
  paymentTerms: string;
  warranty: string;
  onTimeDelivery: number;
  disputes: number;
  isAIRecommended: boolean;
  isBestPrice: boolean;
  isFastestDelivery: boolean;
}

const mockQuotes: SupplierQuote[] = [
  {
    id: "1",
    name: "Tata Steel Distributors",
    logo: "TS",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    verified: true,
    trustScore: 95,
    pricePerUnit: 52500,
    totalPrice: 26250000,
    deliveryDays: 7,
    paymentTerms: "30 days credit",
    warranty: "1 year",
    onTimeDelivery: 98,
    disputes: 0,
    isAIRecommended: true,
    isBestPrice: false,
    isFastestDelivery: true
  },
  {
    id: "2",
    name: "JSW Steel India",
    logo: "JS",
    location: "Pune, Maharashtra",
    rating: 4.6,
    verified: true,
    trustScore: 92,
    pricePerUnit: 51000,
    totalPrice: 25500000,
    deliveryDays: 10,
    paymentTerms: "45 days credit",
    warranty: "1 year",
    onTimeDelivery: 94,
    disputes: 1,
    isAIRecommended: false,
    isBestPrice: true,
    isFastestDelivery: false
  },
  {
    id: "3",
    name: "SAIL Authorized",
    logo: "SA",
    location: "Nagpur, Maharashtra",
    rating: 4.5,
    verified: true,
    trustScore: 88,
    pricePerUnit: 51500,
    totalPrice: 25750000,
    deliveryDays: 12,
    paymentTerms: "30 days credit",
    warranty: "6 months",
    onTimeDelivery: 90,
    disputes: 2,
    isAIRecommended: false,
    isBestPrice: false,
    isFastestDelivery: false
  },
  {
    id: "4",
    name: "Jindal Steel",
    logo: "JD",
    location: "Ahmedabad, Gujarat",
    rating: 4.4,
    verified: true,
    trustScore: 85,
    pricePerUnit: 52000,
    totalPrice: 26000000,
    deliveryDays: 9,
    paymentTerms: "15 days credit",
    warranty: "1 year",
    onTimeDelivery: 92,
    disputes: 1,
    isAIRecommended: false,
    isBestPrice: false,
    isFastestDelivery: false
  }
];

const formatPrice = (price: number) => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} L`;
  }
  return `₹${price.toLocaleString()}`;
};

const SupplierComparison = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="industry" />
      
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/industry/rfq">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Compare Supplier Quotes</h1>
              <p className="text-muted-foreground">TMT Steel Bars - 500 Ton • Metro Rail Phase II</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Download Report</Button>
            <Button variant="cta">Place Order</Button>
          </div>
        </div>

        {/* AI Recommendation Banner */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-ai/10 to-accent/10 border border-ai/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ai/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-ai" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">AI Recommendation</h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Tata Steel Distributors</span> offers the best balance of price, delivery time, and reliability. 
                While JSW has a slightly lower price, Tata's faster delivery and higher trust score make it the recommended choice.
              </p>
            </div>
            <Button variant="ai" size="sm">
              <ThumbsUp className="w-4 h-4" />
              Accept Recommendation
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="card-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="table-header border-b border-border">
                  <th className="text-left p-4 min-w-[200px]">Supplier</th>
                  <th className="text-center p-4">Price/Unit</th>
                  <th className="text-center p-4">Total Price</th>
                  <th className="text-center p-4">Delivery</th>
                  <th className="text-center p-4">Trust Score</th>
                  <th className="text-center p-4">Performance</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockQuotes.map((quote, index) => (
                  <tr 
                    key={quote.id} 
                    className={`border-b border-border hover:bg-muted/30 transition-colors ${
                      quote.isAIRecommended ? "bg-ai/5" : ""
                    }`}
                  >
                    {/* Supplier Info */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {quote.logo}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{quote.name}</span>
                            {quote.isAIRecommended && (
                              <span className="badge-ai">
                                <Sparkles className="w-3 h-3" />
                                Best Value
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{quote.location}</span>
                            {quote.verified && (
                              <ShieldCheck className="w-4 h-4 text-verified" />
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 fill-warning text-warning" />
                            <span className="font-medium">{quote.rating}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Price Per Unit */}
                    <td className="p-4 text-center">
                      <div className="font-semibold text-foreground">
                        ₹{quote.pricePerUnit.toLocaleString()}/ton
                      </div>
                      {quote.isBestPrice && (
                        <span className="text-xs text-success font-medium">Lowest Price</span>
                      )}
                    </td>

                    {/* Total Price */}
                    <td className="p-4 text-center">
                      <div className="text-lg font-bold text-foreground">
                        {formatPrice(quote.totalPrice)}
                      </div>
                    </td>

                    {/* Delivery */}
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Truck className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">{quote.deliveryDays} days</span>
                      </div>
                      {quote.isFastestDelivery && (
                        <span className="text-xs text-ai font-medium">Fastest</span>
                      )}
                    </td>

                    {/* Trust Score */}
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              quote.trustScore >= 90 ? "bg-success" : 
                              quote.trustScore >= 80 ? "bg-accent" : "bg-warning"
                            }`}
                            style={{ width: `${quote.trustScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{quote.trustScore}%</span>
                      </div>
                    </td>

                    {/* Performance */}
                    <td className="p-4 text-center">
                      <div className="space-y-1">
                        <div className="flex items-center justify-center gap-1 text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{quote.onTimeDelivery}% on-time</span>
                        </div>
                        <div className="flex items-center justify-center gap-1 text-sm">
                          {quote.disputes === 0 ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-success" />
                              <span className="text-success">No disputes</span>
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-4 h-4 text-warning" />
                              <span className="text-warning">{quote.disputes} dispute{quote.disputes > 1 ? 's' : ''}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Action */}
                    <td className="p-4 text-center">
                      <Button 
                        variant={quote.isAIRecommended ? "cta" : "outline"} 
                        size="sm"
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Payment Terms */}
          <div className="card-elevated p-6">
            <h3 className="font-semibold text-foreground mb-4">Payment Terms Comparison</h3>
            <div className="space-y-3">
              {mockQuotes.map((quote) => (
                <div key={quote.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm font-medium text-foreground">{quote.name}</span>
                  <span className="text-sm text-muted-foreground">{quote.paymentTerms}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty */}
          <div className="card-elevated p-6">
            <h3 className="font-semibold text-foreground mb-4">Warranty Coverage</h3>
            <div className="space-y-3">
              {mockQuotes.map((quote) => (
                <div key={quote.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm font-medium text-foreground">{quote.name}</span>
                  <span className="text-sm text-muted-foreground">{quote.warranty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price History */}
          <div className="card-elevated p-6">
            <h3 className="font-semibold text-foreground mb-4">Market Price Trend</h3>
            <div className="h-32 flex items-end justify-around gap-2">
              {[65, 72, 68, 75, 70, 78, 72].map((height, i) => (
                <div 
                  key={i} 
                  className="w-full bg-accent/20 rounded-t-lg transition-all hover:bg-accent/40"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>6 mo ago</span>
              <span>Today</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Current prices are <span className="text-success font-medium">5% below</span> the 6-month average
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupplierComparison;
