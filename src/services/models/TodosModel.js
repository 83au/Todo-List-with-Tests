import { createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import * as actions from '../models/actions/todosActions';
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
    <TodosModelContext.Provider value={context}>
      {children}
    </TodosModelContext.Provider>
  )
}

export function useTodosModel() {
  const context = useContext(TodosModelContext);
  return context;
}
