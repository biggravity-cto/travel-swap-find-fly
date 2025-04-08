
import React from 'react';
import { Circle, Apple, LayoutGrid, Compass } from 'lucide-react';
import { useTheme, themeInfo } from '@/contexts/ThemeContext';
import { 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent 
} from '@/components/ui/sidebar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface ThemeOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  philosophy: string;
}

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  const themes: ThemeOption[] = [
    { 
      id: 'default', 
      name: themeInfo.default.name, 
      icon: <Circle className="h-4 w-4" />,
      color: 'bg-tt-blue',
      description: themeInfo.default.description,
      philosophy: themeInfo.default.philosophy
    },
    { 
      id: 'google', 
      name: themeInfo.google.name, 
      icon: <LayoutGrid className="h-4 w-4" />,
      color: 'bg-[#4285F4]',
      description: themeInfo.google.description,
      philosophy: themeInfo.google.philosophy
    },
    { 
      id: 'apple', 
      name: themeInfo.apple.name, 
      icon: <Apple className="h-4 w-4" />,
      color: 'bg-[#000000]',
      description: themeInfo.apple.description,
      philosophy: themeInfo.apple.philosophy
    },
    { 
      id: 'kayak', 
      name: themeInfo.kayak.name, 
      icon: <Compass className="h-4 w-4" />,
      color: 'bg-[#FF690F]',
      description: themeInfo.kayak.description,
      philosophy: themeInfo.kayak.philosophy
    }
  ];
  
  const activeTheme = themes.find(t => t.id === theme) || themes[0];
  
  const handleThemeChange = (themeId: string) => {
    console.log(`Attempting to change theme to: ${themeId}`);
    setTheme(themeId as any);
  };
  
  // Check if we're inside a sidebar (look for parent elements with data-sidebar attribute)
  const isInsideSidebar = () => {
    const sidebarElements = document.querySelectorAll('[data-sidebar]');
    return sidebarElements.length > 0;
  };
  
  // If inside the header, we'll render a simpler version
  if (!isInsideSidebar()) {
    return (
      <div className="grid gap-1 p-2">
        {themes.map((themeOption) => (
          <HoverCard key={themeOption.id} openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <button
                onClick={() => handleThemeChange(themeOption.id)}
                className={`flex items-center gap-2 w-full rounded-md p-2 text-sm hover:bg-muted ${
                  theme === themeOption.id ? 'bg-muted' : ''
                }`}
              >
                <div className={`w-4 h-4 rounded-full ${themeOption.color}`}></div>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{themeOption.name}</span>
                  <span className="text-xs text-muted-foreground">{themeOption.description}</span>
                </div>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">{themeOption.name} Design Philosophy</h4>
                <p className="text-sm text-muted-foreground">{themeOption.philosophy}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    );
  }
  
  // Original sidebar version
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Design Theme</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className="grid gap-1">
          {themes.map((themeOption) => (
            <HoverCard key={themeOption.id} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <button
                  onClick={() => handleThemeChange(themeOption.id)}
                  className={`flex items-center gap-2 w-full rounded-md p-2 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                    theme === themeOption.id ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${themeOption.color}`}></div>
                  <span className="flex-1">{themeOption.name}</span>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" side="right">
                <div className="space-y-2">
                  <h4 className="font-semibold">{themeOption.name} Design Philosophy</h4>
                  <p className="text-sm text-muted-foreground">{themeOption.philosophy}</p>
                  <p className="text-xs text-muted-foreground">{themeOption.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default ThemeSelector;
