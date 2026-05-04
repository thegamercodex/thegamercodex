import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export async function Header() {
  const t = await getTranslations("common");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={t("siteName")}
          className="group inline-flex items-center transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/images/tgc-logo-horizontal-tight.png"
            alt={t("siteName")}
            width={2087}
            height={248}
            priority
            sizes="(min-width: 640px) 340px, 260px"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
