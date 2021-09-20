import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../services/providers/ThemeProvider';
import './ThemeSwitch.css';

function ThemeSwitch() {
  const { isLightTheme, toggleTheme } = useTheme();  
  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef();

  useEffect(() => {
    setIsChecked(checkboxRef.current.checked);
  }, [isLightTheme]);

  const handleThemeToggle = () => toggleTheme();

  return (
    <label className={`ThemeSwitch ${isChecked ? 'checked' : ''}`}>
      Toggle theme
      <input 
        ref={checkboxRef} 
        className="ThemeSwitch__toggle" 
        type="checkbox" 
        onClick={handleThemeToggle} 
      />
    </label>
  )
}

export default ThemeSwitch;
