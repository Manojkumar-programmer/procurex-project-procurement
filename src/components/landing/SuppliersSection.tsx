import { Building2, BadgeCheck } from "lucide-react";

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
  { name: "Core Tech Materials", products: "Industrial Bearings, Conveyor Parts, Gears" },
  { name: "Reliable Steel Corp", products: "MS Angles, Channels, Beams" },
  { name: "Precision Hardware", products: "Nuts, Bolts, Washers, Anchors" },
  { name: "BuildMax Enterprises", products: "Sand, Gravel, Crusite Materials" },
  { name: "PowerLine Electricals", products: "Wires, MCBs, Distribution Boards" },
  { name: "HydroFlow Systems", products: "Valves, Pumps, Flow Meters" }
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {suppliers.map((supplier, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-card via-card to-accent/5 rounded-xl border border-border/60 p-5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 group-hover:from-primary/25 group-hover:to-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm">
                  <Building2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors truncate">
                      {supplier.name}
                    </h4>
                    <BadgeCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  </div>
                </div>
              </div>
              <p className="relative text-xs text-muted-foreground line-clamp-2 pl-14 group-hover:text-muted-foreground/80 transition-colors">
                {supplier.products}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuppliersSection;
