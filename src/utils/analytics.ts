/**
 * Utilidades para Analytics (Vercel)
 * Centraliza la lógica de inicialización y tracking
 */

/**
 * Tipo para el objeto global de Vercel Analytics
 */
declare global {
  interface Window {
    va?: (event: string, properties?: Record<string, any>) => void;
  }
}

/**
 * Detecta si estamos en un ambiente de Vercel en producción
 * @returns true si el hostname es de Vercel
 */
export const isVercelProduction = (): boolean => {
  if (typeof window === "undefined") return false;

  const hostname = window.location.hostname;
  return (
    hostname.endsWith(".vercel.app") ||
    hostname === "thejasondev.vercel.app" ||
    hostname.includes("vercel")
  );
};

/**
 * Inicializa Vercel Speed Insights
 * Solo se ejecuta en producción de Vercel
 */
/**
 * Inicializa Vercel Speed Insights
 * DEPRECATED: Usando componente oficial <SpeedInsights />
 */
export const initializeVercelAnalytics = (): void => {
  console.log("Analytics: Managed by official Vercel components");
};

/**
 * Registra eventos personalizados en Vercel Analytics
 * @param eventName - Nombre del evento
 * @param properties - Propiedades adicionales del evento
 *
 * @example
 * trackEvent('button_click', { button: 'contact' })
 */
export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
): void => {
  if (typeof window === "undefined" || !window.va) {
    console.log(
      `Analytics: Event "${eventName}" not tracked (va not available)`
    );
    return;
  }

  try {
    window.va("track", eventName, properties);
    console.log(`Analytics: Event "${eventName}" tracked`, properties);
  } catch (error) {
    console.error(`Analytics: Error tracking event "${eventName}"`, error);
  }
};
