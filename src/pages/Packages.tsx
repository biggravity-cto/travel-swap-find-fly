
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';

const Packages = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container-custom py-12">
          <h1 className="text-3xl font-display font-semibold mb-6">Travel Packages</h1>
          <p className="text-tt-gray-dark mb-8">Find vacation packages or browse discounted resale package deals.</p>
          
          <SearchForm initialTab="packages" />
          
          <div className="mt-12">
            <h2 className="text-2xl font-display font-semibold mb-4">Popular Package Deals</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <p className="text-center text-tt-gray-dark">Coming soon! We're working on bringing you the best package deals.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;
