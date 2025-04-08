
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PopularDestinationsSection from '@/components/home/PopularDestinationsSection';
import FeaturedListingsSection from '@/components/home/FeaturedListingsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CTASection from '@/components/home/CTASection';
import AITravelAgentSection from '@/components/home/AITravelAgentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <HeroSection />
        <PopularDestinationsSection />
        <FeaturedListingsSection />
        <AITravelAgentSection />
        <HowItWorksSection />
        <CTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
