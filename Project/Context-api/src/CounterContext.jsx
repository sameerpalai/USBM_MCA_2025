import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  count: 0,
};

// Define actions
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

// Reducer function to update state based on actions
const counterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Create Context
const CounterContext = createContext();

// Custom hook to use counter context
export const useCounter = () => {
  return useContext(CounterContext);
};

// CounterProvider component to wrap the app with the context provider
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Action creators for dispatching actions
export const increment = () => ({ type: actionTypes.INCREMENT });
export const decrement = () => ({ type: actionTypes.DECREMENT });
export const reset = () => ({ type: actionTypes.RESET });
