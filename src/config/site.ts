/**
 * Configuración centralizada del sitio
 * Este archivo contiene toda la información principal del sitio
 * para evitar duplicación y facilitar mantenimiento
 */

export const siteConfig = {
  name: "thejasondev",
  title: "thejasondev | Jason Guerra - Ingeniero Industrial & Desarrollador Frontend Freelance Cuba",
  description:
    "thejasondev es Jason Guerra, ingeniero industrial y desarrollador frontend freelance en La Habana, Cuba. Portfolio profesional especializado en crear sitios web modernos, rápidos y optimizados para SEO que optimizan procesos y resuelven problemas reales de negocio con Astro, React, Next.js, TypeScript y TailwindCSS.",
  url: "https://thejasondev.vercel.app",

  author: {
    name: "Jason Guerra",
    firstName: "Jason",
    lastName: "Guerra",
    username: "thejasondev",
    email: "thejasondev@icloud.com",
    phone: "+5353118193",
    jobTitle: "Ingeniero Industrial & Desarrollador Frontend",
    location: {
      city: "La Habana",
      region: "Miramar",
      country: "Cuba",
      countryCode: "CU",
      geo: {
        latitude: "23.1136",
        longitude: "-82.3666",
      },
    },
  },

  social: {
    github: "https://github.com/thejasondev",
    linkedin: "https://linkedin.com/in/thejasondev",
    instagram: "https://instagram.com/thejasondev",
    twitter: "https://twitter.com/thejasondev",
    whatsapp: "https://wa.me/+5353118193",
  },

  seo: {
    keywords:
      "thejasondev, Jason Guerra, portfolio thejasondev, portfolio Jason Guerra, ingeniero industrial, desarrollador frontend, optimización de procesos, solución de problemas, diseño web, Astro, React, Cuba, freelance, desarrollador web La Habana",
    googleVerification: "A7BT_C6ClgkaWHA9brgG3v0v7gG-1NeclQ6jCfvQF8U",
    themeColor: "#0f172a",
  },

  features: {
    availableForWork: true,
    yearsOfExperience: 5,
  },
} as const;

// Tipo helper para autocompletado
export type SiteConfig = typeof siteConfig;
