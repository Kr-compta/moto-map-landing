import "server-only";
import type { Locale } from "../config";

const dictionaries = {
  fr: () => import("./fr").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export type { Dictionary } from "./fr";
