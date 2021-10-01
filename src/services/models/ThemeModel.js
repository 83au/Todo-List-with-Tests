import { createContext, useContext } from 'react';
import { getStoredState, setStoredState } from './providers';


const ThemeModelContext = createContext();


export function ThemeModelProvider({ children }) {
  const getStoredTheme = () => getStoredState('isLightTheme');
  const setStoredTheme = isLightTheme => setStoredState('isLightTheme', isLightTheme);

  const context = { 
    getStoredTheme,
    setStoredTheme,
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