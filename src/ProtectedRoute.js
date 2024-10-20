import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// A ProtectedRoute component that checks if a user is authenticated
const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // If the user is not authenticated, navigate them to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the child components (like a protected page)
  return <Outlet />;
};

export default ProtectedRoute;
