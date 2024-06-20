import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://github.com/shoelace-style/shoelace/discussions/2031
const iconsPath = '../../node_modules/@shoelace-style/shoelace/dist/assets/icons';

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
                page_section: 'storyblok/page-section',
                multipart_hero: 'storyblok/multipart-hero',
                content: 'storyblok/content',
                markdown_content: 'storyblok/markdown-content',
                richtext_content: 'storyblok/richtext-content',
                horizontal_list: 'storyblok/horizontal-list'
            },
            apiOptions: {
              // Choose your Storyblok space region
              region: 'us', // optional,  or 'eu' (default)
            }
          })        
    ],
    vite: {
        build: {
          rollupOptions: {
            plugins: [],
          },
        },
        plugins: [
          basicSsl(),
          viteStaticCopy({
            targets: [
              {
                src: iconsPath,
                dest: 'assets',
              },
            ],
          }),          
        ],
        server: {
          https: true,
        },
        alias: [
          {
            find: /\/assets\/icons\/(.+)/,
            replacement: `${iconsPath}/$1`,
          },
        ]        
      },
});
