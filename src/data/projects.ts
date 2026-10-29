import type { LocalizedText } from "../i18n/types";

export interface Project {
  title: string;
  description: LocalizedText;
  image: string;
  imageWidth: number;
  imageHeight: number;
  logo: string;
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Elevate CSM",
    description: {
      es: "Diseñé y desarrollé el portfolio web para Elevate CSM, una agencia de marketing digital con sede en Estados Unidos. Implementé una interfaz elegante y sofisticada utilizando Astro con componentes de React y TypeScript para un código robusto y escalable. El diseño responsive creado con TailwindCSS transmite la identidad premium de la marca y ofrece una experiencia fluida en todos los dispositivos.",
      en: "I designed and developed the website portfolio for Elevate CSM, a US-based digital marketing agency. I implemented an elegant and sophisticated interface using Astro with React and TypeScript components for robust, scalable code. The responsive design built with TailwindCSS conveys the brand's premium identity and delivers a smooth experience across all devices.",
      ro: "Am proiectat și dezvoltat portofoliul web pentru Elevate CSM, o agenție de marketing digital cu sediul în Statele Unite. Am implementat o interfață elegantă și sofisticată folosind Astro cu componente React și TypeScript pentru un cod robust și scalabil. Designul responsive creat cu TailwindCSS transmite identitatea premium a brandului și oferă o experiență fluidă pe toate dispozitivele.",
    },
    image: "/projects-pic/elevatecsm-screen.webp",
    imageWidth: 1280,
    imageHeight: 567,
    logo: "/projects-pic/logos-mobile/logo-elevate.webp",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS", "SEO"],
    url: "https://elevatecsm.vercel.app",
  },
  {
    title: "Castropol Menu",
    description: {
      es: "Desarrollé un sistema web completo de menú digital para restaurante con panel de administración. La aplicación cuenta con diseño mobile-first, sistema multi-moneda con conversión automática (CUP, USD, EUR), soporte para múltiples menús, gestión de categorías y productos con drag & drop, y selección de pedidos, con autenticación segura con Supabase, Row Level Security, rate limiting y validación con Zod para garantizar la seguridad del sistema.",
      en: "I developed a complete web-based digital menu system for a restaurant with an admin panel. The application features a mobile-first design, a multi-currency system with automatic conversion (CUP, USD, EUR), support for multiple menus, category and product management with drag & drop, and order selection, with secure authentication via Supabase, Row Level Security, rate limiting and Zod validation to guarantee system security.",
      ro: "Am dezvoltat un sistem web complet de meniu digital pentru restaurant, cu panou de administrare. Aplicația are un design mobile-first, un sistem multi-valutar cu conversie automată (CUP, USD, EUR), suport pentru mai multe meniuri, gestionarea categoriilor și produselor cu drag & drop și selectarea comenzilor, cu autentificare securizată prin Supabase, Row Level Security, rate limiting și validare cu Zod pentru a garanta securitatea sistemului.",
    },
    image: "/projects-pic/castropol-screen.webp",
    imageWidth: 1280,
    imageHeight: 564,
    logo: "/projects-pic/logos-mobile/castropol-logo.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Row Level Security",
      "Rate Limiting",
      "Zod",
    ],
    url: "https://castropol-menu.vercel.app",
  },
  {
    title: "Dito's Bartender",
    description: {
      es: "Diseñé y desarrollé la página web para Dito's Bartender, un servicio premium de bartending móvil con sede en Estados Unidos. Implementé una interfaz moderna y atractiva utilizando Astro con componentes de React y TypeScript para garantizar un código robusto y mantenible. El diseño responsive creado con TailwindCSS ofrece una experiencia óptima en todos los dispositivos.",
      en: "I designed and developed the website for Dito's Bartender, a premium mobile bartending service based in the United States. I implemented a modern and attractive interface using Astro with React and TypeScript components to ensure robust, maintainable code. The responsive design built with TailwindCSS offers an optimal experience on all devices.",
      ro: "Am proiectat și dezvoltat site-ul web pentru Dito's Bartender, un serviciu premium de bartending mobil cu sediul în Statele Unite. Am implementat o interfață modernă și atractivă folosind Astro cu componente React și TypeScript pentru un cod robust și ușor de întreținut. Designul responsive creat cu TailwindCSS oferă o experiență optimă pe toate dispozitivele.",
    },
    image: "/projects-pic/ditos-screen.webp",
    imageWidth: 1280,
    imageHeight: 591,
    logo: "/projects-pic/logos-mobile/logo-ditos.webp",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS", "SEO"],
    url: "https://ditos-bartender.vercel.app",
  },
  {
    title: "Panel de Operaciones Aéreas",
    description: {
      es: "Desarrollé una aplicación web que es un sistema de gestión de operaciones aéreas para que los coordinadores de OPS controlen todo el proceso de los vuelos desde sus dispositivos en tiempo real. Utilizando Astro, React, TypeScript y TailwindCSS, implementé una interfaz intuitiva y responsiva que permite a los usuarios organizar su trabajo de manera eficiente.",
      en: "I developed a web application that is an air operations management system allowing OPS coordinators to control the entire flight process from their devices in real time. Using Astro, React, TypeScript and TailwindCSS, I implemented an intuitive and responsive interface that lets users organize their work efficiently.",
      ro: "Am dezvoltat o aplicație web care este un sistem de management al operațiunilor aeriene, permițând coordonatorilor OPS să controleze întregul proces al zborurilor de pe dispozitivele lor în timp real. Folosind Astro, React, TypeScript și TailwindCSS, am implementat o interfață intuitivă și responsive care le permite utilizatorilor să își organizeze eficient munca.",
    },
    image: "/projects-pic/vraops-screen.webp",
    imageWidth: 1280,
    imageHeight: 442,
    logo: "/projects-pic/logos-mobile/logo-ops.webp",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS"],
    url: "https://cub-ops.vercel.app",
  },
  {
    title: "Fulean2",
    description: {
      es: "Desarrollé Fulean2, una PWA innovadora diseñada para la gestión inteligente de operaciones de cambio de divisas en Cuba. La aplicación permite a los cambistas gestionar su inventario multi-moneda, registrar transacciones, calcular márgenes y llevar un control detallado de sus operaciones diarias, todo desde el móvil con soporte offline.",
      en: "I developed Fulean2, an innovative PWA designed for the smart management of currency exchange operations in Cuba. The application lets money changers manage their multi-currency inventory, record transactions, calculate margins and keep detailed track of their daily operations, all from their phone with offline support.",
      ro: "Am dezvoltat Fulean2, o PWA inovatoare concepută pentru gestionarea inteligentă a operațiunilor de schimb valutar în Cuba. Aplicația le permite schimbătorilor de valute să își gestioneze inventarul multi-valutar, să înregistreze tranzacții, să calculeze marjele și să țină o evidență detaliată a operațiunilor zilnice, totul de pe telefon, cu suport offline.",
    },
    image: "/projects-pic/fulean2-screen.webp",
    imageWidth: 1280,
    imageHeight: 562,
    logo: "/projects-pic/logos-mobile/logo-fulean2.webp",
    technologies: ["PWA", "React", "TypeScript", "Tailwind CSS"],
    url: "https://fulean2.vercel.app",
  },
  {
    title: "Maria Swindell",
    description: {
      es: "Diseñé y desarrollé el portfolio de Maria Swindell, content creator y brand ambassador venezolana radicada en Estados Unidos. El sitio presenta su trayectoria colaborando con marcas como Fashion Nova, Pretty Little Thing y YSL, con un diseño editorial elegante, paleta cálida y secciones de colaboraciones, testimonios de marcas y showcase de contenido en video.",
      en: "I designed and developed the portfolio of Maria Swindell, a Venezuelan content creator and brand ambassador based in the United States. The site showcases her career collaborating with brands such as Fashion Nova, Pretty Little Thing and YSL, with an elegant editorial design, a warm palette and sections for collaborations, brand testimonials and a video content showcase.",
      ro: "Am proiectat și dezvoltat portofoliul Mariei Swindell, creatoare de conținut și ambasador de brand de origine venezueleană, stabilită în Statele Unite. Site-ul prezintă cariera ei în colaborare cu branduri precum Fashion Nova, Pretty Little Thing și YSL, cu un design editorial elegant, o paletă caldă și secțiuni pentru colaborări, testimoniale ale brandurilor și o galerie de conținut video.",
    },
    image: "/projects-pic/mariaswindell-screen.webp",
    imageWidth: 1200,
    imageHeight: 630,
    logo: "/projects-pic/logos-mobile/logo-mariaswindell.webp",
    technologies: ["Astro", "TailwindCSS", "TypeScript", "SEO"],
    url: "https://mariaswindell.vercel.app",
  },
  {
    title: "Julio Taxi Service",
    description: {
      es: "Desarrollé el sitio web de Julio Taxi Service, servicio de taxi privado y excursiones en Varadero, Cuba. Presenta los servicios de transfer al aeropuerto, recogida en hotel, excursiones a La Habana y paseos panorámicos en su Mercedes B180, e incluye un formulario de reserva que envía la solicitud directo a WhatsApp. Internacionalizado en 7 idiomas para turistas de todo el mundo.",
      en: "I developed the website for Julio Taxi Service, a private taxi and excursion service in Varadero, Cuba. It presents the services of airport transfer, hotel pickup, excursions to Havana and panoramic tours in his Mercedes B180, and includes a booking form that sends the request directly to WhatsApp. Internationalized in 7 languages for tourists from all over the world.",
      ro: "Am dezvoltat site-ul web pentru Julio Taxi Service, un serviciu privat de taxi și excursii în Varadero, Cuba. Prezintă serviciile de transfer la aeroport, preluare de la hotel, excursii la Havana și tururi panoramice cu Mercedesul său B180 și include un formular de rezervare care trimite cererea direct pe WhatsApp. Internaționalizat în 7 limbi pentru turiști din întreaga lume.",
    },
    image: "/projects-pic/juliotaxiservice-screen.webp",
    imageWidth: 1200,
    imageHeight: 630,
    logo: "/projects-pic/logos-mobile/logo-juliotaxi.webp",
    technologies: ["Astro", "TailwindCSS", "TypeScript", "i18n", "PWA", "SEO"],
    url: "https://juliotaxiservice.vercel.app",
  },
];
