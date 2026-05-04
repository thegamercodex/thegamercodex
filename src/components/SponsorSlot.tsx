import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  activeSponsor,
  buildSponsorUrl,
  getTagline,
  type Sponsor,
} from "@/lib/sponsor";
import type { Locale } from "@/types";

interface SponsorSlotProps {
  /**
   * Where the slot is rendered. Used as utm_campaign so different placements
   * track separately. Examples: "footer", "tool-sidebar", "game-page".
   */
  slot: string;
  locale: Locale;
  /**
   * Override the active sponsor for testing or per-page targeting.
   * Defaults to activeSponsor from lib/sponsor.
   */
  sponsor?: Sponsor | null;
}

export async function SponsorSlot({
  slot,
  locale,
  sponsor = activeSponsor,
}: SponsorSlotProps) {
  if (!sponsor) return null;

  const t = await getTranslations({ locale, namespace: "sponsor" });
  const tagline = getTagline(sponsor, locale);
  const href = buildSponsorUrl(sponsor, slot);

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      title={t("disclosure")}
      className="group flex items-center gap-4 rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-accent/40 hover:bg-muted/60"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border bg-background">
        <Image
          src={sponsor.logo}
          alt=""
          fill
          sizes="48px"
          className="object-contain p-1"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground-subtle">
          {t("label")}
        </p>
        <p className="text-sm font-semibold tracking-tight">{sponsor.name}</p>
        {tagline && (
          <p className="text-xs text-foreground-muted">{tagline}</p>
        )}
      </div>
      <ExternalLink
        aria-hidden
        className="h-4 w-4 shrink-0 text-foreground-subtle transition-colors group-hover:text-accent"
      />
    </a>
  );
}
