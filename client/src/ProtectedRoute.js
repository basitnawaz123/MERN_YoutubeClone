import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectTo, children }) => {
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default ProtectedRoute;
