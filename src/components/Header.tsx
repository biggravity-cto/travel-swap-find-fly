
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

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center">
      <div className="container-custom w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
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
              className="text-tt-blue font-medium hover:text-tt-blue-dark transition-colors hidden md:block"
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
                <PopoverContent className="w-56 p-0" align="end">
                  <ThemeSelector />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="hidden md:block">
              <Link to="/sell">
                <Button variant="ghost" className="text-tt-blue border border-tt-blue hover:bg-tt-blue/5">
                  Sell Your Travel
                </Button>
              </Link>
            </div>
            
            <Button variant="outline" size="icon" className="rounded-full">
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
                    <h3 className="text-base font-medium mb-2">Theme</h3>
                    <ThemeSelector />
                  </div>
                  
                  <Link to="/sell" className="w-full mt-4">
                    <Button className="w-full">Sell Your Travel</Button>
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
