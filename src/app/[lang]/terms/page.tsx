import { notFound } from "next/navigation";
import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return legalMetadata(lang, await getDictionary(lang), "terms");
}

export default async function Terms({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage lang={lang} t={await getDictionary(lang)} doc="terms" />;
}
