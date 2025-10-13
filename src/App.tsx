import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Tratamientos from "./pages/Tratamientos";
import SobreNosotros from "./pages/SobreNosotros";
import NotFound from "./pages/NotFound";

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Detect if we're in development mode
const isDevelopment = import.meta.env.DEV;

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter basename={isDevelopment ? "/" : "/zenith-clinic"}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
