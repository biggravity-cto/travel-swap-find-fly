
import React from 'react';
import { Bell, User, Menu } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <nav className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="nav-link font-medium">Flights</a>
              <a href="#" className="nav-link font-medium">Hotels</a>
              <a href="#" className="nav-link font-medium">Packages</a>
              <a href="#" className="nav-link font-medium">Resale Marketplace</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-tt-gray-dark">
              <Bell size={20} />
            </Button>
            
            <div className="hidden md:block">
              <Button variant="ghost" className="text-tt-blue border border-tt-blue hover:bg-tt-blue/5">
                Sell Your Travel
              </Button>
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
                  <a href="#" className="text-lg font-medium">Flights</a>
                  <a href="#" className="text-lg font-medium">Hotels</a>
                  <a href="#" className="text-lg font-medium">Packages</a>
                  <a href="#" className="text-lg font-medium">Resale Marketplace</a>
                  <Button className="w-full mt-4">Sell Your Travel</Button>
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
