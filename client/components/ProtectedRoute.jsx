import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  // Check whether the token exists
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const payload = jwtDecode(token);

    // Check whether expiration exists and is still valid
    if (!payload.exp || payload.exp * 1000 <= Date.now()) {
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  } catch {
    // Remove an invalid token
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;