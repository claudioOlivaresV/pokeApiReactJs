import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import type { RootState } from "../store/store";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../store/themeSlice";

const AuthLayout = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <button
        onClick={() => dispatch(toggleTheme())}
        className="glass absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>

      <div className="glass-elevated w-full max-w-sm rounded-3xl p-8">
        <div className="mb-6 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-mac">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 text-primary-foreground"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 0 0-9.95 9h7.45a2.5 2.5 0 0 1 5 0h7.45A10 10 0 0 0 12 2zm0 20a10 10 0 0 0 9.95-9h-7.45a2.5 2.5 0 0 1-5 0H2.05A10 10 0 0 0 12 22z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to explore the Pokédex
          </p>
        </div>
        <Outlet />

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Mock login — any valid email + password works
        </p>
      </div>
    </div>
  );
};
export default AuthLayout;
