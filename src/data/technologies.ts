export interface Technology {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const technologies: Technology[] = [
  {
    name: "HTML5",
    icon: "simple-icons:html5",
    color: "#E34F26",
    description: "Lenguaje de marcado para estructurar el contenido web",
  },
  {
    name: "CSS3",
    icon: "simple-icons:css3",
    color: "#1572B6",
    description: "Lenguaje de estilos para el diseño visual de páginas web",
  },
  {
    name: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
    color: "#06B6D4",
    description: "Framework CSS de utilidades para desarrollo rápido",
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    color: "#F7DF1E",
    description: "Lenguaje de programación para interactividad web",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
    color: "#3178C6",
    description: "Superset de JavaScript con tipado estático",
  },
  {
    name: "Astro",
    icon: "simple-icons:astro",
    color: "#FF5D01",
    description:
      "Framework para construir sitios web rápidos y orientados al contenido",
  },
  {
    name: "React",
    icon: "simple-icons:react",
    color: "#61DAFB",
    description: "Biblioteca JavaScript para construir interfaces de usuario",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    color: "#000000",
    description:
      "Framework React para aplicaciones web con renderizado híbrido",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    color: "#F05032",
    description:
      "Sistema de control de versiones distribuido para seguimiento de cambios en código fuente",
  },
  {
    name: "GitHub",
    icon: "simple-icons:github",
    color: "#181717",
    description: "Plataforma de alojamiento de código y control de versiones",
  },
  {
    name: "Vercel",
    icon: "simple-icons:vercel",
    color: "#000000",
    description: "Plataforma para despliegue y hosting de aplicaciones web",
  },
];
