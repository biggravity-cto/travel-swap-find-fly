
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ResaleMarketplace = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container-custom py-12">
          <h1 className="text-3xl font-display font-semibold mb-6">Resale Marketplace</h1>
          <p className="text-tt-gray-dark mb-8">Browse discounted non-refundable travel bookings from sellers around the world.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-medium mb-2">Flight Tickets</h3>
              <p className="text-tt-gray-dark mb-4">Find discounted flight tickets from sellers who can no longer travel.</p>
              <button className="text-tt-blue font-medium hover:text-tt-blue-dark transition-colors">Browse Flight Deals</button>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-medium mb-2">Hotel Bookings</h3>
              <p className="text-tt-gray-dark mb-4">Discover hotel rooms at reduced prices from sellers with changed plans.</p>
              <button className="text-tt-blue font-medium hover:text-tt-blue-dark transition-colors">Browse Hotel Deals</button>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-medium mb-2">Vacation Packages</h3>
              <p className="text-tt-gray-dark mb-4">Save on complete vacation packages that sellers can no longer use.</p>
              <button className="text-tt-blue font-medium hover:text-tt-blue-dark transition-colors">Browse Package Deals</button>
            </div>
          </div>
          
          <div className="mt-12 bg-yellow-50 p-6 rounded-lg border border-yellow-100">
            <p className="text-center text-tt-gray-dark">Our marketplace is growing! More travel deals coming soon.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResaleMarketplace;
