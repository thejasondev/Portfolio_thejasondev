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
      "Ideal para pequeños proyectos o negocios que necesitan presencia en línea. Incluye:",
    features: [
      "Landing page",
      "Hasta 4 secciones",
      "Despliegue en Vercel",
      "Optimización básica",
    ],
    price: "$100 USD",
    message:
      "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Básico",
    icon: "mdi:rocket-launch",
  },
  {
    title: "Plan Intermedio",
    description:
      "Perfecto para negocios que buscan funcionalidades adicionales. Incluye:",
    features: [
      "Página web de hasta 5 secciones (Inicio, Servicios, Contacto...)",
      "Integración básica de Formulario de Contacto",
      "Integración de redes sociales",
      "Optimización SEO",
      "Despliegue en Vercel",
    ],
    price: "$250 USD",
    message:
      "Hola, me interesa su trabajo como desarrollador web. Quisiera contratar el Plan Intermedio.",
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
