
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageSquare, Zap, ArrowRight, Airplane, Hotel, Package, Briefcase, Calendar, Compass, Map, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarFooter
} from '@/components/ui/sidebar';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  isIntro?: boolean;
  flow?: StepByStepFlow;
  currentStep?: number;
}

interface PromptSuggestion {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'vacation' | 'business' | 'deal-hunter' | 'reseller' | 'affiliate' | 'provider';
  category: 'traveler' | 'seller';
}

interface Step {
  question: string;
  options?: string[];
  type: 'text' | 'options' | 'date' | 'location' | 'budget';
  fieldName: string;
}

interface StepByStepFlow {
  type: 'vacation' | 'business' | 'deal-hunter' | 'reseller' | 'affiliate' | 'provider';
  title: string;
  steps: Step[];
  userInput: Record<string, string>;
}

const TravelAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi! I'm your AI Travel Assistant. How can I help with your travel plans today?",
      role: 'assistant',
      timestamp: new Date(),
      isIntro: true
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentFlow, setCurrentFlow] = useState<StepByStepFlow | null>(null);
  
  const travelerPrompts: PromptSuggestion[] = [
    {
      id: 'vacation',
      title: 'Plan a Vacation',
      description: 'Find destinations, accommodations, and activities',
      icon: <Calendar className="h-4 w-4" />,
      type: 'vacation',
      category: 'traveler'
    },
    {
      id: 'business',
      title: 'Business Travel',
      description: 'Efficient booking with business amenities',
      icon: <Briefcase className="h-4 w-4" />,
      type: 'business',
      category: 'traveler'
    },
    {
      id: 'deal-hunter',
      title: 'Find Travel Deals',
      description: 'Get alerts for price drops and bargains',
      icon: <Compass className="h-4 w-4" />,
      type: 'deal-hunter',
      category: 'traveler'
    }
  ];
  
  const sellerPrompts: PromptSuggestion[] = [
    {
      id: 'reseller',
      title: 'Resell Your Bookings',
      description: 'Sell unused reservations or tickets',
      icon: <Airplane className="h-4 w-4" />,
      type: 'reseller',
      category: 'seller'
    },
    {
      id: 'affiliate',
      title: 'Become an Affiliate',
      description: 'Earn commissions promoting travel deals',
      icon: <Users className="h-4 w-4" />,
      type: 'affiliate',
      category: 'seller'
    },
    {
      id: 'provider',
      title: 'List as a Provider',
      description: 'Add your services to our marketplace',
      icon: <Map className="h-4 w-4" />,
      type: 'provider',
      category: 'seller'
    }
  ];
  
  // These flows define the step-by-step conversation for each prompt type
  const stepByStepFlows: Record<string, StepByStepFlow> = {
    vacation: {
      type: 'vacation',
      title: 'Vacation Planning',
      steps: [
        { 
          question: "Where would you like to go for your vacation?", 
          type: 'location',
          fieldName: 'destination'
        },
        { 
          question: "When are you planning to travel?", 
          type: 'date',
          fieldName: 'travelDates'
        },
        { 
          question: "What's your budget range for this trip?", 
          type: 'budget',
          fieldName: 'budget'
        },
        { 
          question: "What type of activities are you interested in?", 
          options: ["Beach & Relaxation", "Cultural Experiences", "Adventure & Outdoors", "Family-friendly", "Luxury & Spa"],
          type: 'options',
          fieldName: 'activities'
        }
      ],
      userInput: {}
    },
    business: {
      type: 'business',
      title: 'Business Travel Planning',
      steps: [
        { 
          question: "What's your business destination?", 
          type: 'location',
          fieldName: 'destination'
        },
        { 
          question: "What are your travel dates?", 
          type: 'date',
          fieldName: 'travelDates'
        },
        { 
          question: "What business amenities do you require?", 
          options: ["WiFi", "Meeting Rooms", "Business Center", "Airport Transfer", "Flexible Booking"],
          type: 'options',
          fieldName: 'amenities'
        }
      ],
      userInput: {}
    },
    'deal-hunter': {
      type: 'deal-hunter',
      title: 'Travel Deal Alerts',
      steps: [
        { 
          question: "Which destinations are you interested in finding deals for?", 
          type: 'location',
          fieldName: 'destinations'
        },
        { 
          question: "What's your flexible travel period?", 
          type: 'date',
          fieldName: 'travelPeriod'
        },
        { 
          question: "What's your target budget range?", 
          type: 'budget',
          fieldName: 'budget'
        },
        { 
          question: "What type of deals are you most interested in?", 
          options: ["Flights", "Hotels", "All-Inclusive Packages", "Last-Minute Deals"],
          type: 'options',
          fieldName: 'dealTypes'
        }
      ],
      userInput: {}
    },
    reseller: {
      type: 'reseller',
      title: 'Resell Your Travel Bookings',
      steps: [
        { 
          question: "What type of booking are you looking to resell?", 
          options: ["Hotel Booking", "Flight Ticket", "Package Deal", "Other"],
          type: 'options',
          fieldName: 'bookingType'
        },
        { 
          question: "What are the dates of your booking?", 
          type: 'date',
          fieldName: 'bookingDates'
        },
        { 
          question: "What was the original price you paid?", 
          type: 'budget',
          fieldName: 'originalPrice'
        },
        { 
          question: "What price are you hoping to sell it for?", 
          type: 'budget',
          fieldName: 'askingPrice'
        }
      ],
      userInput: {}
    },
    affiliate: {
      type: 'affiliate',
      title: 'Affiliate Marketing',
      steps: [
        { 
          question: "What platform do you use to promote travel deals?", 
          options: ["Blog", "Social Media", "YouTube", "Email List", "Other"],
          type: 'options',
          fieldName: 'platform'
        },
        { 
          question: "What travel niche are you focused on?", 
          type: 'text',
          fieldName: 'niche'
        },
        { 
          question: "What's your approximate audience size?", 
          type: 'text',
          fieldName: 'audienceSize'
        }
      ],
      userInput: {}
    },
    provider: {
      type: 'provider',
      title: 'List Your Travel Services',
      steps: [
        { 
          question: "What type of service do you offer?", 
          options: ["Hotel/Accommodation", "Tour/Activity", "Transportation", "Other"],
          type: 'options',
          fieldName: 'serviceType'
        },
        { 
          question: "What's the name of your service?", 
          type: 'text',
          fieldName: 'serviceName'
        },
        { 
          question: "Where is your service located?", 
          type: 'location',
          fieldName: 'location'
        },
        { 
          question: "What's your pricing structure?", 
          type: 'text',
          fieldName: 'pricing'
        }
      ],
      userInput: {}
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() && !currentFlow) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue || "I'd like assistance with this.",
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      let aiResponse: Message;
      
      if (currentFlow) {
        const lastMessage = messages[messages.length - 1];
        const currentStep = lastMessage.flow?.currentStep || 0;
        
        // Store user input in the flow
        if (lastMessage.role === 'assistant' && lastMessage.flow) {
          const updatedFlow = { ...currentFlow };
          const field = updatedFlow.steps[currentStep - 1]?.fieldName;
          
          if (field) {
            updatedFlow.userInput[field] = inputValue;
          }
          
          setCurrentFlow(updatedFlow);
        }
        
        // Move to next step or finish flow
        if (currentStep < currentFlow.steps.length) {
          const nextStep = currentStep + 1;
          aiResponse = {
            id: Date.now().toString(),
            content: currentFlow.steps[nextStep - 1].question,
            role: 'assistant',
            timestamp: new Date(),
            flow: currentFlow,
            currentStep: nextStep
          };
        } else {
          // Flow complete - generate summary
          const summaryContent = generateFlowSummary(currentFlow);
          aiResponse = {
            id: Date.now().toString(),
            content: summaryContent,
            role: 'assistant',
            timestamp: new Date()
          };
          setCurrentFlow(null);
        }
      } else {
        // Regular response
        aiResponse = {
          id: Date.now().toString(),
          content: "I can help with that! Would you like some specific travel recommendations, or do you want to try one of our guided experiences from the sidebar?",
          role: 'assistant',
          timestamp: new Date(),
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);
  };

  const startPromptFlow = (prompt: PromptSuggestion) => {
    const flow = stepByStepFlows[prompt.type];
    if (!flow) return;
    
    // Reset flow state with fresh userInput
    const freshFlow = {
      ...flow,
      userInput: {}
    };
    
    setCurrentFlow(freshFlow);
    
    // Add intro message and first question
    const introMessage: Message = {
      id: Date.now().toString(),
      content: `Let's ${prompt.title.toLowerCase()}! I'll ask you a few questions to better understand your needs.`,
      role: 'assistant',
      timestamp: new Date(),
      flow: freshFlow,
      currentStep: 0
    };
    
    const firstQuestion: Message = {
      id: (Date.now() + 1).toString(),
      content: freshFlow.steps[0].question,
      role: 'assistant',
      timestamp: new Date(),
      flow: freshFlow,
      currentStep: 1
    };
    
    setMessages(prev => [...prev, introMessage, firstQuestion]);
  };

  const generateFlowSummary = (flow: StepByStepFlow): string => {
    // Generate different summary based on flow type
    switch (flow.type) {
      case 'vacation':
        return `Thanks for providing all that information! Based on your preferences, I've found some great vacation options for ${flow.userInput.destination} within your budget of ${flow.userInput.budget}. You mentioned interest in ${flow.userInput.activities} activities, so I recommend visiting during ${flow.userInput.travelDates}. Would you like me to send you some specific hotel and activity recommendations?`;
      
      case 'business':
        return `Perfect! I've noted your business trip to ${flow.userInput.destination} on ${flow.userInput.travelDates}. I'll find accommodations with ${flow.userInput.amenities} as requested. Would you like me to prioritize hotels close to any specific business district or venue?`;
      
      case 'deal-hunter':
        return `I've set up deal alerts for ${flow.userInput.destinations} during ${flow.userInput.travelPeriod} with a budget of ${flow.userInput.budget}. I'll notify you when I find ${flow.userInput.dealTypes} deals that match your criteria. In the meantime, would you like to see some current special offers?`;
      
      case 'reseller':
        return `I've prepared a listing for your ${flow.userInput.bookingType} for ${flow.userInput.bookingDates}. Original price: ${flow.userInput.originalPrice}, asking price: ${flow.userInput.askingPrice}. Would you like me to suggest the best marketplaces to list this booking, or help optimize your listing description?`;
      
      case 'affiliate':
        return `Great! I've registered your affiliate account for your ${flow.userInput.platform} with a focus on ${flow.userInput.niche} and an audience of ${flow.userInput.audienceSize}. I've prepared custom tracking links and promotional materials for you. Would you like to see our current top-converting offers?`;
      
      case 'provider':
        return `I've created a draft listing for your ${flow.userInput.serviceType} called "${flow.userInput.serviceName}" located in ${flow.userInput.location} with pricing at ${flow.userInput.pricing}. Would you like help enhancing your listing with SEO optimizations and professional photography services?`;
      
      default:
        return "Thanks for providing all that information! I'll use these details to help you with your travel needs. Is there anything specific you'd like to know?";
    }
  };

  // Reference to message container for auto-scrolling
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-[calc(100vh-140px)]">
            {/* Left Sidebar */}
            <Sidebar>
              <SidebarHeader>
                <div className="flex items-center px-2 py-1">
                  <MessageSquare className="mr-2 h-5 w-5 text-tt-blue" />
                  <h2 className="text-lg font-semibold text-tt-blue">AI Travel Agent</h2>
                </div>
              </SidebarHeader>
              
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Traveler Experiences</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {travelerPrompts.map((prompt) => (
                        <SidebarMenuItem key={prompt.id}>
                          <SidebarMenuButton 
                            onClick={() => startPromptFlow(prompt)}
                            tooltip={prompt.description}
                          >
                            {prompt.icon}
                            <span>{prompt.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarSeparator />
                
                <SidebarGroup>
                  <SidebarGroupLabel>Seller Options</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {sellerPrompts.map((prompt) => (
                        <SidebarMenuItem key={prompt.id}>
                          <SidebarMenuButton 
                            onClick={() => startPromptFlow(prompt)}
                            tooltip={prompt.description}
                          >
                            {prompt.icon}
                            <span>{prompt.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              
              <SidebarFooter>
                <div className="px-4 py-2 text-xs text-muted-foreground">
                  <p>© 2025 TransferTravel</p>
                </div>
              </SidebarFooter>
            </Sidebar>
            
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="max-w-3xl mx-auto mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-6 ${
                        message.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-block p-4 rounded-lg max-w-[85%] ${
                          message.role === 'user'
                            ? 'bg-tt-blue text-white'
                            : 'bg-white border border-gray-200 shadow-sm text-gray-800'
                        }`}
                      >
                        <div className="prose prose-sm">{message.content}</div>
                        
                        {/* Render options if this is a step with options */}
                        {message.flow?.steps[message.currentStep! - 1]?.options && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {message.flow.steps[message.currentStep! - 1].options!.map((option) => (
                              <Button 
                                key={option} 
                                variant="outline" 
                                size="sm"
                                className={message.role === 'user' ? 'bg-white text-tt-blue hover:bg-white/90' : ''}
                                onClick={() => {
                                  setInputValue(option);
                                  handleSendMessage(new Event('submit') as any);
                                }}
                              >
                                {option}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 mx-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  ))}
                  
                  {/* Loading indicator */}
                  {loading && (
                    <div className="flex items-center space-x-2 text-left mb-6">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" 
                        style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" 
                        style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" 
                        style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              {/* Input Area */}
              <div className="border-t bg-white p-4">
                <div className="max-w-3xl mx-auto">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      placeholder="Type your message here..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-grow"
                      disabled={loading}
                    />
                    <Button type="submit" disabled={loading}>
                      <Zap size={16} className="mr-1" /> Send
                    </Button>
                  </form>
                  
                  {/* Quick suggestions if no active flow */}
                  {!currentFlow && messages.length < 3 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                        onClick={() => {
                          setInputValue("What destinations are popular right now?");
                          handleSendMessage(new Event('submit') as any);
                        }}
                      >
                        Popular destinations
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => {
                          setInputValue("How can I sell my unused hotel booking?");
                          handleSendMessage(new Event('submit') as any);
                        }}
                      >
                        Sell unused booking
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => {
                          setInputValue("Find me a budget-friendly beach vacation");
                          handleSendMessage(new Event('submit') as any);
                        }}
                      >
                        Budget beach vacation
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelAgent;
