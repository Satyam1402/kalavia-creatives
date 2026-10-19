# Kalavia Creatives — Website

A premium, fast, one-page website for **Kalavia Creatives** — a creative content
studio for cafés and restaurants (posters, reels, menu cards, festival campaigns,
profile setup and logo design).

Built with **Next.js (App Router, JavaScript)**, plain CSS, **Motion for React**
(animations) and **lucide-react** (icons). It exports as a fully static site — no
backend, no database, no forms. Every action opens WhatsApp, Instagram or email.

---

## 1. Run it on your computer

Install [Node.js](https://nodejs.org) (version 18 or newer). Then, in a terminal
inside this folder:

```bash
npm install     # install dependencies (one time)
npm run dev     # start local preview -> http://localhost:3000
```

The page reloads automatically when you save a file.

> **Important:** do **not** run `npm run build` while `npm run dev` is running —
> both use the same `.next` folder and it can corrupt. Stop dev first.
> If you ever see `Error: Cannot find module './xyz.js'`: stop the server, delete
> the `.next` folder, then run `npm run dev` again.

---

## 2. Build the final static website

```bash
npm run build
```

This creates an **`out/`** folder = the complete static website (HTML/CSS/JS).
Upload that folder to any static host.

---

## 3. Edit content — everything is in ONE file

**All editable content lives in [`data/site.js`](data/site.js).** You never need
to touch a component. Open it in any text editor and change the text inside the
quotes. Keep the quotes and commas as they are.

| What to change | Field in `data/site.js` |
| --- | --- |
| WhatsApp numbers | `PRIMARY_WA` / `SECONDARY_WA` (top of file) |
| Hero heading / sub-line / badge | `hero` |
| Service cards | `services.items` |
| Portfolio concepts | `portfolio.items` |
| **Monthly plan prices** | `plans.items[].standard` and `.launch` |
| **Single-service prices** | `singleServices.items[].standard` and `.launch` |
| FAQ questions / answers | `faq.items` |
| Seasonal banner (e.g. Diwali → New Year) | `finalCta` |
| Instagram / email / footer | `footer` |
| Live site URL (for sharing image + sitemap) | `seo.siteUrl` |
| SEO title / description | `seo` |

### Change a price
Monthly: edit `standard` (crossed-out) and `launch` (highlighted) for each plan
in `plans.items`. Single services: same in `singleServices.items`.

### Change the WhatsApp number
Edit `PRIMARY_WA` at the very top of `data/site.js` (international format, no `+`,
no spaces — e.g. `919131267176`). `SECONDARY_WA` is the extra number shown in the
footer.

### Change the seasonal banner
Edit the `finalCta` object (`label`, `heading`, `text`, `buttonLabel`, `message`).
After Diwali, just replace the words with your next campaign.

---

## 4. Add your images (optional — site looks complete without them)

Put files in the **`public/`** folder:

| File | Where it appears | Size |
| --- | --- | --- |
| `public/logo.png` | Header logo + favicon/icons | square, e.g. 512×512 |
| `public/og.jpg` | **Link-share preview** (WhatsApp/Instagram) | **1200×630** |
| `public/samples/*.jpg` | Replaces a portfolio mockup (see below) | square/portrait |

**Until you add them:**
- Logo → a gradient **"K"** shows automatically.
- Portfolio → polished **CSS mockup posters** show (not empty boxes).
- `og.jpg` → **you must supply this** for the share preview to appear.

### Use a real image in the portfolio
In `portfolio.items`, set the `image` field of any item to an image path, e.g.
`image: "/samples/1.jpg"`. If the image loads, it replaces that item's mockup.

---

## 5. Deploy on Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in (free), **Add New → Project**.
3. Import the repo. Vercel auto-detects Next.js — click **Deploy**.
4. You get a live URL like `https://kalavia-creatives.vercel.app`.
5. **After deploying:** set `seo.siteUrl` in `data/site.js` to your real URL and
   redeploy, so the share image, canonical URL and sitemap are correct.

> The site is static (`output: "export"`), so you can also host the `out/` folder
> on Netlify, Cloudflare Pages or GitHub Pages.

---

## 6. Project structure

```
kalavia-website/
├─ app/
│  ├─ layout.js        # SEO, Open Graph, canonical, Poppins font
│  ├─ page.js          # the one page (all sections, in order)
│  ├─ robots.js        # generates robots.txt
│  ├─ sitemap.js       # generates sitemap.xml
│  └─ globals.css      # ALL styles
├─ components/         # one small file per section + helpers
│  ├─ Header.js  Hero.js  Services.js  Portfolio.js  WhyKalavia.js
│  ├─ PricingPlans.js  SingleServices.js  WorkProcess.js  OwnWork.js
│  ├─ FAQ.js  FinalCTA.js  Footer.js  FloatingWhatsApp.js
│  ├─ Reveal.js  ScrollProgress.js  PosterMockup.js
│  ├─ SectionHead.js  BrandK.js  icons.js
├─ data/
│  └─ site.js          # ALL text, prices, FAQ, contacts  ← edit here
├─ public/             # logo.png, og.jpg, samples/
├─ next.config.mjs     # static export config
└─ package.json
```

---

## 7. Assets — status

- [x] `public/logo.png` — the gradient **"K" mark** (cropped from your brand logo),
      used in the header + favicon.
- [x] `public/logo-full.png` — your full "KALAVIA CREATIVES" lockup (kept for reuse).
- [x] `public/og.jpg` — **1200×630** share image (auto-made from your logo; replace
      anytime with a custom design).
- [ ] Real portfolio images (optional; set paths in `portfolio.items[].image`).
- [ ] Set `seo.siteUrl` to your real deployed URL after deploying.

---

## Contact details on the site

- Primary WhatsApp: **+91 91312 67176**
- Secondary WhatsApp: **+91 74703 62545**
- Instagram: **@kalavia_creatives_ad**
- Email: **kalaviacreatives@gmail.com**

Change any of these in [`data/site.js`](data/site.js).
