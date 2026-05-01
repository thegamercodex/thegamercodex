"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("nav");

  function switchTo(next: Locale) {
    if (next === locale) return;
    router.replace(
      // @ts-expect-error -- pathname/params are typed for the current route
      { pathname, params },
      { locale: next },
    );
  }

  return (
    <div
      role="group"
      aria-label={t("switchLanguage")}
      className="inline-flex items-center rounded-md border border-border bg-muted/40 p-0.5 text-xs font-medium uppercase tracking-wider"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-pressed={active}
            className={
              "rounded-[5px] px-2.5 py-1 transition-colors duration-150 " +
              (active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
