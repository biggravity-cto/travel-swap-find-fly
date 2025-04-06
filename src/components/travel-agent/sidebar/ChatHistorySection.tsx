
import React from 'react';
import { History, MessageSquare } from 'lucide-react';
import { 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from '@/components/ui/sidebar';

interface ChatItem {
  id: string;
  title: string;
  date: string;
}

interface ChatHistorySectionProps {
  isSellMode: boolean;
  historyItems: ChatItem[];
}

const ChatHistorySection: React.FC<ChatHistorySectionProps> = ({ 
  isSellMode, 
  historyItems 
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chat History</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <MessageSquare className="h-4 w-4" />
              <span>New Chat</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          {historyItems.map((chat) => (
            <SidebarMenuItem key={chat.id}>
              <SidebarMenuButton tooltip={chat.date}>
                <History className="h-4 w-4" />
                <span>{chat.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default ChatHistorySection;
