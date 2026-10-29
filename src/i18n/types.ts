export type Locale = "es" | "en" | "ro";

export interface LocalizedText {
  es: string;
  en: string;
  ro: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Dictionary {
  locale: Locale;
  htmlLang: string;
  label: string;
  shortLabel: string;
  jobTitle: string;
  ogLocale: string;
  hreflang: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    socialListTitle: string;
  };
  faq: FAQItem[];
  nav: {
    projects: string;
    services: string;
    languageLabel: string;
  };
  header: {
    cta: string;
    ctaAria: string;
    logoAria: string;
  };
  hero: {
    available: string;
    role: string;
    roleHighlight: string;
    tagline: string;
    contact: string;
    contactAria: string;
    experienceLabel: string;
    experienceYears: string;
    imgAlt: string;
  };
  projects: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    visitSite: string;
    visitAria: string;
  };
  services: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    perPayment: string;
    priceConsult: string;
    hire: string;
  };
  footer: {
    tagline: string;
    about: string;
    projects: string;
    services: string;
    rights: string;
  };
  whatsapp: {
    default: string;
  };
}
