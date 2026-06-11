import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const Login = () => {
  return (
    <form className="space-y-3">
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground">
          Email
        </label>
        <Input
          type="email"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          placeholder="ash@pokemon.com"
          className="h-10 rounded-xl bg-background/60"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground">
          Password
        </label>
        <Input
          type="password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="h-10 rounded-xl bg-background/60"
        />
      </div>
      <Button type="submit" className="h-10 w-full rounded-xl shadow-mac">
        Sign in
      </Button>
    </form>
  );
};
