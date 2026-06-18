import { Ruler, Star, Weight, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "../../components/ui/dialog";
import { TypeBadge } from "./PokemonCard";
import { useState } from "react";

const STAT_LABEL: Record<string, string> = {
  hp: "HP",
  attack: "Atk",
  defense: "Def",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

export function PokemonDetail({
  pokemon,
  open,
  onOpenChange,
}: {
  pokemon: any | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [isShiny, setIsShiny] = useState(false);
  // reset al cerrar modal

  if (!pokemon) return null;

  if (!pokemon) return null;
  const img = isShiny
    ? (pokemon.sprites.other["official-artwork"].front_shiny ??
      pokemon.sprites.other["official-artwork"].front_default)
    : pokemon.sprites.other["official-artwork"].front_default;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-elevated max-w-2xl border-0 p-0 overflow-hidden">
        <DialogTitle className="sr-only">{pokemon.name}</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/30 p-8">
            <img
              src={img}
              alt={pokemon.name}
              className="h-56 w-56 object-contain drop-shadow-2xl"
            />
          </div>
          <div className="space-y-4 p-6">
            <div>
              <div className="text-xs font-mono text-muted-foreground">
                #{pokemon.id.toString().padStart(4, "0")}
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold capitalize tracking-tight">
                  {pokemon.name}
                </h2>

                <button
                  onClick={() => setIsShiny((v) => !v)}
                  className={`
    flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
    transition-all duration-200 ease-out
    border
    ${
      isShiny
        ? "bg-yellow-400 text-black border-yellow-300 shadow-md shadow-yellow-400/40 scale-105"
        : "bg-zinc-900 text-zinc-100 border-zinc-700 hover:bg-zinc-800"
    }
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-yellow-400/60
  `}
                >
                  <Star
                    size={14}
                    fill={isShiny ? "currentColor" : "none"}
                    className={isShiny ? "drop-shadow-sm" : ""}
                  />

                  {isShiny ? "Shiny" : "Normal"}
                </button>
              </div>
              <div className="mt-2 flex gap-1.5">
                {pokemon.types.map((t: any) => (
                  <TypeBadge key={t.type.name} type={t.type.name} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 ">
              <div className="rounded-xl bg-muted/50 p-3 text-center">
                <div className="text-[10px] uppercase text-muted-foreground">
                  Height
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Ruler size={14} className="text-sky-500" />
                  <span>{(pokemon.height / 10).toFixed(1)} m</span>
                </div>
              </div>
              <div className="rounded-xl bg-muted/50 p-3 text-center">
                <div className="text-[10px] uppercase text-muted-foreground">
                  Weight
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Weight size={14} className="text-orange-500" />
                  <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
                </div>
              </div>
              <div className="rounded-xl bg-muted/50 p-3 text-center">
                <div className="text-[10px] uppercase text-muted-foreground">
                  Base XP
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Zap size={14} className="text-yellow-500" />
                  <span>{pokemon.base_experience}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                Stats
              </h3>
              <div className="space-y-1.5">
                {pokemon.stats.map((s: any) => (
                  <div key={s.stat.name} className="flex items-center gap-2">
                    <span className="w-14 text-[11px] text-muted-foreground">
                      {STAT_LABEL[s.stat.name] ?? s.stat.name}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{
                          width: `${Math.min(100, (s.base_stat / 200) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs font-mono">
                      {s.base_stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                Abilities
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {pokemon.abilities.map((a: any) => (
                  <span
                    key={a.ability.name}
                    className="rounded-full bg-accent px-2.5 py-0.5 text-xs capitalize text-accent-foreground"
                  >
                    {a.ability.name.replace("-", " ")}
                    {a.is_hidden && (
                      <span className="ml-1 text-[9px] text-muted-foreground">
                        (hidden)
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
