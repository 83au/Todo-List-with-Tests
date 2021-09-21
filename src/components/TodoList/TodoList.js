import { useTodosViewModel } from '../../services/viewModels/TodosViewModel';
import Todo from './Todo/Todo';
import './TodoList.css';

function TodoList() {
  const { todos, chooseAction } = useTodosViewModel();

  const listItems = todos.map(todo => (
    <Todo 
      key={todo.id} 
      todo={todo} 
      chooseAction={chooseAction} 
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
