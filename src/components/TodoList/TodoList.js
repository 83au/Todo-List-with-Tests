import React from 'react'

function TodoList({ todos }) {
  return (
    <ul className="TodoList">
      { todos.map(todo => <li key={todo.id}>{todo.task}</li>) }
    </ul>
  )
}

export default TodoList;
