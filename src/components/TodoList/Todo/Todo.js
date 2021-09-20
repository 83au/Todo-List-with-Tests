import './Todo.css';

function Todo({ children, todo: { completed, id }, deleteTodo, updateTodo }) {
  const handleClick = event => {
    if (event.target.closest('.Todo__close')) {
      deleteTodo(id)
    } else {
      updateTodo(id)
    }
  };
  return (
    <li className={`Todo ${completed ? 'completed' : ''}`} onClick={handleClick}>
      { children }
      <button className="Todo__close">&times;</button>
    </li>
  )
}

export default Todo;
