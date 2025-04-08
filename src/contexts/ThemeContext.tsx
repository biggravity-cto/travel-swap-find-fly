
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
    marketingTone: 'friendly, professional, trustworthy',
    contentStyle: 'balanced, informative with a personal touch',
    primaryCTA: 'Explore Deals',
    secondaryCTA: 'Sell Your Travel',
    tagline: 'Find new adventures or sell your travel plans',
    headerBackground: 'bg-gradient-to-br from-tt-blue to-tt-blue-dark',
    mainBackground: 'bg-white',
    cardBackground: 'bg-white',
    footerBackground: 'bg-tt-blue-dark',
    sections: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      accent: 'bg-tt-teal/10',
      hero: 'bg-gradient-to-br from-tt-blue to-tt-blue-dark',
      cta: 'bg-tt-blue text-white'
    }
  },
  google: {
    name: 'Material Design',
    description: 'Clean, functional, data-driven',
    brandColor: '#4285F4',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '0.5rem',
    density: 'comfortable',
    philosophy: 'Function-first with accessible, intuitive interfaces',
    marketingTone: 'clear, direct, helpful',
    contentStyle: 'concise, data-focused, actionable',
    primaryCTA: 'Search',
    secondaryCTA: 'List Your Travel',
    tagline: 'Find the best travel deals with powerful search',
    headerBackground: 'bg-white shadow',
    mainBackground: 'bg-gray-50',
    cardBackground: 'bg-white shadow',
    footerBackground: 'bg-gray-100',
    sections: {
      primary: 'bg-white',
      secondary: 'bg-[#F8F9FA]',
      accent: 'bg-[#E8F0FE]',
      hero: 'bg-[#4285F4] text-white',
      cta: 'bg-[#F8F9FA] border border-gray-200'
    }
  },
  apple: {
    name: 'Apple Style',
    description: 'Premium, minimalist, elegant',
    brandColor: '#000000',
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
    borderRadius: '1rem',
    density: 'spacious',
    philosophy: 'Experience-first with strong aesthetic consistency',
    marketingTone: 'inspiring, premium, aspirational',
    contentStyle: 'minimal, powerful statements, imagery-focused',
    primaryCTA: 'Discover',
    secondaryCTA: 'Release',
    tagline: 'Travel. Simplified.',
    headerBackground: 'bg-white border-b border-gray-200/80',
    mainBackground: 'bg-[#FAFAFA]',
    cardBackground: 'bg-white shadow-sm',
    footerBackground: 'bg-[#F5F5F7]',
    sections: {
      primary: 'bg-white',
      secondary: 'bg-[#F5F5F7]',
      accent: 'bg-black text-white',
      hero: 'bg-black text-white',
      cta: 'bg-white border border-gray-200'
    }
  },
  kayak: {
    name: 'Kayak',
    description: 'Bold, vibrant, task-oriented',
    brandColor: '#FF690F',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '0.5rem',
    density: 'dense',
    philosophy: 'Task-completion focused with bold engagement hooks',
    marketingTone: 'direct, energetic, price-focused',
    contentStyle: 'data-dense, comparison-heavy, deal-oriented',
    primaryCTA: 'FIND DEALS',
    secondaryCTA: 'SELL NOW',
    tagline: 'COMPARE & SAVE ON TRAVEL',
    headerBackground: 'bg-white shadow-md',
    mainBackground: 'bg-gray-100',
    cardBackground: 'bg-white border-2 border-gray-200',
    footerBackground: 'bg-[#212121]',
    sections: {
      primary: 'bg-white',
      secondary: 'bg-gray-100',
      accent: 'bg-[#FF690F]/10',
      hero: 'bg-[#FF690F] text-white',
      cta: 'bg-[#1C6CCC] text-white'
    }
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
    
    // Apply theme-specific color scheme
    document.body.classList.remove('theme-default', 'theme-google', 'theme-apple', 'theme-kayak');
    document.body.classList.add(`theme-${theme}`);
    
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
