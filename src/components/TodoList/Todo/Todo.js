import './Todo.css';

function Todo({ children, completed }) {
  return (
    <li className={`Todo ${completed ? 'completed' : ''}`}>
      { children }
      <span className="Todo__close">&times;</span>
    </li>
  )
}

export default Todo;
