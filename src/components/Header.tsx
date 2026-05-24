import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ChromeThemeSwitcher } from "./ChromeThemeSwitcher";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderFavoritesLink } from "./HeaderFavoritesLink";
import { BrandImage } from "./BrandImage";

export async function Header() {
  const t = await getTranslations("common");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={t("siteName")}
          className="group inline-flex items-center transition-opacity duration-200 hover:opacity-90"
        >
          <BrandImage
            variant="logoHorizontal"
            alt={t("siteName")}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Inline switchers on sm+ screens. Below sm, the hamburger menu
            (HeaderMobileMenu) is shown instead and these are hidden. */}
        <div className="hidden items-center gap-2 sm:flex">
          <HeaderFavoritesLink />
          <ChromeThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <HeaderMobileMenu />
      </div>
    </header>
  );
}
