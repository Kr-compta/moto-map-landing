import { ImageResponse } from "next/og";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MotoMap";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(hasLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 85% 15%, rgba(245,110,10,0.35), #171411 55%)",
          color: "#ECEAE9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="84" height="84" viewBox="0 0 108 108">
            <rect width="108" height="108" rx="24" fill="#201b18" />
            <path d="M30,68 A24,24 0 1,1 78,68" stroke="#F56E0A" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M54,68 L68,48" stroke="#ECEAE9" strokeWidth="5" strokeLinecap="round" />
            <circle cx="54" cy="64" r="4" fill="#ECEAE9" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700 }}>MotoMap</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            <span>{t.hero.titleStart}&nbsp;</span>
            <span style={{ color: "#F56E0A" }}>{t.hero.titleHighlight}</span>
          </div>
          <div style={{ fontSize: 30, color: "#C0B9B4" }}>{t.hero.eyebrow}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24 }}>
          {t.hero.trust.map((item) => (
            <div key={item} style={{ display: "flex", padding: "10px 22px", borderRadius: 999, border: "2px solid #4B443F", background: "#201b18" }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
