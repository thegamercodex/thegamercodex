import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface MobileGameBackBarProps {
  gameId: string;
  gameName: string;
  gameLogo?: string;
  hasLogo: boolean;
}

export function MobileGameBackBar({
  gameId,
  gameName,
  gameLogo,
  hasLogo,
}: MobileGameBackBarProps) {
  const t = useTranslations("game");

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <Link
        href={`/${gameId}`}
        className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-3"
      >
        <ArrowLeft
          className="h-4 w-4 shrink-0 text-foreground-muted"
          aria-hidden
        />
        {hasLogo && gameLogo && (
          <Image
            src={gameLogo}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 shrink-0 object-contain"
          />
        )}
        <span className="min-w-0 flex-1 truncate text-sm font-medium">
          {t("backToHub", { game: gameName })}
        </span>
      </Link>
    </div>
  );
}
