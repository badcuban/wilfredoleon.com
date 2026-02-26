# wilfredoleon.com

Personal portfolio and digital home base built with Astro, Tailwind CSS 4, and Three.js.

## Tech Stack

- [Astro](https://astro.build/) — Static site generator
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS
- [Three.js](https://threejs.org/) — 3D Rubik's cube hero element
- [Vercel](https://vercel.com/) — Hosting and deployment

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── data/content.ts        # All site content (edit this to update the site)
├── layouts/BaseLayout.astro
├── pages/index.astro
└── styles/global.css
```

## Deployment

Deployed to Vercel with the `@astrojs/vercel` adapter. Pushes to `main` trigger automatic builds.
