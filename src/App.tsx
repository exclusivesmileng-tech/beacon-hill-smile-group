import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Businesses from "./pages/Businesses.tsx";
import Clinics from "./pages/Clinics.tsx";
import Foundation from "./pages/Foundation.tsx";
import FoundationOutreach from "./pages/FoundationOutreach.tsx";
import Projects from "./pages/Projects.tsx";
import Partners from "./pages/Partners.tsx";
import Insights from "./pages/Insights.tsx";
import InsightArticle from "./pages/InsightArticle.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import DrAkinbobola from "./pages/leadership/DrAkinbobola.tsx";
import MrsAkinbobola from "./pages/leadership/MrsAkinbobola.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/foundation/outreach/:slug" element={<FoundationOutreach />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership/dr-akinbobola" element={<DrAkinbobola />} />
          <Route path="/leadership/mrs-akinbobola" element={<MrsAkinbobola />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
