/**
 * Enlaces de redes sociales centralizados
 * Utilizado en múltiples componentes (Hero, Footer, etc.)
 */

import { siteConfig } from "../config/site";

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  label: string;
}

/**
 * Lista de enlaces de redes sociales
 * Ordenados por importancia
 */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "mdi:github",
    url: siteConfig.social.github,
    label: `GitHub de ${siteConfig.author.name}`,
  },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    url: siteConfig.social.linkedin,
    label: `LinkedIn de ${siteConfig.author.name}`,
  },
  {
    name: "Instagram",
    icon: "mdi:instagram",
    url: siteConfig.social.instagram,
    label: `Instagram de ${siteConfig.author.name}`,
  },
  {
    name: "Twitter",
    icon: "mdi:twitter",
    url: siteConfig.social.twitter,
    label: `Twitter de ${siteConfig.author.name}`,
  },
];

/**
 * Genera el enlace de WhatsApp con mensaje personalizado
 */
export const getWhatsappLink = (customMessage?: string): string => {
  const defaultMessage = "Hola, me interesa trabajar contigo.";
  const message = encodeURIComponent(customMessage || defaultMessage);
  return `${siteConfig.social.whatsapp}?text=${message}`;
};
