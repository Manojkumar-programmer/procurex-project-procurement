import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import IndustryDashboard from "./pages/IndustryDashboard";
import CreateRFQ from "./pages/CreateRFQ";
import SupplierComparison from "./pages/SupplierComparison";
import SupplierDashboard from "./pages/SupplierDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Industry Routes */}
          <Route path="/industry/dashboard" element={<IndustryDashboard />} />
          <Route path="/industry/rfq/create" element={<CreateRFQ />} />
          <Route path="/industry/rfq/compare" element={<SupplierComparison />} />
          <Route path="/industry/rfq/:id/compare" element={<SupplierComparison />} />
          
          {/* Supplier Routes */}
          <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
