import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://thejasondev.vercel.app",
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      filter: (page) => page !== "https://thejasondev.vercel.app/not-found",
      customPages: ["https://thejasondev.vercel.app/"],
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],
});
