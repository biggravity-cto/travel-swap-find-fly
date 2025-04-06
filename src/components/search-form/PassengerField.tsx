
import React from 'react';
import { Users } from 'lucide-react';

interface PassengerFieldProps {
  options: string[];
  className?: string;
}

const PassengerField = ({ options, className = "search-input" }: PassengerFieldProps) => {
  return (
    <div className="relative">
      <Users className="absolute left-3 top-3 text-gray-400" size={18} />
      <select className={className}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default PassengerField;
