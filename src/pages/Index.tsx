
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';
import TravelListingCard from '@/components/TravelListingCard';
import DestinationCard from '@/components/DestinationCard';
import SellTravelCTA from '@/components/SellTravelCTA';
import AITravelAgent from '@/components/AITravelAgent';
import { ArrowRight, Tag, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Placeholder data
  const popularDestinations = [
    { name: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop", dealCount: 245, resaleCount: 32 },
    { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop", dealCount: 189, resaleCount: 54 },
    { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop", dealCount: 312, resaleCount: 41 },
    { name: "Tokyo", image: "https://images.unsplash.com/photo-1570521462033-3015e76e7432?q=80&w=2071&auto=format&fit=crop", dealCount: 165, resaleCount: 27 },
  ];

  // Mixed listings of resales and OTA offerings
  const featuredListings = [
    {
      title: "7-Night Stay at The Ritz-Carlton",
      location: "Miami, Florida",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
      price: 1450,
      originalPrice: 2200,
      departureDate: "Jul 15, 2025",
      duration: "7 nights",
      passengers: 2,
      source: "TransferTravel",
      savingsPercentage: 34
    },
    {
      title: "Round-trip Flight to Barcelona",
      location: "London to Barcelona",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop",
      price: 120,
      originalPrice: 190,
      departureDate: "Aug 5, 2025",
      duration: "4 days",
      passengers: 1,
      source: "Expedia",
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Expedia_2022.svg", 
      savingsPercentage: 37
    },
    {
      title: "All-Inclusive Resort Package",
      location: "Cancun, Mexico",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      price: 1850,
      originalPrice: 2750,
      departureDate: "Sep 10, 2025",
      duration: "5 nights",
      passengers: 2,
      source: "TransferTravel",
      savingsPercentage: 33
    },
    {
      title: "Return Flight to Paris",
      location: "London to Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
      price: 115,
      departureDate: "Aug 14, 2025",
      duration: "3 days",
      passengers: 1,
      source: "Booking.com",
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Booking.com_2021.svg"
    },
    {
      title: "Boutique Hotel Stay",
      location: "Amsterdam, Netherlands",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
      price: 450,
      departureDate: "Jul 25, 2025",
      duration: "4 nights",
      passengers: 2,
      source: "TransferTravel"
    },
    {
      title: "City Break Package",
      location: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=2076&auto=format&fit=crop",
      price: 680,
      departureDate: "Sep 2, 2025",
      duration: "3 nights",
      passengers: 2,
      source: "Skyscanner",
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Skyscanner_Logo_2019.svg"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tt-blue to-tt-blue-dark pt-16 pb-24 md:pt-24 md:pb-32 relative">
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
        
        {/* Popular Destinations */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Popular Destinations</h2>
                <p className="text-tt-gray-dark">Discover great travel deals to these top locations</p>
              </div>
              <Button variant="ghost" className="hidden md:flex items-center text-tt-blue">
                View All Destinations
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((destination, index) => (
                <DestinationCard 
                  key={index}
                  name={destination.name}
                  image={destination.image}
                  dealCount={destination.dealCount}
                  resaleCount={destination.resaleCount}
                />
              ))}
            </div>
            
            <div className="mt-8 md:hidden">
              <Button variant="ghost" className="w-full flex items-center justify-center text-tt-blue">
                View All Destinations
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* AI Travel Agent */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Your Personal AI Travel Agent</h2>
              <p className="text-tt-gray-dark">Let our smart assistant help you find the perfect trip and uncover exclusive rewards</p>
            </div>
            
            <AITravelAgent />
          </div>
        </section>
        
        {/* Featured Listings - Combined with no tabs */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Featured Travel Deals</h2>
                <p className="text-tt-gray-dark">Browse through our hand-picked selection of great travel opportunities</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredListings.map((listing, index) => (
                <TravelListingCard 
                  key={index}
                  title={listing.title}
                  location={listing.location}
                  image={listing.image}
                  price={listing.price}
                  originalPrice={listing.originalPrice}
                  departureDate={listing.departureDate}
                  duration={listing.duration}
                  passengers={listing.passengers}
                  source={listing.source}
                  sourceLogo={listing.sourceLogo}
                  savingsPercentage={listing.savingsPercentage}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-tt-blue hover:bg-tt-blue-dark">
                View All Travel Deals
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">How TransferTravel Works</h2>
              <p className="text-tt-gray-dark max-w-2xl mx-auto">
                Whether you're buying travel or selling unused bookings, our platform makes it safe and easy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-tt-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tag className="text-tt-teal" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Find Amazing Deals</h3>
                <p className="text-tt-gray-dark">
                  Browse thousands of discounted travel listings and book your next trip for much less than retail price.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-tt-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="text-tt-teal" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">List in Minutes</h3>
                <p className="text-tt-gray-dark">
                  Need to sell your travel? List your non-refundable booking in just a few minutes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-tt-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-tt-teal" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
                <p className="text-tt-gray-dark">
                  Our secure platform handles all payments and transfers, keeping both buyers and sellers protected.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <SellTravelCTA />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
