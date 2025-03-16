import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), solidJs()],

  vite: {
    plugins: [tailwindcss()]
  }
});