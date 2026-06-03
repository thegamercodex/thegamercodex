import type { Locale } from "@/types";

// `new Date("2026-05-07")` parses as UTC midnight, which renders as the previous
// calendar day for any viewer west of UTC. Appending "T00:00:00" forces local-time
// interpretation so the displayed date matches the stored YYYY-MM-DD literally.
// If the input already includes a time component (e.g. full ISO from RSS feeds),
// parse it directly to preserve the exact instant.
export function parseDateOnly(isoDate: string): Date {
  if (isoDate.includes("T")) return new Date(isoDate);
  return new Date(`${isoDate}T00:00:00`);
}

export function relativeTime(isoDate: string, locale: Locale): string {
  const date = parseDateOnly(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);

  // Day-and-above buckets compare CALENDAR days in UTC, not rolling 24h windows.
  // UTC keeps the result identical between local dev and the UTC Vercel build,
  // and matches how date-only values are stored (the verify script writes dates
  // via toISOString(), i.e. the UTC day). A 24h delta would otherwise flip a
  // same-day date to "yesterday" once UTC midnight passed (~20:00 in Chile,
  // UTC-4). Date-only strings are anchored to UTC midnight; timestamped values
  // (RSS feeds) keep their exact instant.
  const dateForDay = isoDate.includes("T")
    ? date
    : new Date(`${isoDate}T00:00:00Z`);
  const utcStartOfDay = (d: Date) =>
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  const diffDay = Math.round(
    (utcStartOfDay(now) - utcStartOfDay(dateForDay)) / 86_400_000,
  );
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (diffYear > 0) return rtf.format(-diffYear, "year");
  if (diffMonth > 0) return rtf.format(-diffMonth, "month");
  if (diffWeek > 0) return rtf.format(-diffWeek, "week");
  if (diffDay > 0) return rtf.format(-diffDay, "day");
  if (diffHour > 0) return rtf.format(-diffHour, "hour");
  if (diffMin > 0) return rtf.format(-diffMin, "minute");
  return rtf.format(-Math.max(diffSec, 1), "second");
}

export function formatDate(isoDate: string, locale: Locale): string {
  const date = parseDateOnly(isoDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(isoDate: string, locale: Locale): string {
  const date = parseDateOnly(isoDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// True if lastVerified is within the past N days (default 30). Build-time
// evaluation — the badge is computed during SSG so the threshold is relative
// to the build date, not the request date. A weekly rebuild keeps it accurate.
export function isRecentlyVerified(isoDate: string | undefined, days = 30): boolean {
  if (!isoDate) return false;
  const date = parseDateOnly(isoDate);
  if (Number.isNaN(date.getTime())) return false;
  const diffMs = Date.now() - date.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= days;
}
