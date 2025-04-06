
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import PopularDestinationsSection from '@/components/home/PopularDestinationsSection';
import FeaturedListingsSection from '@/components/home/FeaturedListingsSection';
import AITravelAgentSection from '@/components/home/AITravelAgentSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <PopularDestinationsSection />
        <AITravelAgentSection />
        <FeaturedListingsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
