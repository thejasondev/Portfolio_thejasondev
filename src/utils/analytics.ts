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
export const initializeVercelAnalytics = (): void => {
  if (!isVercelProduction()) {
    console.log("Analytics: Skipped (not Vercel production)");
    return;
  }

  window.addEventListener("load", () => {
    try {
      // Verificar si ya está cargado
      if (typeof window.va !== "undefined") {
        console.log("Analytics: Already loaded");
        return;
      }

      // Cargar el script de Vercel Speed Insights
      const script = document.createElement("script");
      script.src = "/_vercel/speed-insights/script.js";
      script.defer = true;
      script.dataset.sdkn = "@vercel/speed-insights";
      script.dataset.sdkv = "1.0.0";

      script.onload = () => {
        console.log("Analytics: Loaded successfully");
      };

      script.onerror = () => {
        console.error("Analytics: Failed to load script");
      };

      document.body.appendChild(script);
    } catch (error) {
      console.error("Analytics: Initialization error", error);
    }
  });
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
