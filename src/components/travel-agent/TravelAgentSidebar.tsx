
import React from 'react';
import { SidebarContent, SidebarSeparator } from '@/components/ui/sidebar';
import { PromptSuggestion } from './types';
import SidebarHeader from './sidebar/SidebarHeader';
import ChatHistorySection from './sidebar/ChatHistorySection';
import SavedItemsSection from './sidebar/SavedItemsSection';
import AccountSection from './sidebar/AccountSection';
import SignupSection from './sidebar/SignupSection';
import SidebarFooter from './sidebar/SidebarFooter';
import { 
  travelerHistoryItems, 
  travelerSavedItems, 
  sellerListingItems 
} from './sidebar/mockData';

interface TravelAgentSidebarProps {
  startPromptFlow: (prompt: PromptSuggestion) => void;
  isSellMode: boolean;
}

const TravelAgentSidebar: React.FC<TravelAgentSidebarProps> = ({ 
  startPromptFlow, 
  isSellMode 
}) => {
  // Determine which history items to show based on mode
  const historyItems = isSellMode ? sellerListingItems : travelerHistoryItems;
  
  // Determine which saved items to show based on mode
  const savedItems = isSellMode ? sellerListingItems : travelerSavedItems;

  return (
    <>
      <SidebarHeader isSellMode={isSellMode} />
      
      <SidebarContent>
        <ChatHistorySection 
          isSellMode={isSellMode} 
          historyItems={historyItems} 
        />
        
        <SidebarSeparator />
        
        <SavedItemsSection 
          isSellMode={isSellMode} 
          savedItems={savedItems} 
        />

        <SidebarSeparator />
        
        <AccountSection />

        <SidebarSeparator />
        
        <SignupSection />
      </SidebarContent>
      
      <SidebarFooter />
    </>
  );
};

export default TravelAgentSidebar;
