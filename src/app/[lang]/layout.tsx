import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { hasLocale, localeTags, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, siteUrl } from "@/lib/site";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = (await getDictionary(lang)).meta;

  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    applicationName: site.name,
    authors: [{ name: site.author, url: site.contactUrl }],
    creator: site.author,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [localeTags[l].html, `/${l}`])),
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: t.title,
      description: t.description,
      url: `/${lang}`,
      locale: localeTags[lang].og,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeTags[l].og),
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={localeTags[lang].html} className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
