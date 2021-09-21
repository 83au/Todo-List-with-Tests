import { useReducer, useEffect } from 'react';
import todosReducer from '../services/models/reducers/todosReducer';

function useLocalStorageTodos(initialVal) {
  const [todos, dispatch] = useReducer(todosReducer, initialVal, () => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (!storedTodos) throw Error();
      return storedTodos;
    } catch(err) {
      return localStorage.setItem('todos', JSON.stringify(initialVal ?? []));
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return [todos, dispatch];
}

export default useLocalStorageTodos;