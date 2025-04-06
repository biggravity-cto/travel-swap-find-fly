
import React from 'react';
import { Bell } from 'lucide-react';
import { 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from '@/components/ui/sidebar';

interface SavedAlert {
  id: string;
  title: string;
  date: string;
}

interface SavedAlertsSectionProps {
  alerts: SavedAlert[];
}

const SavedAlertsSection: React.FC<SavedAlertsSectionProps> = ({ alerts }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Saved Alerts</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <SidebarMenuItem key={alert.id}>
                <SidebarMenuButton tooltip={alert.date}>
                  <Bell className="h-4 w-4" />
                  <span>{alert.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          ) : (
            <div className="px-2 py-1 text-sm text-muted-foreground">
              No alerts yet
            </div>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SavedAlertsSection;
