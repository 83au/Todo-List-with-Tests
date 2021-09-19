import { useContext } from 'react';
import { TodosContext } from '../../contexts/Todos.context';
import Todo from './Todo/Todo';
import './TodoList.css';

function TodoList() {
  const { todos, dispatch } = useContext(TodosContext);

  const listItems = todos.map(todo => (
    <Todo key={todo.id} todo={todo} dispatch={dispatch}>{todo.task}</Todo>
  ));

  return (
    <ul className="TodoList">
      { listItems }
    </ul>
  )
}

export default TodoList;
