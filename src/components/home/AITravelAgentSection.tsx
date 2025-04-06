
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AITravelAgentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Your Personal AI Travel Agent</h2>
          <p className="text-tt-gray-dark mb-8">Let our smart assistant help you find the perfect trip, sell your unused bookings, or uncover exclusive rewards tailored just for you.</p>
          
          <Link to="/travel-agent">
            <Button size="lg" className="bg-tt-blue hover:bg-tt-blue-dark group">
              Start planning with AI <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AITravelAgentSection;
