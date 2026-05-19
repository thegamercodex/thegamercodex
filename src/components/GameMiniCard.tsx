import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Game } from "@/types";

interface GameMiniCardProps {
  game: Game;
}

export function GameMiniCard({ game }: GameMiniCardProps) {
  const { theme } = game;
  return (
    <Link
      href={`/${game.id}`}
      className="group flex items-center gap-3 rounded-lg border border-border bg-muted/40 p-2.5 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-muted/70"
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border"
        style={{
          borderColor: `${theme.accent}40`,
          background: `${theme.background}cc`,
        }}
      >
        {game.logo ? (
          <Image
            src={game.logo}
            alt=""
            width={36}
            height={36}
            className="h-full w-full object-contain p-0.5"
          />
        ) : (
          <span
            className="text-sm font-semibold"
            style={{ color: theme.accent }}
          >
            {game.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="min-w-0 flex-1 truncate text-sm font-medium">
        {game.name}
      </span>
    </Link>
  );
}
