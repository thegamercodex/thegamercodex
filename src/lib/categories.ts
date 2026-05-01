import type { LocalizedCategory, Locale } from "@/types";

export function categoryName(
  category: LocalizedCategory,
  locale: Locale,
): string {
  return locale === "es" ? category.nameEs : category.nameEn;
}

export function categoryDescription(
  category: LocalizedCategory,
  locale: Locale,
): string {
  return locale === "es" ? category.descriptionEs : category.descriptionEn;
}

export function categoriesById<T extends LocalizedCategory>(
  categories: T[],
): Map<string, T> {
  return new Map(categories.map((c) => [c.id, c]));
}

export function flagEmoji(countryCode: string): string {
  const cc = countryCode.toUpperCase() === "UK" ? "GB" : countryCode.toUpperCase();
  if (!/^[A-Z]{2}$/.test(cc)) return "";
  return cc
    .split("")
    .map((c) => String.fromCodePoint(0x1f1a5 + c.charCodeAt(0)))
    .join("");
}

export function humanize(slug: string): string {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}
