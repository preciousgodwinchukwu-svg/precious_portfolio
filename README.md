# Precious Godwin Chukwu — portfolio

A responsive, locally built Next.js App Router + TypeScript portfolio using the supplied logo, portfolio artwork and CV. Designed for deployment on Vercel.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

On this Windows computer, application control blocks the native compiler. Use `npm run dev:wasm` instead. `npm run build:wasm` provides the equivalent local production build. These scripts select the installed WebAssembly compiler; Vercel continues to use `npm run build` normally.

```sh
npm run typecheck
npm run build
npm start
```

## Deploy to Vercel

Push this folder to your own Git repository, import it into Vercel, and select the Next.js preset. Keep the default build command (`npm run build`) and output settings. No environment variables or paid services are required.

## Editing content

- `src/lib/content.ts`: contact details, projects, service descriptions and experience.
- `src/app/page.tsx`: home page copy and sections.
- `src/app/globals.css`: green-and-cream brand tokens, layout and responsive styles.
- `public/images`: logo and images extracted from the supplied portfolio, with compact WebP versions used on the site. Replace the brand portrait here when a new personal photograph is available. Images are pre-compressed and served directly; no native image-processing service is required.
- `public/downloads`: supplied CV and portfolio PDFs.

Project pages are generated from the project data at `/work/[slug]`. Add a project object to expand the portfolio. Keep any new images in `public/images`.

## Motion and accessibility

GSAP + ScrollTrigger animate section elements and desktop photo movement. Lenis smooths desktop wheel scrolling only; touch devices keep native scrolling. Motion for React animates the mobile navigation and service selector. Reduced-motion settings remove travel and smoothing. The content remains server-rendered and readable without JavaScript; a direct email link is always available.

The service selector opens a prefilled email. The site does not pretend to submit a contact form and needs no mail server. Copy-email feedback reports clipboard failures honestly.

## Source notes

All photographs and campaign designs were supplied in the portfolio PDF; no stock imagery or testimonials were added. AI character imagery is identified as such. Production-scope figures (150+ pieces, eight writers and the 90-day strategy) come from the CV, not inferred campaign performance. Portfolio dashboard graphics remain illustrations, not independently verified metrics.

The project is prepared for Vercel but has not been deployed. No personal social profile URLs were supplied, so none were invented. Add those when available.
