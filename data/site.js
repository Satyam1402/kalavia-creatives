// =============================================================
//  Kalavia Creatives — ALL editable content lives in this file.
//  Edit text, prices, FAQ, contact details, packages and the
//  seasonal banner here. You do NOT need to touch any component.
//  Copy language: plain English everywhere.
// =============================================================

// WhatsApp number (international format: no +, no spaces). One number only.
const PRIMARY_WA = "919131267176";

// Helper: builds a wa.me link with a pre-filled, URL-encoded message.
export function waLink(message, number = PRIMARY_WA) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Launch offer terms — stated in full only in the pricing section; the
// one-time services section just refers back to it (no duplicated text).
const LAUNCH_OFFER =
  "Launch pricing — for the first 10 clients or until 31 December 2026, whichever comes first. The struck-through price is the standard rate, which applies from 1 January 2027.";

const site = {
  // ---------- Brand ----------
  brand: {
    name: "Kalavia Creatives",
    logo: "/logo.png", // compact gradient "K" mark (header + favicon)
    logoFull: "/logo-full.png", // full lockup (used in footer)
    tagline: "Creative studio",
  },

  // ---------- WhatsApp ----------
  whatsapp: {
    primary: PRIMARY_WA,
    buttonLabel: "Message on WhatsApp",
    defaultMessage:
      "Hi Kalavia Creatives, I would like to know more about posters, reels and websites for my business.",
  },

  // ---------- Navigation (in-page anchors) ----------
  nav: [
    { label: "Work", href: "#work" },
    { label: "Reels", href: "#reels" },
    { label: "Services", href: "#services" },
    { label: "Websites", href: "#websites" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  // ---------- Hero ----------
  hero: {
    eyebrow: "CREATIVE STUDIO FOR AMBITIOUS BUSINESSES",
    // Headline is rendered in two parts; the accent gets a gradient treatment.
    headingPre: "Your business deserves to",
    headingAccent: "look unforgettable.",
    subline:
      "Posters that grab attention, reels that tell your story, and websites that give your brand a premium look.",
    primaryBtn: "Let's create something",
    primaryMsg:
      "Hi Kalavia Creatives, I would like to talk about creative designs and a website for my business.",
    secondaryBtn: "Explore our work",
    badge: "Your first poster is FREE",
    badgeNote: "Start with one sample design.",
    // Small trust row under the composition (kept minimal & honest).
    trust: ["Posters & carousels", "Reel editing", "Websites", "Logo & branding"],
  },

  // ---------- Poster transformation scroll story ----------
  // Pinned + scrubbed on desktop, crossfade on mobile, plain list on reduced motion.
  // Sample/concept demonstration — not a real client result.
  transformationStory: {
    eyebrow: "POSTER TRANSFORMATION",
    heading: "From a plain poster to a scroll-stopping post.",
    note: "This is a sample transformation — a concept demonstration, not a real client result.",
    ctaLabel: "Get a poster like this",
    ctaMsg:
      "Hi Kalavia Creatives, I would like a professional poster like this for my business.",
    // Poster copy used across the steps (edit freely).
    poster: {
      brand: "THE COFFEE CO.",
      plain: "Coffee Available",
      headline: "Cold Coffee",
      price: "only ₹99",
      detail: "Thick · Creamy · Chilled",
      offer: "Today's Offer",
      cta: "Visit us today",
    },
    // Final step: the rest of the Instagram feed around the finished post.
    handle: "@thecoffeeco",
    bio: "Cafe · Coffee · Desserts",
    feedTiles: [
      { glyph: "☕", label: "Hot brew" },
      { glyph: "🥐", label: "Fresh bake" },
      { glyph: "🍰", label: "Desserts" },
      { glyph: "🧋", label: "Cold brew" },
      { glyph: "🍪", label: "Cookies" },
      { glyph: "🪴", label: "Ambience" },
      { glyph: "🥤", label: "Shakes" },
      { glyph: "📍", label: "Visit us" },
    ],
    steps: [
      { n: "01", caption: "Is this what your poster looks like?" },
      { n: "02", caption: "The right colour and photo" },
      { n: "03", caption: "A headline that stops the scroll" },
      { n: "04", caption: "The offer and your branding" },
      { n: "05", caption: "Now this is how your Instagram looks" },
    ],
  },

  // ---------- Marquee strips ----------
  marquee: {
    items: ["POSTERS", "REELS", "MENU CARD", "FESTIVAL", "LOGO", "WEBSITE"],
    sep: "✦",
  },

  // ---------- Closing finale ----------
  closing: {
    kicker: "Let's get started",
    heading: "Your brand's next look starts right here.",
    text: "Your first poster is free. Send one message on WhatsApp and we will make a sample for you.",
    buttonLabel: "Message on WhatsApp",
    message:
      "Hi Kalavia Creatives, I need designs for my business. Please make the first sample.",
    wordmark: "KALAVIA",
  },

  // ---------- Portfolio (demonstration concepts, NOT client work) ----------
  portfolio: {
    eyebrow: "SELECTED CREATIVE WORK",
    heading: "Concepts that make any business look premium.",
    note: "These are demonstration concepts, made to show our creative range. They are not actual client projects.",
    ctaLabel: "Get a concept like this for your business",
    ctaMsg:
      "Hi Kalavia Creatives, I would like creative posters like these for my business.",
    // Each item renders as an art-directed CSS "poster" mockup. Set `image`
    // (e.g. "/samples/restaurant.jpg") to show a real photo instead.
    items: [
      {
        kind: "restaurant",
        layout: "editorial",
        tag: "Concept design",
        category: "Restaurant",
        title: "Weekend Grill Feast",
        offer: "Combo ₹499",
        line: "Flame-grilled signature platter",
        glyph: "🔥",
        image: "",
      },
      {
        kind: "cafe",
        layout: "product",
        tag: "Sample creative",
        category: "Café",
        title: "Single-Origin Launch",
        offer: "New",
        line: "Slow-roasted. Rich. Aromatic.",
        glyph: "☕",
        image: "",
      },
      {
        kind: "salon",
        layout: "editorial",
        tag: "Concept design",
        category: "Salon & Beauty",
        title: "The Glow Edit",
        offer: "Festive",
        line: "Premium grooming & styling",
        glyph: "✦",
        image: "",
      },
      {
        kind: "jewellery",
        layout: "luxury",
        tag: "Concept design",
        category: "Jewellery",
        title: "Bridal Heritage",
        offer: "Collection",
        line: "Handcrafted festive sets",
        glyph: "◈",
        image: "",
      },
      {
        kind: "clothing",
        layout: "fashion",
        tag: "Demo campaign",
        category: "Boutique",
        title: "New Season Drop",
        offer: "Lookbook",
        line: "Editorial fashion campaign",
        glyph: "✶",
        image: "",
      },
      {
        kind: "gym",
        layout: "bold",
        tag: "Demo campaign",
        category: "Fitness",
        title: "Transform Challenge",
        offer: "Join now",
        line: "60-day membership programme",
        glyph: "⚡",
        image: "",
      },
    ],
  },

  // ---------- Reels ----------
  // Each card's `video` = /reels/<file>.mp4 and `poster` = first frame
  // (thumbnail). If both are empty, the animated concept frame is shown.
  reels: {
    eyebrow: "REELS IN MOTION",
    heading: "Beyond static — reels that stop the scroll.",
    note: "Every reel is shot and edited for your business — a dish, a transformation or a new collection, all in one short video. These are sample concepts; your reel will be built around your brand.",
    badges: { reel: "REEL" },
    ctaLabel: "Get a reel for your business",
    ctaMsg: "Hi Kalavia Creatives, I would like an edited reel for my business.",
    ctaAltLabel: "Ask about AI video",
    ctaAltMsg:
      "Hi Kalavia Creatives, I would like to know about AI animated video (festival / logo reveal / website promo) for my business.",
    items: [
      {
        format: "reel",
        kind: "restaurant",
        category: "Restaurant",
        title: "Thali & signature dish",
        caption:
          "From the sizzle to the serve — food that looks irresistible on screen.",
        glyph: "🍛",
        video: "/reels/restaurant.mp4",
        poster: "/reels/restaurant.jpg",
      },
      {
        format: "reel",
        kind: "salon",
        category: "Salon",
        title: "Bridal makeover reel",
        caption: "Before to after — the final bridal look in one smooth reveal.",
        glyph: "💄",
        video: "/reels/salon.mp4",
        poster: "/reels/salon.jpg",
      },
      {
        format: "reel",
        kind: "jewellery",
        category: "Jewellery",
        title: "Gold collection close-up",
        caption: "Macro shots, warm light and shine — every design stands out.",
        glyph: "💍",
        video: "/reels/jewellery.mp4",
        poster: "/reels/jewellery.jpg",
      },
    ],
  },

  // ---------- Services ----------
  services: {
    eyebrow: "WHAT WE CREATE",
    heading: "One studio for everything your brand needs.",
    subline:
      "Cafés, restaurants, salons, jewellery shops, boutiques, gyms and other local businesses — every design should have a clear purpose.",
    ctaLabel: "Discuss your business with us",
    ctaMsg:
      "Hi Kalavia Creatives, I would like to talk about design services for my business.",
    items: [
      {
        icon: "posters",
        title: "Social media posters",
        text: "Turn offers, launches and daily specials into scroll-stopping designs.",
      },
      {
        icon: "reels",
        title: "Reel editing",
        text: "You shoot the video, we edit it into an engaging, on-brand reel.",
      },
      {
        icon: "web",
        title: "Website design",
        text: "Premium one-page and multi-page static websites — fast and mobile-ready.",
      },
      {
        icon: "festival",
        title: "Festival campaigns",
        text: "Coordinated creative designs for festivals and special occasions.",
      },
      {
        icon: "menu",
        title: "Menu & carousels",
        text: "Menu cards and carousels — clean, attractive, easy-to-read layouts.",
      },
      {
        icon: "logo",
        title: "Logo & branding",
        text: "A distinctive visual identity and profile setup for your business.",
      },
    ],
  },

  // ---------- Website design ----------
  websites: {
    eyebrow: "WEBSITE DESIGN",
    heading: "Websites that make your business look premium.",
    subline:
      "Not just social media — make your online identity look professional too. Starting at ₹3,999.",
    buttonLabel: "Ask about this package",
    // Honest scope note shown under the packages.
    note: "These are proposed package scopes. Domain registration, paid hosting, paid integrations, advanced functionality and ongoing maintenance are charged separately unless clearly included in the quotation. An online store, payment gateway or booking system is not included in these prices.",
    // Browser-style demo previews (concepts, not client sites).
    demosLabel: "Demo website concepts",
    demos: [
      {
        kind: "restaurant",
        name: "Spice & Ember",
        category: "Restaurant",
        url: "spice-ember.example",
        style: "Warm hospitality",
      },
      {
        kind: "salon",
        name: "Maison Luxe",
        category: "Salon & beauty",
        url: "maisonluxe.example",
        style: "Refined editorial",
      },
      {
        kind: "jewellery",
        name: "Aurelia",
        category: "Jewellery",
        url: "aurelia.example",
        style: "Luxury minimal",
      },
    ],
    packages: [
      {
        name: "Launch website",
        price: "₹3,999",
        popular: false,
        summary: "One-page static business website.",
        features: [
          "One-page static website",
          "Up to 5 content sections",
          "Fully responsive design",
          "Contact & WhatsApp buttons",
          "Social media links",
          "Basic page metadata",
        ],
        msg: "Hi Kalavia Creatives, I would like to know about the ₹3,999 website package.",
      },
      {
        name: "Business website",
        price: "₹6,999",
        popular: true,
        popularLabel: "MOST POPULAR",
        summary: "Up to three pages with custom layouts.",
        features: [
          "Up to 3 static pages",
          "Custom section layouts",
          "Services or product showcase",
          "Contact & WhatsApp enquiry links",
          "Fully responsive design",
          "Basic on-page SEO metadata",
        ],
        msg: "Hi Kalavia Creatives, I would like to know about the ₹6,999 website package.",
      },
      {
        name: "Premium website",
        price: "₹9,999",
        popular: false,
        summary: "Up to five pages, more custom design.",
        features: [
          "Up to 5 static pages",
          "More customised visual design",
          "Portfolio or product gallery",
          "Tasteful animations",
          "Responsive layouts",
          "Basic SEO + social-sharing setup",
        ],
        msg: "Hi Kalavia Creatives, I would like to know about the ₹9,999 website package.",
      },
    ],
  },

  // ---------- Why Kalavia ----------
  why: {
    eyebrow: "WHY WORK WITH US",
    heading: "Great design, and easy to work with.",
    points: [
      {
        icon: "palette",
        title: "Designed around your brand",
        text: "Every design is made specifically for your brand and your offer.",
      },
      {
        icon: "badge",
        title: "Clear packages, transparent pricing",
        text: "No hidden charges. The price you see is the price you pay.",
      },
      {
        icon: "zap",
        title: "Simple approvals & revisions",
        text: "A straightforward process — approve, share feedback, get the final files.",
      },
      {
        icon: "shield",
        title: "Original work, direct contact",
        text: "100% original creative work and direct communication with you.",
      },
    ],
  },

  // ---------- Monthly pricing ----------
  plans: {
    eyebrow: "MONTHLY PLANS",
    heading: "Choose the right plan for your business.",
    offerLine: LAUNCH_OFFER,
    buttonLabel: "I want this plan",
    items: [
      {
        name: "Starter",
        standard: "₹2,999",
        launch: "₹1,499",
        period: "/month",
        popular: false,
        features: ["8 posters", "Captions included", "2 revisions"],
        msg: "Hi Kalavia Creatives, I would like to know about the Starter plan.",
      },
      {
        name: "Growth",
        standard: "₹6,999",
        launch: "₹3,499",
        period: "/month",
        popular: true,
        popularLabel: "MOST POPULAR",
        features: [
          "12 posters",
          "4 edited reels",
          "Captions and hashtags",
          "Content plan",
        ],
        msg: "Hi Kalavia Creatives, I would like to know about the Growth plan.",
      },
      {
        name: "Pro",
        standard: "₹11,999",
        launch: "₹5,999",
        period: "/month",
        popular: false,
        features: [
          "15 posters",
          "8 edited reels",
          "Content plan",
          "Profile setup",
          "Monthly report",
          "Posting schedule assistance",
        ],
        msg: "Hi Kalavia Creatives, I would like to know about the Pro plan.",
      },
    ],
  },

  // ---------- Single (one-time) services ----------
  singleServices: {
    eyebrow: "ONE-TIME SERVICES",
    heading: "Need just one design? That works too.",
    offerNote: "The same launch pricing applies to one-time services.",
    // WhatsApp message template; [service] is replaced by the service name.
    ctaMsgTemplate:
      "Hi Kalavia Creatives, I would like a [service]. Please share the details.",
    items: [
      { name: "Single poster", standard: "₹499", launch: "₹249" },
      { name: "Festival pack — 5 posters", standard: "₹1,999", launch: "₹999" },
      { name: "Carousel design", standard: "₹999", launch: "₹499" },
      { name: "Reel editing — up to 30 sec", standard: "₹999", launch: "₹499" },
      { name: "Menu card", standard: "₹1,499", launch: "₹749" },
      { name: "Instagram profile setup", standard: "₹999", launch: "₹499" },
      { name: "Logo design", standard: "₹2,499", launch: "₹1,249" },
    ],
  },

  // ---------- How we work ----------
  process: {
    eyebrow: "OUR PROCESS",
    heading: "Simple process. Clear expectations.",
    steps: [
      {
        title: "Talk to us on WhatsApp",
        text: "We understand your business, your offer and your design requirements.",
      },
      {
        title: "First poster free",
        text: "We design and send you one sample — completely free.",
      },
      {
        title: "Approve and confirm",
        text: "If you like it, confirm the scope and pay a 50% advance.",
      },
      {
        title: "Final delivery",
        text: "You get the final files after the remaining payment, exactly as agreed.",
      },
    ],
  },

  // ---------- Our own creative work ----------
  ownWork: {
    eyebrow: "OUR OWN PRACTICE",
    heading: "We create our own content too.",
    text: "We also run our own Instagram page — @indiabriefed.in. We design its posters, edit its reels and write its captions ourselves. It is an example of our creative practice and content workflow.",
    buttonLabel: "View our Instagram",
    handle: "@indiabriefed.in",
    link: "https://instagram.com/indiabriefed.in",
  },

  // ---------- FAQ ----------
  faq: {
    eyebrow: "FAQ",
    heading: "Your questions, answered directly.",
    items: [
      {
        q: "What kinds of businesses do you work with?",
        a: "Cafés, restaurants, salons, jewellery shops, boutiques, gyms and other local businesses. The designs shown on this website are demonstration concepts, not actual client projects.",
      },
      {
        q: "Who shoots the video?",
        a: "You shoot the video — a phone camera works fine. We handle the editing.",
      },
      {
        q: "What is included in a website package?",
        a: "Static websites — Launch (₹3,999), Business (₹6,999) and Premium (₹9,999). Domain, paid hosting, an online store, a payment gateway and a booking system are not included in these prices unless clearly stated in the quotation.",
      },
      {
        q: "Who posts on Instagram?",
        a: "We create the posters and captions; you publish them. The Pro plan includes help with scheduling posts. Daily DM replies and comment management are not included at the moment.",
      },
      {
        q: "How long does a design take?",
        a: "The target delivery time for a single poster is 24–48 hours. For monthly plans and websites, the timeline is confirmed when the project is finalised.",
      },
      {
        q: "How many revisions do I get?",
        a: "The Starter plan includes 2 revisions. The revision scope for other packages and one-time projects is agreed when the project is confirmed.",
      },
      {
        q: "How does payment work?",
        a: "50% in advance and 50% after final delivery. UPI payment is available.",
      },
      {
        q: "Is there a long-term contract?",
        a: "No, monthly plans run month to month. Continuing the next month is entirely your decision.",
      },
    ],
  },

  // ---------- Contact ----------
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Want to talk? Just send a message.",
    subline:
      "WhatsApp gets the fastest reply. You can also reach us on Instagram or by email.",
    responseNote: "We usually reply within a few hours.",
  },

  // ---------- Seasonal CTA (change per campaign) ----------
  finalCta: {
    label: "FESTIVAL OFFER",
    heading: "Give your business a festive, premium look.",
    text: "The festival pack includes 5 creative posters — launch offer ₹999. Plan your campaign in advance.",
    buttonLabel: "Book the festival pack",
    message:
      "Hi Kalavia Creatives, I would like the ₹999 festival pack. Please share the details.",
  },

  // ---------- Footer ----------
  footer: {
    tagline: "Creative content & website studio for ambitious local businesses.",
    instagram: {
      handle: "@kalavia_creatives_ad",
      link: "https://instagram.com/kalavia_creatives_ad",
    },
    email: "kalaviacreatives@gmail.com",
    primaryWaDisplay: "+91 91312 67176",
    copyright: "© 2026 Kalavia Creatives",
  },

  // ---------- SEO ----------
  seo: {
    // Set this to your live URL after deploying (used for OG image + sitemap).
    siteUrl: "https://kalavia-creatives.vercel.app",
    title:
      "Kalavia Creatives — Posters, reels and premium websites for your business",
    description:
      "Creative studio for cafés, restaurants, salons, jewellery shops, boutiques & gyms. Scroll-stopping posters, edited reels and premium websites. Launch offers and your first poster free.",
    ogImage: "/og.jpg",
  },
};

export default site;
