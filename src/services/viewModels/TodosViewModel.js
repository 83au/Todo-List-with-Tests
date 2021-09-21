import { createContext, useContext } from 'react';
import { useTodosModel } from '../models';


const TodosViewModelContext = createContext();


function TodosViewModelProvider({ children }) {
  const {todos, addTodo, deleteTodo, updateTodo} = useTodosModel();

  const chooseAction = (isDelete, id) => {
    if (isDelete) {
      deleteTodo(id);
    } else {
      updateTodo(id);
    }
  }

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

export default TodosViewModelProvider;
