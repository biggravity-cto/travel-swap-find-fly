
import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import Logo from './Logo';
import ThemeSpecificNav from './header/ThemeSpecificNav';
import ActionButtons from './header/ActionButtons';

const Header = () => {
  const { theme } = useTheme();

  // Get theme-specific logo variant
  const getLogoVariant = () => {
    switch(theme) {
      case 'apple': return 'minimal';
      default: return 'default';
    }
  };

  return (
    <header className={cn(
      "bg-white fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center",
      theme === 'apple' ? 'shadow-none border-b border-gray-200/80' : '',
      theme === 'google' ? 'shadow' : '',
      theme === 'kayak' ? 'shadow-md' : '',
      theme === 'default' ? 'shadow-sm' : ''
    )}>
      <div className={cn(
        "container-custom w-full",
        theme === 'apple' ? 'px-6 md:px-10' : '',
        theme === 'kayak' ? 'px-3 md:px-6' : ''
      )}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant={getLogoVariant()} />
            <ThemeSpecificNav theme={theme} />
          </div>
          
          <ActionButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
