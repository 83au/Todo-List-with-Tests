import { useState } from 'react';
import { useTodosViewModel } from '../../services/viewModels/TodosViewModel';
import './AddTodoForm.css';

function AddTodoForm() {
  const [task, setTask] = useState('');
  const { addTodo } = useTodosViewModel();

  function handleChange(evt) {
    setTask(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
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
