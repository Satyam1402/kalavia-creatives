// =============================================================
//  Kalavia Creatives — ALL editable content lives in this file.
//  Edit text, prices, FAQ, contact details, packages and the
//  seasonal banner here. You do NOT need to touch any component.
// =============================================================

// WhatsApp number (international format: no +, no spaces). One number only.
const PRIMARY_WA = "919131267176";

// Helper: builds a wa.me link with a pre-filled, URL-encoded message.
export function waLink(message, number = PRIMARY_WA) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Launch offer terms — poori baat sirf pricing section mein, one-time services
// sirf usi ko refer karti hai (same text do jagah repeat nahi hota).
const LAUNCH_OFFER =
  "Launch pricing — pehle 10 clients ke liye ya 31 December 2026 tak, jo pehle aaye. Kaata hua price standard rate hai, jo 1 Jan 2027 se lagu hoga.";

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
    buttonLabel: "WhatsApp karein",
    defaultMessage:
      "Hi Kalavia Creatives, mujhe apne business ke liye posters, reels aur website ke baare mein jaanna hai.",
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
      "Posters jo attention grab karein, reels jo story batayein, aur websites jo aapke brand ko premium look dein.",
    primaryBtn: "Let's create something",
    primaryMsg:
      "Hi Kalavia Creatives, mujhe apne business ke liye creative designs aur website ke baare mein baat karni hai.",
    secondaryBtn: "Explore our work",
    badge: "Your first poster is FREE",
    badgeNote: "Ek sample design se shuruaat karein.",
    // Small trust row under the composition (kept minimal & honest).
    trust: [
      "Posters & carousels",
      "Reel editing",
      "Websites",
      "Logo & branding",
    ],
  },

  // ---------- Poster transformation scroll story (replaces old showcase) ----------
  // Pinned + scrubbed on desktop, crossfade on mobile, plain list on reduced motion.
  // Sample/concept demonstration — not a real client result.
  transformationStory: {
    eyebrow: "POSTER TRANSFORMATION",
    heading: "Ek boring poster se scroll-stopping post tak.",
    note: "Ye ek sample transformation hai — concept demonstration, actual client result nahi.",
    ctaLabel: "Aisa poster banwayein",
    ctaMsg:
      "Hi Kalavia Creatives, mujhe apne business ke liye aisa professional poster chahiye.",
    // Poster copy used across the steps (edit freely).
    poster: {
      brand: "THE COFFEE CO.",
      plain: "Coffee Available",
      headline: "Cold Coffee",
      price: "sirf ₹99",
      detail: "Thick · Creamy · Chilled",
      offer: "Today's Offer",
      cta: "Aaj hi aaiye",
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
      { n: "01", caption: "Aapka poster abhi aisa hai?" },
      { n: "02", caption: "Sahi colour aur photo" },
      { n: "03", caption: "Headline jo rok de" },
      { n: "04", caption: "Offer aur brand" },
      { n: "05", caption: "Ab aapka Instagram aisa dikhega" },
    ],
  },

  // ---------- Marquee strips ----------
  marquee: {
    items: ["POSTERS", "REELS", "MENU CARD", "FESTIVAL", "LOGO", "WEBSITE"],
    sep: "✦",
  },

  // ---------- Closing finale ----------
  closing: {
    kicker: "Chaliye shuru karein",
    heading: "Aapke brand ka agla look, yahin se.",
    text: "Pehla poster free. WhatsApp par ek message bhejein, hum sample bana denge.",
    buttonLabel: "WhatsApp par baat karein",
    message:
      "Hi Kalavia Creatives, mujhe apne business ke liye designs chahiye. Pehla sample bana dijiye.",
    wordmark: "KALAVIA",
  },

  // ---------- Portfolio (demonstration concepts, NOT client work) ----------
  portfolio: {
    eyebrow: "SELECTED CREATIVE WORK",
    heading: "Concepts jo har business ko premium look dete hain.",
    note: "Ye demonstration concepts hain — hamari creative range dikhane ke liye. Ye actual client projects nahi hain.",
    ctaLabel: "Aisa concept apne business ke liye banwayein",
    ctaMsg:
      "Hi Kalavia Creatives, mujhe aise creative posters apne business ke liye chahiye.",
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
  // Har card ka 'video' = /reels/<file>.mp4 aur 'poster' = pehla frame
  // (thumbnail). Dono khaali ho to animated concept frame dikhta hai.
  reels: {
    eyebrow: "REELS IN MOTION",
    heading: "Static se aage — reels jo scroll rok dein.",
    note: "Har reel aapke business ke liye shoot aur edit hoti hai — dish, transformation ya nayi collection, sab ek short video mein. Ye sample concepts hain; aapki reel aapke brand par banegi.",
    badges: { reel: "REEL" },
    ctaLabel: "Apne business ke liye reel banwayein",
    ctaMsg:
      "Hi Kalavia Creatives, mujhe apne business ke liye ek edited reel chahiye.",
    ctaAltLabel: "AI video ke baare mein poochein",
    ctaAltMsg:
      "Hi Kalavia Creatives, mujhe apne business ke liye AI animated video (festival / logo reveal / website promo) ke baare mein jaanna hai.",
    items: [
      {
        format: "reel",
        kind: "restaurant",
        category: "Restaurant",
        title: "Thali & signature dish",
        caption: "Garam tadke se serving tak — khaana screen par hi mooh mein paani laaye.",
        glyph: "🍛",
        video: "/reels/restaurant.mp4",
        poster: "/reels/restaurant.jpg",
      },
      {
        format: "reel",
        kind: "salon",
        category: "Salon",
        title: "Bridal makeover reel",
        caption: "Before se after tak — dulhan ka final look ek smooth reveal mein.",
        glyph: "💄",
        video: "/reels/salon.mp4",
        poster: "/reels/salon.jpg",
      },
      {
        format: "reel",
        kind: "jewellery",
        category: "Jewellery",
        title: "Gold collection close-up",
        caption: "Macro shots, warm light aur shine — har design alag se chamke.",
        glyph: "💍",
        video: "/reels/jewellery.mp4",
        poster: "/reels/jewellery.jpg",
      },
    ],
  },

  // ---------- Services ----------
  services: {
    eyebrow: "WHAT WE CREATE",
    heading: "Ek studio, aapke brand ki poori creative zaroorat ke liye.",
    subline:
      "Cafés, restaurants, salons, jewellery, boutiques, gyms aur baaki local businesses — har design ka ek clear purpose hona chahiye.",
    ctaLabel: "Apne business ke liye discuss karein",
    ctaMsg:
      "Hi Kalavia Creatives, mujhe apne business ke liye design services ke baare mein baat karni hai.",
    items: [
      {
        icon: "posters",
        title: "Social media posters",
        text: "Offers, launches aur daily specials ko scroll-stopping designs mein badlein.",
      },
      {
        icon: "reels",
        title: "Reel editing",
        text: "Aap video shoot karein, hum usse engaging, on-brand reel mein edit karenge.",
      },
      {
        icon: "web",
        title: "Website design",
        text: "Premium one-page aur multi-page static websites — mobile-ready aur fast.",
      },
      {
        icon: "festival",
        title: "Festival campaigns",
        text: "Festivals aur special occasions ke liye coordinated creative designs.",
      },
      {
        icon: "menu",
        title: "Menu & carousels",
        text: "Menu cards aur carousels — clean, attractive aur easy-to-read layouts.",
      },
      {
        icon: "logo",
        title: "Logo & branding",
        text: "Aapke business ke liye ek distinctive visual identity aur profile setup.",
      },
    ],
  },

  // ---------- Website design (NEW service) ----------
  websites: {
    eyebrow: "WEBSITE DESIGN",
    heading: "Websites that make your business look premium.",
    subline:
      "Sirf social media nahi — apne business ki online identity ko bhi professional banayein. Starting ₹3,999.",
    buttonLabel: "Is package ke baare mein poochein",
    // Honest scope note shown under the packages.
    note: "Ye proposed package scopes hain. Domain registration, paid hosting, paid integrations, advanced functionality aur ongoing maintenance alag se hain — jab tak quotation mein clearly include na ho. Online store, payment gateway ya booking system in prices mein included nahi hai.",
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
        msg: "Hi Kalavia Creatives, mujhe ₹3,999 website package ke baare mein jaanna hai.",
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
        msg: "Hi Kalavia Creatives, mujhe ₹6,999 website package ke baare mein jaanna hai.",
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
        msg: "Hi Kalavia Creatives, mujhe ₹9,999 website package ke baare mein jaanna hai.",
      },
    ],
  },

  // ---------- Why Kalavia ----------
  why: {
    eyebrow: "WHY WORK WITH US",
    heading: "Achhe design ke saath, kaam karna bhi easy.",
    points: [
      {
        icon: "palette",
        title: "Brand ke hisaab se design",
        text: "Har design aapke brand aur offer ke liye specially banaya jaata hai.",
      },
      {
        icon: "badge",
        title: "Clear packages, transparent pricing",
        text: "Koi hidden charge nahi. Jo dikhta hai, wahi price hai.",
      },
      {
        icon: "zap",
        title: "Simple approval & revisions",
        text: "Seedha process — approve karein, feedback dein, final le lein.",
      },
      {
        icon: "shield",
        title: "Original content, direct baat",
        text: "100% original creative work aur aapse seedhi communication.",
      },
    ],
  },

  // ---------- Monthly pricing ----------
  plans: {
    eyebrow: "MONTHLY PLANS",
    heading: "Apne business ke liye sahi plan chuniye.",
    offerLine: LAUNCH_OFFER,
    buttonLabel: "Ye plan chahiye",
    items: [
      {
        name: "Starter",
        standard: "₹2,999",
        launch: "₹1,499",
        period: "/month",
        popular: false,
        features: ["8 posters", "Captions included", "2 revisions"],
        msg: "Hi Kalavia Creatives, mujhe Starter plan ke baare mein jaanna hai.",
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
        msg: "Hi Kalavia Creatives, mujhe Growth plan ke baare mein jaanna hai.",
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
        msg: "Hi Kalavia Creatives, mujhe Pro plan ke baare mein jaanna hai.",
      },
    ],
  },

  // ---------- Single (one-time) services ----------
  singleServices: {
    eyebrow: "ONE-TIME SERVICES",
    heading: "Ek design chahiye? Woh bhi ho jayega.",
    offerNote: "Yahi launch pricing one-time services par bhi lagu hai.",
    // WhatsApp message template; [service] is replaced by the service name.
    ctaMsgTemplate:
      "Hi Kalavia Creatives, mujhe [service] chahiye. Details bataiye.",
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
        title: "WhatsApp par baat karein",
        text: "Aapka business, offer aur design requirement samajhte hain.",
      },
      {
        title: "Pehla poster free",
        text: "Ek sample design bana kar bhejte hain — bilkul free.",
      },
      {
        title: "Approve and confirm",
        text: "Pasand aaye to scope confirm karein aur 50% advance dein.",
      },
      {
        title: "Final delivery",
        text: "Baaki payment ke baad final files, jaisa tay hua tha.",
      },
    ],
  },

  // ---------- Our own creative work ----------
  ownWork: {
    eyebrow: "OUR OWN PRACTICE",
    heading: "Hum apna content khud banate hain.",
    text:
      "Hum apna Instagram page bhi chalate hain — @indiabriefed.in. Uske posters, reels aur captions hum khud banate hain. Yeh hamari creative practice aur content workflow ka ek example hai.",
    buttonLabel: "Hamara Instagram dekhein",
    handle: "@indiabriefed.in",
    link: "https://instagram.com/indiabriefed.in",
  },

  // ---------- FAQ ----------
  faq: {
    eyebrow: "FAQ",
    heading: "Aapke sawaal, seedhe jawaab.",
    items: [
      {
        q: "Aap kis type ke business ke liye kaam karte hain?",
        a: "Cafés, restaurants, salons, jewellery shops, boutiques, gyms aur baaki local businesses — sabke liye. Website par dikhaye gaye designs demonstration concepts hain, actual client projects nahi.",
      },
      {
        q: "Video kaun shoot karega?",
        a: "Video aap shoot karenge — phone se bhi chalega. Editing hum karenge.",
      },
      {
        q: "Website package mein kya milta hai?",
        a: "Static websites — Launch (₹3,999), Business (₹6,999) aur Premium (₹9,999). Domain, paid hosting, online store, payment gateway aur booking system in prices mein included nahi hain, jab tak quotation mein clearly na likha ho.",
      },
      {
        q: "Instagram par post kaun karega?",
        a: "Posters aur captions hum banate hain; publishing aap karte hain. Pro plan mein posting schedule karne mein madad milti hai. Daily DM replies aur comment management abhi included nahi hain.",
      },
      {
        q: "Design kitne din mein milega?",
        a: "Single poster ka target delivery time 24–48 ghante hai. Monthly plans aur websites ke liye timeline project confirm karte waqt batayi jayegi.",
      },
      {
        q: "Kitni revisions milengi?",
        a: "Starter plan mein 2 revisions included hain. Baaki packages aur one-time projects ki revision scope project confirm karte waqt clear ki jayegi.",
      },
      {
        q: "Payment kaise hoga?",
        a: "50% advance aur 50% final delivery ke baad. UPI payment available hai.",
      },
      {
        q: "Kya long-term contract hai?",
        a: "Nahi, monthly plans month-to-month hain. Agle month continue karna aapke decision par hai.",
      },
    ],
  },

  // ---------- Contact ----------
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Baat karni hai? Seedha message karein.",
    subline:
      "WhatsApp par reply sabse fast milta hai. Instagram ya email par bhi likh sakte hain.",
    responseNote: "Aam taur par kuch hi ghanton mein reply milta hai.",
  },

  // ---------- Seasonal CTA (change per campaign) ----------
  finalCta: {
    label: "FESTIVAL OFFER",
    heading: "Apne business ko dijiye ek festive, premium look.",
    text:
      "Festival pack mein 5 creative posters — launch offer ₹999. Apna campaign pehle se plan karein.",
    buttonLabel: "Festival pack book karein",
    message:
      "Hi Kalavia Creatives, mujhe ₹999 wala festival pack chahiye. Details bataiye.",
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
      "Kalavia Creatives — Posters, reels aur premium websites for your business",
    description:
      "Creative studio for cafés, restaurants, salons, jewellery, boutiques & gyms. Scroll-stopping posters, edited reels aur premium websites. Launch offers aur pehla poster free.",
    ogImage: "/og.jpg",
  },
};

export default site;
