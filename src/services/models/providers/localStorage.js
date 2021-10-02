import { useReducer, useEffect } from 'react';

export const getStoredState = key => {
  return JSON.parse(localStorage.getItem(key))
}

export const setStoredState = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useLocalStorage(key, reducer, initialVal) {
  const [state, dispatch] = useReducer(reducer, initialVal, () => {
    try {
      const storedState = getStoredState(key);
      if (storedState == null) throw Error();
      return storedState;
    } catch(err) {
      const initialState = initialVal ?? [];
      setStoredState(key, initialState);
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}