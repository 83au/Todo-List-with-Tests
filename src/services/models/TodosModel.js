import { createContext, useContext } from 'react';
import todosReducer from './reducers/todosReducer';
import * as actions from './actions/todosActions';
import { useLocalStorage } from './providers/localStorage';


const initialTodos = [
  { task: 'Pay off debts', id: Math.random(), completed: false },
  { task: 'Find my marbles', id: Math.random(), completed: false },
  { task: 'Delete browser history', id: Math.random(), completed: false },
];


const TodosModelContext = createContext();


export function TodosModel({ children }) {
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
