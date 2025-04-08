
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeVariant = 'default' | 'google' | 'apple' | 'kayak';

interface ThemeContextType {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariant>(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem('theme-variant');
    return (savedTheme as ThemeVariant) || 'default';
  });

  // Update the HTML element's data-theme attribute when the theme changes
  useEffect(() => {
    const previousTheme = document.documentElement.getAttribute('data-theme-variant');
    
    // Apply the new theme
    document.documentElement.setAttribute('data-theme-variant', theme);
    localStorage.setItem('theme-variant', theme);
    
    console.log(`Theme changed from ${previousTheme} to ${theme}`);
    
    // Force a repaint to ensure styles are applied
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger a reflow
    document.body.style.display = '';
    
  }, [theme]);

  const contextValue = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
