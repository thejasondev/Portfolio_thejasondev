import { siteConfig } from "../config/site";

/**
 * Utilidades para generar datos estructurados JSON-LD para SEO
 */

const baseUrl = siteConfig.url;
const personId = `${baseUrl}/#person`;
const orgId = `${baseUrl}/#organization`;
const websiteId = `${baseUrl}/#website`;

/**
 * Genera el schema para Persona (Freelancer)
 */
export const getPersonSchema = () => ({
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
    url: `${baseUrl}/profile-pic/profile_pic_optimized.webp`,
    width: "500",
    height: "500",
    caption: `${siteConfig.author.name} - ${siteConfig.author.jobTitle}`,
  },
  jobTitle: siteConfig.author.jobTitle,
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
    {
      "@type": "Language",
      name: "Spanish",
      alternateName: "es",
    },
    {
      "@type": "Language",
      name: "English",
      alternateName: "en",
    },
  ],
});

/**
 * Genera el schema para el Sitio Web
 */
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: baseUrl,
  name: siteConfig.title,
  description: siteConfig.description,
  publisher: {
    "@id": personId,
  },
  creator: {
    "@id": personId,
  },
  inLanguage: "es",
  copyrightYear: new Date().getFullYear().toString(),
});

/**
 * Genera el schema para Organización (Marca personal)
 */
export const getOrganizationSchema = () => ({
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
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
    siteConfig.social.twitter,
  ],
});

/**
 * Genera el schema para Servicios Profesionales (SEO Local)
 */
export const getProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#service`,
  name: `${siteConfig.author.name} - ${siteConfig.author.jobTitle}`,
  image: `${baseUrl}/profile-pic/profile_pic_optimized.webp`,
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
});

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
export const getSocialProfileSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Redes Sociales de ${siteConfig.author.name}`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "ProfilePage",
        name: "GitHub",
        url: siteConfig.social.github,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "ProfilePage",
        name: "LinkedIn",
        url: siteConfig.social.linkedin,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "ProfilePage",
        name: "Instagram",
        url: siteConfig.social.instagram,
      },
    },
  ],
});

/**
 * Genera el schema FAQ para preguntas comunes de búsqueda
 */
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién es thejasondev?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `thejasondev es ${siteConfig.author.name}, un desarrollador frontend freelance especializado en crear sitios web modernos, rápidos y optimizados para SEO. Ubicado en ${siteConfig.author.location.city}, ${siteConfig.author.location.country}.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde puedo ver el portfolio de Jason Guerra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `El portfolio profesional de Jason Guerra (thejasondev) está disponible en ${baseUrl}. Incluye proyectos de desarrollo web con tecnologías como Astro, React, Next.js y TypeScript.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Qué servicios ofrece thejasondev?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "thejasondev ofrece servicios de desarrollo frontend, creación de sitios web, optimización SEO, y desarrollo de aplicaciones web modernas con las últimas tecnologías.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contactar a Jason Guerra desarrollador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Puedes contactar a Jason Guerra a través de WhatsApp (${siteConfig.author.phone}), email (${siteConfig.author.email}), o visitando su portfolio en ${baseUrl}.`,
      },
    },
  ],
});
