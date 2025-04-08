
import React from 'react';
import { Tag, Clock, Shield, CheckCircle, Zap, RefreshCw, PieChart, Target, Layers } from 'lucide-react';
import { useTheme, themeInfo } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  const { theme } = useTheme();
  
  // Default TransferTravel theme
  if (theme === 'default') {
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
  }
  
  // Google Material Design theme
  if (theme === 'google') {
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="text-2xl font-normal text-gray-800 mb-2">How it works</h2>
            <p className="text-gray-600">
              Our platform connects travelers looking for deals with those who need to sell non-refundable bookings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md rounded-[4px] border-0">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center mr-4">
                    <span className="font-medium text-[#4285F4]">1</span>
                  </div>
                  <h3 className="text-lg font-medium">Search for deals</h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Explore our marketplace for discounted flights, hotels, and vacation packages from people who can no longer use their bookings.
                </p>
                <div className="mt-4 pl-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 mr-2 mb-2">
                    <CheckCircle size={14} className="mr-1 text-[#34A853]" /> Verified listings
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 mr-2 mb-2">
                    <CheckCircle size={14} className="mr-1 text-[#34A853]" /> Save up to 60%
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md rounded-[4px] border-0">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center mr-4">
                    <span className="font-medium text-[#4285F4]">2</span>
                  </div>
                  <h3 className="text-lg font-medium">Sell your bookings</h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Create a listing for your non-refundable travel booking in just a few steps. Set your price and add booking details.
                </p>
                <div className="mt-4 pl-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 mr-2 mb-2">
                    <CheckCircle size={14} className="mr-1 text-[#34A853]" /> Quick listing
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 mr-2 mb-2">
                    <CheckCircle size={14} className="mr-1 text-[#34A853]" /> Recovery options
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md rounded-[4px] border-0">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center mr-4">
                    <span className="font-medium text-[#4285F4]">3</span>
                  </div>
                  <h3 className="text-lg font-medium">Secure transfer</h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Our platform facilitates the secure transfer of travel bookings between the seller and buyer with payment protection.
                </p>
                <div className="mt-4 pl-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 mr-2 mb-2">
                    <CheckCircle size={14} className="mr-1 text-[#34A853]" /> Buyer protection
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 mr-2 mb-2">
                    <CheckCircle size={14} className="mr-1 text-[#34A853]" /> Seller verification
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  
  // Apple theme
  if (theme === 'apple') {
    return (
      <section className="py-24 md:py-32">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-6">A better way to travel.</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Our platform makes booking and selling travel effortlessly simple.
            </p>
          </div>
          
          <div className="space-y-20">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-medium mb-4">Discover</h3>
                <p className="text-gray-500">
                  Find incredible travel deals from sellers across the globe, all in one beautifully designed marketplace.
                </p>
              </div>
              <div className="md:col-span-3 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
                  alt="Discover travel" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3 md:order-1 order-2 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519160558534-579f5106e43f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Release travel" 
                  className="w-full h-auto"
                />
              </div>
              <div className="md:col-span-2 md:order-2 order-1">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <RefreshCw size={24} />
                </div>
                <h3 className="text-2xl font-medium mb-4">Release</h3>
                <p className="text-gray-500">
                  Turn your unused travel bookings into currency through our intuitive listing process.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-2xl font-medium mb-4">Secure</h3>
                <p className="text-gray-500">
                  Every transaction is protected by our comprehensive security measures and booking verification system.
                </p>
              </div>
              <div className="md:col-span-3 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534445967719-8ae7b972b1a9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Secure travel" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Kayak theme
  if (theme === 'kayak') {
    return (
      <section className="py-10 md:py-14 bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <div className="inline-block bg-gray-100 text-[#FF690F] font-bold uppercase tracking-wide px-3 py-1 mb-4">
              EASY PROCESS
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">
              HOW TO SAVE BIG ON TRAVEL
            </h2>
            <p className="text-gray-700 max-w-3xl border-l-4 border-[#FF690F] pl-4 py-1">
              Our platform helps you find travel deals and sell your unused bookings in 3 simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 border-2 border-gray-200 rounded-md">
              <div className="flex items-center mb-4">
                <div className="bg-[#FF690F] text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  1
                </div>
                <h3 className="font-bold uppercase text-gray-900">SEARCH DEALS</h3>
              </div>
              <div className="pl-13 ml-4 border-l-2 border-gray-200 py-2">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">COMPARE PRICES ACROSS HUNDREDS OF SELLERS</p>
                  </li>
                  <li className="flex items-start">
                    <Target size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">FILTER BY DESTINATION, DATE & PRICE</p>
                  </li>
                  <li className="flex items-start">
                    <Target size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">FIND DISCOUNTS UP TO 60% OFF RETAIL</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-5 border-2 border-gray-200 rounded-md">
              <div className="flex items-center mb-4">
                <div className="bg-[#FF690F] text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  2
                </div>
                <h3 className="font-bold uppercase text-gray-900">SELL BOOKINGS</h3>
              </div>
              <div className="pl-13 ml-4 border-l-2 border-gray-200 py-2">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <PieChart size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">CREATE DETAILED LISTING IN MINUTES</p>
                  </li>
                  <li className="flex items-start">
                    <PieChart size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">SET YOUR PRICE & MANAGE OFFERS</p>
                  </li>
                  <li className="flex items-start">
                    <PieChart size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">RECOVER MONEY FROM NON-REFUNDABLE TRAVEL</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-5 border-2 border-gray-200 rounded-md">
              <div className="flex items-center mb-4">
                <div className="bg-[#FF690F] text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  3
                </div>
                <h3 className="font-bold uppercase text-gray-900">SECURE TRANSFER</h3>
              </div>
              <div className="pl-13 ml-4 border-l-2 border-gray-200 py-2">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Layers size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">PROTECTED PAYMENT PROCESSING</p>
                  </li>
                  <li className="flex items-start">
                    <Layers size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">VERIFIED SELLER CREDENTIALS</p>
                  </li>
                  <li className="flex items-start">
                    <Layers size={16} className="text-[#FF690F] mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm">HASSLE-FREE BOOKING TRANSFERS</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 border-l-4 border-yellow-400 text-yellow-800 font-medium">
            <div className="flex items-center">
              <Shield size={20} className="mr-2" />
              <p>ALL BOOKINGS ARE VERIFIED & TRANSACTIONS ARE PROTECTED BY OUR BUYER GUARANTEE</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Fallback
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">How It Works</h2>
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
