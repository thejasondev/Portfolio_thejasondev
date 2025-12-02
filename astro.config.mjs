import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://thejasondev.vercel.app",
  output: "static",
  adapter: vercel(),
  // Comprimir assets para mejor rendimiento
  compressHTML: true,
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      filter: (page) =>
        page !== "https://thejasondev.vercel.app/not-found" &&
        page !== "https://thejasondev.vercel.app/404",
      customPages: ["https://thejasondev.vercel.app"],
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
    }),
    /* compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }), */
  ],
  build: {
    // Inlining de estilos críticos para mejorar First Contentful Paint
    inlineStylesheets: "auto",
  },
});
