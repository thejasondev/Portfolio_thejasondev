import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://portfolio-thejasondev.vercel.app",
  integrations: [tailwind(), icon(), sitemap()],
});
