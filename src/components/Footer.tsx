import { getLocale, getTranslations } from "next-intl/server";
import { Check, ExternalLink, Heart, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getGames } from "@/lib/content";
import { BrandImage } from "@/components/BrandImage";
import { SponsorSlot } from "@/components/SponsorSlot";
import { activeSponsor } from "@/lib/sponsor";
import type { Locale } from "@/types";

const CONTACT_EMAIL = "hello@thegamercodex.com";

export async function Footer() {
  const t = await getTranslations("common");
  const tFooter = await getTranslations("footer");
  const locale = (await getLocale()) as Locale;
  const year = new Date().getFullYear();
  const games = await getGames();
  const sortedGames = [...games].sort((a, b) => a.name.localeCompare(b.name));

  const trustClaims = [
    tFooter("trustNoAds"),
    tFooter("trustNoAffiliates"),
    tFooter("trustOpenSource"),
  ];

  return (
    <footer className="mt-16 border-t border-border bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-8">
          <div className="flex flex-col gap-4 sm:col-span-5">
            <div className="flex items-center gap-4">
              <BrandImage
                variant="logoSquare"
                alt=""
                className="h-20 w-20 rounded-2xl shadow-md"
              />
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight">
                  {t("siteName")}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground-subtle">
                  est. 2026
                </span>
              </div>
            </div>
            {tFooter("aboutText") && (
              <p className="max-w-sm text-sm leading-relaxed text-foreground-muted">
                {tFooter("aboutText")}
              </p>
            )}
            <ul className="flex flex-wrap gap-1.5">
              {trustClaims.map((claim) => (
                <li
                  key={claim}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-foreground-muted"
                >
                  <Check
                    aria-hidden
                    className="h-3 w-3 shrink-0 text-success"
                  />
                  {claim}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
              {tFooter("gamesHeading")}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              {sortedGames.map((game) => (
                <li key={game.id}>
                  <Link
                    href={`/${game.id}`}
                    className="text-foreground-muted transition-colors hover:text-accent"
                  >
                    {game.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
              {tFooter("connectHeading")}
            </h3>
            <ul className="flex flex-col gap-1.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                >
                  {tFooter("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                >
                  {tFooter("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                >
                  {tFooter("changelog")}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                >
                  <Mail className="h-3 w-3" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thegamercodex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                >
                  {tFooter("github")}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thegamercodex/thegamercodex/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                >
                  {tFooter("feedback")}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://ko-fi.com/thegamercodex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                >
                  <Heart className="h-3 w-3" />
                  {tFooter("support")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {activeSponsor && (
          <div className="mt-8">
            <SponsorSlot slot="footer" locale={locale} />
          </div>
        )}

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t("siteName")} · {tFooter("rights")}
          </p>
          <p className="font-mono uppercase tracking-[0.2em]">
            {t("siteTagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
