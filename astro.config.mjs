import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

// Static output; Netlify Forms handles enquiries so no adapter is needed.
export default defineConfig({ integrations: [lit()] });
