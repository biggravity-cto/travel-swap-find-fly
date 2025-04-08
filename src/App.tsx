
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
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
import Header from "./components/Header";

const queryClient = new QueryClient();

// Layout component to wrap regular pages (not TravelAgent which has its own layout)
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="page-container">
      {children}
    </main>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<PageLayout><Index /></PageLayout>} />
          <Route path="/listings" element={<PageLayout><Listings /></PageLayout>} />
          <Route path="/rewards" element={<PageLayout><Rewards /></PageLayout>} />
          <Route path="/sell" element={<PageLayout><SellTravel /></PageLayout>} />
          <Route path="/flights" element={<PageLayout><Flights /></PageLayout>} />
          <Route path="/hotels" element={<PageLayout><Hotels /></PageLayout>} />
          <Route path="/packages" element={<PageLayout><Packages /></PageLayout>} />
          <Route path="/marketplace" element={<PageLayout><ResaleMarketplace /></PageLayout>} />
          <Route path="/travel-agent" element={<TravelAgent />} />
          <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
        </Routes>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
