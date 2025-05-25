import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);


  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  const rolesArray = Array.isArray(allowedRoles)
    ? allowedRoles
    : [allowedRoles];

  if (allowedRoles && !rolesArray.includes(role)) {

    if (role === "admin") {
      return <Navigate to="/dashboard" replace />;
    } else if (role === "superadmin") {
      return <Navigate to="/vendor-new" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }
  

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
