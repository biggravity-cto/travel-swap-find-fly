
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TravelListingCard from '@/components/TravelListingCard';

const FeaturedListingsSection = () => {
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
  );
};

export default FeaturedListingsSection;
