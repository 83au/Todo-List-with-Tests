import { useTodos } from '../../store/Todos/TodosProvider';
import Todo from './Todo/Todo';
import './TodoList.css';

function TodoList() {
  const { todos, dispatch } = useTodos();

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
