import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
