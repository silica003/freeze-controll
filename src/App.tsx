import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ACServicePage from "./pages/ACServicePage";
import RefrigeratorPage from "./pages/RefrigeratorPage";
import WashingMachinePage from "./pages/WashingMachinePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import FloatingContactButtons from "./components/CallIcon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Added here so it shows on every route */}
        <FloatingContactButtons /> 
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/ac" element={<ACServicePage />} />
          <Route path="/services/refrigerator" element={<RefrigeratorPage />} />
          <Route path="/services/washing-machine" element={<WashingMachinePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
