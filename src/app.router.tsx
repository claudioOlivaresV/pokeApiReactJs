import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "./auth/components/Login";
const AuthLayout = lazy(() => import("./auth/AuthLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
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
]);
