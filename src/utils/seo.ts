import { siteConfig } from "../config/site";
import { services } from "../data/services";
import { getDictionary, localized } from "../i18n";
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

// Servicio remoto disponible en cualquier país
const areaServed = {
  "@type": "Place",
  name: siteConfig.author.areaServed,
};

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
      "@id": orgId,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: dict.jobTitle,
      occupationLocation: areaServed,
      skills: "Frontend Development, Web Design, SEO, Astro, React, Next.js, TypeScript",
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
      "Industrial Engineering",
      "Process Optimization",
      "Problem Solving",
      "Web Development",
      "Freelance Web Development",
      "Remote Work",
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
      email: siteConfig.author.email,
      contactType: "sales",
      areaServed: siteConfig.author.areaServed,
      availableLanguage: ["Spanish", "English", "Romanian"],
    },
    areaServed,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.whatsapp,
    ],
    inLanguage: dict.htmlLang,
  };
};

/**
 * Genera el schema para Servicios Profesionales (remoto, a nivel mundial)
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
    email: siteConfig.author.email,
    url: baseUrl,
    provider: { "@id": personId },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: baseUrl,
      servicePhone: siteConfig.author.phone,
      availableLanguage: ["Spanish", "English", "Romanian"],
    },
    serviceType: [
      "Freelance Web Development",
      "Frontend Development",
      "Web Design",
      "Landing Pages",
      "SEO Optimization",
    ],
    priceRange: "$$",
    currenciesAccepted: "USD, EUR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${dict.services.title} ${dict.services.titleHighlight}`,
      itemListElement: services.map((service) => {
        const price = localized(service.price, locale).match(/\d+/)?.[0];
        return {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: localized(service.title, locale),
            description: localized(service.description, locale),
            areaServed,
          },
          ...(price && { price, priceCurrency: "USD" }),
        };
      }),
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
