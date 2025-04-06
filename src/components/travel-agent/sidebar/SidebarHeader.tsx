
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SidebarHeader as Header } from '@/components/ui/sidebar';

interface SidebarHeaderProps {
  isSellMode: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isSellMode }) => {
  return (
    <Header>
      <div className="flex items-center px-2 py-1">
        <MessageSquare className="mr-2 h-5 w-5 text-tt-blue" />
        <h2 className="text-lg font-semibold text-tt-blue">
          {isSellMode ? 'AI Resell Agent' : 'AI Travel Agent'}
        </h2>
      </div>
    </Header>
  );
};

export default SidebarHeader;
