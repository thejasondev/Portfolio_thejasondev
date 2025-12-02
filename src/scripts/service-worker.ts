/**
 * Service Worker Manager
 * Maneja el registro y actualización del Service Worker
 */

export class ServiceWorkerManager {
  /**
   * Registra el Service Worker con estrategia de actualización
   */
  static async register(): Promise<void> {
    if (!("serviceWorker" in navigator)) {
      console.log("Service Worker not supported");
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("SW registered:", registration.scope);

      // Verificar actualizaciones cada hora
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1000);

      // Escuchar actualizaciones
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            // Hay una nueva versión disponible
            console.log("New SW version available");
            // Aquí podrías mostrar un mensaje al usuario
          }
        });
      });
    } catch (error) {
      console.error("SW registration failed:", error);
    }
  }

  /**
   * Inicializa el Service Worker cuando la página está cargada
   */
  static init(): void {
    if (document.readyState === "loading") {
      window.addEventListener("load", () => this.register());
    } else {
      this.register();
    }
  }
}
