
import React from 'react';
import { Circle, Apple, Google, Compass } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent 
} from '@/components/ui/sidebar';

interface ThemeOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  const themes: ThemeOption[] = [
    { 
      id: 'default', 
      name: 'Default', 
      icon: <Circle className="h-4 w-4" />,
      color: 'bg-tt-blue'
    },
    { 
      id: 'google', 
      name: 'Google', 
      icon: <Google className="h-4 w-4" />,
      color: 'bg-[#4285F4]'
    },
    { 
      id: 'apple', 
      name: 'Apple', 
      icon: <Apple className="h-4 w-4" />,
      color: 'bg-[#000000]'
    },
    { 
      id: 'kayak', 
      name: 'Kayak', 
      icon: <Compass className="h-4 w-4" />,
      color: 'bg-[#FF690F]'
    }
  ];
  
  const activeTheme = themes.find(t => t.id === theme) || themes[0];
  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Theme</SidebarGroupLabel>
      <SidebarGroupContent>
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm">
              {activeTheme.icon}
              <span className="flex-1 text-left">{activeTheme.name}</span>
              <div className={`w-4 h-4 rounded-full ${activeTheme.color}`}></div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0" align="start">
            <div className="grid gap-1 p-2">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => setTheme(themeOption.id as any)}
                  className={`flex items-center gap-2 w-full rounded-md p-2 text-sm hover:bg-muted ${
                    theme === themeOption.id ? 'bg-muted' : ''
                  }`}
                >
                  {themeOption.icon}
                  <span className="flex-1">{themeOption.name}</span>
                  <div className={`w-4 h-4 rounded-full ${themeOption.color}`}></div>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default ThemeSelector;
