import { useQuery } from "@tanstack/react-query";
import { GetPokemons } from "../actions/get-pokemons.action";
import { GetPokemonDetail } from "../actions/get-pokemon-datail.action";

export const usePokemons = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["pokemons", limit, offset],

    queryFn: async () => {
      const data = await GetPokemons(limit, offset);

      const pokemons = await Promise.all(
        data.results.map((pokemon: any) => GetPokemonDetail(pokemon.url)),
      );

      return pokemons;
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
