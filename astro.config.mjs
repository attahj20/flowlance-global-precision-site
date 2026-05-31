import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site; 'https://flowlance-global-precision-site.netlify.app',
    integrations: [
        sitemap()
    ],
});