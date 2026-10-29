import { siteConfig } from "../config/site";
import { getDictionary } from "../i18n";
import type { Locale } from "../i18n/types";

/**
 * Utilidades para generar datos estructurados JSON-LD para SEO
 * Todas las funciones aceptan el idioma actual para emitir `inLanguage`
 * y contenido localizado cuando corresponde.
 */

const baseUrl = siteConfig.url;
const personId = `${baseUrl}/#person`;
const orgId = `${baseUrl}/#organization`;
const websiteId = `${baseUrl}/#website`;

/**
 * Genera el schema para Persona (Freelancer)
 */
export const getPersonSchema = (locale: Locale = "es") => {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.author.name,
    givenName: siteConfig.author.firstName,
    familyName: siteConfig.author.lastName,
    alternateName: [siteConfig.author.username, "Jason Guerra Dev"],
    url: baseUrl,
    email: `mailto:${siteConfig.author.email}`,
    telephone: siteConfig.author.phone,
    image: {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#personimage`,
      url: `${baseUrl}/profile-pic/thejasondev-perfil.webp`,
      width: "720",
      height: "960",
      caption: `${siteConfig.author.name} - ${dict.jobTitle}`,
    },
    jobTitle: dict.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.author.location.city,
      addressRegion: siteConfig.author.location.region,
      addressCountry: siteConfig.author.location.countryCode,
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.whatsapp,
      baseUrl,
    ],
    knowsAbout: [
      "Ingeniería Industrial",
      "Optimización de Procesos",
      "Resolución de Problemas",
      "Desarrollo Web",
      "Frontend",
      "Astro",
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "SEO",
      "JavaScript",
      "Web Performance",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Romanian", alternateName: "ro" },
    ],
    inLanguage: dict.htmlLang,
  };
};

/**
 * Genera el schema para el Sitio Web
 */
export const getWebSiteSchema = (locale: Locale = "es") => {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: baseUrl,
    name: dict.seo.title,
    description: dict.seo.description,
    publisher: {
      "@id": personId,
    },
    creator: {
      "@id": personId,
    },
    inLanguage: dict.htmlLang,
    copyrightYear: new Date().getFullYear().toString(),
  };
};

/**
 * Genera el schema para Organización (Marca personal)
 */
export const getOrganizationSchema = (locale: Locale = "es") => {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    alternateName: siteConfig.author.name,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/web-dev.png`,
      width: "512",
      height: "512",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.author.phone,
      contactType: "customer service",
      availableLanguage: ["Spanish", "English", "Romanian"],
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ],
    inLanguage: dict.htmlLang,
  };
};

/**
 * Genera el schema para Servicios Profesionales (SEO Local)
 */
export const getProfessionalServiceSchema = (locale: Locale = "es") => {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service`,
    name: `${siteConfig.author.name} - ${dict.jobTitle}`,
    description: dict.seo.description,
    image: {
      "@type": "ImageObject",
      width: 1200,
      height: 630,
      url: `${baseUrl}/og-image.png`,
      alt: `Logo de ${siteConfig.author.name}`,
    },
    telephone: siteConfig.author.phone,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.author.location.city,
      addressRegion: siteConfig.author.location.region,
      addressCountry: siteConfig.author.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.author.location.geo.latitude,
      longitude: siteConfig.author.location.geo.longitude,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
    inLanguage: dict.htmlLang,
  };
};

/**
 * Genera el schema para Breadcrumbs
 */
export const getBreadcrumbSchema = (
  items: { name: string; item: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": `${baseUrl}${item.item}`,
      name: item.name,
    },
  })),
});

/**
 * Genera el schema para lista de redes sociales
 */
export const getSocialProfileSchema = (locale: Locale = "es") => {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: dict.seo.socialListTitle,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@type": "ProfilePage", name: "GitHub", url: siteConfig.social.github },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@type": "ProfilePage", name: "LinkedIn", url: siteConfig.social.linkedin },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: { "@type": "ProfilePage", name: "Instagram", url: siteConfig.social.instagram },
      },
    ],
    inLanguage: dict.htmlLang,
  };
};

/**
 * Genera el schema FAQ localizado para preguntas comunes de búsqueda
 */
export const getFAQSchema = (locale: Locale = "es") => {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: dict.htmlLang,
    mainEntity: dict.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
};
