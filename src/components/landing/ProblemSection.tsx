import { AlertTriangle, Phone, FileSpreadsheet, Clock } from "lucide-react";

const problems = [
  {
    icon: Phone,
    title: "Fragmented Communication",
    description: "Endless calls, WhatsApp messages, and email chains with no central tracking."
  },
  {
    icon: FileSpreadsheet,
    title: "Excel-Based Chaos",
    description: "Managing complex BOQs and supplier data in disconnected spreadsheets."
  },
  {
    icon: Clock,
    title: "Time Wasted",
    description: "Hours spent on supplier discovery, comparison, and repeated follow-ups."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industrial Procurement Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indian industries face significant inefficiencies in procurement processes
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-medium"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-hero text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">35%</div>
              <div className="text-primary-foreground/70 text-sm">Average cost overrun due to inefficient procurement</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">60+ hrs</div>
              <div className="text-primary-foreground/70 text-sm">Monthly time spent on manual supplier management</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">₹2L+</div>
              <div className="text-primary-foreground/70 text-sm">Lost per project to procurement inefficiencies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
