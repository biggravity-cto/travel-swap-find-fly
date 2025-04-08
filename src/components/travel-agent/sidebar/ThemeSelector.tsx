
import React from 'react';
import { Circle, Apple, LayoutGrid, Compass } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
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
      icon: <LayoutGrid className="h-4 w-4" />,
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
          <button
            key={themeOption.id}
            onClick={() => handleThemeChange(themeOption.id)}
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
    );
  }
  
  // Original sidebar version
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Theme</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className="grid gap-1">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => handleThemeChange(themeOption.id)}
              className={`flex items-center gap-2 w-full rounded-md p-2 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                theme === themeOption.id ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''
              }`}
            >
              {themeOption.icon}
              <span className="flex-1">{themeOption.name}</span>
              <div className={`w-4 h-4 rounded-full ${themeOption.color}`}></div>
            </button>
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default ThemeSelector;
