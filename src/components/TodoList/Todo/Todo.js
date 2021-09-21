import './Todo.css';

function Todo({ children, todo: { completed, id }, chooseAction }) {
  const handleClick = event => {
    const isDelete = event.target.closest('.Todo__close');
    chooseAction(isDelete, id);
  };
  return (
    <li className={`Todo ${completed ? 'completed' : ''}`} onClick={handleClick}>
      { children }
      <button className="Todo__close">&times;</button>
    </li>
  )
}

export default Todo;
