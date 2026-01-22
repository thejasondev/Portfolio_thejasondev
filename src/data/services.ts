import { siteConfig } from "../config/site";

export interface Service {
  title: string;
  description: string;
  features: string[];
  price: string;
  message: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Plan Básico",
    description:
      "Ideal para negocios que necesitan promocionarse y tener presencia en línea. Incluye:",
    features: [
      "Landing page",
      "Integración de Formulario de Contacto",
      "Despliegue en Vercel",
      "Optimización básica",
    ],
    price: "$50 USD",
    message:
      "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Básico",
    icon: "mdi:rocket-launch",
  },
  {
    title: "Plan Pro",
    description:
      "Ideal para negocios que buscan funcionalidades adicionales y brindar servicios de manera profesional. Incluye:",
    features: [
      "Página web de hasta 5 secciones (Inicio, Servicios, Contacto...)",
      "Integración de Formulario de Contacto",
      "Integración de redes sociales",
      "Ventas de servicios en línea",
      "Optimización SEO",
      "Despliegue en Vercel",
    ],
    price: "$100 USD",
    message:
      "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Pro.",
    icon: "mdi:chart-line",
  },
  {
    title: "Tienda Online",
    description:
      "Ideal para negocios que buscan llevar su tienda física a la web. Incluye:",
    features: [
      "Tienda Online",
      "Integración de Formulario de Contacto",
      "Integración de redes sociales",
      "Ventas de servicios en línea",
      "Dashboard de admin donde controlas tus precios, productos..etc",
      "Optimización SEO",
      "Despliegue en Vercel",
    ],
    price: "$150 USD",
    message:
      "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Pro.",
    icon: "mdi:chart-line",
  },
  {
    title: "Plan Personalizado",
    description: "Diseñado para clientes con necesidades específicas. Incluye:",
    features: [
      "Diseño y funcionalidades a medida del cliente",
      "Consultoría personalizada",
      "Optimización SEO",
      "Despliegue en Vercel",
      "Soporte técnico extendido",
    ],
    price: "Precio a consultar",
    message:
      "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Personalizado.",
    icon: "mdi:star",
  },
];

export const getWhatsappLink = (message: string): string =>
  `${siteConfig.social.whatsapp}?text=${encodeURIComponent(message)}`;
