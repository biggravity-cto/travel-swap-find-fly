
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Zap, Gift, Search, Check, Calendar, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface JourneyStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  onClick: () => void;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ title, description, icon, ctaText, onClick }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow cursor-pointer" onClick={onClick}>
      <CardContent className="flex items-start p-6">
        <div className="mr-4 text-tt-blue">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <Button variant="ghost" className="text-tt-blue p-0 flex items-center hover:bg-transparent">
            {ctaText} <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const TravelAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI Travel Assistant. How can I help you plan your next adventure or sell your travel deals?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [activeUserType, setActiveUserType] = useState<'traveler' | 'seller' | null>(null);
  const [activeTravelerType, setActiveTravelerType] = useState<'vacation' | 'business' | 'deal-hunter' | null>(null);
  const [activeSellerType, setActiveSellerType] = useState<'reseller' | 'affiliate' | 'provider' | null>(null);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response 
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getResponseBasedOnContext(inputValue, activeUserType, activeTravelerType, activeSellerType),
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getResponseBasedOnContext = (
    message: string, 
    userType: 'traveler' | 'seller' | null,
    travelerType: 'vacation' | 'business' | 'deal-hunter' | null,
    sellerType: 'reseller' | 'affiliate' | 'provider' | null
  ): string => {
    // This would be replaced with actual AI logic in production
    if (userType === 'traveler') {
      if (travelerType === 'vacation') {
        return "Based on your preferences, I've found several vacation packages that might interest you. Would you like me to set up deal alerts for destinations like Barcelona or Bali?";
      } else if (travelerType === 'business') {
        return "I can help you find business-friendly accommodations with meeting facilities. Would you like me to focus on flexible booking options that allow for last-minute changes?";
      } else if (travelerType === 'deal-hunter') {
        return "I've set up your deal alerts! I'll notify you when prices drop for your selected destinations. In the meantime, there's a flash sale on flights to Asia this weekend.";
      }
    } else if (userType === 'seller') {
      if (sellerType === 'reseller') {
        return "I can help you list your unused travel bookings. Would you like tips on how to optimize your listing for maximum visibility and quicker sales?";
      } else if (sellerType === 'affiliate') {
        return "As an affiliate marketer, you can earn up to 8% commission on referrals. Let me show you how to create custom tracking links for your marketing campaigns.";
      } else if (sellerType === 'provider') {
        return "I can help you list your hotel or travel experience on our marketplace. Would you like tips on pricing strategies that increase bookings?";
      }
    }
    
    return "I found several options that might interest you. Based on your message, I recommend exploring our special deals section. Would you like more specific guidance? You can select your journey type from the right panel.";
  };

  const resetJourney = () => {
    setActiveUserType(null);
    setActiveTravelerType(null);
    setActiveSellerType(null);
    setMessages([{
      id: Date.now().toString(),
      content: "Let's start fresh! How can I assist you today?",
      role: 'assistant',
      timestamp: new Date(),
    }]);
  };

  const startTravelerJourney = (type: 'vacation' | 'business' | 'deal-hunter') => {
    setActiveUserType('traveler');
    setActiveTravelerType(type);
    
    const messages = {
      'vacation': "I'll help you plan the perfect vacation! Tell me about your dream destination, or I can suggest popular options based on your preferences.",
      'business': "Business travel made easy! I can find you hotels with work amenities, convenient flight times, and even suggest local transportation options.",
      'deal-hunter': "Let's find you amazing travel deals! I can set up price alerts, notify you of flash sales, and help you discover hidden gems at budget prices."
    };
    
    setMessages([{
      id: Date.now().toString(),
      content: messages[type],
      role: 'assistant',
      timestamp: new Date(),
    }]);
  };

  const startSellerJourney = (type: 'reseller' | 'affiliate' | 'provider') => {
    setActiveUserType('seller');
    setActiveSellerType(type);
    
    const messages = {
      'reseller': "I'll help you resell your unused travel bookings! Let me guide you through creating attractive listings that sell quickly and at the best price.",
      'affiliate': "Welcome to our affiliate program! I can show you how to earn commissions by promoting travel deals to your audience with custom tracking links.",
      'provider': "Ready to list your travel services? I'll help you showcase your hotel, tour, or experience to thousands of potential customers."
    };
    
    setMessages([{
      id: Date.now().toString(),
      content: messages[type],
      role: 'assistant',
      timestamp: new Date(),
    }]);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-2">Your Personal AI Travel Agent</h1>
            <p className="text-tt-gray-dark max-w-2xl">Let our intelligent assistant help you plan trips, find deals, or maximize your earnings as a travel seller</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chat section - Left column */}
            <div>
              <div className="bg-white rounded-lg shadow-sm mb-4 p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-tt-blue">
                  <MessageSquare className="mr-2" size={20} />
                  Chat with your AI Travel Agent
                </h2>
                
                <div className="h-96 overflow-y-auto mb-4 border rounded-md p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 ${
                        message.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-block p-3 rounded-lg max-w-[80%] ${
                          message.role === 'user'
                            ? 'bg-tt-blue text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {message.content}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about travel..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit">
                    <Zap size={16} className="mr-1" /> Ask
                  </Button>
                </form>
              </div>
              
              {(activeUserType || activeTravelerType || activeSellerType) && (
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    onClick={resetJourney}
                    className="text-tt-gray-dark"
                  >
                    Start a new journey
                  </Button>
                </div>
              )}
            </div>
            
            {/* User journey flows - Right column */}
            <div>
              {!activeUserType && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">How can I help you today?</h2>
                  <p className="text-gray-600 mb-6">Select your journey to get personalized assistance</p>
                  
                  <Tabs defaultValue="traveler">
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="traveler">I want to travel</TabsTrigger>
                      <TabsTrigger value="seller">I want to sell</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="traveler" className="space-y-4">
                      <JourneyStep
                        title="Plan a Vacation"
                        description="Find destinations, accommodations, and activities for your next getaway"
                        icon={<Calendar size={24} />}
                        ctaText="Start planning"
                        onClick={() => startTravelerJourney('vacation')}
                      />
                      
                      <JourneyStep
                        title="Business Travel"
                        description="Efficient booking for work trips with business-friendly amenities"
                        icon={<Briefcase size={24} />}
                        ctaText="Book business travel"
                        onClick={() => startTravelerJourney('business')}
                      />
                      
                      <JourneyStep
                        title="Deal Hunter"
                        description="Get alerts for price drops and find the best travel bargains"
                        icon={<Search size={24} />}
                        ctaText="Find deals"
                        onClick={() => startTravelerJourney('deal-hunter')}
                      />
                    </TabsContent>
                    
                    <TabsContent value="seller" className="space-y-4">
                      <JourneyStep
                        title="Resell Your Bookings"
                        description="Sell your unused hotel reservations, flights, or packages"
                        icon={<Users size={24} />}
                        ctaText="Start selling"
                        onClick={() => startSellerJourney('reseller')}
                      />
                      
                      <JourneyStep
                        title="Become an Affiliate"
                        description="Earn commissions by promoting travel deals to your audience"
                        icon={<Gift size={24} />}
                        ctaText="Join affiliate program"
                        onClick={() => startSellerJourney('affiliate')}
                      />
                      
                      <JourneyStep
                        title="List as a Provider"
                        description="Add your hotel, tour, or travel experience to our marketplace"
                        icon={<Check size={24} />}
                        ctaText="List your service"
                        onClick={() => startSellerJourney('provider')}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              )}
              
              {activeUserType === 'traveler' && activeTravelerType && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {activeTravelerType === 'vacation' ? 'Vacation Planning' : 
                     activeTravelerType === 'business' ? 'Business Travel' : 
                     'Deal Alerts'}
                  </h2>
                  
                  {activeTravelerType === 'vacation' && (
                    <div className="space-y-4">
                      <p className="text-gray-600">Tell me about your dream vacation:</p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Where do you want to go?</label>
                          <Input placeholder="e.g., Beach, Mountains, Europe..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">When are you planning to travel?</label>
                          <Input placeholder="e.g., Next month, Summer 2025..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">What's your budget range?</label>
                          <Input placeholder="e.g., $1000-2000, Budget-friendly..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Any specific preferences?</label>
                          <Textarea placeholder="e.g., Family-friendly, All-inclusive, Cultural experiences..." />
                        </div>
                      </div>
                      
                      <Button className="w-full">Find Vacation Options</Button>
                    </div>
                  )}
                  
                  {activeTravelerType === 'business' && (
                    <div className="space-y-4">
                      <p className="text-gray-600">Let me help with your business travel:</p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Destination city</label>
                          <Input placeholder="e.g., New York, London, Tokyo..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Travel dates</label>
                          <div className="grid grid-cols-2 gap-3">
                            <Input placeholder="Check-in" />
                            <Input placeholder="Check-out" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Business requirements</label>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">WiFi</Button>
                            <Button variant="outline" size="sm">Meeting Room</Button>
                            <Button variant="outline" size="sm">Airport Transfer</Button>
                            <Button variant="outline" size="sm">Flexible Booking</Button>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full">Find Business Hotels</Button>
                    </div>
                  )}
                  
                  {activeTravelerType === 'deal-hunter' && (
                    <div className="space-y-4">
                      <p className="text-gray-600">I'll alert you when travel prices drop!</p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Destinations you're interested in</label>
                          <Input placeholder="e.g., Paris, Thailand, Caribbean..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Flexible travel period</label>
                          <div className="grid grid-cols-2 gap-3">
                            <Input placeholder="From" />
                            <Input placeholder="To" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Price range</label>
                          <Input placeholder="e.g., Under $500, Best value..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Deal types</label>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">Flights</Button>
                            <Button variant="outline" size="sm">Hotels</Button>
                            <Button variant="outline" size="sm">Packages</Button>
                            <Button variant="outline" size="sm">Last Minute</Button>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full">Set Up Deal Alerts</Button>
                    </div>
                  )}
                </div>
              )}
              
              {activeUserType === 'seller' && activeSellerType && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {activeSellerType === 'reseller' ? 'Resell Your Travel' : 
                     activeSellerType === 'affiliate' ? 'Affiliate Marketing' : 
                     'List Your Services'}
                  </h2>
                  
                  {activeSellerType === 'reseller' && (
                    <div className="space-y-4">
                      <p className="text-gray-600">Sell your unused travel bookings quickly and safely:</p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">What are you selling?</label>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">Hotel Booking</Button>
                            <Button variant="outline" size="sm">Flight Ticket</Button>
                            <Button variant="outline" size="sm">Package Deal</Button>
                            <Button variant="outline" size="sm">Other</Button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Booking details</label>
                          <Textarea placeholder="Describe your booking (dates, location, etc.)" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Original price paid</label>
                          <Input placeholder="e.g., $500" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Asking price</label>
                          <Input placeholder="e.g., $400" />
                        </div>
                      </div>
                      
                      <Button className="w-full">Create Listing</Button>
                    </div>
                  )}
                  
                  {activeSellerType === 'affiliate' && (
                    <div className="space-y-4">
                      <p className="text-gray-600">Earn commissions by promoting travel deals:</p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Your promotional platform</label>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">Blog</Button>
                            <Button variant="outline" size="sm">Social Media</Button>
                            <Button variant="outline" size="sm">YouTube</Button>
                            <Button variant="outline" size="sm">Email</Button>
                            <Button variant="outline" size="sm">Other</Button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Audience interests</label>
                          <Input placeholder="e.g., Luxury travel, Budget backpacking..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Estimated audience size</label>
                          <Input placeholder="e.g., 5,000 followers, 10,000 monthly readers..." />
                        </div>
                      </div>
                      
                      <Button className="w-full">Create Affiliate Account</Button>
                    </div>
                  )}
                  
                  {activeSellerType === 'provider' && (
                    <div className="space-y-4">
                      <p className="text-gray-600">List your travel service or accommodation:</p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Service type</label>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">Hotel/Accommodation</Button>
                            <Button variant="outline" size="sm">Tour/Activity</Button>
                            <Button variant="outline" size="sm">Transport</Button>
                            <Button variant="outline" size="sm">Other</Button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Service name</label>
                          <Input placeholder="e.g., Beachside Villa, Mountain Hiking Tour..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <Input placeholder="e.g., Bali, Indonesia" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <Textarea placeholder="Describe what makes your service special..." />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Price range</label>
                          <Input placeholder="e.g., $100-200 per night, $50 per person..." />
                        </div>
                      </div>
                      
                      <Button className="w-full">Create Provider Listing</Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelAgent;
