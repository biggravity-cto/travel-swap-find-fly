
import { StepByStepFlow } from './types';

// Define all step-by-step conversation flows
export const stepByStepFlows: Record<string, StepByStepFlow> = {
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

// Generate summary based on flow type and user inputs
export const generateFlowSummary = (flow: StepByStepFlow): string => {
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
