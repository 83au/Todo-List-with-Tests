import { createContext, useContext } from 'react';
import { getStoredState, setStoredState } from './providers';


const TodosModelContext = createContext();


export function TodosModelProvider({ children }) {
  const getStoredTodos = () => getStoredState('todos');
  const setStoredTodos = todos => setStoredState('todos', todos);

  const context = {
    getStoredTodos,
    setStoredTodos
  }

  return (
    <TodosModelContext.Provider value={context}>
      {children}
    </TodosModelContext.Provider>
  )
}

export function useTodosModel() {
  const context = useContext(TodosModelContext);
  return context;
}
