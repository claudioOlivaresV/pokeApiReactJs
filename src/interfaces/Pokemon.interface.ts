export type PokemonType = { slot: number; type: { name: string } };

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string | null;
    other: {
      ["official-artwork"]: { front_default: string | null };
      home?: { front_default: string | null };
    };
  };
  types: PokemonType[];
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
};
