export interface Project {
  title: string;
  description: string;
  image: string;
  logo: string;
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Castropol Menu",
    description:
      "Desarrollé un sistema web completo de menú digital para restaurante con panel de administración. La aplicación cuenta con diseño mobile-first, sistema multi-moneda con conversión automática (CUP, USD, EUR), soporte para múltiples menús, gestión de categorías y productos con drag & drop, y selección de pedidos, con autenticación segura con Supabase, Row Level Security, rate limiting y validación con Zod para garantizar la seguridad del sistema.",
    image: "/projects-pic/castropol-screen.webp",
    logo: "/projects-pic/logos-mobile/castropol-logo.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zod",
    ],
    url: "https://castropol-menu.vercel.app",
  },
  {
    title: "El Feka",
    description:
      "Desarrollé El Feka, un juego multijugador online personalizado inspirado en el clásico juego del impostor. Los jugadores se enfrentan en partidas de deducción social en tiempo real, donde deben descubrir quién es el feka entre ellos. Diseñado con una estética vibrante estilo neón que complementa la intensidad del juego.",
    image: "/projects-pic/logos-mobile/logo-feka.png",
    logo: "/projects-pic/logos-mobile/logo-feka.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "#",
  },
  {
    title: "Fuleando",
    description:
      "Desarrollé Fuleando, una PWA innovadora diseñada para la gestión inteligente de operaciones de cambio de divisas en Cuba. La aplicación permite a los cambistas gestionar su inventario multi-moneda, registrar transacciones, calcular márgenes y llevar un control detallado de sus operaciones diarias, todo desde el móvil con soporte offline.",
    image: "/projects-pic/logos-mobile/logo-fulean2.png",
    logo: "/projects-pic/logos-mobile/logo-fulean2.png",
    technologies: ["PWA", "React", "TypeScript", "Tailwind CSS"],
    url: "#",
  },
  {
    title: "TheJasonStore",
    description:
      "TheJasonStore es una plataforma de e-commerce moderna y minimalista que revoluciona la experiencia de compra al integrar directamente WhatsApp como canal principal de ventas. Desarrollada con las tecnologías web más actuales, como Next.js, React, TypeScript, Tailwind CSS, Shadcn UI y Lucide React. Esta aplicación combina un diseño visualmente impactante con funcionalidad empresarial robusta, ofreciendo tanto una experiencia de usuario excepcional como un completo panel de administración con autenticación segura con Supabase, Row Level Security y rate limiting.",
    image: "/projects-pic/thejasonstore-screen.png",
    logo: "/projects-pic/logos-mobile/logo-thejasonstore.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    url: "https://thejasonstore.vercel.app",
  },
  {
    title: "Dito's Bartender",
    description:
      "Diseñé y desarrollé la página web para Dito's Bartender, un servicio premium de bartending móvil con sede en Estados Unidos. Implementé una interfaz moderna y atractiva utilizando Astro con componentes de React y TypeScript para garantizar un código robusto y mantenible. El diseño responsive creado con TailwindCSS ofrece una experiencia óptima en todos los dispositivos.",
    image: "/projects-pic/ditos-screen.png",
    logo: "/projects-pic/logos-mobile/logo-ditos.png",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS", "SEO"],
    url: "https://ditos-bartender.vercel.app",
  },
  {
    title: "Havanera Nails",
    description:
      "Diseñe y desarrollé la página web de Havanera Nails, un negocio de manicura y pedicura, en La Habana. Utilicé Astro y TailwindCSS para lograr una web rápida y eficiente. Implementé TypeScript para mejorar la interactividad y optimicé el SEO para aumentar la visibilidad en buscadores.",
    image: "/projects-pic/havanera-screen.png",
    logo: "/projects-pic/logos-mobile/logo-havanera.png",
    technologies: ["Astro", "TailwindCSS", "TypeScript", "SEO"],
    url: "https://havanera-nails.vercel.app",
  },
  {
    title: "Panel de Operaciones Aéreas",
    description:
      "Desarrollé una aplicación web que es un sistema de gestión de operaciones aéreas para que los coordinadores controlen todo el proceso desde sus dispositivos en tiempo real. Utilizando Astro, React, TypeScript y TailwindCSS, implementé una interfaz intuitiva y responsiva que permite a los usuarios organizar su trabajo de manera eficiente.",
    image: "/projects-pic/vraops-screen.png",
    logo: "/projects-pic/logos-mobile/logo-ops.png",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS"],
    url: "https://vra-ops-app.vercel.app",
  },
  {
    title: "VitaSpoon",
    description:
      "Desarrollé VitaSpoon, una innovadora plataforma web que genera recetas personalizadas utilizando IA. Implementada con Astro, React, TypeScript y TailwindCSS, esta aplicación conecta con APIs de OpenAI y Gemini, además de contar con una base de datos local como respaldo. Una característica destacada es su opción para generar recetas que no requieren electricidad, pensada especialmente para usuarios en países que enfrentan apagones frecuentes.",
    image: "/projects-pic/vitaspoon-screen.png",
    logo: "/projects-pic/logos-mobile/logo-VitaSpoon.png",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS", "SEO"],
    url: "https://vitaspoon.vercel.app",
  },
];
