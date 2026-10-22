import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  BatterySection,
  Faq,
  FinalCta,
  Gloves,
  Hero,
  Offline,
  Pillars,
  Replay,
  Tabs,
  Video,
} from "@/components/Sections";
import { hasLocale, localeTags } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { site, siteUrl } from "@/lib/site";

function structuredData(lang: string, t: Dictionary) {
  const url = `${siteUrl}/${lang}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        inLanguage: ["fr", "en"],
      },
      {
        "@type": "MobileApplication",
        "@id": `${siteUrl}/#app`,
        name: site.name,
        description: t.meta.description,
        url,
        operatingSystem: "Android 7.0+",
        installUrl: site.playUrl,
        applicationCategory: "TravelApplication",
        inLanguage: localeTags[lang as keyof typeof localeTags].html,
        image: `${url}/opengraph-image`,
        author: { "@type": "Person", name: site.author, url: site.contactUrl },
        featureList: [...t.pillars.items, ...t.tabs.items, ...t.video.points].map((f) => f.title),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: localeTags[lang as keyof typeof localeTags].html,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang, t)).replace(/</g, "\\u003c") }}
      />
      <Header lang={lang} t={t.nav} />
      <main id="main">
        <Hero t={t.hero} screens={t.screens} />
        <Pillars t={t.pillars} />
        <Tabs t={t.tabs} screens={t.screens} />
        <Video t={t.video} battery={t.battery} />
        <Replay t={t.replay} screens={t.screens} />
        <BatterySection t={t.battery} />
        <Gloves t={t.gloves} />
        <Offline t={t.offline} />
        <Faq t={t.faq} />
        <FinalCta t={t.cta} />
      </main>
      <Footer lang={lang} t={t.footer} />
    </>
  );
}
