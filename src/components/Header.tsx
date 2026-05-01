import { getTranslations } from "next-intl/server";
import { BookOpenText } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function Header() {
  const t = await getTranslations("common");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <BookOpenText
            className="h-4 w-4 text-accent transition-transform duration-200 group-hover:scale-110"
            strokeWidth={2.25}
          />
          <span>
            <span className="text-foreground">TheGamer</span>
            <span className="text-accent">Codex</span>
          </span>
          <span className="sr-only">{t("siteName")}</span>
        </Link>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
