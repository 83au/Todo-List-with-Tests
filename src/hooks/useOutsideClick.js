import { useRef, useEffect } from 'react';

function useOutsideClick(callback) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(evt) {
      const outside = ref.current && ref.current.contains(evt.target);
      if (outside) callback();
    }

    document.setEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick, true);
  }, [callback])
 
  return ref;
}

export default useOutsideClick;




