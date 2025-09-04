// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jsfastrotutorial.netlify.app/",
  integrations: [
    preact({
      include: ['./src/components/Greeting.jsx']
    }),
    react({
      exclude: ['./src/components/Greeting.jsx']
      //include: ['**/react/**']
    })
  ]
});
