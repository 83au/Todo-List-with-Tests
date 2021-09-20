import { v4 as uuid } from 'uuid';

export const types = {
  ADD: 'ADD', 
  DELETE: 'DELETE', 
  UPDATE: 'UPDATE'
}

export const addTodo = task => ({ type: 'ADD', todo: { task, completed: false, id: uuid() } });
export const deleteTodo = id => ({ type: 'DELETE', id });
export const updateTodo = id => ({ type: 'UPDATE', id });