/**
 * A.K LUXURY SHOES SOLUTION — MASTER PRODUCT DATABASE
 * Handcrafted footwear catalog with rich specifications, materials, and artisan provenance.
 */

const INITIAL_SHOES = [
  {
    id: "ak-oxf-01",
    name: "The Florence Sovereign Oxford",
    subtitle: "Full-Grain Italian Calfskin • Goodyear Welted",
    category: "oxford",
    categoryLabel: "Oxfords & Derbies",
    gender: "men",
    price: 890,
    originalPrice: 980,
    rating: 4.95,
    reviewCount: 48,
    badge: "Heritage Masterpiece",
    isBestseller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582897025686-224c538cb38f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Full-grain Tuscan Calfskin",
    sole: "Hand-beveled Oak Bark Tanned Leather Sole",
    construction: "Handcrafted Goodyear Welt (288 stitches)",
    origin: "Handmade in Florence, Italy",
    color: "Burnished Cognac Patina",
    colorHex: "#7b3f00",
    stock: 14,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    description: "The crown jewel of the A.K Bespoke Atelier. Sculpted from single-cut Tuscan calfskin and burnished by hand over 18 hours using beeswax and natural pigments to yield a deep, mirror-gloss patina.",
    features: [
      "Goodyear-welted for lifetime resoling",
      "Quilted silk and glove-soft lambskin lining",
      "Chiseled violin waist with brass toe taps included",
      "Includes twin handcrafted cedar shoe trees"
    ]
  },
  {
    id: "ak-loa-02",
    name: "The Venetian Gold Velvet Loafer",
    subtitle: "Silk Velvet with Gold Bullion Crest Embroidery",
    category: "loafer",
    categoryLabel: "Italian Loafers",
    gender: "men",
    price: 940,
    originalPrice: 1100,
    rating: 4.98,
    reviewCount: 62,
    badge: "VIP Black Tie",
    isBestseller: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582897025737-1d88a1005b46?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Midnight Silk Velvet & Lambskin Nappa",
    sole: "Piano-black Lacquered Leather Sole",
    construction: "Bologna Sacchetto Construction for supple flex",
    origin: "Handcrafted in Venice, Italy",
    color: "Imperial Noir & Champagne Gold",
    colorHex: "#111111",
    stock: 8,
    sizes: [40, 41, 42, 43, 44, 45],
    description: "Engineered for high galas and black-tie evenings. Lined with royal emerald quilted silk and crowned with hand-embroidered gold wire crest representing timeless nobility.",
    features: [
      "Hand-embroidered 24k gold wire bullion crest",
      "Sacchetto glove-like comfort construction",
      "Gentle stacked Cuban heel with rubber grip insert",
      "Arrives in royal velvet dust pouch"
    ]
  },
  {
    id: "ak-sti-03",
    name: "The Aurelia Crystal Stiletto",
    subtitle: "Champagne Duchess Satin • Swarovski Embellished",
    category: "stiletto",
    categoryLabel: "Bespoke Stilettos",
    gender: "women",
    price: 1250,
    originalPrice: 1400,
    rating: 5.0,
    reviewCount: 39,
    badge: "Haute Couture",
    isBestseller: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Italian Duchess Silk Satin & Crystals",
    sole: "Signature Mirror-Gold Coated Leather Sole",
    construction: "Reinforced Titanium Core 105mm Stiletto",
    origin: "Handmade in Milan, Italy",
    color: "Champagne Silk & Diamond Crystal",
    colorHex: "#f7e7ce",
    stock: 6,
    sizes: [36, 37, 38, 39, 40, 41],
    description: "An architectural tour de force. Sculpted with a slender 105mm stiletto heel balanced with an anatomical arch contour that cradles the foot during gala evenings.",
    features: [
      "Over 120 precision-cut faceted Swarovski crystals",
      "Anatomical memory-foam metatarsal cushion",
      "105mm stiletto with aerospace titanium internal shank",
      "Collector edition wooden presentation case"
    ]
  },
  {
    id: "ak-snk-04",
    name: "The Monaco Architectural Sneaker",
    subtitle: "Pristine White Calfskin • 18K Gold Plated Eyelets",
    category: "sneaker",
    categoryLabel: "Haute Sneakers",
    gender: "unisex",
    price: 680,
    originalPrice: 750,
    rating: 4.88,
    reviewCount: 74,
    badge: "Contemporary Luxury",
    isBestseller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Grade-A French White Calfskin & Suede",
    sole: "Margom Custom Architectural Rubber Cupsole",
    construction: "Side-Stitched 360° Cupsole Construction",
    origin: "Crafted in Monte Carlo & Civitanova Marche",
    color: "Pristine Alabaster White & Brushed Gold",
    colorHex: "#ffffff",
    stock: 22,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    description: "Redefining the luxury sneaker. Clean, unadorned lines crafted from pristine French calfskin with hand-painted raw edges and electroplated 18k gold hardware.",
    features: [
      "Authentic Italian Margom sole for unrivaled traction",
      "Micro-perforated calfskin breathable sockliner",
      "Hand-finished wax cotton laces with gold aglets",
      "Sanitized silver-ion antibacterial insole"
    ]
  },
  {
    id: "ak-bot-05",
    name: "The Mayfair Chelsea Boot",
    subtitle: "Hand-Burnished Espresso Leather • Goodyear Storm Welt",
    category: "boot",
    categoryLabel: "Chelsea & Boots",
    gender: "men",
    price: 920,
    originalPrice: 1050,
    rating: 4.93,
    reviewCount: 51,
    badge: "Gentleman's Choice",
    isBestseller: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Waxy Pull-Up Espresso Calfskin",
    sole: "Dainite Studded Rubber / Leather Hybrid Sole",
    construction: "360° Storm Welt Weather-Sealed",
    origin: "Northamptonshire, England",
    color: "Deep Espresso Patina",
    colorHex: "#3d2314",
    stock: 11,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "An English classic tailored for the modern gentleman. Built with a storm welt to withstand autumn squalls while retaining an elegant silhouette suitable for bespoke tailoring.",
    features: [
      "Custom woven heavy-duty elastic side gussets",
      "British Dainite studded sole for all-weather grip",
      "Dual grosgrain pull-loops with gold A.K crest",
      "Full vegetable-tanned leather counter stiffener"
    ]
  },
  {
    id: "ak-loa-06",
    name: "The Capri Belgian Tassel Loafer",
    subtitle: "Cashmere Suede • Unlined Ultra-Lightweight",
    category: "loafer",
    categoryLabel: "Italian Loafers",
    gender: "unisex",
    price: 780,
    originalPrice: 850,
    rating: 4.91,
    reviewCount: 35,
    badge: "Riviera Edition",
    isBestseller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1582897025737-1d88a1005b46?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582897025737-1d88a1005b46?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Ultra-Soft Cashmere Suede (Water-Resistant)",
    sole: "Flexible Single Leather Sole with Rubber Inset",
    construction: "Belgian Turned Construction",
    origin: "Handcrafted in Naples, Italy",
    color: "Warm Taupe Sand",
    colorHex: "#b5a38f",
    stock: 17,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    description: "Designed for effortless Riviera strolls and yacht decks. Made from unlined water-repellent cashmere suede with hand-braided tassels.",
    features: [
      "Unlined construction moulds instantly to your foot",
      "Treated with Teflon hydrophobic suede guard",
      "Hand-braided leather piping and dual tassels",
      "Ultra-cushioned Poron heel pad"
    ]
  },
  {
    id: "ak-mon-07",
    name: "The Savile Row Double Monkstrap",
    subtitle: "Antiqued Museum Calf • Solid Brass Buckles",
    category: "oxford",
    categoryLabel: "Oxfords & Derbies",
    gender: "men",
    price: 910,
    originalPrice: 990,
    rating: 4.89,
    reviewCount: 29,
    badge: "Executive Class",
    isBestseller: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Ilcea Museum Calfskin with Marble Effect",
    sole: "Hand-Painted Fiddleback Beveled Waist Sole",
    construction: "Hand-Welted Goodyear Construction",
    origin: "Turin, Italy",
    color: "Museum Burgundy Marble",
    colorHex: "#601a24",
    stock: 9,
    sizes: [40, 41, 42, 43, 44, 45],
    description: "Distinctive marbled museum calf leather highlighted by twin solid brass buckle closures. A power shoe that commands authority in boardrooms and diplomatic summits.",
    features: [
      "Solid milled brass buckles with palladium plating",
      "Fiddleback waist showing artisan cobbler prowess",
      "Hand-inked and polished edge bevels",
      "Triple-density cork footbed adapts to footprint"
    ]
  },
  {
    id: "ak-sti-08",
    name: "The Bellisima Strappy Sandal",
    subtitle: "Metallic Gold Lambskin • Crystal Ankle Wrap",
    category: "stiletto",
    categoryLabel: "Bespoke Stilettos",
    gender: "women",
    price: 1120,
    originalPrice: 1250,
    rating: 4.96,
    reviewCount: 42,
    badge: "Red Carpet",
    isBestseller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Mirror Gold Foiled Italian Lambskin",
    sole: "Natural Leather Sole with Anti-Slip Pad",
    construction: "Sculpted 95mm Column Stiletto",
    origin: "Florence, Italy",
    color: "Liquid Champagne Gold",
    colorHex: "#d4af37",
    stock: 5,
    sizes: [36, 37, 38, 39, 40, 41],
    description: "Draped in liquid gold lambskin with delicate spiraling crystal straps that gracefully elongate the leg. Designed for premier galas and red carpet moments.",
    features: [
      "Flexible coil ankle strap with micro-crystal pave",
      "Padded arch and metatarsal cushion",
      "Featherweight construction (only 195g per shoe)",
      "Complimentary silk carrying travel tote"
    ]
  },
  {
    id: "ak-der-09",
    name: "The Edinburgh Wingtip Brogue",
    subtitle: "Scotch Grain Leather • Hand-Punched Medallion",
    category: "oxford",
    categoryLabel: "Oxfords & Derbies",
    gender: "men",
    price: 860,
    originalPrice: 940,
    rating: 4.87,
    reviewCount: 31,
    badge: "Heritage Classic",
    isBestseller: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1582897025686-224c538cb38f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582897025686-224c538cb38f?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Heavy Highland Scotch Grain Calfskin",
    sole: "Double Oak Bark Leather Sole",
    construction: "Norwegian Welt (Waterproof Stitching)",
    origin: "Edinburgh, Scotland",
    color: "Rich Tan Acorn",
    colorHex: "#8d5b2c",
    stock: 12,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Robust yet impeccably refined. Features intricate hand-punched brogue perforations with an ornate thistle medallion on the toe cap.",
    features: [
      "Norwegian storm welt for maximum moisture defense",
      "Double leather sole for sturdy presence",
      "Full veg-tan calfskin insole with arch support",
      "Bespoke brass eyelets"
    ]
  },
  {
    id: "ak-snk-10",
    name: "The Saint-Tropez Runner",
    subtitle: "Italian Suede & Technical Mesh • Gold Trim",
    category: "sneaker",
    categoryLabel: "Haute Sneakers",
    gender: "unisex",
    price: 720,
    originalPrice: 790,
    rating: 4.84,
    reviewCount: 46,
    badge: "Athletic Couture",
    isBestseller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Nubuck Leather, Technical Mesh & Metallic Trim",
    sole: "Multi-layered EVA & Vibram Luxury Outsole",
    construction: "Strobel Flexible Running Construction",
    origin: "Portofino, Italy",
    color: "Sand Taupe, Obsidian & Gold",
    colorHex: "#2b2b2b",
    stock: 16,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    description: "The intersection of high performance and Parisian haute couture. Crafted with sculpted technical soles and hand-stitched nubuck panels.",
    features: [
      "Vibram Italian rubber outsole for elite longevity",
      "Memory foam orthotic removable footbed",
      "Lightweight shock absorbing EVA midsole",
      "Signature 3D gold monogram badge on tongue"
    ]
  },
  {
    id: "ak-bot-11",
    name: "The St. Moritz Shearling Combat Boot",
    subtitle: "Pebbled Calfskin • Merino Shearling Lined",
    category: "boot",
    categoryLabel: "Chelsea & Boots",
    gender: "unisex",
    price: 1080,
    originalPrice: 1200,
    rating: 4.97,
    reviewCount: 23,
    badge: "Alpine Winter",
    isBestseller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Weatherproof Pebbled Calfskin & Merino Shearling",
    sole: "Commando Lug Sole with Goodyear Welt",
    construction: "360° Goodyear Storm Welt",
    origin: "Geneva, Switzerland",
    color: "Matte Jet Black",
    colorHex: "#1c1c1c",
    stock: 7,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    description: "Engineered for winter luxury in Alpine resorts. Fully lined with plush 100% genuine merino shearling for warmth down to -20°C without sacrificing silhouette.",
    features: [
      "Lined with natural thermal merino shearling",
      "Heavy-duty Italian speed hooks and eyelets",
      "Hydrophobic silicone-impregnated calfskin leather",
      "Deep-cleat Commando sole for ice and snow traction"
    ]
  },
  {
    id: "ak-oxf-12",
    name: "The Royale Wholecut Oxford",
    subtitle: "Single-Piece Museum Calfskin • Beveled Fiddleback",
    category: "oxford",
    categoryLabel: "Oxfords & Derbies",
    gender: "men",
    price: 1150,
    originalPrice: 1300,
    rating: 4.99,
    reviewCount: 67,
    badge: "Master Cobbler Signature",
    isBestseller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=80"
    ],
    material: "Seamless Single Cut Museum Calfskin",
    sole: "Artisan Hand-Carved Fiddleback Oak Bark Sole",
    construction: "Bespoke Hand-Welted 100% Handsewn",
    origin: "Florence, Italy",
    color: "Midnight Obsidian Blue Patina",
    colorHex: "#101d2d",
    stock: 4,
    sizes: [40, 41, 42, 43, 44, 45],
    description: "The pinnacle of shoemaking mastery. Made from a flawless, singular continuous cut of calfskin with zero seam lines except for a discreet rear closure. Only 20 pairs produced annually.",
    features: [
      "Zero side seams for seamless fluidity and comfort",
      "Carved violin fiddleback waist sole",
      "Hand-dyed midnight navy patina by master colorist",
      "Includes personalized monogrammed brass key & cedar tree"
    ]
  }
];

// Helper to get products from localStorage or default
function getShoesCatalog() {
  const stored = localStorage.getItem("ak_luxury_shoes_catalog");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse catalog from localStorage", e);
    }
  }
  localStorage.setItem("ak_luxury_shoes_catalog", JSON.stringify(INITIAL_SHOES));
  return INITIAL_SHOES;
}

// Helper to save catalog
function saveShoesCatalog(shoes) {
  localStorage.setItem("ak_luxury_shoes_catalog", JSON.stringify(shoes));
}
