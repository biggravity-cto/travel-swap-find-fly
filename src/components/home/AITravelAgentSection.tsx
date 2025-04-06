
import React from 'react';
import AITravelAgent from '@/components/AITravelAgent';

const AITravelAgentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Your Personal AI Travel Agent</h2>
          <p className="text-tt-gray-dark">Let our smart assistant help you find the perfect trip and uncover exclusive rewards</p>
        </div>
        
        <AITravelAgent />
      </div>
    </section>
  );
};

export default AITravelAgentSection;
