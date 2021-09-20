import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useTodos } from '../../store/Todos/TodosProvider';
import './AddTodoForm.css';

function AddTodoForm() {
  const [task, setTask] = useState('');
  const { dispatch } = useTodos();

  const handleChange = event => setTask(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD', todo: { task: task, completed: false, id: uuid() }});
    setTask('');
  }

  return (
    <form className="AddTodoForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Some task" value={task} onChange={handleChange} />
      <button type="submit">+</button>
    </form>
  )
}

export default AddTodoForm;
