import './Todo.css';

function Todo({ children, todo: { completed, id }, dispatch }) {
  const handleUpdate = () => {
    dispatch({ type: 'UPDATE', id: id })
  }
  return (
    <li className={`Todo ${completed ? 'completed' : ''}`} onClick={handleUpdate}>
      { children }
      <span className="Todo__close">&times;</span>
    </li>
  )
}

export default Todo;
