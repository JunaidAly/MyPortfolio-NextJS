# Junaid Ali — Portfolio

A lightweight, responsive portfolio for Junaid Ali, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Design direction

- Editorial dark theme with Bricolage Grotesque and Sora typography
- Lightweight CSS perspective and layered motion instead of WebGL or custom 3D models
- Resume-backed experience, project, skill, and contact content
- Staggered hero motion, scroll reveals, hover lift, route transitions, and reduced-motion support
- Responsive single-page narrative with dedicated SEO-friendly routes

## Stack

- Next.js 14 / React 18 / TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- EmailJS contact form

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

## Content

Portfolio data is centralized in `src/constants/portfolio.ts`. The downloadable resume lives at `public/My Resume.pdf`.

EmailJS can be configured with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The existing public fallback configuration remains active when these values are not provided.
