import { ArrowRight, Layers } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale, Stack } from "@/types";

interface StackCardProps {
  gameId: string;
  stack: Stack;
  /** Nombres de las tools del stack, en orden (para el preview). */
  toolNames: string[];
  locale: Locale;
  eyebrowLabel: string;
  toolCountLabel: string;
}

export function StackCard({
  gameId,
  stack,
  toolNames,
  locale,
  eyebrowLabel,
  toolCountLabel,
}: StackCardProps) {
  const title = locale === "es" ? stack.titleEs : stack.titleEn;
  const description =
    locale === "es" ? stack.descriptionEs : stack.descriptionEn;

  return (
    <Link
      href={`/${gameId}/stacks/${stack.id}`}
      className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-muted/40 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--game-accent)]/60 hover:bg-muted/70"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
          <Layers aria-hidden className="h-3 w-3" />
          {eyebrowLabel}
        </span>
        <ArrowRight
          className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
          style={{ color: "var(--game-accent)" }}
        />
      </div>
      <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">
        {title}
      </h3>
      {description && (
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      <div className="mt-auto flex flex-col gap-1.5 pt-1">
        {toolNames.length > 0 && (
          <p className="truncate text-xs text-foreground-subtle">
            {toolNames.join(" · ")}
          </p>
        )}
        <p className="text-xs font-medium text-muted-foreground">
          {toolCountLabel}
        </p>
      </div>
    </Link>
  );
}
