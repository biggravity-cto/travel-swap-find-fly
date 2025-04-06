
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { 
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarFooter 
} from '@/components/ui/sidebar';
import { travelerPrompts, sellerPrompts } from './PromptSuggestions';
import { PromptSuggestion } from './types';

interface TravelAgentSidebarProps {
  startPromptFlow: (prompt: PromptSuggestion) => void;
}

const TravelAgentSidebar: React.FC<TravelAgentSidebarProps> = ({ startPromptFlow }) => {
  return (
    <>
      <SidebarHeader>
        <div className="flex items-center px-2 py-1">
          <MessageSquare className="mr-2 h-5 w-5 text-tt-blue" />
          <h2 className="text-lg font-semibold text-tt-blue">AI Travel Agent</h2>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Traveler Experiences</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {travelerPrompts.map((prompt) => (
                <SidebarMenuItem key={prompt.id}>
                  <SidebarMenuButton 
                    onClick={() => startPromptFlow(prompt)}
                    tooltip={prompt.description}
                  >
                    {prompt.icon}
                    <span>{prompt.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Seller Options</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sellerPrompts.map((prompt) => (
                <SidebarMenuItem key={prompt.id}>
                  <SidebarMenuButton 
                    onClick={() => startPromptFlow(prompt)}
                    tooltip={prompt.description}
                  >
                    {prompt.icon}
                    <span>{prompt.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-4 py-2 text-xs text-muted-foreground">
          <p>© 2025 TransferTravel</p>
        </div>
      </SidebarFooter>
    </>
  );
};

export default TravelAgentSidebar;
