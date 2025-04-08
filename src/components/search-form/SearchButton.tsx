
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme, themeInfo } from '@/contexts/ThemeContext';

const SearchButton = () => {
  const { theme } = useTheme();
  
  if (theme === 'google') {
    return (
      <div className="pt-2">
        <Button size="lg" className="w-full md:w-auto bg-[#4285F4] hover:bg-[#3367D6] shadow-md rounded-[4px]">
          <Search className="mr-2" size={18} />
          Search
        </Button>
      </div>
    );
  }
  
  if (theme === 'apple') {
    return (
      <div className="pt-2">
        <Button size="lg" className="w-full md:w-auto bg-black hover:bg-gray-800 rounded-full">
          <Search className="mr-2" size={18} />
          Search
        </Button>
      </div>
    );
  }
  
  if (theme === 'kayak') {
    return (
      <div className="pt-2">
        <Button size="lg" className="w-full md:w-auto bg-[#7CBB00] hover:bg-[#6BA300] font-bold uppercase tracking-wide">
          <Search className="mr-2" size={18} />
          FIND DEALS
        </Button>
      </div>
    );
  }
  
  // Default theme
  return (
    <div className="pt-2">
      <Button size="lg" className="w-full md:w-auto bg-tt-blue hover:bg-tt-blue-dark">
        <Search className="mr-2" size={18} />
        Search
      </Button>
    </div>
  );
};

export default SearchButton;
