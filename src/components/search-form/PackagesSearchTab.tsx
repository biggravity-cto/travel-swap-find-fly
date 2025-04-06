
import React from 'react';
import LocationField from './LocationField';
import DatePickerField from './DatePickerField';
import PassengerField from './PassengerField';
import SearchButton from './SearchButton';

interface PackagesSearchTabProps {
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}

const PackagesSearchTab = ({ 
  startDate, 
  setStartDate, 
  endDate, 
  setEndDate 
}: PackagesSearchTabProps) => {
  const passengerOptions = [
    "2 adults",
    "1 adult",
    "2 adults, 1 child",
    "2 adults, 2 children"
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LocationField placeholder="Flying from?" />
        <LocationField placeholder="Going to?" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <DatePickerField 
              selected={startDate} 
              onSelect={setStartDate} 
              placeholderText="Departure date" 
            />
          </div>
          <div>
            <DatePickerField 
              selected={endDate} 
              onSelect={setEndDate} 
              placeholderText="Return date" 
            />
          </div>
        </div>
        
        <PassengerField options={passengerOptions} />
      </div>
      
      <SearchButton />
    </div>
  );
};

export default PackagesSearchTab;
