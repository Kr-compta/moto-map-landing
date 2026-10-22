import type { MetadataRoute } from "next";
import { localeTags, locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

const pages = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = Object.fromEntries(locales.map((l) => [localeTags[l].html, `${siteUrl}/${l}${path}`]));
    return locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
