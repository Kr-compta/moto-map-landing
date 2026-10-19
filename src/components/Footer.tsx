import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { GitHub, Logo } from "./Icons";

export function Footer({ lang, t }: { lang: Locale; t: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href={`/${lang}`} className="flex items-center gap-2.5 font-bold">
            <Logo className="size-8" />
            <span className="text-lg">MotoMap</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">{t.tagline}</p>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            © {site.copyrightYear} {site.author}. {t.rights}
            <br />
            {t.proprietary}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t.contact}</h2>
          <a
            href={site.contactUrl}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            <GitHub className="size-4" />
            github.com/Kr-compta
          </a>
          <h2 className="mt-8 text-sm font-semibold">{t.language}</h2>
          <ul className="mt-3 flex gap-4 text-sm text-muted">
            <li>
              <Link href="/fr" hrefLang="fr" lang="fr" className="hover:text-text">
                Français
              </Link>
            </li>
            <li>
              <Link href="/en" hrefLang="en" lang="en" className="hover:text-text">
                English
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t.mapData}</h2>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted">
            <li>
              ©{" "}
              <a href="https://www.openstreetmap.org/copyright" className="underline-offset-2 hover:text-text hover:underline">
                OpenStreetMap
              </a>{" "}
              contributors (ODbL)
            </li>
            <li>
              ©{" "}
              <a href="https://opentopomap.org" className="underline-offset-2 hover:text-text hover:underline">
                OpenTopoMap
              </a>{" "}
              (CC-BY-SA)
            </li>
            <li>
              ©{" "}
              <a href="https://hikebikemap.org" className="underline-offset-2 hover:text-text hover:underline">
                HikeBikeMap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
