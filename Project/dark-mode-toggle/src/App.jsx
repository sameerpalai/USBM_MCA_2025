import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>React Dark Mode / Light Mode</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
