
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SearchForm } from '@/components/SearchForm';

const Flights = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container-custom py-12">
          <h1 className="text-3xl font-display font-semibold mb-6">Find Flights</h1>
          <p className="text-tt-gray-dark mb-8">Search for flights or browse discounted resale flight tickets.</p>
          
          <SearchForm initialTab="flights" />
          
          <div className="mt-12">
            <h2 className="text-2xl font-display font-semibold mb-4">Popular Flight Deals</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <p className="text-center text-tt-gray-dark">Coming soon! We're working on bringing you the best flight deals.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Flights;
