import { createContext, useContext, useEffect, useCallback } from 'react';
import { useThemeModel } from '../models';


const ThemeViewModelContext = createContext();


export function ThemeViewModelProvider({ children }) {
  const { isLightTheme, toggleTheme } = useThemeModel();

  const updateStyles = useCallback(() => {
    const themeStyles = {
      primary: '#7f5cca',
      theme: isLightTheme ? '#e5e5e5' : '#222',
      text: isLightTheme ? '#111' : '#ddd', 
      'shadow-light': isLightTheme ? 'rgb(255, 255, 255)' : 'rgba(150, 150, 150, .2)',
      'shadow-dark': isLightTheme ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, .5)'
    }

    for (const key in themeStyles) {
      document.body.style.setProperty(`--color-${key}`, themeStyles[key]);
    }
  }, [isLightTheme]);

  useEffect(() => updateStyles(), [updateStyles]);

  const context = {
    isLightTheme,
    toggleTheme
  }
  
  return (
    <ThemeViewModelContext.Provider value={context}>
      {children}
    </ThemeViewModelContext.Provider>
  )
}

export function useThemeViewModel() {
  const context = useContext(ThemeViewModelContext);
  return context;
}
