import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "./auth/components/Login";
import { MainLayout } from "./main/MainLayout";
import { ProtectedRoute } from "./routes/ProtectedRoute";
const AuthLayout = lazy(() => import("./auth/AuthLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <MainLayout />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/auth/login" />,
  },
]);
