import Todo from './Todo/Todo';
import './TodoList.css';

function TodoList({ todos }) {
  const listItems = todos.map(todo => (
    <Todo key={todo.id} todo={todo}>{todo.task}</Todo>
  ));

  return (
    <ul className="TodoList">
      { listItems }
    </ul>
  )
}

export default TodoList;
