import ThemeContextProvider from '../services/providers/ThemeProvider';
import TodosContextProvider from '../services/providers/TodosProvider';

function Services({ children }) {
  return (
    <ThemeContextProvider>
      <TodosContextProvider>
        { children }
      </TodosContextProvider>
    </ThemeContextProvider>
  ) ;
}

export default Services;
