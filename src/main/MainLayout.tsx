import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { TopBar } from "./components/TopBar";
import { response } from "../assets/response";
import { PokemonCard } from "./components/PokemonCard";
import type { Pokemon } from "../interfaces/Pokemon.interface";
import { PokemonDetail } from "./components/PokemonDetail";

export const MainLayout = () => {
  const [filtered, setFiltered] = useState([response]);
  const [selected, setSelected] = useState<Pokemon | null>(null);
  return (
    <div className="min-h-screen pb-16">
      <div className="px-4 pt-4">
        <TopBar />
      </div>

      <main className="mx-auto mt-8 max-w-6xl px-4">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.65_0.22_320)] bg-clip-text text-transparent">
              Pokédex
            </span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Powered by PokéAPI ·
          </p>
        </section>

        {false ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="glass h-52 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filtered.map((pokemon: Pokemon) => (
                // <p key={p.id}>{p.id}</p>
                <PokemonCard
                  key={pokemon.id}
                  p={pokemon}
                  onClick={() => setSelected(pokemon)}
                />
              ))}
            </div>

            {/* {filtered.length === 0 && (
              <div className="glass mx-auto mt-10 max-w-md rounded-2xl p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No Pokémon match "{query}"
                </p>
              </div>
            )} */}
          </>
        )}
      </main>

      <PokemonDetail
        pokemon={selected}
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />
    </div>
  );
};
