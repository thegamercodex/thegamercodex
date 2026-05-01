import { notFound } from "next/navigation";
import { getGame, getGameIds } from "@/lib/content";

export async function generateStaticParams() {
  const ids = await getGameIds();
  return ids.map((game) => ({ game }));
}

export default async function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; game: string }>;
}) {
  const { game: gameId } = await params;

  let game;
  try {
    game = await getGame(gameId);
  } catch {
    notFound();
  }

  const { theme } = game;

  return (
    <div
      className="flex flex-1 flex-col"
      style={
        {
          "--game-primary": theme.primary,
          "--game-secondary": theme.secondary,
          "--game-accent": theme.accent,
          "--game-background": theme.background,
          "--game-text": theme.text,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
