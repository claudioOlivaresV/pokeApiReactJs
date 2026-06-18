import { pokeApi } from "../../api/axiosApi";

export const GetPokemonDetail = async (url: string) => {
  const { data } = await pokeApi.get(url);

  return data;
};
