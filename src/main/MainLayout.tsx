import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { TopBar } from "./components/TopBar";
import { response } from "../assets/response";
import { PokemonCard } from "./components/PokemonCard";
import type { Pokemon } from "../interfaces/Pokemon.interface";
import { PokemonDetail } from "./components/PokemonDetail";
import { generations } from "../shared/generations";
import { usePokemons } from "./hooks/usePokemons";

export const MainLayout = () => {
  const [filtered, setFiltered] = useState([response]);
  const [selected, setSelected] = useState<Pokemon | null>(null);
  const [genIndex, setGenIndex] = useState(0);
  const { data, isLoading, isError } = usePokemons();
  console.log(data);

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
          <div className="flex justify-center w-full mt-4">
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
              {generations.map((g, i) => (
                <button
                  key={g.name}
                  onClick={() => setGenIndex(i)}
                  className={`
          px-4 py-2
          rounded-xl
          text-xs
          font-semibold
          transition-all
          duration-200
          ${
            genIndex === i
              ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-600"
              : "text-gray-500 dark:text-gray-400 hover:bg-white/60 dark:hover:bg-gray-700/50"
          }
        `}
                >
                  {g.name}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Powered by PokéAPI ·
          </p>
        </section>

        {isLoading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="glass h-52 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data?.map((pokemon: Pokemon) => (
                // <p key={pokemon.id}>{pokemon.id}</p>
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
