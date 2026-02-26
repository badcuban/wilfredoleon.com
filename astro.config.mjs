import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wilfredoleon.com",
  output: "static",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});