
import React from 'react';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  name: string;
  image: string;
  dealCount: number;
  resaleCount: number;
  className?: string;
}

const DestinationCard = ({ name, image, dealCount, resaleCount, className }: DestinationCardProps) => {
  return (
    <div className={cn('relative group overflow-hidden rounded-lg shadow-md h-64 cursor-pointer', className)}>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tt-black/20 to-tt-black/70 group-hover:to-tt-black/80 transition-all" />
      
      <div className="absolute bottom-0 left-0 p-4 text-white w-full">
        <h3 className="text-xl font-display font-semibold mb-1">{name}</h3>
        <div className="text-sm opacity-90 mb-2 flex gap-4">
          <span>{dealCount} deals available</span>
          <span>{resaleCount} resale listings</span>
        </div>
        <div className="h-0.5 w-12 bg-tt-teal group-hover:w-24 transition-all duration-300" />
      </div>
    </div>
  );
};

export default DestinationCard;
