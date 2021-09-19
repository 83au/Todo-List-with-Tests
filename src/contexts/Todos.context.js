import { createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';


const initialTodos = [
  { task: 'Mow lawn', completed: false, id: uuid() },
  { task: 'Wash car', completed: false, id: uuid() },
];


const todosReducer = (state, action) => {
  let newState;
  switch(action.type) {
    case 'ADD':
      newState = [...state, action.todo];
      return newState;
    case 'DELETE':
      newState = state.filter(todo => todo.id !== action.id);
      return newState;
    case 'UPDATE':
      newState = state.map(todo => {
        if (todo.id !== action.id) return todo;
        return { ...todo, completed: !todo.completed };
      });
      return newState;
    default:
      return state;
  }
}


export const TodosContext = createContext();


function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider;
