# Portfolio handoff

## What was built

Next.js 16 with TypeScript, four statically generated project pages, a mobile menu, interactive service selection, relevant email enquiries, a working phone link, and downloads of the supplied CV and portfolio. Fonts and images are served locally.

GSAP and ScrollTrigger handle the hero entrance, section choreography and scroll-linked photograph movement. Lenis is used only for desktop wheel scrolling. Motion for React handles the menu and service-selector feedback. Native touch scrolling and reduced-motion preferences are respected.

## Design decisions

Taste direction: **The name as a monument**, seed **683478939**. The supplied green and cream colours were retained. The idea: **Precious’s own name becomes the portfolio cover, and her campaign assets become its pages.** The interactive element is a service selector that creates a relevant email brief.

Two composition changes were recorded: the initial ring-of-frames hero needed 18–24 distinct film images that were not supplied; it was redrawn to a name-led composition. The work section’s split-pane treatment needed paired full-bleed photographs, so the alternative oversized-visual composition was used to preserve the actual brochure and campaign designs.

Final visual review: **7.6/10** (design 7.5, usability 8, creativity 7, content 8). The full critique is in `.taste-skill/critique.md`.

## Verified

- Production build and TypeScript validation passed using the local WebAssembly compiler fallback.
- Design source lint: zero failures and zero warnings.
- Browser design inspector at 1440, 768 and 390 pixels: zero failures.
- 51 browser and HTTP checks passed, including layouts at 320, 375, 390, 430, 768, 1024 and 1440 pixels, every project route, both PDF downloads, service/email selection, mobile menu open/Escape handling, no horizontal overflow, reduced motion and content without JavaScript.
- All final design screenshots and mobile project-page screenshots were reviewed.

Tests used Chromium browser emulation on this Windows computer. Physical iOS/Android devices and Safari were not available for testing.

The inspector retains three informational warnings: cream is the requested brand colour; no actual video was provided; and its name-only-title heuristic misses the prominent “Social media manager & content strategist” description visible on the first screen. These are documented decisions, not hidden checks.

## Assets and content

All imagery comes from the supplied portfolio and logo. There are no found photographs, third-party stock clips, bundled scene photographs or invented client projects. A footer credit identifies the portfolio artwork; the Preye project identifies its AI-generated character imagery. No new image-generation assets were made. WebP copies reduce the image payload while preserving the supplied designs.

The figures of eight writers, 150+ content pieces and a 90-day strategy come from the CV. Sample marketing dashboards have not been turned into verified performance claims. The Wholeness MD project explains that its overview is a portfolio illustration.

No fabricated social profile links, testimonials or sample copy need replacing. Before publishing, the owner can add personal social-profile URLs and a real video reel if desired. The site is ready for Vercel import but has not been published.

The contact actions open the visitor’s email app with a prepared subject and brief. They do not send an email automatically or depend on a form backend.
