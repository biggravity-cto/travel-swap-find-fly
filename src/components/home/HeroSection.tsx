
import React from 'react';
import SearchForm from '@/components/SearchForm';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
