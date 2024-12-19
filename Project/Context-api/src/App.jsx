import React from 'react';
import { useCounter, increment, decrement, reset } from './CounterContext';
import './App.css';

const App = () => {
  const { state, dispatch } = useCounter(); // Get state and dispatch function from context

  return (
    <div className="app">
      <h1>Counter: {state.count}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default App;
