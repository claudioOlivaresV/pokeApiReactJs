import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { TopBar } from "./components/TopBar";
import { response } from "../assets/response";
import { PokemonCard } from "./components/PokemonCard";
import type { Pokemon } from "../interfaces/Pokemon.interface";
import { PokemonDetail } from "./components/PokemonDetail";
import { generations } from "../shared/generations";
import { usePokemons } from "./hooks/usePokemons";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setPagination } from "../store/generationSlice";
import { ErrorState } from "./components/ErrorState";

export const MainLayout = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Pokemon | null>(null);
  const [genIndex, setGenIndex] = useState(0);
  const dispatch = useDispatch();

  const { limit, offset } = useSelector((state: RootState) => state.generation);
  const { data, isLoading, isError, refetch } = usePokemons(limit, offset);
  const filteredPokemons = data?.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(data);
  const changeGeneration = (i: number, g: any) => {
    setGenIndex(i);
    dispatch(
      setPagination({
        limit: g.limit,
        offset: g.offset,
      }),
    );
  };
  return (
    <div className="min-h-screen pb-16">
      <div className="px-4 pt-4">
        <TopBar query={search} setQuery={setSearch} />
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
                  onClick={() => changeGeneration(i, g)}
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
        {isError ? (
          <ErrorState onRetry={refetch} />
        ) : isLoading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="glass h-52 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredPokemons?.map((pokemon: Pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  p={pokemon}
                  onClick={() => setSelected(pokemon)}
                />
              ))}
            </div>

            {filteredPokemons?.length === 0 && (
              <div className="glass mx-auto mt-10 max-w-md rounded-2xl p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No Pokémon match "{search}"
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <PokemonDetail
        key={selected?.id}
        pokemon={selected}
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />
    </div>
  );
};
