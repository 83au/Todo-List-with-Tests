import { useRef, useEffect } from 'react';

function useOutsideClick(callback) {
  const ref = useRef();

  useEffect(() => {
    function listener(event) {
      const inside = ref.current && ref.current.contains(event.target);
      if (inside) return;
      callback();
    }

    document.setEventListener('click', listener, true);

    return () => document.removeEventListener('click', listener, true);
  }, [callback])
 
  return ref;
}

export default useOutsideClick;




