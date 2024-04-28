import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56 mx-auto"></progress>;
  }

  if (user?.email) return children;

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;
