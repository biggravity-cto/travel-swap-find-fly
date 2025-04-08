
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
  
  // For minimal variant (Apple style)
  if (variant === 'minimal') {
    return (
      <div className={cn('flex items-center font-display font-semibold', sizeClasses[size], textColor, className)}>
        <Plane className={cn("mr-1.5", iconColor)} size={iconSize[size]} />
        <span>TT</span>
      </div>
    );
  }
  
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
