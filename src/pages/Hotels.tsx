
import React from 'react';
import SearchForm from '@/components/SearchForm';
import Footer from '@/components/Footer';

const Hotels = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container-custom py-12">
          <h1 className="text-3xl font-display font-semibold mb-6">Find Hotels</h1>
          <p className="text-tt-gray-dark mb-8">Search for hotel rooms or browse discounted resale hotel bookings.</p>
          
          <SearchForm initialTab="hotels" />
          
          <div className="mt-12">
            <h2 className="text-2xl font-display font-semibold mb-4">Featured Hotel Deals</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <p className="text-center text-tt-gray-dark">Coming soon! We're working on bringing you the best hotel deals.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hotels;
