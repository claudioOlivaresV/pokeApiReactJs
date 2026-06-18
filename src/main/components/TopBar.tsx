import { LogOut, Moon, Search, Sun } from "lucide-react";
import { Input } from "../../components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleTheme } from "../../store/themeSlice";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router";
interface Props {
  query: string;
  setQuery: (value: string) => void;
}
export const TopBar = ({ query, setQuery }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const user = useSelector((state: RootState) => state.auth);
  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };
  return (
    <header className="glass sticky top-4 z-30 mx-auto flex max-w-6xl items-center gap-3 rounded-2xl px-3 py-2 shadow-mac">
      <div className="flex items-center gap-1.5 pl-1">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="ml-2 hidden text-sm font-semibold tracking-tight sm:block">
        Pokédex
      </div>

      <div className="relative ml-auto w-full max-w-xs">
        <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Pokémon..."
          className="h-8 rounded-lg border-border/60 bg-background/60 pl-8 text-sm"
        />
      </div>

      <button
        onClick={() => dispatch(toggleTheme())}
        aria-label="Toggle theme"
        className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>

      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <span className="hidden sm:inline">{`${user.username}`}</span>
        <LogOut className="h-3.5 w-3.5" />
      </button>
    </header>
  );
};
