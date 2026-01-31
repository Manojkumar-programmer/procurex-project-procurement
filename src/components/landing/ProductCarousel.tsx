import { useEffect, useRef } from "react";

const products = [
  { name: "TMT Steel", icon: "🏗️" },
  { name: "Cement", icon: "🧱" },
  { name: "Electrical Cables", icon: "⚡" },
  { name: "Pipes & Fittings", icon: "🔧" },
  { name: "Industrial Fasteners", icon: "🔩" },
  { name: "TMT Steel", icon: "🏗️" },
  { name: "Cement", icon: "🧱" },
  { name: "Electrical Cables", icon: "⚡" },
  { name: "Pipes & Fittings", icon: "🔧" },
  { name: "Industrial Fasteners", icon: "🔩" },
];

const ProductCarousel = () => {
  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Most Searched Products
        </h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-pointer min-w-[180px]">
                <span className="text-2xl">{product.icon}</span>
                <span className="font-medium text-foreground whitespace-nowrap">{product.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
