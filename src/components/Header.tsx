import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { Logo } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const links = [
    ["#features", t.features],
    ["#video", t.video],
    ["#offline", t.offline],
    ["#faq", t.faq],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-lg focus:bg-text focus:px-4 focus:py-2 focus:text-bg"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <a href={`/${lang}`} aria-label={t.home} className="flex items-center gap-2.5 font-bold tracking-tight">
          <Logo className="size-8" />
          <span className="text-lg">MotoMap</span>
        </a>

        <nav aria-label="Navigation" className="hidden flex-1 justify-center md:flex">
          <ul className="flex gap-1 text-sm font-medium text-muted">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="rounded-full px-4 py-2 transition-colors hover:bg-surface hover:text-text">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <LanguageSwitcher current={lang} label={t.language} />
          <a
            href={site.playUrl}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:brightness-110 sm:inline-flex"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
