import { useState } from 'react';

function useToggle(initialVal) {
  const [value, setValue] = useState(initialVal ? initialVal : false);

  const toggle = () => setValue(prevVal => !prevVal);

  return [value, toggle];
}

export default useToggle;