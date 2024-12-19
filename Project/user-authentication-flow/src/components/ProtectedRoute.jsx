// src/components/ProtectedRoute.js

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// This component wraps the protected page (Dashboard)
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
