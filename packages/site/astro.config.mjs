import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';

const { STORYBLOK_TOKEN } = process.env;

if(!STORYBLOK_TOKEN){
  throw new Error(`STORYBLOK_TOKEN is a required env variable`);
}

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        storyblok({
            accessToken: STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/page',
                hero: 'storyblok/hero',
                markdown_content: 'storyblok/markdown-content',
                richtext_content: 'storyblok/richtext-content'
            },
            apiOptions: {
              // Choose your Storyblok space region
              region: 'us', // optional,  or 'eu' (default)
            }
          })        
    ],
    vite: {
        plugins: [basicSsl()],
        server: {
          https: true,
        },
      },
});
