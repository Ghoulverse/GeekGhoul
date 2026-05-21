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
  roadmap: { phase: string; title: string; items: string[]; status: 'complete' | 'in-progress' | 'upcoming' }[];
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
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.scholarghoul.com",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
    {
      id: "toddler",
      name: "TODDLER GHOUL",
      domain: "https://www.toddlerghoul.com",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Playful Realm",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full product deck and financial projections for Geek Ghoul.",
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
    { label: "Formulations", value: "9 Complete", status: "complete" },
    { label: "Manufacturing", value: "Partners Secured", status: "complete" },
    { label: "Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "Retail", value: "In Negotiation", status: "in-progress" },
  ],
  ipStatus: "Trademark accepted — Class 3 (cleaning products). Independent brand filing complete.",
  roadmap: [
    { phase: "Phase 1", title: "Brand Launch", items: ["6 sites live", "54 SKUs formulated", "GOO RUNNER game launched"], status: "complete" },
    { phase: "Phase 2", title: "Retail Partnerships", items: ["JB Hi-Fi", "PLE Computers", "Scorptec"], status: "in-progress" },
    { phase: "Phase 3", title: "International", items: ["US TM filing", "UK/EU expansion", "Amazon FBA launch"], status: "upcoming" },
    { phase: "Phase 4", title: "Game Monetisation", items: ["In-app purchases", "Character skins", "NFT collectibles"], status: "upcoming" },
    { phase: "Phase 5", title: "New Ghouls", items: ["Toddler Ghoul", "Scholar Ghoul", "2 mystery verticals"], status: "upcoming" },
  ],
};
