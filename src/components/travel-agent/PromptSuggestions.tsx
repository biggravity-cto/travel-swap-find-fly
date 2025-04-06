
import React from 'react';
import { Calendar, Briefcase, Compass, Plane, Users, Map } from 'lucide-react';
import { PromptSuggestion } from './types';

// Traveler prompt suggestions
export const travelerPrompts: PromptSuggestion[] = [
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

// Seller prompt suggestions
export const sellerPrompts: PromptSuggestion[] = [
  {
    id: 'reseller',
    title: 'Resell Your Bookings',
    description: 'Sell unused reservations or tickets',
    icon: <Plane className="h-4 w-4" />,
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
