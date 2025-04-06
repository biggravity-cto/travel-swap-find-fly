
import React from 'react';
import { Plane, Hotel, Package } from 'lucide-react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SearchTabsProps {
  searchType: string;
}

const SearchTabs = ({ searchType }: SearchTabsProps) => {
  return (
    <TabsList className="grid grid-cols-3 w-full md:w-auto">
      <TabsTrigger value="flights" className="flex items-center gap-1.5">
        <Plane size={16} />
        <span className="hidden md:inline">Flights</span>
      </TabsTrigger>
      <TabsTrigger value="hotels" className="flex items-center gap-1.5">
        <Hotel size={16} />
        <span className="hidden md:inline">Hotels</span>
      </TabsTrigger>
      <TabsTrigger value="packages" className="flex items-center gap-1.5">
        <Package size={16} />
        <span className="hidden md:inline">Packages</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default SearchTabs;
