
import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TravelListingCardProps {
  title: string;
  location: string;
  image: string;
  price: number;
  originalPrice?: number;
  departureDate: string;
  duration: string;
  passengers: number;
  source?: string; // New prop to indicate source (TransferTravel, Expedia, Booking.com, etc.)
  sourceLogo?: string; // Optional logo URL for the source
  savingsPercentage?: number;
  className?: string;
}

const TravelListingCard = ({
  title,
  location,
  image,
  price,
  originalPrice,
  departureDate,
  duration,
  passengers,
  source = 'TransferTravel', // Default source
  sourceLogo,
  savingsPercentage,
  className
}: TravelListingCardProps) => {
  return (
    <div className={cn('listing-card', className)}>
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3">
          <Badge 
            className={cn(
              "font-medium",
              source === 'TransferTravel' 
                ? "bg-tt-yellow hover:bg-tt-yellow text-tt-black" 
                : "bg-tt-teal hover:bg-tt-teal"
            )}
          >
            {sourceLogo && (
              <img src={sourceLogo} alt={source} className="w-4 h-4 mr-1" />
            )}
            {source}
          </Badge>
        </div>
        {savingsPercentage && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-tt-green hover:bg-tt-green font-medium">Save {savingsPercentage}%</Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <div className="flex items-center text-tt-gray-dark text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4 text-sm">
          <div className="flex items-center text-tt-gray-dark">
            <Calendar size={14} className="mr-1" />
            <span>{departureDate} · {duration}</span>
          </div>
          <div className="flex items-center text-tt-gray-dark">
            <Users size={14} className="mr-1" />
            <span>{passengers} {passengers === 1 ? 'person' : 'people'}</span>
          </div>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xl font-semibold text-tt-blue">£{price}</p>
            {originalPrice && (
              <p className="text-sm text-tt-gray-dark line-through">£{originalPrice}</p>
            )}
          </div>
          <button className="btn-primary py-2 px-4 text-sm">View Deal</button>
        </div>
      </div>
    </div>
  );
};

export default TravelListingCard;
