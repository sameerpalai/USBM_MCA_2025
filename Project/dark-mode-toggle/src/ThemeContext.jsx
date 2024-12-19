import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the app with the context provider
export const ThemeProvider = ({ children }) => {
  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save to localStorage
  };

  // Apply theme to body on theme change
  useEffect(() => {
    document.body.className = theme; // Apply class to body for styling
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
