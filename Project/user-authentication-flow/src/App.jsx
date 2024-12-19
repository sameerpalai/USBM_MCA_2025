// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Import components
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Login</Link> | <Link to="/register">Register</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
