import { useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  price: string;
}

interface CartSheetProps {
  cartCount?: number;
}

const CartSheet = ({ cartCount = 2 }: CartSheetProps) => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", name: "TMT Steel Bars Fe-500D", quantity: 100, unit: "Tons", price: "₹52,000/ton" },
    { id: "2", name: "Cement OPC 53 Grade", quantity: 500, unit: "Bags", price: "₹350/bag" }
  ]);

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const setQuantity = (id: string, value: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, value) } : item
    ));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-cta text-cta-foreground rounded-full text-xs flex items-center justify-center font-medium">
              {cart.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-accent" />
            Cart
            {cart.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                {cart.length} items
              </span>
            )}
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
          {cart.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-12">
              Your cart is empty
            </p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{item.price}</p>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, -10)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => setQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-20 h-8 text-center text-sm"
                      />
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, 10)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <span className="text-sm text-muted-foreground">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <Button variant="cta" className="w-full">
                  Proceed to Order
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
