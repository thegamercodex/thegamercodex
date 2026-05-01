import { getTranslations } from "next-intl/server";
import { ExternalLink } from "lucide-react";

export async function Footer() {
  const t = await getTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {t("siteName")} · {t("siteTagline")}
        </p>
        <a
          href="https://github.com/thegamercodex"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          GitHub
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </footer>
  );
}
