import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import enapterTheme from "@enapter/design-theme/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://3.enapter.cloud",
  integrations: [tailwind(), enapterTheme(), sitemap()],
});
