/**
 * Configuración centralizada del sitio
 * Este archivo contiene toda la información principal del sitio
 * para evitar duplicación y facilitar mantenimiento
 */

export const siteConfig = {
  name: "thejasondev",
  title: "Jason Guerra (thejasondev) | Desarrollador Web Freelance Remoto para Clientes de Todo el Mundo",
  description:
    "Jason Guerra (thejasondev), ingeniero industrial y desarrollador frontend freelance que trabaja en remoto con clientes de todo el mundo. Sitios web modernos, rápidos y optimizados para SEO con Astro, React, Next.js, TypeScript y TailwindCSS.",
  url: "https://thejasondev.vercel.app",

  author: {
    name: "Jason Guerra",
    firstName: "Jason",
    lastName: "Guerra",
    username: "thejasondev",
    email: "thejasondev@icloud.com",
    phone: "+40759164606",
    jobTitle: "Ingeniero Industrial & Desarrollador Frontend",
    // Trabajo 100% remoto: sin ubicación física, servicio a nivel mundial
    areaServed: "Worldwide",
  },

  social: {
    github: "https://github.com/thejasondev",
    linkedin: "https://linkedin.com/in/thejasondev",
    instagram: "https://instagram.com/thejasondev",
    twitter: "https://twitter.com/thejasondev",
    whatsapp: "https://wa.me/40759164606",
  },

  seo: {
    keywords:
      "Jason Guerra, thejasondev, desarrollador web freelance, desarrollador frontend freelance, desarrollador web remoto, freelance a nivel mundial, contratar desarrollador web, diseño web profesional, ingeniero industrial, Astro, React, Next.js, TypeScript, SEO",
    googleVerification: "A7BT_C6ClgkaWHA9brgG3v0v7gG-1NeclQ6jCfvQF8U",
    themeColor: "#0b1b33",
  },

  features: {
    availableForWork: true,
    yearsOfExperience: 5,
  },
} as const;

// Tipo helper para autocompletado
export type SiteConfig = typeof siteConfig;
