export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** Set by the language switcher; wins over Accept-Language on the next visit to `/`. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** BCP 47 tags for <html lang>, hreflang and Open Graph. */
export const localeTags: Record<Locale, { html: string; og: string }> = {
  fr: { html: "fr", og: "fr_FR" },
  en: { html: "en", og: "en_US" },
};

/**
 * Picks the best supported locale from an Accept-Language header, honouring q-values.
 * "en-GB,en;q=0.9,fr;q=0.8" -> "en". Falls back to the default locale.
 */
export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        base: tag.trim().toLowerCase().split("-")[0],
        q: q ? Number.parseFloat(q.trim().slice(2)) || 0 : 1,
        index,
      };
    })
    .filter((entry) => entry.base && entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);

  const best = ranked.find((entry) => hasLocale(entry.base));
  return best ? (best.base as Locale) : defaultLocale;
}
