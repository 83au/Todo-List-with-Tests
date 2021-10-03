import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from '../localStorage';

const testReducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE':
      return !state
    default:
      return state
  }
}

describe('useLocalStorage', () => {
  let result;
  let state;
  let dispatch;

  beforeEach(() => {
    result = renderHook(() => useLocalStorage('test', testReducer, true)).result;
    state = result.current[0]; 
    dispatch = result.current[1];
  });

  it('should return the initial state', () => {
    expect(state).toBe(true);
  });

  it('should return a function to update state', () => {
    expect(typeof dispatch).toBe('function');
  });

  it('should update state when dispatch function is called correctly', () => {
    act(() => {
      dispatch({ type: 'TOGGLE' });
    });
    
    expect(result.current[0]).toBe(false);
  });
});
