
import React from 'react';
import { Tag, Clock, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">How TransferTravel Works</h2>
          <p className="text-tt-gray-dark max-w-2xl mx-auto">
            Whether you're buying travel or selling unused bookings, our platform makes it safe and easy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-tt-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="text-tt-teal" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Amazing Deals</h3>
            <p className="text-tt-gray-dark">
              Browse thousands of discounted travel listings and book your next trip for much less than retail price.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-tt-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-tt-teal" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">List in Minutes</h3>
            <p className="text-tt-gray-dark">
              Need to sell your travel? List your non-refundable booking in just a few minutes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-tt-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-tt-teal" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
            <p className="text-tt-gray-dark">
              Our secure platform handles all payments and transfers, keeping both buyers and sellers protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
