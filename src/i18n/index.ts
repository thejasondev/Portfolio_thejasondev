import { siteConfig } from "../config/site";
import { es } from "./es";
import { en } from "./en";
import { ro } from "./ro";
import type { Dictionary, Locale, LocalizedText } from "./types";

export type { Dictionary, Locale, LocalizedText, FAQItem } from "./types";

export const locales: Locale[] = ["es", "en", "ro"];
export const defaultLocale: Locale = "es";

export const dictionaries: Record<Locale, Dictionary> = { es, en, ro };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/** Ruta interna (href) para un idioma. ES vive en la raíz. */
export const hrefForLocale = (locale: Locale): string =>
  locale === defaultLocale ? "/" : `/${locale}/`;

/** URL absoluta canónica/hreflang para un idioma (con barra final, igual que el sitemap). */
export const urlForLocale = (locale: Locale): string =>
  locale === defaultLocale ? `${siteConfig.url}/` : `${siteConfig.url}/${locale}/`;

/** Devuelve el valor localizado de un texto multi-idioma. */
export const localized = (text: LocalizedText, locale: Locale): string => text[locale];
