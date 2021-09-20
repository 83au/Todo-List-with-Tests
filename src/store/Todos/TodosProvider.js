import { createContext, useContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import todosReducer from './todosReducer';


const initialTodos = [
  { task: 'Mow lawn', completed: false, id: uuid() },
  { task: 'Wash car', completed: false, id: uuid() },
  { task: 'Study', completed: false, id: uuid() }
];


export const TodosContext = createContext();


function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}

export function useTodos() {
  const context = useContext(TodosContext);
  return context;
}

export default TodosProvider;
