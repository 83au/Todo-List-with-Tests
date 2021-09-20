import { useState } from 'react';
import { useTodos } from '../../store/Todos/TodosProvider';
import './AddTodoForm.css';

function AddTodoForm() {
  const [task, setTask] = useState('');
  const { addTodo } = useTodos();

  const handleChange = event => setTask(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(task);
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
