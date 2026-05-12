import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { humanize } from "@/lib/categories";
import type { Game, Locale } from "@/types";

interface GameHeroProps {
  game: Game;
  locale: Locale;
}

export async function GameHero({ game, locale }: GameHeroProps) {
  const t = await getTranslations("game");
  const tagline = locale === "es" ? game.taglineEs : game.taglineEn;
  const summary = locale === "es" ? game.summaryEs : game.summaryEn;
  const { theme } = game;

  return (
    <section className="border-b border-border">
      <div
        className="relative h-[240px] w-full overflow-hidden sm:h-[320px] md:h-[400px] lg:h-[500px]"
        style={{
          background: `linear-gradient(90deg, ${theme.background} 0%, ${theme.secondary} 50%, ${theme.background} 100%)`,
          color: theme.text,
        }}
      >
        {game.heroImage && (
          <div
            className="absolute inset-y-0 left-1/2 w-full max-w-[1500px] -translate-x-1/2"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
            }}
          >
            <Image
              src={game.heroImage}
              alt={game.name}
              fill
              priority
              sizes="(min-width: 1500px) 1500px, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${theme.background}ee 0%, ${theme.background}66 35%, transparent 70%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${theme.background}88 0%, transparent 55%)`,
          }}
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-end px-6 pb-8 sm:pb-10">
          {game.logo && (
            <div
              className="relative mb-4 h-16 w-16 overflow-hidden rounded-xl border-2 shadow-2xl backdrop-blur-sm sm:h-20 sm:w-20"
              style={{
                borderColor: `${theme.accent}80`,
                background: `${theme.background}cc`,
              }}
            >
              <Image
                src={game.logo}
                alt={`${game.name} logo`}
                fill
                sizes="80px"
                className="object-contain p-1.5"
              />
            </div>
          )}
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            {game.shortName} · {game.developer} · {game.releaseYear}
          </p>
          <h1 className="mt-1.5 max-w-3xl text-2xl font-semibold leading-[1.1] tracking-tight sm:mt-2 sm:text-5xl sm:leading-[1.05]">
            {game.name}
          </h1>
          {tagline && (
            <p
              className="mt-2 max-w-2xl text-sm font-medium leading-snug sm:mt-3 sm:text-lg sm:leading-normal"
              style={{ color: theme.text }}
            >
              {tagline}
            </p>
          )}
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${theme.background} 0%, ${theme.secondary} 100%)`,
          color: theme.text,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 80% 0%, ${theme.accent}25, transparent 55%)`,
          }}
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8">
          {summary && (
            <p
              className="max-w-2xl text-base leading-relaxed"
              style={{ color: `${theme.text}cc` }}
            >
              {summary}
            </p>
          )}
          {game.genres.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {game.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-md border px-2 py-0.5 text-[11px] font-medium"
                  style={{
                    borderColor: `${theme.accent}40`,
                    color: `${theme.text}cc`,
                    background: `${theme.secondary}80`,
                  }}
                >
                  {humanize(genre)}
                </span>
              ))}
            </div>
          )}
          <div>
            <a
              href={game.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold transition-transform duration-150 hover:-translate-y-0.5"
              style={{
                background: theme.accent,
                color: theme.background,
              }}
            >
              {t("officialSite")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
