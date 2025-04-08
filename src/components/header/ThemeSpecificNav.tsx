
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ThemeSpecificNavProps {
  theme: string;
}

const ThemeSpecificNav: React.FC<ThemeSpecificNavProps> = ({ theme }) => {
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
              className="px-3 py-1 font-semibold text-gray-800 hover:text-[#7CBB00] uppercase text-sm tracking-wide"
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

export default ThemeSpecificNav;
