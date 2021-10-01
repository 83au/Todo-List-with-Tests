import { createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import todosReducer from './reducers/todosReducer';
import useLocalStorage from '../common/useLocalStorage';


const initialTodos = [
  { task: 'Pay back loans', completed: false, id: uuid() },
  { task: 'Delete browser history', completed: false, id: uuid() },
  { task: 'Get rich', completed: false, id: uuid() }
];


const TodosModelContext = createContext();


export function TodosModelProvider({ children }) {
  const [todos, dispatch] = useLocalStorage('todos', todosReducer, initialTodos);

  const context = {
    todos,
    dispatch
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
