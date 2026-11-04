/**
 * Header Scroll Effect Manager
 * Maneja el efecto de scroll del header con optimización via requestAnimationFrame
 */

export class HeaderScrollManager {
  private header: HTMLElement | null = null;
  private mobileCta: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    this.header = document.getElementById("main-header");
    this.mobileCta = document.getElementById("mobile-cta");

    if (!this.header) {
      console.warn("Header element not found");
      return;
    }

    this.setupHeaderScrollEffect();
  }

  /**
   * Configura el efecto de scroll del header con debounce via rAF
   */
  private setupHeaderScrollEffect(): void {
    let ticking = false;

    const updateHeader = () => {
      this.header?.classList.toggle("is-scrolled", window.scrollY > 50);
      // La barra móvil solo aparece una vez que el CTA del hero queda atrás
      this.mobileCta?.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.8);
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateHeader);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateHeader();
  }
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new HeaderScrollManager();
  });
} else {
  new HeaderScrollManager();
}
