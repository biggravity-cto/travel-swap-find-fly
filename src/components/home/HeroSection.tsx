
import React from 'react';
import SearchForm from '@/components/SearchForm';
import { useTheme, themeInfo } from '@/contexts/ThemeContext';
import { ArrowRight, Search, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { theme } = useTheme();
  const currentTheme = themeInfo[theme];
  
  // Default TransferTravel theme - Balanced approach with a focus on both buyer and seller sides
  if (theme === 'default') {
    return (
      <section className="hero-section pt-16 pb-24 md:pt-24 md:pb-32 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }} />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mb-12">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">
              Find new adventures or sell your travel plans
            </h1>
            <p className="text-white/85 text-lg md:text-xl mb-8">
              Book your next trip at the best price or sell your non-refundable travel. 
              The smart way to travel and the only way to recover costs from trips you can't take.
            </p>
          </div>
          
          <SearchForm />
        </div>
      </section>
    );
  }
  
  // Google Material Design theme - Function first, direct, data-driven
  if (theme === 'google') {
    return (
      <section className="hero-section relative">
        <div className="container-custom pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                New feature: Compare flight prices across dates
              </div>
              <h1 className="text-3xl md:text-4xl font-normal text-white mb-4">
                Find the best travel deals in one search
              </h1>
              <p className="text-white/85 mb-8">
                Powerful search across multiple travel sites. Filter by price, ratings, amenities, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100">
                  <Search className="mr-2 h-4 w-4" />
                  Search All Deals
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border border-white text-white hover:bg-white/10">
                  Explore Popular Destinations
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Quick Search</h2>
                <div className="flex items-center rounded-full bg-gray-100 p-1 mb-4">
                  <button className="flex-1 rounded-full py-2 text-sm font-medium bg-white shadow">Flights</button>
                  <button className="flex-1 rounded-full py-2 text-sm font-medium text-gray-700">Hotels</button>
                  <button className="flex-1 rounded-full py-2 text-sm font-medium text-gray-700">Packages</button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-md border border-gray-300 p-3 flex items-center">
                  <MapPin className="text-gray-400 mr-2" size={18} />
                  <input type="text" placeholder="Where are you going?" className="bg-transparent border-0 outline-none w-full text-gray-800" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md border border-gray-300 p-3">
                    <div className="text-sm text-gray-500 mb-1">Depart</div>
                    <div className="text-gray-800 flex items-center justify-between">
                      <span>Select date</span>
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="rounded-md border border-gray-300 p-3">
                    <div className="text-sm text-gray-500 mb-1">Return</div>
                    <div className="text-gray-800 flex items-center justify-between">
                      <span>Select date</span>
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-[#4285F4]">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Apple theme - Minimalist, premium, imagery-focused
  if (theme === 'apple') {
    return (
      <section className="hero-section relative">
        <div className="grid grid-cols-1">
          <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 max-w-4xl">
              Travel. Simplified.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10">
              Experience a more thoughtful way to discover and book exceptional journeys.
            </p>
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-6 text-lg">
              Discover Now
            </Button>
          </div>
          
          <div className="bg-[#1a1a1a] py-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Find the perfect journey.</h2>
              <div className="pill-selector">
                <button className="pill-option-active">Flights</button>
                <button className="pill-option">Hotels</button>
                <button className="pill-option">Experiences</button>
              </div>
              
              <div className="bg-[#f5f5f7] rounded-2xl p-6 text-black">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1 text-left">From</div>
                    <input 
                      type="text" 
                      placeholder="Departure city" 
                      className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 outline-none text-black"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1 text-left">To</div>
                    <input 
                      type="text" 
                      placeholder="Destination city" 
                      className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 outline-none text-black"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1 text-left">When</div>
                    <input 
                      type="text" 
                      placeholder="Select dates" 
                      className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 outline-none text-black"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="rounded-full bg-black text-white hover:bg-black/90 px-8 py-3">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Kayak theme - Bold, direct, price-focused
  if (theme === 'kayak') {
    return (
      <section className="hero-section relative">
        <div className="container-custom pt-8 pb-12">
          <div className="mb-8 text-center">
            <div className="bg-yellow-500 text-black font-bold inline-block px-3 py-1 rounded mb-4 uppercase text-sm tracking-wide">
              Save up to 50% on travel
            </div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
              COMPARE & SAVE ON TRAVEL
            </h1>
            <p className="text-white/85 mb-4 max-w-2xl mx-auto">
              Search hundreds of travel sites at once. Find amazing deals or sell your unused bookings for cash.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg border-2 border-gray-200 p-4">
            <div className="flex border-b border-gray-300 mb-4">
              <button className="px-4 py-2 font-bold text-[#FF690F] border-b-2 border-[#FF690F] uppercase text-sm">FLIGHTS</button>
              <button className="px-4 py-2 font-bold text-gray-500 uppercase text-sm">HOTELS</button>
              <button className="px-4 py-2 font-bold text-gray-500 uppercase text-sm">PACKAGES</button>
              <button className="px-4 py-2 font-bold text-gray-500 uppercase text-sm">RESALE</button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div className="border-2 border-gray-300 rounded p-2">
                <div className="text-xs font-bold uppercase mb-1 text-gray-700">FROM</div>
                <input type="text" placeholder="City or airport" className="w-full border-0 outline-none text-gray-800" />
              </div>
              
              <div className="border-2 border-gray-300 rounded p-2">
                <div className="text-xs font-bold uppercase mb-1 text-gray-700">TO</div>
                <input type="text" placeholder="City or airport" className="w-full border-0 outline-none text-gray-800" />
              </div>
              
              <div className="border-2 border-gray-300 rounded p-2">
                <div className="text-xs font-bold uppercase mb-1 text-gray-700">DATES</div>
                <input type="text" placeholder="Pick dates" className="w-full border-0 outline-none text-gray-800" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="direct" className="mr-2" />
                <label htmlFor="direct" className="text-sm font-bold text-gray-700 uppercase">DIRECT FLIGHTS ONLY</label>
              </div>
              
              <Button className="bg-[#FF690F] hover:bg-[#e55a00] text-white font-bold uppercase tracking-wide px-8 py-3">
                FIND DEALS
              </Button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/marketplace" className="inline-flex items-center text-white font-bold hover:underline">
              GOT UNUSED TRAVEL TO SELL? <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  // Fallback to default if no theme matches
  return (
    <section className="hero-section pt-16 pb-24 md:pt-24 md:pb-32 relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-12">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">
            {currentTheme.tagline}
          </h1>
          <p className="text-white/85 text-lg md:text-xl mb-8">
            Book your next trip at the best price or sell your non-refundable travel. 
            The smart way to travel and the only way to recover costs from trips you can't take.
          </p>
        </div>
        
        <SearchForm />
      </div>
    </section>
  );
};

export default HeroSection;
