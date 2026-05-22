/**
 * Ghoul Site Configuration
 */

export interface CrossLink {
  id: string;
  name: string;
  domain: string;
  icon: string;
  color: string;
  realm: string;
  live: boolean;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  category: 'core' | 'pro' | 'tool' | 'refill' | 'limited';
  volume: string;
  price: string;
  features: string[];
  heroIngredient?: string;
}

export interface GhoulConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  icon: string;
  isLeader: boolean;
  products: Product[];
  crossLinks: CrossLink[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    placeholderText: string;
  };
  gameUrl: string;
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  science: {
    title: string;
    subtitle: string;
    description: string;
    adaptation: string;
    stats: { label: string; value: string }[];
  };
  marketSize: string;
  traction: { label: string; value: string; status: 'complete' | 'in-progress' | 'upcoming' }[];
  ipStatus: string;
  ipClasses: string[];
  roadmap: { phase: string; title: string; items: string[]; status: 'complete' | 'in-progress' | 'upcoming' }[];
  fundingAsk: string;
  valuation: string;
  equityOffered: string;
  projectedRevenue: { year: string; amount: string; sources: string }[];
  roiTarget: string;
  partnerships: { type: string; description: string }[];
  revenueStreams: { stream: string; description: string; timeline: string }[];
}

export const config: GhoulConfig = {
  id: "geek",
  name: "GEEK GHOUL",
  tagline: "The Digital Sanitizer",
  description:
    "When the code compiles but the setup doesn't, GEEK GHOUL debugs your desk. No keyboard too greasy, no screen too smudged, no cable too dusty.",
  domain: "https://www.geekghoul.com",
  icon: "💻",
  isLeader: false,

  products: [
    {
      name: "Keyboard De-Greaser",
      tagline: "Dissolves finger oils at the keycap level",
      description: "Precision foam spray engineered for mechanical and membrane keyboards. Breaks down sebum, snack residue, and adhesive grime without damaging switches or legends.",
      category: "core",
      volume: "300ml Foam Spray",
      price: "$18.99 AUD",
      features: ["Safe on PBT & ABS keycaps", "Non-conductive formula", "Switch-safe foam"],
      heroIngredient: "Digital Dissolution Compound™",
    },
    {
      name: "Screen Serum",
      tagline: "Zero streaks. Zero static. Zero regrets.",
      description: "Anti-static display cleaner for monitors, laptops, tablets, and VR headsets. Removes fingerprints, dust, and micro-debris while leaving an invisible anti-static barrier.",
      category: "core",
      volume: "250ml Spray + Microfibre",
      price: "$16.99 AUD",
      features: ["Anti-static coating", "Safe for OLED & matte panels", "Ammonia-free"],
      heroIngredient: "Digital Dissolution Compound™",
    },
    {
      name: "Cable Dust Repellent",
      tagline: "Electrostatic defence for your wiring",
      description: "Long-lasting spray treatment for cable management. Creates a negatively charged barrier that repels dust, pet hair, and airborne particles from cords and power bricks.",
      category: "core",
      volume: "200ml Spray",
      price: "$14.99 AUD",
      features: ["Lasts 30 days per coat", "Safe on rubber & braided cables", "Non-sticky finish"],
      heroIngredient: "Digital Dissolution Compound™",
    },
    {
      name: "Gaming Setup Sanitizer",
      tagline: "RGB-safe. Germ-hostile.",
      description: "Surface sanitiser formulated for gaming peripherals, mousepads, controllers, and RGB-enabled devices. Kills 99.9% of bacteria without degrading plastics or affecting LED output.",
      category: "core",
      volume: "500ml Spray",
      price: "$21.99 AUD",
      features: ["RGB-safe formulation", "Kills 99.9% bacteria", "Fast-drying, no residue"],
      heroIngredient: "Digital Dissolution Compound™",
    },
    {
      name: "Electronics Contact Cleaner",
      tagline: "Precision-grade port and fan restoration",
      description: "High-purity duster and contact cleaner for USB ports, PCIe slots, cooling fans, and heatsinks. Removes oxidation, lint, and thermal dust with surgical precision.",
      category: "pro",
      volume: "Pro Kit (200ml + Tools)",
      price: "$39.99 AUD",
      features: ["99.9% pure isopropyl blend", "Anti-static brush included", "Precision nozzle"],
      heroIngredient: "Digital Dissolution Compound™",
    },
    {
      name: "Thermal Paste Remover",
      tagline: "Clean dies. Fresh application.",
      description: "Specialised solution for removing aged thermal paste from CPU and GPU dies. Prepares surfaces for reapplication without scratching or leaving conductive residue.",
      category: "pro",
      volume: "150ml + Microfibre Wipes",
      price: "$24.99 AUD",
      features: ["Non-conductive residue", "Safe on silicon & IHS", "Lint-free wipes included"],
      heroIngredient: "Digital Dissolution Compound™",
    },
    {
      name: "Keycap Puller & Brush Set",
      tagline: "The mechanic's toolkit",
      description: "Professional-grade wire keycap puller, switch brush, and stem cleaner. Everything you need for deep keyboard maintenance and switch restoration.",
      category: "tool",
      volume: "3-Piece Kit",
      price: "$19.99 AUD",
      features: ["Universal MX-compatible puller", "Anti-static bristles", "Compact storage case"],
    },
    {
      name: "Refill Concentrate",
      tagline: "5 litres. One bottle.",
      description: "Hyper-concentrated refill for all core formulations. Dilutes to 5L of working solution. Same molecular punch, 80% less plastic.",
      category: "refill",
      volume: "1L Concentrate",
      price: "$34.99 AUD",
      features: ["Makes 5L total", "80% less plastic", "Compatible with all core sprays"],
      heroIngredient: "Digital Dissolution Compound™",
    },
    {
      name: "RGB Safe Wipes",
      tagline: "Bioluminescent. Limited batch.",
      description: "Pre-moistened wipes infused with a non-toxic bioluminescent compound. Glows electric blue under UV light — clean your setup and watch it glow. Limited to 2,000 packs.",
      category: "limited",
      volume: "30 Wipes",
      price: "$22.99 AUD",
      features: ["Glows under UV/Blacklight", "Limited batch of 2,000", "Collectible terminal-art packaging"],
      heroIngredient: "Digital Dissolution Compound™",
    },
  ],

  crossLinks: [
    {
      id: "ghoulverse",
      name: "GHOULVERSE",
      domain: "https://www.ghoulverse.com",
      icon: "🌌",
      color: "#00f0ff",
      realm: "The Universe",
      live: true,
    },
    {
      id: "goo",
      name: "GOO GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/goo/",
      icon: "👻",
      color: "#ff00ff",
      realm: "The Goo Dimension",
      live: true,
    },
    {
      id: "party",
      name: "PARTY GHOUL",
      domain: "https://www.partyghoul.com",
      icon: "🎉",
      color: "#ff00ff",
      realm: "The Neon District",
      live: true,
    },
    {
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
      live: true,
    },
    {
      id: "garden",
      name: "GARDEN GHOUL",
      domain: "https://www.gardenghoul.com",
      icon: "🌿",
      color: "#22c55e",
      realm: "The Verdant Wilds",
      live: true,
    },
    {
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
      live: true,
    },
    {
      id: "tradie",
      name: "TRADIE GHOUL",
      domain: "https://www.tradieghoul.com",
      icon: "🔧",
      color: "#eab308",
      realm: "The Industrial Wastes",
      live: true,
    },
    {
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
      live: true,
    },
    {
      id: "sport",
      name: "SPORT GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/sport/",
      icon: "🏆",
      color: "#f97316",
      realm: "The Arena",
      live: false,
    },
    {
      id: "googoo",
      name: "GOO GOO",
      domain: "https://www.ghoulverse.com/ghouls/googoo/",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Nursery",
      live: false,
    },
    {
      id: "kid",
      name: "KID GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/kid/",
      icon: "🧒",
      color: "#ef4444",
      realm: "The Playground",
      live: false,
    },
    {
      id: "teen",
      name: "TEEN GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/teen/",
      icon: "🎧",
      color: "#8b5cf6",
      realm: "The Hangout",
      live: false,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/scholar/",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full investor deck and financial projections for Geek Ghoul.",
    buttonText: "Request Deck",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },

  science: {
    title: "The Source Code of Clean",
    subtitle: "Digital Dissolution Compound™",
    description: "Every GEEK GHOUL product is powered by Digital Dissolution Compound™ — a proprietary ionic surfactant complex engineered at the molecular level to break down tech-specific contaminants. Developed in the GHOULVERSE labs, this compound dissolves organic oils, synthetic adhesives, and electrostatic-bound dust without corroding plastics, metals, or silicon.",
    adaptation: "For the digital realm, we engineered a low-conductivity, pH-neutral variant that targets sebum, thermal paste polymers, and display oleophobic coatings — the molecular signature of every well-used workstation.",
    stats: [
      { label: "Conductivity", value: "< 0.1 μS/cm" },
      { label: "pH Neutrality", value: "7.0 ± 0.2" },
      { label: "Surface Safe Certifications", value: "50+" },
      { label: "Biodegradability", value: "96%" },
    ],
  },

  marketSize: "$250B global gaming peripherals & tech accessories market",
  traction: [
    { label: "Character Websites", value: "6 Live", status: "complete" },
    { label: "GOO GHOUL™ Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "GHOULVERSE Game", value: "Live", status: "complete" },
    { label: "Brand Partnerships", value: "Seeking First Deals", status: "upcoming" },
  ],
  ipStatus: "Trademark classes identified — Class 9 (electronics & gaming peripherals), Class 28 (gaming accessories & toys) and Class 16 (tech accessories). Filing planned post-funding.",
  ipClasses: [
    "Class 9 — Electronics, gaming peripherals, computer accessories & software",
    "Class 28 — Gaming accessories, toys, board games & playthings",
    "Class 16 — Tech accessories, mouse pads, stationery & printed matter",
    "Class 42 — Software development, game design & tech services",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Foundation", items: ["12 character websites live", "GOO GHOUL™ Class 3 (AU) filed", "GHOULVERSE game launched"], status: "complete" },
    { phase: "Phase 1.5", title: "International IP", items: ["US trademark via Madrid Protocol", "EU trademark filing", "Defensive name registrations"], status: "in-progress" },
    { phase: "Phase 2", title: "Mascot Creation", items: ["24 professional mascots (2 per ghoul)", "$120K investment across 12 characters"], status: "upcoming" },
    { phase: "Phase 3", title: "Partnerships & Revenue", items: ["Sector sponsorships", "Affiliate deals", "Event appearances", "Influencer recruitment"], status: "upcoming" },
    { phase: "Phase 4", title: "Entertainment Scale", items: ["Animated series pilot", "Convention circuit", "Merchandise licensing"], status: "upcoming" },
    { phase: "Phase 5", title: "Product Launch", items: ["GOO GHOUL household cleaners", "Vertical-specific product lines"], status: "upcoming" },
  ],

  fundingAsk: "$250,000 AUD",
  valuation: "$1,250,000 pre-money",
  equityOffered: "20%",
  projectedRevenue: [
    { year: "Year 1", amount: "$200,000", sources: "Brand sponsorships, event appearances, affiliate commissions" },
    { year: "Year 2", amount: "$560,000", sources: "Licensing, events, merch royalties, content" },
    { year: "Year 3", amount: "$1,200,000", sources: "Full licensing engine + product sales" },
  ],
  roiTarget: "5–8x over 3–5 years (40–70% IRR)",
  partnerships: [
    { type: "Brand Sponsorships", description: "Existing companies in each vertical pay to associate with our character IP at events and online." },
    { type: "Affiliate Marketing", description: "Partner products featured on ghoul websites — we earn commission on referred sales." },
    { type: "Event Appearances", description: "Mascots appear at sports events, conventions, retail launches — appearance fees + brand exposure." },
    { type: "Licensing", description: "Brands license ghoul characters for their own marketing, packaging, and promotions." },
  ],
  revenueStreams: [
    { stream: "Sponsorships", description: "Sector-specific brand deals per ghoul", timeline: "Year 1" },
    { stream: "Events", description: "Mascot appearances and activations", timeline: "Year 1" },
    { stream: "Affiliate", description: "Commission on partner product sales", timeline: "Year 1" },
    { stream: "Licensing", description: "Character IP licensing to brands", timeline: "Year 2" },
    { stream: "Merchandise", description: "Royalties on plush, apparel, accessories", timeline: "Year 2" },
    { stream: "Animation", description: "YouTube/streaming ad revenue, distribution deals", timeline: "Year 2" },
    { stream: "Products", description: "Owned product lines (GOO GHOUL cleaners first)", timeline: "Year 3" },
  ],
};
