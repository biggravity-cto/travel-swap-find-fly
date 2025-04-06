
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TravelListingCard from '@/components/TravelListingCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Calendar, MapPin, Filter, Search, SlidersHorizontal } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Listings = () => {
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  
  // Placeholder mixed listings
  const allListings = [
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
    {
      title: "Luxury Beach Resort",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      price: 1200,
      originalPrice: 1800,
      departureDate: "Aug 20, 2025",
      duration: "6 nights",
      passengers: 2,
      source: "TransferTravel",
      savingsPercentage: 33
    },
    {
      title: "Weekend Trip to Edinburgh",
      location: "London to Edinburgh",
      image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?q=80&w=2070&auto=format&fit=crop",
      price: 220,
      departureDate: "Jun 15, 2025",
      duration: "2 nights",
      passengers: 1,
      source: "Skyscanner",
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Skyscanner_Logo_2019.svg"
    },
    {
      title: "Family Trip to Disneyland",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1534375971785-5c1826f739d8?q=80&w=2070&auto=format&fit=crop",
      price: 950,
      originalPrice: 1400,
      departureDate: "Jul 5, 2025",
      duration: "4 nights",
      passengers: 4,
      source: "TransferTravel",
      savingsPercentage: 32
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold flex items-center">
                      <Filter className="mr-2" size={18} />
                      Filters
                    </h2>
                    <Button variant="ghost" size="sm" className="text-sm text-tt-blue">Reset</Button>
                  </div>
                  
                  {/* Search */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input 
                        placeholder="Keywords, locations..." 
                        className="pl-9"
                      />
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Price Range</label>
                    <div className="px-2">
                      <Slider 
                        defaultValue={[0, 3000]} 
                        max={5000} 
                        step={50} 
                        onValueChange={(value) => setPriceRange(value as number[])}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>£{priceRange[0]}</span>
                      <span>£{priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Destination */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Destination</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All destinations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="north-america">North America</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="africa">Africa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Travel Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Travel Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flight">Flights</SelectItem>
                        <SelectItem value="hotel">Hotels</SelectItem>
                        <SelectItem value="package">Packages</SelectItem>
                        <SelectItem value="cruise">Cruises</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Source */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Source</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All sources" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transfertravel">TransferTravel</SelectItem>
                        <SelectItem value="expedia">Expedia</SelectItem>
                        <SelectItem value="booking">Booking.com</SelectItem>
                        <SelectItem value="skyscanner">Skyscanner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Dates */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Departure Date</label>
                    <div className="flex items-center border rounded-md p-2.5 bg-white">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm text-gray-500">Select dates</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-tt-blue">Apply Filters</Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Listings */}
            <div className="w-full lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-display font-semibold">Travel Listings</h1>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-3">Sort by:</span>
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="date">Departure Date</SelectItem>
                      <SelectItem value="savings">Highest Savings</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {allListings.map((listing, index) => (
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
                <Button variant="outline" size="lg" className="mr-4">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Listings;
