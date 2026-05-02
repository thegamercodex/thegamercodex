"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2, Loader2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Locale } from "@/types";

interface BrokenLinkButtonProps {
  gameId: string;
  toolId: string;
  toolName: string;
  toolUrl: string;
  locale: Locale;
}

type Status = "idle" | "sending" | "success" | "error";

export function BrokenLinkButton({
  gameId,
  toolId,
  toolName,
  toolUrl,
  locale,
}: BrokenLinkButtonProps) {
  const t = useTranslations("report");
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (status !== "success") return;
    const id = setTimeout(() => {
      setOpen(false);
    }, 2500);
    return () => clearTimeout(id);
  }, [status]);

  const reset = () => {
    setComment("");
    setStatus("idle");
  };

  const close = () => {
    setOpen(false);
    setTimeout(reset, 200);
  };

  const submit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/api/report-broken-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameId, toolId, locale, comment }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-muted/40 px-3 py-2 text-xs font-medium text-foreground-muted transition-colors hover:border-danger/40 hover:text-foreground"
      >
        <AlertTriangle className="h-3.5 w-3.5" />
        {t("brokenLink")}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="broken-link-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 py-8 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-md rounded-xl border border-border bg-background-secondary shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label={t("close")}
              className="absolute right-3 top-3 rounded-md p-1 text-foreground-muted transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-4 p-6">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-3 py-4 text-center">
                  <CheckCircle2 className="h-10 w-10 text-success" />
                  <h2 className="text-base font-semibold">{t("successTitle")}</h2>
                  <p className="text-sm text-foreground-muted">
                    {t("successMessage")}
                  </p>
                </div>
              ) : status === "error" ? (
                <div className="flex flex-col gap-3 py-2 text-center">
                  <AlertTriangle className="mx-auto h-10 w-10 text-danger" />
                  <h2 className="text-base font-semibold">{t("errorTitle")}</h2>
                  <p className="text-sm text-foreground-muted">
                    {t("errorMessage")}
                  </p>
                  <div className="mt-2 flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={close}
                      className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium hover:bg-muted"
                    >
                      {t("close")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground hover:bg-accent-hover"
                    >
                      {t("retry")}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <h2
                      id="broken-link-title"
                      className="text-base font-semibold"
                    >
                      {t("modalTitle")}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                      {t("modalDescription")}
                    </p>
                  </div>

                  <dl className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs">
                    <div className="flex items-baseline justify-between gap-3 py-1">
                      <dt className="shrink-0 font-medium uppercase tracking-wider text-foreground-subtle">
                        {t("tool")}
                      </dt>
                      <dd className="truncate text-right font-medium">
                        {toolName}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3 py-1">
                      <dt className="shrink-0 font-medium uppercase tracking-wider text-foreground-subtle">
                        {t("url")}
                      </dt>
                      <dd
                        className="truncate text-right text-foreground-muted"
                        title={toolUrl}
                      >
                        {toolUrl.replace(/^https?:\/\//, "")}
                      </dd>
                    </div>
                  </dl>

                  <div>
                    <label
                      htmlFor="broken-link-comment"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground-subtle"
                    >
                      {t("commentLabel")}
                    </label>
                    <textarea
                      id="broken-link-comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder={t("commentPlaceholder")}
                      rows={3}
                      maxLength={1000}
                      disabled={status === "sending"}
                      className="w-full resize-none rounded-md border border-border bg-background/60 px-3 py-2 text-sm placeholder:text-foreground-subtle focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40 disabled:opacity-60"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={close}
                      disabled={status === "sending"}
                      className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground-muted hover:bg-muted hover:text-foreground disabled:opacity-60"
                    >
                      {t("cancel")}
                    </button>
                    <button
                      type="button"
                      onClick={submit}
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60"
                    >
                      {status === "sending" && (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      )}
                      {status === "sending" ? t("sending") : t("send")}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
