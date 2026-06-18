import { pokeApi } from "../../api/axiosApi";

export const GetPokemons = async (
  limit: number,
  offset: number,
): Promise<any> => {
  try {
    const { data } = await pokeApi.get<any>(
      `pokemon?limit=${limit}&offset=${offset}`,
    );
    return data;
  } catch (error) {
    throw new Error("Failed to fetch Pokémon", { cause: error });
  }
};
