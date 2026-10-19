import { NextResponse, type NextRequest } from "next/server";
import { hasLocale, LOCALE_COOKIE, locales, negotiateLocale } from "@/i18n/config";

/**
 * Sends a visitor with no locale in the URL to /fr or /en.
 * An explicit choice from the language switcher (cookie) wins; otherwise the browser's
 * language (Accept-Language) decides, and French is the fallback.
 * URLs that already carry a locale are never redirected, so search engines index both versions.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    cookie && hasLocale(cookie) ? cookie : negotiateLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip Next internals, API routes and anything with a file extension
  // (sitemap.xml, robots.txt, icon.svg, manifest.webmanifest...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
