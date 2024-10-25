import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Get token from localStorage
  const isAdmin = localStorage.getItem('role') === 'admin'; // Check if the user is an admin

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    // If authenticated but not an admin, redirect to homepage or error page
    return <Navigate to="/" />;
  }

  // If authenticated and authorized, allow access to the protected route
  return children;
};

export default ProtectedRoute;
