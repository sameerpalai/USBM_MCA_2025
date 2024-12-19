import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CounterProvider } from './CounterContext'; // Import the CounterProvider

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById('root')
);
