import './Todo.css';

function Todo({ children, todo: { completed, id }, dispatch }) {
  const handleClick = event => {
    if (event.target.closest('.Todo__close')) {
      dispatch({ type: 'DELETE', id });
    } else {
      dispatch({ type: 'UPDATE', id })
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
