
import React from 'react';
import { Search } from 'lucide-react';

interface LocationFieldProps {
  placeholder: string;
  className?: string;
}

const LocationField = ({ placeholder, className = "search-input" }: LocationFieldProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 text-gray-400" size={18} />
      <input
        type="text"
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default LocationField;
