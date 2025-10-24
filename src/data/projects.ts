export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Dito's Bartender",
    description:
      "Diseñé y desarrollé la página web para Dito's Bartender, un servicio premium de bartending móvil con sede en Estados Unidos. Implementé una interfaz moderna y atractiva utilizando Astro con componentes de React y TypeScript para garantizar un código robusto y mantenible. El diseño responsive creado con TailwindCSS ofrece una experiencia óptima en todos los dispositivos.",
    image: "/projects-pic/ditos-screen.png",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS", "SEO"],
    url: "https://ditos-bartender.vercel.app",
  },
  {
    title: "Havanera Nails",
    description:
      "Diseñe y desarrollé la página web de Havanera Nails, un negocio de manicura y pedicura, en La Habana. Utilicé Astro y TailwindCSS para lograr una web rápida y eficiente. Implementé TypeScript para mejorar la interactividad y optimicé el SEO para aumentar la visibilidad en buscadores.",
    image: "/projects-pic/havanera-screen.png",
    technologies: ["Astro", "TailwindCSS", "TypeScript", "SEO"],
    url: "https://havanera-nails.vercel.app",
  },
  {
    title: "Panel de Operaciones Aéreas",
    description:
      "Desarrollé una aplicación web que es un sistema de gestión de operaciones aéreas para que los coordinadores controlen todo el proceso desde sus dispositivos en tiempo real. Utilizando Astro, React, TypeScript y TailwindCSS, implementé una interfaz intuitiva y responsiva que permite a los usuarios organizar su trabajo de manera eficiente.",
    image: "/projects-pic/vraops-screen.png",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS"],
    url: "https://vra-ops-app.vercel.app",
  },
  {
    title: "VitaSpoon",
    description:
      "Desarrollé VitaSpoon, una innovadora plataforma web que genera recetas personalizadas utilizando IA. Implementada con Astro, React, TypeScript y TailwindCSS, esta aplicación conecta con APIs de OpenAI y Gemini, además de contar con una base de datos local como respaldo. Una característica destacada es su opción para generar recetas que no requieren electricidad, pensada especialmente para usuarios en países que enfrentan apagones frecuentes.",
    image: "/projects-pic/vitaspoon-screen.png",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS", "SEO"],
    url: "https://vitaspoon.vercel.app",
  },
];
