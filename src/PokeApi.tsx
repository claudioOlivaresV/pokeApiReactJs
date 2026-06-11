import { useSelector } from "react-redux";
import { RouterProvider } from "react-router";

import type { RootState } from "./store/store";
import { useEffect } from "react";
import { appRouter } from "./app.router";
export const PokeApi = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return <RouterProvider router={appRouter} />;
};
