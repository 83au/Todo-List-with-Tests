import { createContext, useContext, } from 'react';
import { useTodosModel } from '../models';


const TodosViewModelContext = createContext();


export function TodosViewModel({ children }) {
  const { todos, addTodo, chooseAction } = useTodosModel();

  const context = {
    todos, 
    addTodo, 
    chooseAction
  }

  return (
    <TodosViewModelContext.Provider value={context}>
      {children}
    </TodosViewModelContext.Provider>
  )
}


export function useTodosViewModel() {
  const context = useContext(TodosViewModelContext);
  return context;
}

