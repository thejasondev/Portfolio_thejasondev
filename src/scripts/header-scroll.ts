/**
 * Header Scroll Effect Manager
 * Maneja el efecto de scroll del header con optimización via requestAnimationFrame
 */

export class HeaderScrollManager {
  private header: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    this.header = document.getElementById("main-header");

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
      if (window.scrollY > 50) {
        this.header?.classList.add("shadow-lg");
        this.header?.classList.remove("liquid-glass");
        this.header?.classList.add("liquid-glass-dark");
      } else {
        this.header?.classList.remove("shadow-lg", "liquid-glass-dark");
        this.header?.classList.add("liquid-glass");
      }
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    });
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
