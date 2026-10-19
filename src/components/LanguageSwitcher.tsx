"use client";

import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

/**
 * FR / EN toggle. Plain links (crawlable, work without JS); on click it also remembers the
 * choice in a cookie so `/` sends this visitor to the same language next time, and keeps the
 * section they were reading.
 */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex rounded-full border border-line bg-surface p-1 text-xs font-semibold">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <a
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "true" : undefined}
            onClick={(event) => {
              document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
              event.currentTarget.href = `/${locale}${window.location.hash}`;
            }}
            className={`min-w-11 rounded-full px-3 py-2 text-center uppercase tracking-wide transition-colors ${
              active ? "bg-text text-bg" : "text-muted hover:text-text"
            }`}
          >
            {locale}
          </a>
        );
      })}
    </nav>
  );
}
