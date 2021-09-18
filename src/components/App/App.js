import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from '../TodoList/TodoList';
import './App.css';

const initialTodos = [
  { task: 'Mow lawn', completed: false, id: uuid() },
  { task: 'Wash car', completed: false, id: uuid() },
]

function App() {
  const [todos, setTodos] = useState(() => initialTodos);
  const todaysDate = new Date().toLocaleDateString();

  return (
    <section className="App">
      <h1>Todo List</h1>
      <h2>{todaysDate}</h2>
      <TodoList todos={todos} />
    </section>
  );
}

export default App;
