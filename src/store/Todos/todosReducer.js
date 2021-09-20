const ADD = 'ADD';
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';

const todosReducer = (state, action) => {
  let newState;
  switch(action.type) {
    case ADD:
      newState = [...state, action.todo];
      return newState;
    case DELETE:
      newState = state.filter(todo => todo.id !== action.id);
      return newState;
    case UPDATE:
      newState = state.map(todo => {
        if (todo.id !== action.id) return todo;
        return { ...todo, completed: !todo.completed };
      });
      return newState;
    default:
      return state;
  }
}

export default todosReducer;