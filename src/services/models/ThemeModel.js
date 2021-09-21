import { createContext, useContext } from 'react';
import useToggle from '../../hooks/useToggle';

const ThemeModelContext = createContext();

export function ThemeModelProvider({ children }) {
  const [isLightTheme, toggleTheme] = useToggle(true);

  const context = {
    isLightTheme, 
    toggleTheme
  }

  return (
    <ThemeModelContext.Provider value={context}>
      { children }
    </ThemeModelContext.Provider>
  )
}

export function useThemeModel() {
  const context = useContext(ThemeModelContext);
  return context;
}