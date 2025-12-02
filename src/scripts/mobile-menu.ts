/**
 * Mobile Menu Manager
 * Maneja el comportamiento del menú móvil con animaciones y accesibilidad
 */

export class MobileMenuManager {
  private isMenuOpen = false;
  private menuToggle: HTMLElement | null = null;
  private mobileMenu: HTMLElement | null = null;
  private closeMenuBtn: HTMLElement | null = null;
  private menuLinks: NodeListOf<Element> | null = null;
  private header: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    // Inicializar elementos del DOM
    this.menuToggle = document.getElementById("menu-toggle");
    this.mobileMenu = document.getElementById("mobile-menu");
    this.closeMenuBtn = document.getElementById("close-menu");
    this.menuLinks = document.querySelectorAll(".menu-link");
    this.header = document.getElementById("main-header");

    if (!this.menuToggle || !this.mobileMenu) {
      console.warn("Mobile menu elements not found");
      return;
    }

    this.attachEventListeners();
    this.setupHeaderScrollEffect();
  }

  /**
   * Abre el menú móvil
   */
  private openMenu(): void {
    this.isMenuOpen = true;
    this.menuToggle?.classList.add("active");
    this.mobileMenu?.classList.add("active");
    this.menuToggle?.setAttribute("aria-expanded", "true");
    this.menuToggle?.setAttribute("aria-label", "Cerrar menú de navegación");
    document.body.style.overflow = "hidden";

    // Focus trap - focus first menu item
    setTimeout(() => {
      const firstLink = this.menuLinks?.[0] as HTMLElement;
      firstLink?.focus();
    }, 400);
  }

  /**
   * Cierra el menú móvil
   */
  private closeMenu(): void {
    this.isMenuOpen = false;
    this.menuToggle?.classList.remove("active");
    this.mobileMenu?.classList.remove("active");
    this.menuToggle?.setAttribute("aria-expanded", "false");
    this.menuToggle?.setAttribute("aria-label", "Abrir menú de navegación");
    document.body.style.overflow = "";

    // Return focus to toggle button
    this.menuToggle?.focus();
  }

  /**
   * Alterna entre abrir y cerrar el menú
   */
  private toggleMenu(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * Adjunta todos los event listeners
   */
  private attachEventListeners(): void {
    // Toggle button click
    this.menuToggle?.addEventListener("click", () => this.toggleMenu());

    // Close button click
    this.closeMenuBtn?.addEventListener("click", () => this.closeMenu());

    // Close menu on link click
    this.menuLinks?.forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(() => this.closeMenu(), 100);
      });
    });

    // Close on tap outside (on the overlay itself)
    this.mobileMenu?.addEventListener("click", (e) => {
      if (e.target === this.mobileMenu) {
        this.closeMenu();
      }
    });

    // Close with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMenuOpen) {
        this.closeMenu();
      }
    });

    // Focus trap inside menu
    document.addEventListener("keydown", (e) => {
      if (!this.isMenuOpen || e.key !== "Tab") return;

      const focusableElements = Array.from(
        this.mobileMenu?.querySelectorAll("a[href], button:not([disabled])") ||
          []
      ) as HTMLElement[];

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });
  }

  /**
   * Configura el efecto de scroll del header con debounce
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
    new MobileMenuManager();
  });
} else {
  new MobileMenuManager();
}
