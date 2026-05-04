import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ExternalLink } from "lucide-react";

export async function Footer() {
  const t = await getTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/tgc-logo.png"
            alt=""
            width={1254}
            height={1254}
            sizes="56px"
            className="h-14 w-14 rounded-md"
          />
          <p>
            © {year} {t("siteName")} · {t("siteTagline")}
          </p>
        </div>
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
