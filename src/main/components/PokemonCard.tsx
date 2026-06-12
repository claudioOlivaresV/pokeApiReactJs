import type { Pokemon } from "../../interfaces/Pokemon.interface";
import { cn } from "../../lib/utils";

const typeClass: Record<string, string> = {
  normal: "bg-[var(--color-type-normal)]",
  fire: "bg-[var(--color-type-fire)]",
  water: "bg-[var(--color-type-water)]",
  electric: "bg-[var(--color-type-electric)]",
  grass: "bg-[var(--color-type-grass)]",
  ice: "bg-[var(--color-type-ice)]",
  fighting: "bg-[var(--color-type-fighting)]",
  poison: "bg-[var(--color-type-poison)]",
  ground: "bg-[var(--color-type-ground)]",
  flying: "bg-[var(--color-type-flying)]",
  psychic: "bg-[var(--color-type-psychic)]",
  bug: "bg-[var(--color-type-bug)]",
  rock: "bg-[var(--color-type-rock)]",
  ghost: "bg-[var(--color-type-ghost)]",
  dragon: "bg-[var(--color-type-dragon)]",
  dark: "bg-[var(--color-type-dark)]",
  steel: "bg-[var(--color-type-steel)]",
  fairy: "bg-[var(--color-type-fairy)]",
};

export function TypeBadge({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white shadow-sm capitalize",
        typeClass[type] ?? "bg-muted text-foreground",
        className,
      )}
    >
      {type}
    </span>
  );
}

export function PokemonCard({
  p,
  onClick,
}: {
  p: Pokemon;
  onClick: () => void;
}) {
  const img =
    p.sprites.other["official-artwork"].front_default ??
    p.sprites.front_default ??
    "";
  const primaryType = p.types[0]?.type.name ?? "normal";
  return (
    <button
      onClick={onClick}
      className="group glass relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 hover:scale-[1.03] hover:shadow-mac-lg focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-30 blur-2xl transition-opacity group-hover:opacity-50",
          typeClass[primaryType],
        )}
      />
      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="text-xs font-mono text-muted-foreground">
            #{p.id.toString().padStart(4, "0")}
          </span>
          <div className="flex gap-1">
            {p.types.map((t: any) => (
              <TypeBadge key={t.type.name} type={t.type.name} />
            ))}
          </div>
        </div>
        <div className="flex justify-center py-2">
          <img
            src={img}
            alt={p.name}
            loading="lazy"
            className="h-28 w-28 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          />
        </div>
        <h3 className="mt-1 text-base font-semibold capitalize tracking-tight">
          {p.name}
        </h3>
      </div>
    </button>
  );
}
