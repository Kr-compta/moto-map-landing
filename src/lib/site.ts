/** Public origin of the deployed site. Set SITE_URL in production (used for canonical, hreflang, sitemap). */
export const siteUrl = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const site = {
  name: "MotoMap",
  author: "Amour Ramanantsiresy",
  contactUrl: "https://github.com/Kr-compta",
  /** Store listing, from the app's applicationId (com.motomap). */
  playUrl: "https://play.google.com/store/apps/details?id=com.motomap",
  themeColor: "#171411",
  copyrightYear: 2026,
};
