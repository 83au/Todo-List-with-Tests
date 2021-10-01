import { createContext, useContext, useReducer } from 'react';
import { useTodosModel } from '../models';
import todosReducer from './reducers/todosReducer';
import * as actions from './actions/todosActions';
import { useEffect } from 'react/cjs/react.development';


const TodosViewModelContext = createContext();


function TodosViewModelProvider({ children }) {
  const { getStoredTodos, setStoredTodos } = useTodosModel();
  const [todos, dispatch] = useReducer(todosReducer, [], () => {
    let initialTodos;
    try {
      initialTodos = getStoredTodos();
    } catch (err) {
      initialTodos = [];
    }
    return initialTodos;
  });

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

  useEffect(() => {
    setStoredTodos(todos);
  }, [todos, setStoredTodos]);

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
