
import React from 'react';
import { User, Menu, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import ThemeSelector from './travel-agent/sidebar/ThemeSelector';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const { theme } = useTheme();
  
  // Determine the theme color for the icon
  const getThemeColor = () => {
    switch(theme) {
      case 'google': return 'text-[#4285F4]';
      case 'apple': return 'text-[#000000]';
      case 'kayak': return 'text-[#FF690F]';
      default: return 'text-tt-blue';
    }
  };
  
  // Get theme-specific logo variant
  const getLogoVariant = () => {
    switch(theme) {
      case 'apple': return 'minimal';
      default: return 'default';
    }
  };
  
  // Get theme-specific button styles
  const getCtaButtonClassName = () => {
    switch(theme) {
      case 'google': return 'bg-[#4285F4] hover:bg-[#3367D6] shadow-sm';
      case 'apple': return 'bg-black hover:bg-gray-800 rounded-full';
      case 'kayak': return 'bg-[#FF690F] hover:bg-[#e55a00] font-bold';
      default: return 'bg-tt-blue hover:bg-tt-blue-dark';
    }
  };

  return (
    <header className={cn(
      "bg-white fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center",
      theme === 'apple' ? 'shadow-none border-b border-gray-200/80' : 'shadow-sm',
      theme === 'google' ? 'shadow' : '',
      theme === 'kayak' ? 'shadow-md' : ''
    )}>
      <div className="container-custom w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant={getLogoVariant()} />
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link to="/flights" className="nav-link font-medium">Flights</Link>
              <Link to="/hotels" className="nav-link font-medium">Hotels</Link>
              <Link to="/packages" className="nav-link font-medium">Packages</Link>
              <Link to="/marketplace" className="nav-link font-medium">Travel Marketplace</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/travel-agent" 
              className={cn(
                "font-medium transition-colors hidden md:block",
                theme === 'google' ? 'text-[#4285F4] hover:text-[#3367D6]' : '',
                theme === 'apple' ? 'text-black/90 hover:text-black' : '',
                theme === 'kayak' ? 'text-[#FF690F] hover:text-[#e55a00] font-semibold' : '',
                theme === 'default' ? 'text-tt-blue hover:text-tt-blue-dark' : ''
              )}
            >
              AI Travel Agent
            </Link>
            
            {/* Theme Selector for Desktop */}
            <div className="hidden md:block">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn("rounded-full", getThemeColor())}>
                    <Palette size={20} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0" align="end">
                  <div className="p-2">
                    <h3 className="font-medium text-sm mb-2">Choose a design theme</h3>
                    <ThemeSelector />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="hidden md:block">
              <Link to="/sell">
                <Button className={getCtaButtonClassName()}>
                  Sell Your Travel
                </Button>
              </Link>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(
                "rounded-full",
                theme === 'apple' ? 'border-black/10' : '',
                theme === 'google' ? 'border-gray-300' : '',
                theme === 'kayak' ? 'border-gray-400' : ''
              )}
            >
              <User size={20} />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col mt-8 space-y-4">
                  <Link to="/flights" className="text-lg font-medium">Flights</Link>
                  <Link to="/hotels" className="text-lg font-medium">Hotels</Link>
                  <Link to="/packages" className="text-lg font-medium">Packages</Link>
                  <Link to="/marketplace" className="text-lg font-medium">Travel Marketplace</Link>
                  <Link to="/travel-agent" className="text-lg font-medium text-tt-blue">AI Travel Agent</Link>
                  
                  {/* Theme Selector for Mobile */}
                  <div className="py-2">
                    <h3 className="text-base font-medium mb-2">Design Theme</h3>
                    <ThemeSelector />
                  </div>
                  
                  <Link to="/sell" className="w-full mt-4">
                    <Button className={cn(
                      "w-full",
                      getCtaButtonClassName()
                    )}>
                      Sell Your Travel
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
