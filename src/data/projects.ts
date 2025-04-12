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
    title: "Satori Massage",
    description:
      "Diseñé y desarrollé la landing page para Satori Massage, un servicio premium de masajes terapéuticos a domicilio. Utilicé Next.js y TypeScript para crear una experiencia de usuario fluida y moderna, complementada con animaciones sutiles. La implementación de TailwindCSS permitió un diseño responsive y elegante.",
    image: "/projects-pic/satori-screen.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    url: "https://satori-massage.vercel.app",
  },
];
