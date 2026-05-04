import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { humanize } from "@/lib/categories";
import type { Game, Locale } from "@/types";

interface GameCardProps {
  game: Game;
  locale: Locale;
}

export function GameCard({ game, locale }: GameCardProps) {
  const tagline = locale === "es" ? game.taglineEs : game.taglineEn;
  const { theme } = game;

  return (
    <Link
      href={`/${game.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-muted/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_0_1px_var(--color-accent)]"
    >
      <div
        className="relative aspect-[16/9] overflow-hidden"
        style={{ background: theme.secondary }}
      >
        {game.heroImage ? (
          <Image
            src={game.heroImage}
            alt={game.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.background} 65%, ${theme.primary}40 100%)`,
            }}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${theme.accent}30, transparent 60%)`,
          }}
        />
        <ArrowUpRight
          className="absolute right-3 top-3 h-5 w-5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ color: theme.accent }}
        />
        {game.logo && (
          <div
            className="absolute bottom-2.5 left-2.5 h-12 w-12 overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm"
            style={{
              borderColor: `${theme.accent}60`,
              background: `${theme.background}cc`,
            }}
          >
            <Image
              src={game.logo}
              alt={`${game.name} logo`}
              fill
              sizes="48px"
              className="object-contain p-1.5"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold leading-tight">{game.name}</h3>
          <span
            className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.accent }}
          >
            {game.shortName}
          </span>
        </div>
        {tagline && (
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {tagline}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {game.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {humanize(genre)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
