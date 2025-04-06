
import React from 'react';
import { Bell } from 'lucide-react';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';

interface AlertItem {
  id: string;
  title: string;
  date: string;
}

interface SavedAlertsSectionProps {
  alerts: AlertItem[];
}

const SavedAlertsSection: React.FC<SavedAlertsSectionProps> = ({ alerts }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <Bell size={16} className="mr-2" />
        Saved Alerts
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <SidebarMenuItem key={alert.id}>
                <SidebarMenuButton 
                  className="justify-between"
                  tooltip={alert.title}
                >
                  <span>{alert.title}</span>
                  <span className="text-xs text-gray-400">{alert.date}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          ) : (
            <div className="text-sm text-muted-foreground px-2 py-1">
              No alerts yet
            </div>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SavedAlertsSection;
