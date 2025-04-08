
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
import {
  Card,
  CardContent,
} from '@/components/ui/card';

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
      case 'google': 
        return 'bg-[#4285F4] hover:bg-[#3367D6] shadow-sm text-white rounded-[4px]';
      case 'apple': 
        return 'bg-black hover:bg-gray-800 rounded-full text-white';
      case 'kayak': 
        return 'bg-[#FF690F] hover:bg-[#e55a00] font-bold text-white';
      default: 
        return 'bg-tt-blue hover:bg-tt-blue-dark text-white';
    }
  };

  // Theme-specific navigation
  const renderNavigation = () => {
    // Google Material Design navigation (tabs)
    if (theme === 'google') {
      return (
        <nav className="hidden md:flex ml-10">
          <div className="flex space-x-1 border-b border-transparent">
            {['Flights', 'Hotels', 'Packages', 'Marketplace'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="px-4 py-2 font-medium text-gray-700 hover:text-[#4285F4] border-b-2 border-transparent hover:border-[#4285F4] transition-all"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      );
    }
    
    // Apple minimal navigation
    if (theme === 'apple') {
      return (
        <nav className="hidden md:flex ml-10">
          <div className="flex space-x-5">
            {['Flights', 'Hotels', 'Packages', 'Marketplace'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="py-1 font-medium text-black/80 hover:text-black"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      );
    }
    
    // Kayak bold navigation
    if (theme === 'kayak') {
      return (
        <nav className="hidden md:flex ml-10">
          <div className="flex space-x-2">
            {['Flights', 'Hotels', 'Packages', 'Marketplace'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="px-3 py-1 font-semibold text-gray-800 hover:text-[#FF690F] uppercase text-sm tracking-wide"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      );
    }
    
    // Default navigation
    return (
      <nav className="hidden md:flex ml-10 space-x-8">
        <Link to="/flights" className="nav-link font-medium">Flights</Link>
        <Link to="/hotels" className="nav-link font-medium">Hotels</Link>
        <Link to="/packages" className="nav-link font-medium">Packages</Link>
        <Link to="/marketplace" className="nav-link font-medium">Travel Marketplace</Link>
      </nav>
    );
  };

  return (
    <header className={cn(
      "bg-white fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center",
      theme === 'apple' ? 'shadow-none border-b border-gray-200/80' : '',
      theme === 'google' ? 'shadow' : '',
      theme === 'kayak' ? 'shadow-md' : '',
      theme === 'default' ? 'shadow-sm' : ''
    )}>
      <div className={cn(
        "container-custom w-full",
        theme === 'apple' ? 'px-6 md:px-10' : '',
        theme === 'kayak' ? 'px-3 md:px-6' : ''
      )}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant={getLogoVariant()} />
            {renderNavigation()}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/travel-agent" 
              className={cn(
                "font-medium transition-colors hidden md:block",
                theme === 'google' ? 'text-[#4285F4] hover:text-[#3367D6]' : '',
                theme === 'apple' ? 'text-black/90 hover:text-black' : '',
                theme === 'kayak' ? 'text-[#FF690F] hover:text-[#e55a00] font-semibold uppercase text-sm tracking-wide' : '',
                theme === 'default' ? 'text-tt-blue hover:text-tt-blue-dark' : ''
              )}
            >
              {theme === 'kayak' ? 'AI AGENT' : 'AI Travel Agent'}
            </Link>
            
            {/* Theme Selector for Desktop */}
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
                      <Link to="/travel-agent" className="text-lg font-bold text-[#FF690F] py-2 border-b border-gray-200">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
