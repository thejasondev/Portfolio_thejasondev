# VíaSegura - Aplicación PWA para el Examen de Conducción (Ley 109)

## 📌 Descripción del Proyecto
VíaSegura es una Progressive Web App (PWA) de alto rendimiento diseñada para facilitar el estudio y la preparación para el examen de conducción en Cuba (basado en la Ley 109). Centrada en la experiencia de usuario (UX) y la accesibilidad, la aplicación está construida con una arquitectura *offline-first*. Tras su primera carga, permite a los usuarios estudiar, realizar exámenes y consultar información en cualquier lugar, de forma rápida y sin necesidad de conexión a internet.

## 🚀 Características Principales (Lo que ofrece)
- **Experiencia Offline-First:** Funcionamiento total sin conexión a internet mediante la gestión avanzada de Service Workers y caché de recursos.
- **Módulos de Estudio Estructurados:** Contenido teórico dividido metodológicamente para aprender de manera organizada los artículos de la Ley 109.
- **Simulador de Exámenes y Práctica Interactiva:** Motor de cuestionarios con Modo Práctica (feedback inmediato) y Modo Examen (temporizador y condiciones reales), abortables y con correcciones visuales claras.
- **Directorio Interactivo de Señales:** Base de datos para consultar visualmente y explorar las distintas clases de señales de tránsito.
- **Sistema de Progreso Persistente:** Rastreo continuo del avance de estudio, analíticas locales y puntajes que se guardan de forma permanente en el dispositivo.
- **Experiencia de Usuario Premium y Gamificada:** Navegación ultra fluida sin recargas de página, indicadores de éxito (ej. animaciones de confeti) e interfaces responsivas modernas.
- **Instalabilidad:** Capacidad total de instalarse en dispositivos móviles (Android/iOS) y ordenadores de escritorio directamente desde el navegador, sintiéndose como una app nativa.

## 🛠 Tecnologías y Stack
- **[Astro 5](https://astro.build/):** Framework principal. Provee un enfoque céntrico en el contenido para lograr máxima velocidad de carga (Zero-JS por defecto donde es posible) junto a View Transitions para una navegación rápida simulando una SPA.
- **[React 19](https://react.dev/):** Integrado mediante islas interactivas (Astro Islands) únicamente donde se necesita alta reactividad en la interfaz (ej. motor del examen, visualización).
- **[Tailwind CSS v4](https://tailwindcss.com/):** Sistema de estilos por utilidad para conseguir una interfaz atractiva, pulida y 100% responsiva de manera altamente mantenible.
- **[Nanostores](https://github.com/nanostores/nanostores):** Gestión del estado global, ligera y atómica (`@nanostores/persistent`), encargada de compartir el estado entre componentes (incluso combinando Astro y React) y sincronizar el progreso de los usuarios automáticamente con `localStorage`.
- **[Vite PWA / Workbox](https://vite-pwa-org.netlify.app/):** Tecnología encargada de generar el manifest, configurar y registrar los Service Workers, habilitando la caché profunda y la instalación PWA.
- **[Vercel Analytics](https://vercel.com/analytics):** Herramienta integrada para obtener métricas de desempeño y medición de la interacción de los usuarios.

## 💡 Impacto y Valor
VíaSegura soluciona un problema real (acceso a herramientas de estudio modernas y sin depender de conexión a internet constante en Cuba) demostrando fuertes habilidades en:
- Diseño de Arquitecturas Web Modernas y Desacopladas.
- Optimización de rendimiento web (Core Web Vitals).
- Patrones de diseño *Offline-First* y Progressive Web Apps.
- Creación de interfaces de usuario interactivas, estéticas e intuitivas.
