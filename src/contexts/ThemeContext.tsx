
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeVariant = 'default' | 'google' | 'apple' | 'kayak';

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
    document.documentElement.setAttribute('data-theme-variant', theme);
    localStorage.setItem('theme-variant', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
