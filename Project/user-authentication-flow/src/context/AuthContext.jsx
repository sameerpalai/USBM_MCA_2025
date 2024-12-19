// src/context/AuthContext.js

import React, { createContext, useState, useContext } from "react";

// Create context for authentication
const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function (you can replace with API calls)
  const login = (username, password) => {
    if (username === "test" && password === "password") {
      setUser({ username });
    } else {
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
