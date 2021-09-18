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

  return (
    <main className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
