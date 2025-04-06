
import React from 'react';
import { Switch } from '@/components/ui/switch';

interface ResaleToggleProps {
  includeResale: boolean;
  setIncludeResale: (value: boolean) => void;
}

const ResaleToggle = ({ includeResale, setIncludeResale }: ResaleToggleProps) => {
  return (
    <div className="flex items-center ml-auto mt-4 md:mt-0">
      <span className="text-sm mr-2 text-tt-gray-dark">Include Resale Listings</span>
      <Switch checked={includeResale} onCheckedChange={setIncludeResale} />
    </div>
  );
};

export default ResaleToggle;
