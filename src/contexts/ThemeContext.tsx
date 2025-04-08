
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

// Brand-specific values and philosophy descriptions for each theme
export const themeInfo = {
  default: {
    name: 'TransferTravel',
    description: 'Balanced, travel-focused experience',
    brandColor: '#0E7490',
    fontFamily: 'Montserrat, sans-serif',
    borderRadius: '0.5rem',
    density: 'medium',
    philosophy: 'Balancing form and function for modern travelers',
  },
  google: {
    name: 'Material Design',
    description: 'Clean, functional, data-driven',
    brandColor: '#4285F4',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '0.5rem',
    density: 'comfortable',
    philosophy: 'Function-first with accessible, intuitive interfaces',
  },
  apple: {
    name: 'Apple Style',
    description: 'Premium, minimalist, elegant',
    brandColor: '#000000',
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
    borderRadius: '1rem',
    density: 'spacious',
    philosophy: 'Experience-first with strong aesthetic consistency',
  },
  kayak: {
    name: 'Kayak',
    description: 'Bold, vibrant, task-oriented',
    brandColor: '#FF690F',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '0.5rem',
    density: 'dense',
    philosophy: 'Task-completion focused with bold engagement hooks',
  },
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
    
    // Apply theme-specific density class
    document.body.classList.remove('density-comfortable', 'density-spacious', 'density-dense', 'density-medium');
    document.body.classList.add(`density-${themeInfo[theme].density}`);
    
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
