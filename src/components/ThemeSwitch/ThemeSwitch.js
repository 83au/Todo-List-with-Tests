import { useState, useRef, useEffect } from 'react';
import { useThemeViewModel } from '../../services/viewModels/ThemeViewModel';
import './ThemeSwitch.css';

function ThemeSwitch() {
  const { toggleTheme } = useThemeViewModel(); 

  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef();

  useEffect(() => {
    setIsChecked(checkboxRef.current.checked);
  }, []);

  const handleChange = () => {
    setIsChecked(checkboxRef.current.checked);
    toggleTheme();
  }
  
  return (
    <label className={`ThemeSwitch ${isChecked ? 'checked' : ''}`}>
      Toggle theme
      <input 
        ref={checkboxRef} 
        className="ThemeSwitch__toggle" 
        type="checkbox" 
        onChange={handleChange}
      />
    </label>
  )
}

export default ThemeSwitch;
