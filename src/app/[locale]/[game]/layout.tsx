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
      className="flex flex-1 flex-col bg-background text-foreground"
      style={
        {
          "--background": theme.background,
          "--background-secondary": theme.secondary,
          "--background-tertiary": theme.primary,

          "--foreground": theme.text,
          "--foreground-muted": `${theme.text}b3`,
          "--foreground-subtle": `${theme.text}66`,

          "--border": `${theme.text}1f`,
          "--border-subtle": `${theme.text}0d`,
          "--border-strong": `${theme.text}33`,

          "--accent": theme.accent,
          "--accent-hover": theme.accent,
          "--accent-subtle": `${theme.accent}80`,
          "--accent-foreground": theme.background,

          "--muted": theme.secondary,
          "--muted-foreground": `${theme.text}b3`,

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
