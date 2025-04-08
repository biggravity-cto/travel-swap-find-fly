
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Sparkles, Zap, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme, themeInfo } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';

const AITravelAgentSection = () => {
  const { theme } = useTheme();
  
  // Default TransferTravel theme
  if (theme === 'default') {
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
  }
  
  // Google Material Design theme
  if (theme === 'google') {
    return (
      <section className="py-12 md:py-16 bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              New feature
            </div>
            <h2 className="text-2xl md:text-3xl font-normal mb-4">AI-Powered Travel Assistant</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get personalized travel recommendations and support from our machine learning travel assistant.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-md rounded-[4px] border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center mb-4">
                  <Sparkles className="text-[#4285F4]" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">Our AI analyzes thousands of travel options to find the perfect match for your preferences.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md rounded-[4px] border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center mb-4">
                  <MessageSquare className="text-[#4285F4]" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Natural Conversation</h3>
                <p className="text-gray-600">Just chat with our assistant about your travel needs in simple, everyday language.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md rounded-[4px] border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center mb-4">
                  <Zap className="text-[#4285F4]" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Real-time Support</h3>
                <p className="text-gray-600">Get instant answers about bookings, destinations, or finding the best deals.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/travel-agent">
              <Button size="lg" className="bg-[#4285F4] hover:bg-[#3367D6] shadow-sm">
                Try AI Travel Assistant
              </Button>
            </Link>
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
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Travel Intelligence.</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              A thoughtfully designed AI companion that learns your preferences and curates exceptional travel experiences.
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden bg-black text-white">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-medium mb-4">AI Travel Agent</h3>
                <p className="text-white/80 mb-6">
                  Our advanced machine learning algorithms understand your unique travel style to create tailored recommendations that feel surprisingly personal.
                </p>
                <Link to="/travel-agent">
                  <Button className="rounded-full bg-white text-black hover:bg-white/90">
                    Try it now
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#0071E3] to-[#5AC8FA] p-12 flex items-center justify-center">
                <Bot className="w-32 h-32 text-white/90" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              AI Travel Agent is available for all bookings and destinations.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  // Kayak theme
  if (theme === 'kayak') {
    return (
      <section className="py-10 md:py-14 bg-gray-100">
        <div className="container-custom">
          <div className="mb-8">
            <div className="inline-block bg-[#FF690F] text-white font-bold uppercase tracking-wide px-3 py-1 mb-4">
              AI POWERED
            </div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
              TRAVEL SMARTER WITH AI
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Our AI assistant searches hundreds of travel sites to find you the absolute best deals. It can also help you sell unused tickets and bookings for quick cash.
            </p>
          </div>
          
          <div className="bg-white p-5 border-2 border-gray-200 shadow-md rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <div className="font-bold uppercase tracking-wide text-sm text-[#1C6CCC] mb-2">AI BENEFITS</div>
                <h3 className="text-xl font-bold mb-3">24/7 INTELLIGENT TRAVEL ASSISTANT</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-[#FF690F] rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                    <p>COMPARE THOUSANDS OF DEALS IN SECONDS</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#FF690F] rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                    <p>GET PRICE DROP ALERTS FOR YOUR DESTINATIONS</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#FF690F] rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                    <p>SELL YOUR BOOKINGS FOR MAXIMUM RETURN</p>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <Link to="/travel-agent">
                  <Button size="lg" className="w-full bg-[#FF690F] hover:bg-[#e55a00] text-white font-bold uppercase tracking-wide">
                    USE AI AGENT NOW
                  </Button>
                </Link>
                <div className="mt-3 text-center">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded uppercase">
                    100% FREE TO USE
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/travel-agent/how-it-works" className="inline-flex items-center text-[#1C6CCC] font-bold hover:underline">
              SEE HOW OUR AI WORKS <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  // Fallback
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
