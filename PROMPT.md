# Build Prompt — Kalavia Creatives Website

> Isko kisi bhi AI coding tool (Claude, ChatGPT, Cursor, etc.) mein copy-paste
> karke yeh poori website dobara bana sakte ho. Content/prices change karne ho
> toh neeche ke sections mein seedha edit kar lo, phir paste karo.

---

## PROMPT (copy from here) ⬇️

Build a simple, fast, **premium-looking** one-page static website for my small
business **"Kalavia Creatives"**.

### TECH
- Next.js 14, App Router, **JavaScript** (not TypeScript).
- Static export: `next.config.mjs` must have `output: "export"` and
  `images: { unoptimized: true }`.
- Use **plain CSS** in `app/globals.css` only. No Tailwind, no UI libraries,
  no extra npm packages.
- Font: **Poppins** from Google Fonts (via `next/font/google`).
- Keep ALL text, prices, FAQ and contact details in **ONE file**: `data/site.js`,
  so content can be edited without touching components.
- Split sections into small components in `/components`.
- **Mobile-first.** Most visitors open it on a phone from Instagram or WhatsApp.
  It must look perfect at **360px width**.
- No backend, no forms, no database. Every button opens WhatsApp or Instagram.

### DESIGN QUALITY (make it look top-notch / real-world)
- Dark navy background (#0B1026). Text white/light grey.
- Brand gradient (purple #7B2FF7, pink #F72585, orange #FF7A00, yellow #FFD60A,
  blue #3A86FF) used only for **accents**: buttons, heading accent word, eyebrow
  labels, icon tiles, borders, underlines. Don't overuse it.
- Add tasteful polish, all in plain CSS + a tiny bit of vanilla JS (no libraries):
  - Animated gradient glow "orbs" in the hero background.
  - Scroll-reveal (fade + rise) on sections/cards using IntersectionObserver.
  - Small uppercase **gradient "eyebrow" label** above each section title.
  - Hover lift + soft shadow + top gradient line on cards.
  - Shine sweep on primary buttons on hover.
  - Sticky header that gains a shadow after scrolling.
  - Pulsing dot on the hero badge; pulse ring on the floating WhatsApp button.
  - Respect `prefers-reduced-motion` (disable animations for those users).
- Proper contrast, body text min 16px, smooth scroll for in-page links.
- Lighthouse mobile score above 90. No console errors.
- `npm run build` must succeed and produce the `/out` folder.

### BRAND
- Name: **Kalavia Creatives**
- Logo: a gradient letter "K". Put logo file at `/public/logo.png` and use it in
  the header. Until added, show a CSS gradient "K" placeholder (auto-fallback if
  the image is missing).
- Language: **Hinglish** (Hindi words in English script), simple words.
  Tone example: "Aapke cafe ke liye posters jo customers ko rok dein."
- **Do NOT mention any city or country** anywhere.

### WHO IT IS FOR
- **Cafe and restaurant owners only.** All copy speaks to them (menu, offers,
  festivals, new dishes, weekend specials).

### SECTIONS (in this order)
1. **Header:** logo + name on left, "WhatsApp karein" button on right. Sticky.
2. **Hero:**
   - Heading: "Cafe aur Restaurant ke liye **Posters aur Reels**"
     (last part "Posters aur Reels" styled in gradient).
   - Sub-line: "Instagram aur WhatsApp ke liye design, jo customers ko aapki
     dukaan tak laaye."
   - Badge: "Pehla poster FREE" (with pulsing dot).
   - Two buttons: "WhatsApp par baat karein" (primary) and "Prices dekhein"
     (scrolls to pricing).
   - A small **trust stats strip** below the buttons (4 items):
     `FREE — Pehla poster` · `24–48h — Single poster delivery` ·
     `0 — Lock-in / contract` · `100% — Apna banaya content`.
3. **Kya banate hain (services):** 6 cards with an emoji icon tile each:
   Instagram posters, Reels editing, Festival posters, Menu card,
   Instagram profile setup, Logo design. Each with a one-line Hinglish subtitle.
4. **Sample work:** grid of 6 square images from `/public/samples/1.jpg` to
   `6.jpg`. Until added, show neat placeholder boxes (with shimmer) reading
   "Sample poster aa raha hai". Clicking an image opens it larger in a simple
   **lightbox** (no library, closes on Escape / backdrop click).
5. **Monthly plans:** 3 cards (side by side on desktop, stacked on mobile).
   Highlight "Growth" as "Sabse popular" (slightly larger + glow).
   - Starter: ₹1,499/month — 8 posters, captions, 2 revisions
   - Growth: ₹3,499/month — 12 posters, 4 reels, captions + hashtags, content plan
   - Pro: ₹5,999/month — 15 posters, 8 reels, content plan, profile setup,
     monthly report, posting schedule help
   Under each price show small text: "Launch price — 1 Jan 2027 se ₹X"
   where X = 2,999 / 6,999 / 11,999. **Do NOT show struck-out prices.**
   Each card has a button "Ye plan chahiye" that opens WhatsApp with:
   "Hi Kalavia Creatives, mujhe [plan name] plan ke baare mein jaanna hai."
6. **Single services:** a clean list:
   Poster ₹249 | Festival pack (5 posters) ₹999 | Carousel ₹499 |
   Reel editing (30 sec) ₹499 | Menu card ₹749 | Profile setup ₹499 | Logo ₹1,249
   Small line: "Launch prices 31 Dec 2026 tak."
7. **Hamara apna kaam (our own work):**
   Text: "Hum apna khud ka Instagram page bhi chalate hain — @indiabriefed.in.
   Uske saare posters, reels aur captions hum khud banate hain. Har din, bina
   chhutti ke."
   Button: "Page dekhein" → https://instagram.com/indiabriefed.in
   This is NOT a testimonial. Do not create any testimonials section.
8. **Kaise kaam karte hain:** 4 steps (row on desktop, stacked on mobile):
   1) WhatsApp par message karein  2) Pehla poster free banayenge
   3) Pasand aaye toh 50% advance  4) Final design ke baad baaki 50%
9. **FAQ (accordion, click to open):**
   - "Video kaun shoot karega?" → "Video aap shoot karenge (phone se bhi
     chalega). Editing hum karenge."
   - "Post kaun karega?" → "Posters aur captions hum banate hain, post aap karte
     hain. Pro plan mein hum posting schedule karne mein madad karte hain. Daily
     DM reply aur comment handle karna abhi shamil nahi hai."
   - "Kitne din mein design milega?" → "Single poster 24–48 ghante mein. Monthly
     plan mein pehle se content plan banta hai."
   - "Kitni revisions milengi?" → "Har design par 2 revisions."
   - "Payment kaise hoga?" → "50% advance, 50% final design ke baad. UPI se."
   - "Contract kitne mahine ka hai?" → "Koi lock-in nahi. Month-to-month. Kabhi
     bhi band kar sakte hain."
10. **Final call-to-action band:** "Diwali aa rahi hai — apne cafe ka festival
    pack aaj book karein" + WhatsApp button. Keep this text in `data/site.js`
    so it can be changed per season.
11. **Footer:** Instagram @kalavia_creatives_ad
    (https://instagram.com/kalavia_creatives_ad), email kalaviacreatives@gmail.com,
    WhatsApp +91 91312 67176, "© 2026 Kalavia Creatives".

### WHATSAPP
- Number: **919131267176**
- Use links like `https://wa.me/919131267176?text=<url-encoded message>`.
- Default message: "Hi Kalavia Creatives, mujhe apne cafe/restaurant ke liye
  posters chahiye."
- Add a **floating round WhatsApp button** at bottom-right on every screen size.

### SEO / SHARING
- Title: "Kalavia Creatives — Cafe aur Restaurant ke liye Posters & Reels"
- Meta description in Hinglish, under 155 characters.
- Open Graph + Twitter tags so the link looks good when shared on WhatsApp.
- Use `/public/og.jpg` (1200x630). Set `metadataBase` to the live site URL so the
  OG image resolves to an absolute URL. Note in README if og.jpg is missing.
- Favicon from `/public/logo.png`.

### ALSO CREATE
- `README.md` (simple English): how to run locally, how to edit text in
  `data/site.js`, where to put logo/sample images, and how to deploy on Vercel
  for free.

After building, list every file created and tell me exactly which image files I
need to add.

## ⬆️ (copy till here)

---

## Quick edit cheat-sheet (jo cheezein aksar badalni padti hain)

| Kya badalna hai | Kahan (file) | Field |
|---|---|---|
| Prices (monthly/single) | `data/site.js` | `plans.items[].price`, `singleServices.items[].price` |
| Seasonal final banner | `data/site.js` | `finalCta.text` |
| WhatsApp number | `data/site.js` | top ka `WHATSAPP_NUMBER` |
| FAQ sawaal/jawaab | `data/site.js` | `faq.items` |
| Instagram / email | `data/site.js` | `footer` |
| Live site URL (OG image) | `data/site.js` | `seo.siteUrl` |

## Run / deploy (yaad ke liye)

```bash
npm install     # ek hi baar
npm run dev     # local preview -> http://localhost:3000
npm run build   # final /out folder banata hai
```

> **Zaroori:** dev server (`npm run dev`) chalte waqt `npm run build` mat chalao
> — pehle dev band karo. Agar `Cannot find module './xyz.js'` error aaye:
> server band karo, `.next` folder delete karo, phir `npm run dev` dobara.

## Images jo add karni hain

- `public/logo.png` — square logo (e.g. 512×512). Header + favicon.
- `public/og.jpg` — **1200×630**. WhatsApp/Instagram link preview.
- `public/samples/1.jpg` … `6.jpg` — square sample posters (6 images).
