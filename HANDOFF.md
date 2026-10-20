# Continue this project — Kalavia Creatives website (handoff prompt)

> Paste everything below (from the line "You are continuing…") into a new
> Claude Code / AI session that is opened in the `d:\kalavia-website` folder.

---

You are continuing work on an already-built website. Do NOT rebuild it from
scratch. First read `data/site.js`, `app/page.js` and `app/globals.css` to
understand the current state, then make only the changes I ask for.

## What this project is
A premium, one-page **static** marketing website for **Kalavia Creatives** — a
creative content & **website design** studio for ambitious local businesses:
**cafés, restaurants, salons & beauty, jewellery, boutiques, gyms** and similar
(social posters, reels, festival campaigns, menu cards, profile setup, logo
design, and static websites). Visitors come from Instagram/WhatsApp and should
convert into **WhatsApp enquiries**.

## Tech stack (do not change without asking)
- **Next.js 14.2.35**, App Router, **JavaScript** (no TypeScript).
- **Static export**: `next.config.mjs` has `output: "export"` + `images.unoptimized: true`.
- **Plain CSS**, all in `app/globals.css` (CSS variables; no Tailwind / no CSS-in-JS).
- **GSAP + ScrollTrigger** for all scroll-driven / cinematic motion (intro
  curtain, hero parallax, the pinned Poster-Transformation story, marquee,
  portfolio collage, closing wordmark).
- **Lenis** smooth scroll — desktop pointers only (`min-width:1024px` + `pointer:fine`);
  native scroll on touch. Wired to ScrollTrigger in `components/SmoothScroll.js`.
- **Motion for React** (`motion/react`) still used for UI micro-interactions only
  (header drawer, FAQ accordion, portfolio lightbox, the `Reveal` fade-up helper).
  Rule: never animate the same element with both GSAP and Motion.
- **lucide-react** for icons (note: lucide has **no** `Instagram` icon — a custom
  SVG is used instead, see `components/icons.js`).
- Font: **Poppins** via `next/font/google`.

## Hard rules / conventions
- **ALL editable content lives in `data/site.js`** (text, prices, FAQ, contacts,
  nav, seasonal banner, SEO). Never hardcode copy inside components.
- Copy is **Hinglish** (Hindi in English letters), simple words, aimed at local
  business owners. **Never mention any city or country.**
- No backend, no database, no real forms. Every action is a WhatsApp / Instagram /
  `mailto` link. Use the `waLink(message, number?)` helper from `data/site.js`.
- **ONE WhatsApp number only: 919131267176** (the secondary number was removed).
- **No fake testimonials, clients, reviews, stats or guarantees.** Portfolio items
  are demonstration concepts (not client work).
- Pricing format: **no struck-out prices.** Show highlighted **launch price** +
  a small "**1 Jan 2027 se ₹Y**" line (`plans.standardFromLabel` /
  `singleServices.standardFromLabel` + each item's `standard`). Do NOT invent
  revision counts (only Starter = 2 revisions is confirmed). Website packages
  (₹3,999 / ₹6,999 / ₹9,999) are **proposed scopes** — domain, hosting, store,
  payments, booking and maintenance are explicitly NOT included unless quoted.
- Mobile-first; must look perfect at **360px**. Respect `prefers-reduced-motion`
  (the cinematic showcase drops its scroll-pin and shows a static stack).
  Accessible: keyboard nav, focus states, aria on drawer/accordion/lightbox.
- Layout is **fluid** (`clamp()`, `auto-fit minmax(min(100%,…))` grids,
  container-query units `cqi` on poster/reel/browser text). Fix responsive issues
  at the root, not with override piles at the bottom of `globals.css`.

## File structure
```
app/        layout.js (SEO/OG/canonical), page.js (section order), globals.css,
            robots.js, sitemap.js
components/  IntroCurtain, SmoothScroll, Header, Hero, TransformationStory,
             Marquee, Portfolio, ReelsShowcase, Services, WebsiteDesign,
             PricingPlans, SingleServices, WhyKalavia, WorkProcess, OwnWork, FAQ,
             FinalCTA, Contact, Closing, Footer, FloatingWhatsApp, Reveal,
             ScrollProgress, PosterMockup, ReelPlayer, SectionHead, BrandK,
             LogoFull, icons.js
             (legacy & unused — not imported: HowItWorks, MonthlyPlans, SampleWork,
              CampaignShowcase — the last replaced by TransformationStory)
data/site.js   ← single source of truth for ALL content
public/      logo.png (gradient "K" mark), logo-full.png (full lockup),
             og.jpg (1200x630 share image), samples/,
             reels/ (restaurant/salon/jewellery .mp4 + README.txt with licence)
```
Page section order (in `app/page.js`): IntroCurtain + SmoothScroll (global) →
Hero → **TransformationStory (#story)** → Marquee → Portfolio (#work) →
ReelsShowcase (#reels) → Services → WebsiteDesign (#websites) → PricingPlans →
SingleServices → WhyKalavia → WorkProcess → OwnWork → FAQ → FinalCTA → Contact →
**Closing** → Footer. ScrollProgress bar + floating WhatsApp are global.
Nav anchors (in `data/site.js`): Work, Reels, Services, Websites, Pricing, Contact.

## Current state (already done — working)
- Full premium build complete; `npm run build` succeeds and produces `/out`.
- **Redesign ("midnight editorial studio")** done: fluid editorial type, gradient
  used sparingly, one premium **light section** (`.section-light` on #websites),
  and a reworked, mobile-first `globals.css` (design-system tokens → components →
  responsive; no override pile).
- **Positioning broadened** beyond cafés to salons, jewellery, boutiques, gyms, etc.
- Real brand **logo installed**: `public/logo.png` is the cropped gradient "K"
  (header badge + favicon); `public/logo-full.png` is the full lockup (footer via
  `LogoFull.js`); `og.jpg` is a navy 1200x630 share image.
- **Art-directed `PosterMockup.js`**: CSS posters colour-graded & composed per
  `kind` (restaurant/cafe/salon/jewellery/clothing/gym) and `layout`
  (editorial/product/luxury/fashion/bold). Set an item's `image` to show a real
  photo instead. Portfolio = 6 industry concept campaigns.
- **ReelsShowcase (#reels)**: plays **real 9:16 videos + poster thumbnails** from
  `public/reels/` — restaurant (1.1MB mp4 / 68KB jpg), salon (4.6MB / 73KB),
  jewellery (2.6MB / 56KB). Source: **Pexels Licence — free commercial use, no
  attribution** (provenance + swap/compress commands in `public/reels/README.txt`).
  - Rendered by `ReelPlayer.js`: poster shown first, **no autoplay**, sound only
    on user gesture, loop, native controls appear after play.
  - Per item in `data/site.js → reels.items[]`: `format` (badge key), `video`,
    `poster`, plus kind/category/title/caption. **Leave `video` empty → the old
    animated CSS concept frame shows instead** (fallback still in `ReelsShowcase.js`).
  - `reels.badges` maps `format` → label (e.g. `{ reel: "REEL" }`); add an
    `aiVideo` key + items with that format if AI-video samples are ever added.
    `ctaAltLabel`/`ctaAltMsg` already offer AI video over WhatsApp.
  - **salon.mp4 is 4.6MB** — the heaviest asset on the site. Worth compressing
    (ffmpeg command is in `public/reels/README.txt`).
- **WebsiteDesign (#websites)**: new service — browser-style demo mockups +
  three editable packages (₹3,999 / ₹6,999 / ₹9,999) with correct WhatsApp CTAs
  and an honest scope note.
- **Cinematic GSAP layer added** (brief: "editorial scroll upgrade"):
  - **IntroCurtain** — first-visit-per-session (sessionStorage), gradient "K" +
    progress line, slides up (~1.2s). Client-only so no-JS never covered. Skipped
    under reduced motion.
  - **Hero** — GSAP masked line reveal on load + scroll parallax (heading lags,
    artwork scales 1→1.08). Static under reduced motion (`gsap.matchMedia`).
  - **TransformationStory (#story)** — the headline effect; replaces the old
    CampaignShowcase. Pinned + scrubbed (ScrollTrigger `pin`+`scrub`): a poster is
    built step-by-step inside a phone (plain → colour → headline → brand/offer →
    Instagram-grid zoom-out). Desktop ~2600px scroll, mobile shorter + crossfade,
    reduced-motion = plain vertical `.story-list`. All copy in
    `transformationStory` in `data/site.js`.
    - The poster has a **pure-CSS iced-coffee visual** (`.cup-wrap/.cup/.straw`,
      no image file) that pops in at step 02; sized in `cqi` so it scales in both
      the phone and the tiny grid tile.
    - The final Instagram grid is **fully populated**: 8 cafe posts from
      `transformationStory.feedTiles` (glyph + label, warm tones) around the
      finished post, which is ringed in pink (`.ig-cell-main`). Header uses
      `transformationStory.handle` + `.bio`.
    - `.ig-cell` sets `container-type: inline-size` — required, or the `cqi`
      glyph sizing falls back to the viewport and the emoji become huge.
  - **Marquee** — two opposite outlined-text strips; speed nudges with scroll
    velocity. **Portfolio** — clip-path wipe reveal + desktop parallax collage
    (speeds in `Portfolio.js SPEEDS`), mobile scroll-snap swipe row.
  - **Closing** — wavy-top panel + huge `KALAVIA` wordmark that fills with the
    brand gradient on scroll (`backgroundSize` scrub). WhatsApp CTA.
  - Every GSAP effect uses `gsap.context` + `matchMedia` and reverts on unmount;
    reduced-motion branches never run, so CSS defaults show the static result.
- A dedicated **Contact section** (`#contact`): WhatsApp, Instagram, email cards.

## Business facts (source of truth)
- WhatsApp **919131267176** — this is the ONLY number now. (The old secondary
  917470362545 was removed everywhere on request; do not re-add it.)
- Instagram **@kalavia_creatives_ad** (https://instagram.com/kalavia_creatives_ad).
- Email **kalaviacreatives@gmail.com**. Own page **@indiabriefed.in**.
- Brand colours: navy #0B1026 / #080B18; gradient purple #7B2FF7, pink #F72585,
  orange #FF7A00, yellow #FFD60A, blue #3A86FF; text #F8F8FC / muted #A6A9BC.

## How to run locally (Windows)
```bash
npm install        # once
npm run dev        # http://localhost:3000
npm run build      # static export to /out
```
- The project is a git repo.
- **PowerShell may block npm** with "running scripts is disabled". Fix once:
  `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (answer Y), OR use
  Command Prompt (cmd), OR run `npm.cmd run dev`.
- **Never run `npm run build` while `npm run dev` is running** (both use `.next`,
  it corrupts → "Cannot find module './xxx.js'"). Fix: stop dev, delete `.next`,
  run `npm run dev` again.

## Still pending / optional
- **Visual QA not done in-session** (no browser/screenshot tool was available).
  Build + static export + dev-serve all pass, but nobody eyeballed the rendered
  layout. Check across 320/360/390/430/768/1024/1440/1920, landscape and short
  heights — especially the hero canvas ~400–560px and the desktop scroll-pin
  (scene crossfade timing; header not clashing with scene text). Tune pin length
  via `.cwrap { height: 300vh }` in `globals.css` if it feels long/short.
- Add real portfolio images → `portfolio.items[].image`. The transformation-story
  poster is pure HTML/CSS (sharp text); optional photos can go in `public/story/`
  and be layered into `.sp-bg`.
- **Reels are done** — real videos + poster JPGs are in place and serving.
  Remaining nit: `ReelPlayer.js` still uses `preload="metadata"`, which fetches
  video metadata for all 3 clips on every page load. Now that posters exist this
  can safely become `preload="none"` (poster still shows, zero video bytes until
  tap) — a free win for cheap phones.
- **ffmpeg is NOT installed on this machine.** Needed to compress clips / regenerate
  posters; commands are in `public/reels/README.txt`.
- **Nobody has watched the 3 clips end-to-end** — check they suit the brand;
  swapping one is a 2-minute job (drop a new file in `public/reels/`, same name).
- **Page JS is ~203 kB first-load** because GSAP + Lenis + Motion all ship.
  To slim it for cheap phones later: port the `Reveal` helper + drawer/FAQ/lightbox
  off Motion (to CSS/IntersectionObserver or GSAP) and drop `motion` entirely.
- Before deploying: set `seo.siteUrl` in `data/site.js` to the real URL (used for
  OG image, canonical, sitemap). Deploy target is Vercel (free, auto-detects Next).
- Lighthouse was **not** measured in-session — don't claim a score; test after deploy.
- Optional: a WhatsApp-prefill "form" (type name/business/message → opens WhatsApp)
  if I ask for it — still no backend.

## My next request
<describe the change you want here>
