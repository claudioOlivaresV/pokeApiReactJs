import { useQuery } from "@tanstack/react-query";
import { GetPokemons } from "../actions/get-pokemons.action";
import { GetPokemonDetail } from "../actions/get-pokemon-datail.action";

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],

    queryFn: async () => {
      const data = await GetPokemons();

      const pokemons = await Promise.all(
        data.results.map((pokemon: any) => GetPokemonDetail(pokemon.url)),
      );

      return pokemons;
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
