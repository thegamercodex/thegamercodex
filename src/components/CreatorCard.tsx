import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { flagEmoji } from "@/lib/categories";
import type { Creator, Locale } from "@/types";

interface CreatorCardProps {
  gameId: string;
  creator: Creator;
  locale: Locale;
}

export function CreatorCard({ gameId, creator, locale }: CreatorCardProps) {
  const t = useTranslations("creator");
  const note = locale === "es" ? creator.noteEs : creator.noteEn;
  const flag = flagEmoji(creator.country);
  const primary =
    creator.platforms.find((p) => p.primary) ?? creator.platforms[0];
  const initial = creator.name.charAt(0).toUpperCase();
  const hasAvatar =
    Boolean(creator.avatar) &&
    existsSync(path.join(process.cwd(), "public", creator.avatar));

  return (
    <Link
      href={`/${gameId}/creators/${creator.id}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--game-accent,var(--color-accent))]/60 hover:bg-muted/70"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background text-base font-semibold"
          style={{ color: "var(--game-accent, var(--color-accent))" }}
        >
          {hasAvatar ? (
            <Image
              src={creator.avatar}
              alt={`${creator.name} avatar`}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          ) : (
            initial
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-semibold leading-tight">
              {creator.name}
            </h3>
            {creator.active && (
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-label={t("active")}
              />
            )}
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            {flag && <span aria-hidden>{flag}</span>}
            <span>{creator.languages.join(" / ").toUpperCase()}</span>
            {primary?.type && (
              <>
                <span aria-hidden>·</span>
                <span className="capitalize">{primary.type}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {note && (
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
    </Link>
  );
}
