// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  // imageService: 'compile' optimizes images with sharp at BUILD time into
  // static .webp files. Our pages are prerendered, so this avoids any runtime
  // image endpoint / Cloudflare Images binding (which wasn't configured and
  // caused images to break on Cloudflare).
  adapter: cloudflare({ imageService: "compile" })
});