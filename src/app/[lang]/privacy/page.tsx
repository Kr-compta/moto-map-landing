import { notFound } from "next/navigation";
import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return legalMetadata(lang, await getDictionary(lang), "privacy");
}

export default async function Privacy({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage lang={lang} t={await getDictionary(lang)} doc="privacy" />;
}
