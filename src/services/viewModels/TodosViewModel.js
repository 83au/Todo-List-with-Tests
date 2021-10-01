import { createContext, useContext } from 'react';
import { useTodosModel } from '../models';
import * as actions from '../models/actions/todosActions';


const TodosViewModelContext = createContext();


function TodosViewModelProvider({ children }) {
  const { todos, dispatch } = useTodosModel();

  const addTodo = task => dispatch(actions.addTodo(task));
  const deleteTodo = id => dispatch(actions.deleteTodo(id));
  const updateTodo = id => dispatch(actions.updateTodo(id));

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
