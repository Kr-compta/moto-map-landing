import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { localeTags, locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Arrow } from "./Icons";

export type LegalDoc = "terms" | "privacy";

/** Title, description, canonical and hreflang for /[lang]/terms and /[lang]/privacy. */
export function legalMetadata(lang: Locale, t: Dictionary, doc: LegalDoc): Metadata {
  const d = t.legal[doc];
  const title = `${d.title} — ${site.name}`;
  return {
    title,
    description: d.description,
    alternates: {
      canonical: `/${lang}/${doc}`,
      languages: Object.fromEntries(locales.map((l) => [localeTags[l].html, `/${l}/${doc}`])),
    },
    openGraph: { title, description: d.description, url: `/${lang}/${doc}` },
  };
}

const anchor = (i: number) => `s${i + 1}`;

/** The app's terms or privacy policy, as a readable page with its own table of contents. */
export function LegalPage({ lang, t, doc }: { lang: Locale; t: Dictionary; doc: LegalDoc }) {
  const d = t.legal[doc];
  const other: LegalDoc = doc === "terms" ? "privacy" : "terms";

  return (
    <>
      <Header lang={lang} t={t.nav} path={`/${doc}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-text"
        >
          <Arrow className="size-4 rotate-180" />
          {t.legal.back}
        </Link>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">{d.title}</h1>
        <p className="mt-3 font-mono text-sm text-accent">{d.updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-muted">{d.intro}</p>

        <nav aria-labelledby="toc" className="mt-10 rounded-3xl border border-line bg-surface p-6">
          <h2 id="toc" className="text-sm font-semibold">
            {t.legal.contents}
          </h2>
          <ol className="mt-3 grid gap-x-8 gap-y-1.5 text-sm text-muted sm:grid-cols-2">
            {d.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#${anchor(i)}`} className="hover:text-text">
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-10">
          {d.sections.map((s, i) => (
            <section key={s.heading} aria-labelledby={anchor(i)}>
              <h2 id={anchor(i)} className="text-xl font-semibold">
                {s.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-pretty text-muted">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${site.contactEmail}`} className="font-medium text-accent hover:underline">
            {site.contactEmail}
          </a>
          <Link href={`/${lang}/${other}`} className="text-muted hover:text-text">
            {t.legal.otherDoc} {t.legal[other].title}
          </Link>
        </div>
      </main>
      <Footer lang={lang} t={t.footer} />
    </>
  );
}
