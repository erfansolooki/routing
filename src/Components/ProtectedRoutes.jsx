import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ children, redirectPatch = "/login" }) => {
  const userToken = localStorage.getItem("userToken");

  if (!userToken) return <Navigate to={redirectPatch} replace />;
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
