
import React from 'react';
import { Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSelector from '../travel-agent/sidebar/ThemeSelector';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const ThemePopover: React.FC = () => {
  const { theme } = useTheme();

  // Determine the theme color for the icon
  const getThemeColor = () => {
    switch(theme) {
      case 'google': return 'text-[#4285F4]';
      case 'apple': return 'text-[#000000]';
      case 'kayak': return 'text-[#7CBB00]';
      default: return 'text-tt-blue';
    }
  };

  return (
    <div className="hidden md:block">
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              theme === 'apple' ? 'rounded-full' : 'rounded-md',
              getThemeColor()
            )}
          >
            <Palette size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className={cn(
            "w-72 p-0", 
            theme === 'apple' ? 'rounded-xl shadow-lg border-0' : '',
            theme === 'google' ? 'shadow rounded-lg' : '',
            theme === 'kayak' ? 'shadow-md border-2 border-gray-200' : ''
          )} 
          align="end"
        >
          <div className="p-2">
            <h3 className={cn(
              "font-medium text-sm mb-2",
              theme === 'apple' ? 'px-2 pt-1' : '',
              theme === 'kayak' ? 'uppercase font-bold' : ''
            )}>
              Choose a design theme
            </h3>
            <ThemeSelector />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ThemePopover;
