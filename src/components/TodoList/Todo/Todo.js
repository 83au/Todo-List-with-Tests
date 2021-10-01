import './Todo.css';

function Todo({ children, todo: { completed, id }, chooseAction }) {
  const handleClick = evt => {
    const isDelete = evt.target.closest('.Todo__delete');
    chooseAction(isDelete, id);
  };
  return (
    <li className={`Todo ${completed ? 'completed' : ''}`} onClick={handleClick}>
      { children }
      <button className="Todo__delete">&times;</button>
    </li>
  )
}

export default Todo;
