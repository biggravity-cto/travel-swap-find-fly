
import React from 'react';
import { ArrowRight, Tag, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SellTravelCTA = () => {
  return (
    <div className="bg-gradient-to-br from-tt-blue to-tt-blue-dark text-white rounded-xl overflow-hidden shadow-lg">
      <div className="p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need to sell your non-refundable booking?</h2>
        <p className="text-white/90 mb-6 max-w-2xl">
          List your flight, hotel, or package and recover up to 80% of what you paid. 
          Our secure marketplace connects you with buyers looking for great deals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Tag size={20} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Get the best price</h3>
              <p className="text-white/80 text-sm">Set your own price or let us suggest the optimal price point</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Sell quickly</h3>
              <p className="text-white/80 text-sm">Reach thousands of potential buyers within minutes</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Secure process</h3>
              <p className="text-white/80 text-sm">We handle the payment and transfer process safely</p>
            </div>
          </div>
        </div>
        
        <Button size="lg" className="bg-white text-tt-blue hover:bg-white/90">
          Sell Your Travel
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default SellTravelCTA;
