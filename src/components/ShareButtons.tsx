"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  compact?: boolean;
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.983 0 1.78.797 1.78 1.78 0 .724-.435 1.343-1.053 1.612-.027.207-.04.419-.04.633 0 3.232-3.762 5.853-8.405 5.853-4.642 0-8.404-2.62-8.404-5.853 0-.213-.013-.422-.038-.628-.623-.27-1.058-.89-1.058-1.616 0-.983.797-1.78 1.78-1.78.478 0 .902.185 1.211.493 1.207-.875 2.878-1.433 4.722-1.488l.886-4.181a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function ShareButtons({
  url,
  title,
  description,
  compact = false,
}: ShareButtonsProps) {
  const t = useTranslations("share");
  const [copied, setCopied] = useState(false);

  const text = description ? `${title} — ${description}` : title;
  const enc = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    text: encodeURIComponent(text),
    waText: encodeURIComponent(`${text}\n${url}`),
  };

  const links = [
    {
      key: "x",
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${enc.text}&url=${enc.url}`,
      Icon: XIcon,
      hoverColor: "hover:text-foreground hover:border-foreground/40",
    },
    {
      key: "reddit",
      label: "Reddit",
      href: `https://www.reddit.com/submit?url=${enc.url}&title=${enc.title}`,
      Icon: RedditIcon,
      hoverColor: "hover:text-orange-500 hover:border-orange-500/40",
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/?text=${enc.waText}`,
      Icon: WhatsAppIcon,
      hoverColor: "hover:text-emerald-500 hover:border-emerald-500/40",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Older browsers without clipboard API: do nothing visible
    }
  };

  const buttonSize = compact ? "h-8 w-8" : "h-9 w-9";

  const buttons = (
    <div className="flex flex-wrap items-center gap-1.5">
      {links.map(({ key, label, href, Icon, hoverColor }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("shareOn", { platform: label })}
          title={t("shareOn", { platform: label })}
          className={`inline-flex ${buttonSize} items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors ${hoverColor}`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? t("copied") : t("copy")}
        title={copied ? t("copied") : t("copy")}
        className={`inline-flex ${buttonSize} items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent`}
      >
        {copied ? (
          <Check className="h-4 w-4 text-success" strokeWidth={2.5} />
        ) : (
          <Link2 className="h-4 w-4" strokeWidth={2} />
        )}
      </button>
    </div>
  );

  if (compact) {
    return (
      <div className="flex items-center gap-2.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {t("title")}
        </span>
        {buttons}
      </div>
    );
  }

  return (
    <div>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {t("title")}
      </p>
      {buttons}
    </div>
  );
}
