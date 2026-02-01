import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { 
    name: "TMT Steel", 
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop&q=80"
  },
  { 
    name: "Cement", 
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=300&fit=crop&q=80"
  },
  { 
    name: "Electrical Cables", 
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80"
  },
  { 
    name: "Pipes & Fittings", 
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&q=80"
  },
  { 
    name: "Industrial Fasteners", 
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop&q=80"
  },
];

// Duplicate for seamless loop
const allProducts = [...products, ...products, ...products];

const ProductCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Most Searched Products
        </h3>
      </div>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        <div 
          className={`flex ${isPaused ? '' : 'animate-scroll-smooth'}`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {allProducts.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3"
            >
              <div className="w-[200px] bg-card rounded-xl border border-border shadow-sm hover:shadow-medium hover:border-accent/30 transition-all duration-300 cursor-pointer overflow-hidden group">
                <div className="w-full h-[140px] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <span className="font-medium text-foreground">{product.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
