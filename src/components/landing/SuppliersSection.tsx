import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const suppliers = [
  { name: "Alpha Steels Pvt Ltd", products: "TMT Bars, MS Plates, Steel Angles" },
  { name: "Prime Industrial Supplies", products: "Industrial Fasteners, Tools, Safety Equipment" },
  { name: "Nova Build Materials", products: "Cement, Aggregates, Ready Mix Concrete" },
  { name: "Vertex Metals", products: "HR Coils, CR Sheets, Galvanized Steel" },
  { name: "Omni Infra Traders", products: "PVC Pipes, HDPE Pipes, Fittings" },
  { name: "Titan Materials", products: "Structural Steel, Rebars, Wire Rods" },
  { name: "Apex Industrial Mart", products: "Electrical Cables, Switch Gears, Panels" },
  { name: "Union Steel House", products: "Stainless Steel, Alloy Steel, Tool Steel" },
  { name: "Metro Build Suppliers", products: "Bricks, Blocks, Waterproofing Materials" },
  { name: "Core Tech Materials", products: "Industrial Bearings, Conveyor Parts, Gears" }
];

const SuppliersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Trusted Partners
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Our Verified Suppliers
          </h2>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md hover:bg-muted hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md hover:bg-muted hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {suppliers.map((supplier, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-4 hover:shadow-medium hover:border-accent/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm leading-tight">
                    {supplier.name}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {supplier.products}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuppliersSection;
