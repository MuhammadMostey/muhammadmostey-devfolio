import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],

  experimental: {
    // assets: true,
    optimizeHoistedScript: true,
  },
});
