import { Link, useLocation } from "react-router-dom";
import { 
  Boxes, 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  Users, 
  TrendingUp,
  Settings,
  HelpCircle,
  LogOut,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  badge?: string;
}

const NavItem = ({ to, icon: Icon, label, badge }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <div className={cn("nav-item", isActive && "active")}>
        <Icon className="w-5 h-5" />
        <span className="flex-1">{label}</span>
        {badge && (
          <span className="px-2 py-0.5 rounded-full bg-sidebar-primary/20 text-sidebar-primary text-xs font-medium">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
};

interface DashboardSidebarProps {
  type: "industry" | "supplier";
}

const DashboardSidebar = ({ type }: DashboardSidebarProps) => {
  const industryNav = [
    { to: "/industry/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/industry/projects", icon: FolderKanban, label: "Projects", badge: "3" },
    { to: "/industry/rfq", icon: FileText, label: "RFQs", badge: "5" },
    { to: "/industry/suppliers", icon: Users, label: "Suppliers" },
    { to: "/industry/analytics", icon: TrendingUp, label: "Analytics" },
  ];

  const supplierNav = [
    { to: "/supplier/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/supplier/rfqs", icon: FileText, label: "Incoming RFQs", badge: "8" },
    { to: "/supplier/catalog", icon: FolderKanban, label: "Product Catalog" },
    { to: "/supplier/orders", icon: Users, label: "Orders" },
    { to: "/supplier/analytics", icon: TrendingUp, label: "Analytics" },
  ];

  const navItems = type === "industry" ? industryNav : supplierNav;

  return (
    <aside className="w-64 h-screen bg-sidebar fixed left-0 top-0 flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <Boxes className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">PROCUREX</span>
        </Link>
      </div>

      {/* Quick Action */}
      <div className="p-4">
        <Link to={type === "industry" ? "/industry/rfq/create" : "/supplier/catalog/add"}>
          <Button variant="ai" className="w-full justify-start gap-2">
            <Plus className="w-4 h-4" />
            {type === "industry" ? "New RFQ" : "Add Product"}
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <NavItem to="/settings" icon={Settings} label="Settings" />
        <NavItem to="/help" icon={HelpCircle} label="Help & Support" />
        <Link to="/">
          <div className="nav-item text-destructive/70 hover:text-destructive hover:bg-destructive/10">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </div>
        </Link>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-sidebar-foreground font-medium">RS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Rajesh Sharma
            </p>
            <p className="text-xs text-sidebar-foreground/50 truncate">
              {type === "industry" ? "Metro Rail Corp" : "Steel India Ltd"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
