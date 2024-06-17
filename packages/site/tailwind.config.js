/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 800px)' },
      }      
    },
  },
  plugins: [],
}

