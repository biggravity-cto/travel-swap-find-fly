
import React from 'react';
import { Plane } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ variant = 'default', size = 'md', className }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-tt-blue-dark';
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  const iconSize = {
    sm: 18,
    md: 24,
    lg: 32
  };
  
  return (
    <div className={cn('flex items-center font-display font-semibold', sizeClasses[size], textColor, className)}>
      <Plane className="mr-1.5 text-tt-teal" size={iconSize[size]} />
      <span>Transfer<span className="text-tt-teal">Travel</span></span>
    </div>
  );
};

export default Logo;
