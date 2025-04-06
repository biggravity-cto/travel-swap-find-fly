
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SidebarHeader as Header } from '@/components/ui/sidebar';

interface SidebarHeaderProps {
  isSellMode: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isSellMode }) => {
  return (
    <Header>
      <div className="flex items-center px-2 py-2">
        <MessageSquare className="mr-2 h-5 w-5 text-tt-blue" />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-tt-blue">
            {isSellMode ? 'AI Resell Agent' : 'AI Travel Agent'}
          </h2>
          <p className="text-xs text-muted-foreground">
            {isSellMode ? 'Get help selling travel' : 'Find your next adventure'}
          </p>
        </div>
      </div>
    </Header>
  );
};

export default SidebarHeader;
