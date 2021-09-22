import { useReducer, useEffect } from 'react';

function useLocalStorage(key, reducer, initialVal) {
  const [state, dispatch] = useReducer(reducer, initialVal, () => {
    try {
      const storedState = JSON.parse(localStorage.getItem(key));
      if (storedState == null) throw Error();
      return storedState;
    } catch(err) {
      const initialState = initialVal ?? [];
      localStorage.setItem(key, JSON.stringify(initialState));
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorage;