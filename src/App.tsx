import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tratamientos from "./pages/Tratamientos";
import SobreNosotros from "./pages/SobreNosotros";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter basename="/zenith-clinic">
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
