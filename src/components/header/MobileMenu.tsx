
import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSelector from '../travel-agent/sidebar/ThemeSelector';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

const MobileMenu: React.FC = () => {
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
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon"
          className={theme === 'apple' ? 'rounded-full' : ''}
        >
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className={theme === 'apple' ? 'pt-8 border-l' : ''}>
        <div className="flex flex-col mt-8 space-y-4">
          {theme === 'kayak' ? (
            // Kayak mobile menu (accordion style)
            <>
              {['FLIGHTS', 'HOTELS', 'PACKAGES', 'MARKETPLACE'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  className="text-lg font-bold py-2 border-b border-gray-200"
                >
                  {item}
                </Link>
              ))}
              <Link to="/travel-agent" className="text-lg font-bold text-[#7CBB00] py-2 border-b border-gray-200">
                AI TRAVEL AGENT
              </Link>
            </>
          ) : theme === 'apple' ? (
            // Apple mobile menu (minimal)
            <>
              {['Flights', 'Hotels', 'Packages', 'Marketplace'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  className="text-xl font-medium text-black"
                >
                  {item}
                </Link>
              ))}
              <Link to="/travel-agent" className="text-xl font-medium text-[#0071e3]">
                AI Travel Agent
              </Link>
            </>
          ) : theme === 'google' ? (
            // Google mobile menu (card style)
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0 space-y-1">
                {['Flights', 'Hotels', 'Packages', 'Marketplace'].map((item) => (
                  <Link 
                    key={item} 
                    to={`/${item.toLowerCase()}`} 
                    className="block p-3 text-base font-medium rounded-md hover:bg-gray-100"
                  >
                    {item}
                  </Link>
                ))}
                <Link 
                  to="/travel-agent" 
                  className="block p-3 text-base font-medium text-[#4285F4] rounded-md hover:bg-gray-100"
                >
                  AI Travel Agent
                </Link>
              </CardContent>
            </Card>
          ) : (
            // Default mobile menu
            <>
              <Link to="/flights" className="text-lg font-medium">Flights</Link>
              <Link to="/hotels" className="text-lg font-medium">Hotels</Link>
              <Link to="/packages" className="text-lg font-medium">Packages</Link>
              <Link to="/marketplace" className="text-lg font-medium">Travel Marketplace</Link>
              <Link to="/travel-agent" className="text-lg font-medium text-tt-blue">AI Travel Agent</Link>
            </>
          )}
          
          {/* Theme Selector for Mobile */}
          <div className="py-2">
            <h3 className={cn(
              "text-base font-medium mb-2",
              theme === 'kayak' ? 'uppercase font-bold' : ''
            )}>
              {theme === 'kayak' ? 'DESIGN THEME' : 'Design Theme'}
            </h3>
            <ThemeSelector />
          </div>
          
          <Link to="/sell" className="w-full mt-4">
            <Button className={cn(
              "w-full",
              getCtaButtonClassName()
            )}>
              {theme === 'kayak' ? 'SELL YOUR TRAVEL' : 'Sell Your Travel'}
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
