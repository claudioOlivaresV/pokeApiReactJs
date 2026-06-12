import { pokeApi } from "../../api/axiosApi";

export const GetPokemons = async (): Promise<any> => {
  try {
    const { data } = await pokeApi.get<any>("pokemon?limit=151&offset=0");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch Pokémon", { cause: error });
  }
};
