/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#fad5d2',
          300: '#f6b5af',
          400: '#ef8881',
          500: '#e36158',
          600: '#cf4239',
          700: '#ad342d',
          800: '#8f2e29',
          900: '#772b27',
        },
        accent: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe7',
          300: '#a8bdd3',
          400: '#7999ba',
          500: '#587ba3',
          600: '#446189',
          700: '#384f6f',
          800: '#31445d',
          900: '#2c3a4e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
