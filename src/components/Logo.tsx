
import React from 'react';
import { Plane } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

interface LogoProps {
  variant?: 'default' | 'white' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ variant = 'default', size = 'md', className }: LogoProps) => {
  const { theme } = useTheme();
  
  // Base text color
  let textColor = variant === 'white' ? 'text-white' : 'text-tt-blue-dark';
  
  // Icon color
  let iconColor = 'text-tt-teal';
  
  // Apply theme-specific styles
  if (theme === 'google') {
    textColor = variant === 'white' ? 'text-white' : 'text-[#4285F4]';
    iconColor = 'text-[#EA4335]';
  } else if (theme === 'apple') {
    textColor = variant === 'white' ? 'text-white' : 'text-black';
    iconColor = 'text-[#0071e3]';
  } else if (theme === 'kayak') {
    textColor = variant === 'white' ? 'text-white' : 'text-[#FF690F]';
    iconColor = 'text-[#1c6ccc]';
  }
  
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
  
  // Google-style logo (colorful, simple)
  if (theme === 'google') {
    return (
      <div className={cn('flex items-center font-display', sizeClasses[size], textColor, className)}>
        <div className="flex items-center mr-1.5">
          <div className="relative">
            <Plane className="text-[#4285F4]" size={iconSize[size]} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#EA4335] rounded-full" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FBBC05] rounded-full" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#34A853] rounded-full" />
          </div>
        </div>
        <span className="font-medium">
          <span className="text-[#4285F4]">T</span>
          <span className="text-[#EA4335]">r</span>
          <span className="text-[#FBBC05]">a</span>
          <span className="text-[#4285F4]">v</span>
          <span className="text-[#34A853]">e</span>
          <span className="text-[#EA4335]">l</span>
        </span>
      </div>
    );
  }
  
  // Apple-style logo (minimal, elegant)
  if (theme === 'apple' || variant === 'minimal') {
    return (
      <div className={cn('flex items-center font-display font-semibold tracking-tight', sizeClasses[size], textColor, className)}>
        <Plane className={cn("mr-1.5", iconColor)} size={iconSize[size]} />
        <span className="tracking-tight">TT</span>
      </div>
    );
  }
  
  // Kayak-style logo (bold, vibrant)
  if (theme === 'kayak') {
    return (
      <div className={cn('flex items-center font-display font-bold', sizeClasses[size], textColor, className)}>
        <Plane className={cn("mr-1.5 transform rotate-12", iconColor)} size={iconSize[size]} />
        <span className="uppercase tracking-wide">
          Transfer<span className={iconColor}>Travel</span>
        </span>
      </div>
    );
  }
  
  // Default TransferTravel logo
  return (
    <div className={cn('flex items-center font-display font-semibold', sizeClasses[size], textColor, className)}>
      <Plane className={cn("mr-1.5", iconColor)} size={iconSize[size]} />
      <span>Transfer
        <span className={iconColor}>Travel</span>
      </span>
    </div>
  );
};

export default Logo;
