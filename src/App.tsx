
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Listings from "./pages/Listings";
import Rewards from "./pages/Rewards";
import SellTravel from "./pages/SellTravel";
import TravelAgent from "./pages/TravelAgent";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import ResaleMarketplace from "./pages/ResaleMarketplace";
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
          <Route path="/listings" element={<Listings />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/sell" element={<SellTravel />} />
          <Route path="/travel-agent" element={<TravelAgent />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/marketplace" element={<ResaleMarketplace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
