
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DestinationCard from '@/components/DestinationCard';

const PopularDestinationsSection = () => {
  // Placeholder data
  const popularDestinations = [
    { name: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop", dealCount: 245, resaleCount: 32 },
    { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop", dealCount: 189, resaleCount: 54 },
    { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop", dealCount: 312, resaleCount: 41 },
    { name: "Tokyo", image: "https://images.unsplash.com/photo-1570521462033-3015e76e7432?q=80&w=2071&auto=format&fit=crop", dealCount: 165, resaleCount: 27 },
  ];

  return (
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
  );
};

export default PopularDestinationsSection;
