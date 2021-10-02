import './Todo.css';

function Todo({ children, todo: { completed, id }, chooseAction }) {
  const handleClick = evt => {
    const isRemove = evt.target.closest('.Todo__remove');
    chooseAction(isRemove, id);
  };
  return (
    <li className={`Todo ${completed ? 'completed' : ''}`} onClick={handleClick}>
      { children }
      <button className="Todo__remove">&times;</button>
    </li>
  )
}

export default Todo;
