import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import TodoList from '../TodoList/TodoList';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import './App.css';

function App() {
  const todaysDate = new Date().toLocaleDateString();
  return (
    <section className="App">
      <ThemeSwitch />
      <h1>Todo List</h1>
      <h2>{todaysDate}</h2>
      <AddTodoForm />
      <TodoList />
    </section>
  );
}

export default App;
