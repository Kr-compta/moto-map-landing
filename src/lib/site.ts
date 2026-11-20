/** Public origin of the deployed site. Set SITE_URL in production (used for canonical, hreflang, sitemap). */
export const siteUrl = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const site = {
  name: "MotoMap",
  author: "Amour Ramanantsiresy",
  contactUrl: "https://github.com/Kr-compta",
  contactEmail: "amour@ramana.mg",
  /** The `site` build (Android 5+), shared from Google Drive. */
  downloadUrl: "https://drive.google.com/file/d/1D4QrIcKwI0wZDeWhabRVdWjOCerF9aOQ/view?usp=sharing",
  themeColor: "#171411",
  copyrightYear: 2026,
};
