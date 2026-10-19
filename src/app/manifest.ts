import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MotoMap",
    short_name: "MotoMap",
    description: "Traceur GPS hors ligne pour motards · Offline GPS tracker for motorcycle riders",
    start_url: "/",
    display: "standalone",
    background_color: site.themeColor,
    theme_color: site.themeColor,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
