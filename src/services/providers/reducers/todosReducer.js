import { types } from '../actions/todosActions';

const todosReducer = (state, action) => {
  let newState;
  switch(action.type) {
    case types.ADD:
      newState = [...state, action.todo];
      return newState;
    case types.DELETE:
      newState = state.filter(todo => todo.id !== action.id);
      return newState;
    case types.UPDATE:
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