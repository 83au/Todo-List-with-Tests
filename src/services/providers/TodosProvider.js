import { createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import * as actions from './actions/todosActions';
import useLocalStorageTodos from '../../hooks/useLocalStorageTodos';


const initialTodos = [
  { task: 'Mow lawn', completed: false, id: uuid() },
  { task: 'Wash car', completed: false, id: uuid() },
  { task: 'Study', completed: false, id: uuid() }
];


export const TodosContext = createContext();


function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageTodos(initialTodos);

  const addTodo = task => dispatch(actions.addTodo(task));

  const deleteTodo = id => dispatch(actions.deleteTodo(id));

  const updateTodo = id => dispatch(actions.updateTodo(id));

  const context = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo
  }

  return (
    <TodosContext.Provider value={context}>
      {children}
    </TodosContext.Provider>
  )
}

export function useTodos() {
  const context = useContext(TodosContext);
  return context;
}

export default TodosProvider;
