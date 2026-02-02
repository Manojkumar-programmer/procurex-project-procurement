import { Building2 } from "lucide-react";

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
              className="bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border p-4 hover:shadow-lg hover:border-accent/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                  {supplier.name}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 pl-13">
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
