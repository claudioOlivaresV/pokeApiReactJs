import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "./auth/components/Login";
import { MainLayout } from "./main/MainLayout";
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
  {
    path: "main",
    element: <MainLayout />,
  },
]);
