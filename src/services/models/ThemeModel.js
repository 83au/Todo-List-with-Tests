import { createContext, useContext } from 'react';
import { useLocalStorage } from '../../hooks/localStorage';
import themeReducer from './reducers/themeReducer';


const ThemeModelContext = createContext();


export function ThemeModel({ children }) {
  const [isLightTheme, dispatch] = useLocalStorage('isLightTheme', themeReducer, true);

  const toggleTheme = () => dispatch({ type: 'TOGGLE' });

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