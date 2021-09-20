import ThemeContextProvider from '../store/Theme/ThemeProvider';
import TodosContextProvider from '../store/Todos/TodosProvider';

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
