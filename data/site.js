// =============================================================
//  Kalavia Creatives — ALL editable content lives in this file.
//  Edit text, prices, FAQ, contact details and the seasonal
//  banner here. You do NOT need to touch any component.
// =============================================================

// WhatsApp numbers (international format: no +, no spaces).
const PRIMARY_WA = "919131267176"; // main CTAs
const SECONDARY_WA = "917470362545"; // extra option in contact area

// Helper: builds a wa.me link with a pre-filled, URL-encoded message.
export function waLink(message, number = PRIMARY_WA) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const site = {
  // ---------- Brand ----------
  brand: {
    name: "Kalavia Creatives",
    logo: "/logo.png", // optional; CSS gradient "K" shows if missing
  },

  // ---------- WhatsApp ----------
  whatsapp: {
    primary: PRIMARY_WA,
    secondary: SECONDARY_WA,
    buttonLabel: "WhatsApp karein",
    defaultMessage:
      "Hi Kalavia Creatives, mujhe apne café/restaurant ke liye posters aur reels ke baare mein jaanna hai.",
  },

  // ---------- Navigation (in-page anchors) ----------
  nav: [
    { label: "Services", href: "#services" },
    { label: "Our work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // ---------- Hero ----------
  hero: {
    eyebrow: "YOUR BRAND. YOUR NEXT BIG LOOK.",
    headingPre: "Aapke café ki vibe,",
    headingAccent: "ab Instagram par bhi.",
    subline:
      "Scroll rokne wale posters, tempting menu designs aur engaging reels — aapke café ke liye creative content, bina kisi design headache ke.",
    badge: "PEHLA POSTER FREE",
    badgeNote: "Aapke business ke liye ek sample design banayenge.",
    primaryBtn: "WhatsApp par baat karein",
    primaryMsg:
      "Hi Kalavia Creatives, mujhe apne café/restaurant ke liye creative designs chahiye.",
    secondaryBtn: "Hamara kaam dekhein",
    stats: [
      { num: "FREE", label: "Pehla poster" },
      { num: "24–48h", label: "Single poster delivery" },
      { num: "0", label: "Long-term lock-in" },
      { num: "100%", label: "Original creative work" },
    ],
  },

  // ---------- Services ----------
  services: {
    eyebrow: "WHAT WE CREATE",
    heading: "Aapke café ke liye complete creative support.",
    subline:
      "Brand ki vibe se lekar festival offers tak — har design ka ek clear purpose hona chahiye.",
    ctaLabel: "Apne café ke liye discuss karein",
    ctaMsg:
      "Hi Kalavia Creatives, mujhe apne café ke liye design services ke baare mein baat karni hai.",
    items: [
      {
        icon: "posters",
        title: "Instagram posters",
        text: "Offers, new dishes aur daily specials ko scroll-stopping designs mein badlein.",
      },
      {
        icon: "reels",
        title: "Reels editing",
        text: "Aap video shoot karein, hum usse engaging reel mein edit karenge.",
      },
      {
        icon: "festival",
        title: "Festival campaigns",
        text: "Festivals aur special occasions ke liye coordinated creative designs.",
      },
      {
        icon: "menu",
        title: "Menu card design",
        text: "Aapke food aur pricing ko clean, attractive aur easy-to-read layout mein dikhayein.",
      },
      {
        icon: "profile",
        title: "Instagram profile setup",
        text: "Profile ko organised aur brand ke look ke saath consistent banayein.",
      },
      {
        icon: "logo",
        title: "Logo design",
        text: "Aapke business ke liye ek distinctive visual identity.",
      },
    ],
  },

  // ---------- Portfolio (demonstration concepts, NOT client work) ----------
  portfolio: {
    eyebrow: "SELECTED CREATIVE WORK",
    heading: "Designs jo sirf achhe nahi, purposeful bhi hain.",
    note: "Ye demonstration designs hain — hamari creative style dikhane ke liye.",
    ctaLabel: "Aisa hi kuch apne café ke liye banwayein",
    ctaMsg:
      "Hi Kalavia Creatives, mujhe aise creative posters apne café ke liye chahiye.",
    // Each item renders as a polished CSS mockup. If you add an image path
    // (e.g. "/samples/1.jpg"), it will be shown instead of the mockup.
    items: [
      {
        category: "Coffee launch",
        title: "Signature Brew",
        offer: "New",
        line: "Roasted fresh, served hot",
        palette: 0,
        emoji: "☕",
        image: "",
      },
      {
        category: "Weekend offer",
        title: "Weekend Treat",
        offer: "20% OFF",
        line: "Sat & Sun only",
        palette: 1,
        emoji: "🧇",
        image: "",
      },
      {
        category: "Dessert launch",
        title: "Choco Lava",
        offer: "New",
        line: "Warm. Gooey. Irresistible.",
        palette: 2,
        emoji: "🍰",
        image: "",
      },
      {
        category: "Combo offer",
        title: "Family Combo",
        offer: "₹499",
        line: "Meal for 2, fully loaded",
        palette: 3,
        emoji: "🍔",
        image: "",
      },
      {
        category: "Festival campaign",
        title: "Festive Feast",
        offer: "Special",
        line: "Celebrate with flavour",
        palette: 4,
        emoji: "🪔",
        image: "",
      },
      {
        category: "Digital menu",
        title: "Premium Menu",
        offer: "Digital",
        line: "Scan. View. Order.",
        palette: 5,
        emoji: "📖",
        image: "",
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
    eyebrow: "PLANS & PRICING",
    heading: "Apne café ke liye sahi plan chuniye.",
    offerLine:
      "Launch offer: pehle 10 clients ke liye ya 31 December 2026 tak — jo pehle aaye.",
    offerNote: "Launch pricing — first 10 clients ya 31 Dec 2026 tak.",
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
    offerNote:
      "Launch pricing valid for the first 10 clients or until 31 December 2026, whichever comes first.",
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
        text: "We'll understand your business, offer and design requirements.",
      },
      {
        title: "Pehla poster free",
        text: "We'll prepare an initial sample design.",
      },
      {
        title: "Approve and confirm",
        text: "If you like the work, confirm the agreed scope and pay 50% advance.",
      },
      {
        title: "Final delivery",
        text: "We'll deliver the approved work after the remaining payment, as agreed.",
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
        q: "Video kaun shoot karega?",
        a: "Video aap shoot karenge — phone se bhi chalega. Editing hum karenge.",
      },
      {
        q: "Instagram par post kaun karega?",
        a: "Posters aur captions hum banate hain; publishing aap karte hain. Pro plan mein posting schedule karne mein madad milti hai. Daily DM replies aur comment management abhi included nahi hain.",
      },
      {
        q: "Design kitne din mein milega?",
        a: "Single poster ka target delivery time 24–48 ghante hai. Monthly plans ke liye content pehle se plan kiya jayega.",
      },
      {
        q: "Kitni revisions milengi?",
        a: "Starter plan mein 2 revisions included hain. Baaki packages aur one-time projects ki revision scope project confirm karte waqt clear ki jayegi.",
      },
      {
        q: "Payment kaise hoga?",
        a: "50% advance aur 50% final design ke baad. UPI payment available hai.",
      },
      {
        q: "Kya long-term contract hai?",
        a: "Nahi, monthly plans month-to-month hain. Agle month continue karna aapke decision par hai.",
      },
      {
        q: "Kya pehla poster sach mein free hai?",
        a: "Haan, aap apne business ke liye pehle poster ka sample banwane ke liye WhatsApp par baat kar sakte hain.",
      },
    ],
  },

  // ---------- Contact ----------
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Baat karni hai? Seedha message karein.",
    subline:
      "WhatsApp par reply sabse fast milta hai. Instagram ya email par bhi likh sakte hain — aapke café ke liye pehla poster free banayenge.",
    responseNote: "Aam taur par kuch hi ghanton mein reply milta hai.",
  },

  // ---------- Seasonal CTA (change per campaign) ----------
  finalCta: {
    label: "FESTIVAL OFFER",
    heading: "Diwali par apne café ko dijiye festive look.",
    text:
      "Festival pack mein 5 creative posters — launch offer ₹999. Apna campaign pehle se plan karein.",
    buttonLabel: "Festival pack book karein",
    message:
      "Hi Kalavia Creatives, mujhe ₹999 wala Diwali festival pack chahiye. Details bataiye.",
  },

  // ---------- Footer ----------
  footer: {
    tagline: "Café aur restaurant ke liye creative content studio.",
    instagram: {
      handle: "@kalavia_creatives_ad",
      link: "https://instagram.com/kalavia_creatives_ad",
    },
    email: "kalaviacreatives@gmail.com",
    primaryWaDisplay: "+91 91312 67176",
    secondaryWaDisplay: "+91 74703 62545",
    copyright: "© 2026 Kalavia Creatives",
  },

  // ---------- SEO ----------
  seo: {
    // Set this to your live URL after deploying (used for OG image + sitemap).
    siteUrl: "https://kalavia-creatives.vercel.app",
    title: "Kalavia Creatives — Café posters, reels aur creative designs",
    description:
      "Apne café ya restaurant ke liye creative posters, edited reels, menu cards aur festival designs. Launch offers aur pehla poster free.",
    ogImage: "/og.jpg",
  },
};

export default site;
