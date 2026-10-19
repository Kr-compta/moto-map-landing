/** Public origin of the deployed site. Set SITE_URL in production (used for canonical, hreflang, sitemap). */
export const siteUrl = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const site = {
  name: "MotoMap",
  author: "Amour Ramanantsiresy",
  contactUrl: "https://github.com/Kr-compta",
  themeColor: "#0B0E14",
  copyrightYear: 2026,
};
