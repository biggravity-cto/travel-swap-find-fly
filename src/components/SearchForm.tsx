
import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import SearchTabs from './search-form/SearchTabs';
import FlightsSearchTab from './search-form/FlightsSearchTab';
import HotelsSearchTab from './search-form/HotelsSearchTab';
import PackagesSearchTab from './search-form/PackagesSearchTab';

interface SearchFormProps {
  initialTab?: 'flights' | 'hotels' | 'packages';
}

const SearchForm = ({ initialTab = 'flights' }: SearchFormProps) => {
  const [searchType, setSearchType] = useState(initialTab);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <Tabs value={searchType} onValueChange={setSearchType}>
        <div className="flex items-center justify-between mb-6">
          <SearchTabs searchType={searchType} />
        </div>
        
        <TabsContent value="flights" className="mt-0">
          <FlightsSearchTab 
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </TabsContent>
        
        <TabsContent value="hotels" className="mt-0">
          <HotelsSearchTab 
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </TabsContent>
        
        <TabsContent value="packages" className="mt-0">
          <PackagesSearchTab 
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchForm;
