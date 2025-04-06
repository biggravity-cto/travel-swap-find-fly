
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchButton = () => {
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
