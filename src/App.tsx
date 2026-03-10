import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PropertyDetail from "./pages/PropertyDetail";
import FAQ from "./pages/FAQ";
import Membership from "./pages/Membership";
import MemberDashboard from "./pages/MemberDashboard";
import NotFound from "./pages/NotFound";
import VoiceAssistant from "./components/VoiceAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties/:slug" element={<PropertyDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/dashboard" element={<MemberDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
