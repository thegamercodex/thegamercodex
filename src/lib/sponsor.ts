import type { Locale } from "@/types";

export interface Sponsor {
  /** Display name. Visible to readers next to the logo. */
  name: string;
  /** Path under /public, e.g. "/images/sponsors/maxroll-logo.png". */
  logo: string;
  /** Destination URL. UTM params are appended automatically. */
  url: string;
  /** Optional one-line tagline shown next to the logo. */
  taglineEs?: string;
  taglineEn?: string;
}

/**
 * The currently active sponsor. Set to `null` when no sponsor is running —
 * the slot then renders nothing instead of a "your logo here" placeholder.
 *
 * To activate a sponsor:
 *   1. Drop the logo into public/images/sponsors/<sponsor-id>-logo.<ext>
 *   2. Replace this object with the sponsor data
 *   3. Verify the result on /es and /en before pushing
 *
 * Editorial promise: this slot is paid placement, demarcated as such. It does
 * not affect the catalog (tools, creators, resources). The catalog itself is
 * not for sale — see docs/RULES.md and the about-text in messages/.
 */
export const activeSponsor: Sponsor | null = null;

export function getTagline(sponsor: Sponsor, locale: Locale): string | null {
  const t = locale === "es" ? sponsor.taglineEs : sponsor.taglineEn;
  return t ?? null;
}

export function buildSponsorUrl(sponsor: Sponsor, slot: string): string {
  try {
    const url = new URL(sponsor.url);
    url.searchParams.set("utm_source", "thegamercodex");
    url.searchParams.set("utm_medium", "sponsor");
    url.searchParams.set("utm_campaign", slot);
    return url.toString();
  } catch {
    return sponsor.url;
  }
}
