import { siteConfig } from "../config/site";
import type { LocalizedText } from "../i18n/types";

export interface Service {
  title: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  price: LocalizedText;
  message: LocalizedText;
  icon: string;
}

export const services: Service[] = [
  {
    title: {
      es: "Plan Básico",
      en: "Basic Plan",
      ro: "Plan de bază",
    },
    description: {
      es: "Ideal para negocios que necesitan promocionarse y tener presencia en línea. Incluye:",
      en: "Ideal for businesses that need to promote themselves and have an online presence. Includes:",
      ro: "Ideal pentru afacerile care trebuie să se promoveze și să aibă o prezență online. Include:",
    },
    features: [
      {
        es: "Landing page",
        en: "Landing page",
        ro: "Landing page",
      },
      {
        es: "Integración de Formulario de Contacto",
        en: "Contact form integration",
        ro: "Integrare formular de contact",
      },
      {
        es: "Despliegue en Vercel",
        en: "Vercel deployment",
        ro: "Implementare pe Vercel",
      },
      {
        es: "Optimización básica",
        en: "Basic optimization",
        ro: "Optimizare de bază",
      },
    ],
    price: {
      es: "$150 USD/EUR",
      en: "$150 USD/EUR",
      ro: "$150 USD/EUR",
    },
    message: {
      es: "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Básico.",
      en: "Hi, I'm interested in your work as a web developer. I'd like to hire the Basic Plan.",
      ro: "Bună, sunt interesat de munca ta ca dezvoltator web. Aș dori să contractez Planul de bază.",
    },
    icon: "mdi:rocket-launch",
  },
  {
    title: {
      es: "Plan Pro",
      en: "Pro Plan",
      ro: "Plan Pro",
    },
    description: {
      es: "Ideal para negocios que buscan funcionalidades adicionales y brindar servicios de manera profesional. Incluye:",
      en: "Ideal for businesses looking for additional features and to offer services professionally. Includes:",
      ro: "Ideal pentru afacerile care caută funcționalități suplimentare și doresc să ofere servicii în mod profesional. Include:",
    },
    features: [
      {
        es: "Página web de hasta 5 secciones (Inicio, Servicios, Contacto...)",
        en: "Website with up to 5 sections (Home, Services, Contact...)",
        ro: "Site web cu până la 5 secțiuni (Acasă, Servicii, Contact...)",
      },
      {
        es: "Integración de Formulario de Contacto",
        en: "Contact form integration",
        ro: "Integrare formular de contact",
      },
      {
        es: "Integración de redes sociales",
        en: "Social media integration",
        ro: "Integrare rețele sociale",
      },
      {
        es: "Ventas de servicios en línea",
        en: "Online service sales",
        ro: "Vânzări de servicii online",
      },
      {
        es: "Optimización SEO",
        en: "SEO optimization",
        ro: "Optimizare SEO",
      },
      {
        es: "Despliegue en Vercel",
        en: "Vercel deployment",
        ro: "Implementare pe Vercel",
      },
    ],
    price: {
      es: "$300 USD/EUR",
      en: "$300 USD/EUR",
      ro: "$300 USD/EUR",
    },
    message: {
      es: "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Pro.",
      en: "Hi, I'm interested in your work as a web developer. I'd like to hire the Pro Plan.",
      ro: "Bună, sunt interesat de munca ta ca dezvoltator web. Aș dori să contractez Planul Pro.",
    },
    icon: "mdi:chart-line",
  },
  {
    title: {
      es: "Tienda Online",
      en: "Online Store",
      ro: "Magazin online",
    },
    description: {
      es: "Ideal para negocios que buscan llevar su tienda física a la web. Incluye:",
      en: "Ideal for businesses looking to bring their physical store to the web. Includes:",
      ro: "Ideal pentru afacerile care doresc să își aducă magazinul fizic pe web. Include:",
    },
    features: [
      {
        es: "Tienda Online",
        en: "Online Store",
        ro: "Magazin online",
      },
      {
        es: "Integración de Formulario de Contacto",
        en: "Contact form integration",
        ro: "Integrare formular de contact",
      },
      {
        es: "Integración de redes sociales",
        en: "Social media integration",
        ro: "Integrare rețele sociale",
      },
      {
        es: "Ventas de servicios en línea",
        en: "Online service sales",
        ro: "Vânzări de servicii online",
      },
      {
        es: "Dashboard de admin donde controlas tus precios, productos..etc",
        en: "Admin dashboard to control your prices, products, etc.",
        ro: "Panou de administrare unde îți controlezi prețurile, produsele etc.",
      },
      {
        es: "Optimización SEO",
        en: "SEO optimization",
        ro: "Optimizare SEO",
      },
      {
        es: "Despliegue en Vercel",
        en: "Vercel deployment",
        ro: "Implementare pe Vercel",
      },
    ],
    price: {
      es: "$450 USD/EUR",
      en: "$450 USD/EUR",
      ro: "$450 USD/EUR",
    },
    message: {
      es: "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan de Tienda Online.",
      en: "Hi, I'm interested in your work as a web developer. I'd like to hire the Online Store Plan.",
      ro: "Bună, sunt interesat de munca ta ca dezvoltator web. Aș dori să contractez Planul Magazin online.",
    },
    icon: "mdi:chart-line",
  },
  {
    title: {
      es: "Plan Personalizado",
      en: "Custom Plan",
      ro: "Plan personalizat",
    },
    description: {
      es: "Diseñado para clientes con necesidades específicas. Incluye:",
      en: "Designed for clients with specific needs. Includes:",
      ro: "Conceput pentru clienți cu nevoi specifice. Include:",
    },
    features: [
      {
        es: "Diseño y funcionalidades a medida del cliente",
        en: "Custom design and features",
        ro: "Design și funcționalități personalizate",
      },
      {
        es: "Consultoría personalizada",
        en: "Personalized consulting",
        ro: "Consultanță personalizată",
      },
      {
        es: "Optimización SEO",
        en: "SEO optimization",
        ro: "Optimizare SEO",
      },
      {
        es: "Despliegue en Vercel",
        en: "Vercel deployment",
        ro: "Implementare pe Vercel",
      },
      {
        es: "Soporte técnico extendido",
        en: "Extended technical support",
        ro: "Suport tehnic extins",
      },
    ],
    price: {
      es: "Precio a consultar",
      en: "Price on request",
      ro: "Preț la cerere",
    },
    message: {
      es: "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Personalizado.",
      en: "Hi, I'm interested in your work as a web developer. I'd like to hire the Custom Plan.",
      ro: "Bună, sunt interesat de munca ta ca dezvoltator web. Aș dori să contractez Planul personalizat.",
    },
    icon: "mdi:star",
  },
];

export const getWhatsappLink = (message: string): string =>
  `${siteConfig.social.whatsapp}?text=${encodeURIComponent(message)}`;
