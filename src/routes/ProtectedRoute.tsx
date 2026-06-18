import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.auth);

  if (!user.isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};
