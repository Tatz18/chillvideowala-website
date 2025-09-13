import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurGears from "./pages/OurGears";
import OurTeam from "./pages/OurTeam";
import CorporatePhotoVideo from "./pages/CorporatePhotoVideo";
import WeddingFilms from "./pages/WeddingFilms";
import VFX3DEditing from "./pages/VFX3DEditing";
import ModelPortfolio from "./pages/ModelPortfolio";
import TwoDEditing from "./pages/TwoDEditing";
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
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-gears" element={<OurGears />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/corporate-photo-video" element={<CorporatePhotoVideo />} />
          <Route path="/wedding-films" element={<WeddingFilms />} />
          <Route path="/vfx-3d-editing" element={<VFX3DEditing />} />
          <Route path="/model-portfolio" element={<ModelPortfolio />} />
          <Route path="/2d-editing" element={<TwoDEditing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
