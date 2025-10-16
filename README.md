# Wedding Website

A beautiful, modern static wedding website built with Astro and Tailwind CSS.

## Features

- 🎨 Modern, elegant design with custom color scheme
- 📱 Fully responsive for all devices
- ⚡ Lightning-fast static site generation with Astro
- 💝 Complete wedding sections:
  - Hero section with couple names and date
  - Love story timeline
  - Wedding details (ceremony & reception)
  - RSVP form
  - Gift registry links
- 🎯 Smooth scrolling navigation
- 🌈 Beautiful gradient backgrounds and animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:4321`

### Building for Production

To create a production build:

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## Customization

### Update Wedding Details

Edit the following files to customize for your wedding:

- **Names & Date**: `src/components/Hero.astro`
- **Love Story**: `src/components/Story.astro`
- **Ceremony & Reception Details**: `src/components/Details.astro`
- **Registry Links**: `src/components/Registry.astro`

### Change Colors

Edit `tailwind.config.mjs` to customize the color scheme:
- `primary` colors: Main wedding theme color (currently rose/coral)
- `accent` colors: Secondary accent color (currently blue-gray)

### Fonts

The site uses:
- **Great Vibes** - Script font for elegant headings
- **Playfair Display** - Serif font for titles
- **Inter** - Sans-serif font for body text

Change fonts in `src/layouts/Layout.astro`

## Deployment

This static site can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- TypeScript - Type safety

## License

MIT
