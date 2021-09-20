import { useTodos } from '../../store/Todos/TodosProvider';
import Todo from './Todo/Todo';
import './TodoList.css';

function TodoList() {
  const { todos, deleteTodo, updateTodo } = useTodos();

  const listItems = todos.map(todo => (
    <Todo 
      key={todo.id} 
      todo={todo} 
      deleteTodo={deleteTodo} 
      updateTodo={updateTodo}
    >
      {todo.task}
    </Todo>
  ));

  return (
    <ul className="TodoList">
      { listItems }
    </ul>
  )
}

export default TodoList;
