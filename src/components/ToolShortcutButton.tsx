"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

interface ToolShortcutButtonProps {
  url: string;
  className?: string;
}

export function ToolShortcutButton({ url, className }: ToolShortcutButtonProps) {
  const t = useTranslations("tool");
  const label = t("goToTool");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={label}
      title={label}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background/80 text-foreground-subtle backdrop-blur-sm transition-colors hover:border-[var(--game-accent,var(--color-accent))]/60 hover:text-[var(--game-accent,var(--color-accent))] ${className ?? ""}`}
    >
      <ExternalLink aria-hidden className="h-3.5 w-3.5" />
    </a>
  );
}
