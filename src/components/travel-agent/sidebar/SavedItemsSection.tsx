
import React from 'react';
import { BookmarkCheck, Tag } from 'lucide-react';
import { 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from '@/components/ui/sidebar';

interface SavedItem {
  id: string;
  title: string;
  date: string;
}

interface SavedItemsSectionProps {
  isSellMode: boolean;
  savedItems: SavedItem[];
}

const SavedItemsSection: React.FC<SavedItemsSectionProps> = ({ 
  isSellMode, 
  savedItems 
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {isSellMode ? 'Saved Listings' : 'Saved Trips'}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {savedItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton tooltip={item.date}>
                {isSellMode ? (
                  <Tag className="h-4 w-4" />
                ) : (
                  <BookmarkCheck className="h-4 w-4" />
                )}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SavedItemsSection;
