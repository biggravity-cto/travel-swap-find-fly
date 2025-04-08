
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import ThemePopover from './ThemePopover';
import MobileMenu from './MobileMenu';

const ActionButtons: React.FC = () => {
  const { theme } = useTheme();
  
  // Get theme-specific button styles
  const getCtaButtonClassName = () => {
    switch(theme) {
      case 'google': 
        return 'bg-[#4285F4] hover:bg-[#3367D6] shadow-sm text-white rounded-[4px]';
      case 'apple': 
        return 'bg-black hover:bg-gray-800 rounded-full text-white';
      case 'kayak': 
        return 'bg-[#7CBB00] hover:bg-[#6BA300] font-bold text-white';
      default: 
        return 'bg-tt-blue hover:bg-tt-blue-dark text-white';
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Link 
        to="/travel-agent" 
        className={cn(
          "font-medium transition-colors hidden md:block",
          theme === 'google' ? 'text-[#4285F4] hover:text-[#3367D6]' : '',
          theme === 'apple' ? 'text-black/90 hover:text-black' : '',
          theme === 'kayak' ? 'text-[#7CBB00] hover:text-[#6BA300] font-semibold uppercase text-sm tracking-wide' : '',
          theme === 'default' ? 'text-tt-blue hover:text-tt-blue-dark' : ''
        )}
      >
        {theme === 'kayak' ? 'AI AGENT' : 'AI Travel Agent'}
      </Link>
      
      {/* Theme Selector for Desktop */}
      <ThemePopover />
      
      <div className="hidden md:block">
        <Link to="/sell">
          <Button className={getCtaButtonClassName()}>
            {theme === 'kayak' ? 'SELL YOUR TRAVEL' : 'Sell Your Travel'}
          </Button>
        </Link>
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className={cn(
          theme === 'apple' ? 'rounded-full border-black/10' : '',
          theme === 'google' ? 'border-gray-300' : '',
          theme === 'kayak' ? 'border-gray-400' : ''
        )}
      >
        <User size={20} />
      </Button>
      
      <MobileMenu />
    </div>
  );
};

export default ActionButtons;
