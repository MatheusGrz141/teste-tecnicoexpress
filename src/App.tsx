import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import AreaTecnico from "./pages/AreaTecnico";
import AreaCliente from "./pages/AreaCliente";
 
import Politica from "./pages/Politica";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";
import Acordos from "./pages/Acordos";
import ChamadoExpress from "./pages/ChamadoExpress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/chamado-express" element={<ChamadoExpress />} />

          <Route path="/contato" element={<Contato />} />
          <Route path="/acordos" element={<Acordos />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/area-tecnico" element={<AreaTecnico />} />
          <Route path="/area-cliente" element={<AreaCliente />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
