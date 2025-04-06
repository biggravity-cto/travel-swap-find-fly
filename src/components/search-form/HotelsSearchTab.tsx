
import React from 'react';
import LocationField from './LocationField';
import DatePickerField from './DatePickerField';
import PassengerField from './PassengerField';
import SearchButton from './SearchButton';

interface HotelsSearchTabProps {
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}

const HotelsSearchTab = ({ 
  startDate, 
  setStartDate, 
  endDate, 
  setEndDate 
}: HotelsSearchTabProps) => {
  const roomOptions = [
    "1 room, 2 guests",
    "1 room, 1 guest",
    "2 rooms, 3 guests",
    "2 rooms, 4 guests"
  ];

  return (
    <div className="space-y-4">
      <LocationField placeholder="Where are you going?" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <DatePickerField 
              selected={startDate} 
              onSelect={setStartDate} 
              placeholderText="Check-in date" 
            />
          </div>
          <div>
            <DatePickerField 
              selected={endDate} 
              onSelect={setEndDate} 
              placeholderText="Check-out date" 
            />
          </div>
        </div>
        
        <PassengerField options={roomOptions} />
      </div>
      
      <SearchButton />
    </div>
  );
};

export default HotelsSearchTab;
