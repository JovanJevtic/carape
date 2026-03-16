import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Everyday",
    slug: "everyday",
    description: "Comfortable essentials for daily wear",
    order: 1,
  },
  {
    id: "cat-2",
    name: "Statement",
    slug: "statement",
    description: "Bold designs for unforgettable evenings",
    order: 2,
  },
  {
    id: "cat-3",
    name: "Sheer",
    slug: "sheer",
    description: "The art of barely-there elegance",
    order: 3,
  },
  {
    id: "cat-4",
    name: "Luxury",
    slug: "luxury",
    description: "Premium materials, ultimate indulgence",
    order: 4,
  },
  {
    id: "cat-5",
    name: "Bridal",
    slug: "bridal",
    description: "For your most beautiful day",
    order: 5,
  },
  {
    id: "cat-6",
    name: "Evening",
    slug: "evening",
    description: "After-dark glamour and sophistication",
    order: 6,
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Classic Ribbed Ankle",
    slug: "classic-ribbed-ankle",
    price: 32,
    images: [
      {
        url: "/products/classic-ribbed-ankle.jpg",
        alt: "Black lace ankle socks with stiletto heels - elegant editorial",
      },
    ],
    description:
      "Timeless ribbed ankle socks crafted from premium Egyptian cotton. Perfect for everyday wear with a touch of elegance.",
    shortDescription: "Premium cotton ankle socks",
    category: categories[0],
    materials: ["cotton", "elastane"],
    sizes: [
      { size: "XS", stock: 10 },
      { size: "S", stock: 15 },
      { size: "M", stock: 20 },
      { size: "L", stock: 12 },
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "White", hex: "#FAFAFA" },
      { name: "Nude", hex: "#D4A574" },
    ],
    careInstructions: "Machine wash cold. Tumble dry low.",
    featured: true,
    new: false,
    createdAt: "2026-01-15",
    updatedAt: "2026-01-15",
  },
  {
    id: "prod-2",
    name: "Sheer Elegance 15",
    slug: "sheer-elegance-15",
    price: 48,
    compareAtPrice: 58,
    images: [
      {
        url: "/products/sheer-elegance-15.webp",
        alt: "Sheer black thigh-high stockings with back seam and lace top",
      },
    ],
    description:
      "Ultra-sheer 15 denier tights with a subtle sheen. Designed for special occasions and evening wear.",
    shortDescription: "15 denier sheer tights",
    category: categories[2],
    materials: ["nylon", "elastane"],
    sizes: [
      { size: "XS", stock: 6 },
      { size: "S", stock: 8 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    colors: [
      { name: "Nude", hex: "#E8C4A2" },
      { name: "Black", hex: "#0A0A0A" },
      { name: "Cappuccino", hex: "#6F4E37" },
    ],
    careInstructions: "Hand wash recommended. Lay flat to dry.",
    featured: true,
    new: true,
    createdAt: "2026-01-20",
    updatedAt: "2026-01-20",
  },
  {
    id: "prod-3",
    name: "Opaque Matte 60",
    slug: "opaque-matte-60",
    price: 38,
    images: [
      {
        url: "/products/opaque-matte-60.png",
        alt: "Classic black opaque tights with heels - urban street style",
      },
      {
        url: "/products/pexels-8511324.jpg",
        alt: "Black opaque tights with stiletto heels - moody editorial",
      },
    ],
    description:
      "Luxuriously opaque 60 denier tights with a velvety matte finish. Perfect for cooler days.",
    shortDescription: "60 denier opaque tights",
    category: categories[0],
    materials: ["microfiber", "elastane"],
    sizes: [
      { size: "XS", stock: 14 },
      { size: "S", stock: 20 },
      { size: "M", stock: 25 },
      { size: "L", stock: 18 },
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Navy", hex: "#1C2951" },
      { name: "Burgundy", hex: "#722F37" },
    ],
    careInstructions: "Machine wash cold. Tumble dry low.",
    featured: false,
    new: false,
    createdAt: "2026-01-10",
    updatedAt: "2026-01-10",
  },
  {
    id: "prod-4",
    name: "Cashmere Blend Knee-High",
    slug: "cashmere-knee-high",
    price: 65,
    images: [
      {
        url: "/products/cashmere-knee-high.jpg",
        alt: "Nude floral lace tights with elegant heels - luxury editorial",
      },
    ],
    description:
      "Ultra-soft cashmere blend knee-high socks for the ultimate in luxury and warmth. Perfect for lounging.",
    shortDescription: "Cashmere blend knee-highs",
    category: categories[3],
    materials: ["cashmere", "wool", "elastane"],
    sizes: [
      { size: "XS", stock: 3 },
      { size: "S", stock: 5 },
      { size: "M", stock: 8 },
      { size: "L", stock: 6 },
    ],
    colors: [
      { name: "Oatmeal", hex: "#C8B896" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Blush", hex: "#E8B4B8" },
    ],
    careInstructions: "Hand wash only. Lay flat to dry.",
    featured: true,
    new: true,
    createdAt: "2026-01-25",
    updatedAt: "2026-01-25",
  },
  {
    id: "prod-5",
    name: "Fishnet Statement",
    slug: "fishnet-statement",
    price: 35,
    images: [
      {
        url: "/products/fishnet-statement.png",
        alt: "Diamond pattern tights with black heels - street style editorial",
      },
    ],
    description:
      "Classic fishnet tights reimagined with a modern micro-net pattern. Make a bold statement.",
    shortDescription: "Micro fishnet tights",
    category: categories[1],
    materials: ["nylon", "elastane"],
    sizes: [
      { size: "XS", stock: 8 },
      { size: "S", stock: 12 },
      { size: "M", stock: 18 },
      { size: "L", stock: 8 },
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Wine", hex: "#722F37" },
    ],
    careInstructions: "Hand wash recommended.",
    featured: false,
    new: true,
    createdAt: "2026-01-28",
    updatedAt: "2026-01-28",
  },
  {
    id: "prod-6",
    name: "Bamboo Everyday",
    slug: "bamboo-everyday",
    price: 28,
    images: [
      {
        url: "/products/bamboo-everyday.png",
        alt: "Chevron pattern tights with black heels - street style",
      },
    ],
    description:
      "Eco-friendly bamboo fiber socks with natural antibacterial properties. Soft, breathable, sustainable.",
    shortDescription: "Sustainable bamboo socks",
    category: categories[0],
    materials: ["bamboo", "cotton"],
    sizes: [
      { size: "XS", stock: 18 },
      { size: "S", stock: 25 },
      { size: "M", stock: 30 },
      { size: "L", stock: 22 },
    ],
    colors: [
      { name: "Natural", hex: "#F5F5DC" },
      { name: "Sage", hex: "#9DC183" },
      { name: "Stone", hex: "#8A8D8F" },
    ],
    careInstructions: "Machine wash cold. Line dry preferred.",
    featured: true,
    new: false,
    createdAt: "2026-01-05",
    updatedAt: "2026-01-05",
  },
  {
    id: "prod-7",
    name: "Lace Top Thigh-High",
    slug: "lace-top-thigh-high",
    price: 52,
    images: [
      {
        url: "/products/lace-top-thigh-high.jpg",
        alt: "Burgundy lace top thigh-high stockings with matching heels",
      },
    ],
    description:
      "Elegant thigh-high stockings with delicate lace trim. The perfect finishing touch for special occasions.",
    shortDescription: "Lace-trimmed thigh-highs",
    category: categories[3],
    materials: ["nylon", "lace", "silicone grip"],
    sizes: [
      { size: "XS", stock: 7 },
      { size: "S", stock: 10 },
      { size: "M", stock: 14 },
      { size: "L", stock: 8 },
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Nude", hex: "#E8C4A2" },
      { name: "Ivory", hex: "#FFFFF0" },
    ],
    careInstructions: "Hand wash only. Do not tumble dry.",
    featured: false,
    new: false,
    createdAt: "2026-01-12",
    updatedAt: "2026-01-12",
  },
  {
    id: "prod-8",
    name: "Control Top Shaper",
    slug: "control-top-shaper",
    price: 45,
    images: [
      {
        url: "/products/control-top-shaper.jpg",
        alt: "Black floral rose pattern sheer tights - elegant editorial",
      },
      {
        url: "/products/pexels-1666600.jpg",
        alt: "Floral pattern stockings - legs against wall artistic shot",
      },
    ],
    description:
      "Smoothing control-top tights with graduated compression. Look sleek and feel supported all day.",
    shortDescription: "Shaping control-top tights",
    category: categories[2],
    materials: ["nylon", "lycra"],
    sizes: [
      { size: "XS", stock: 10 },
      { size: "S", stock: 15 },
      { size: "M", stock: 20 },
      { size: "L", stock: 15 },
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A", imageIndex: 0 },
      { name: "Burgundy", hex: "#722F37", imageIndex: 1 },
    ],
    careInstructions: "Machine wash cold. Air dry recommended.",
    featured: false,
    new: true,
    createdAt: "2026-01-30",
    updatedAt: "2026-01-30",
  },
  {
    id: "prod-9",
    name: "Silk Evening Sheer",
    slug: "silk-evening-sheer",
    price: 72,
    images: [
      {
        url: "/products/silk-evening-sheer.jpg",
        alt: "Silk-infused sheer stockings - luxury evening editorial",
      },
    ],
    description:
      "Silk-infused sheer stockings with a luminous finish. The ultimate evening companion — invisible coverage with an unmistakable glow.",
    shortDescription: "Silk-infused 10 denier sheers",
    category: categories[5],
    materials: ["silk", "nylon", "elastane"],
    sizes: [
      { size: "XS", stock: 4 },
      { size: "S", stock: 8 },
      { size: "M", stock: 12 },
      { size: "L", stock: 6 },
    ],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Black", hex: "#0A0A0A" },
      { name: "Midnight", hex: "#191970" },
    ],
    careInstructions: "Hand wash only. Lay flat to dry. Do not wring.",
    featured: true,
    new: true,
    createdAt: "2026-02-10",
    updatedAt: "2026-02-10",
  },
  {
    id: "prod-10",
    name: "Velvet Noir Thigh-High",
    slug: "velvet-noir-thigh",
    price: 68,
    images: [
      {
        url: "/products/velvet-noir-thigh.jpg",
        alt: "Velvet-finish opaque thigh-high stockings - noir editorial",
      },
    ],
    description:
      "Opaque thigh-highs with a velvet-soft matte finish. Silicone lace-top grip for stay-put confidence. A modern classic.",
    shortDescription: "Velvet-finish opaque thigh-highs",
    category: categories[1],
    materials: ["microfiber", "velvet", "silicone grip"],
    sizes: [
      { size: "XS", stock: 5 },
      { size: "S", stock: 10 },
      { size: "M", stock: 14 },
      { size: "L", stock: 8 },
    ],
    colors: [
      { name: "Noir", hex: "#0A0A0A" },
      { name: "Oxblood", hex: "#4A0000" },
    ],
    careInstructions: "Hand wash cold. Do not tumble dry.",
    featured: true,
    new: true,
    createdAt: "2026-02-12",
    updatedAt: "2026-02-12",
  },
  {
    id: "prod-11",
    name: "Seam-Back Vintage",
    slug: "seam-back-vintage",
    price: 55,
    images: [
      {
        url: "/products/seam-back-vintage.jpg",
        alt: "Vintage-inspired back-seam stockings - retro glamour editorial",
      },
    ],
    description:
      "A love letter to old-world glamour. Cuban-heel back-seam stockings in ultra-sheer 12 denier. Timeless sophistication for the modern woman.",
    shortDescription: "Cuban-heel back-seam stockings",
    category: categories[5],
    materials: ["nylon", "elastane"],
    sizes: [
      { size: "XS", stock: 6 },
      { size: "S", stock: 9 },
      { size: "M", stock: 12 },
      { size: "L", stock: 7 },
    ],
    colors: [
      { name: "Barely There", hex: "#F5DEB3" },
      { name: "Black", hex: "#0A0A0A" },
    ],
    careInstructions: "Hand wash only. Do not wring or twist.",
    featured: false,
    new: true,
    createdAt: "2026-02-15",
    updatedAt: "2026-02-15",
  },
  {
    id: "prod-12",
    name: "Bridal Sheer Ivory",
    slug: "bridal-sheer-white",
    price: 85,
    images: [
      {
        url: "/products/bridal-sheer-white.jpg",
        alt: "Bridal ivory sheer stockings with delicate lace trim",
      },
    ],
    description:
      "Crafted for your most beautiful day. Delicate ivory sheers with hand-finished lace trim and a touch of shimmer. Something old, something new — something EN POINTE.",
    shortDescription: "Bridal lace-trim ivory sheers",
    category: categories[4],
    materials: ["silk", "nylon", "lace"],
    sizes: [
      { size: "XS", stock: 3 },
      { size: "S", stock: 6 },
      { size: "M", stock: 8 },
      { size: "L", stock: 4 },
    ],
    colors: [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Blush", hex: "#FFE4E1" },
    ],
    careInstructions: "Hand wash with delicate detergent. Lay flat to dry.",
    featured: true,
    new: true,
    createdAt: "2026-02-18",
    updatedAt: "2026-02-18",
  },
  {
    id: "prod-13",
    name: "Micro Mesh Noir",
    slug: "micro-mesh-noir",
    price: 42,
    images: [
      {
        url: "/products/micro-mesh-noir.jpg",
        alt: "Fine micro-mesh pattern tights - contemporary noir style",
      },
    ],
    description:
      "A modern take on fishnet — ultra-fine micro mesh that reads as texture, not pattern. Day-to-night versatility with an edge.",
    shortDescription: "Ultra-fine micro mesh tights",
    category: categories[1],
    materials: ["nylon", "elastane"],
    sizes: [
      { size: "XS", stock: 10 },
      { size: "S", stock: 15 },
      { size: "M", stock: 20 },
      { size: "L", stock: 12 },
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Espresso", hex: "#3C1414" },
    ],
    careInstructions: "Hand wash recommended. Lay flat to dry.",
    featured: false,
    new: true,
    createdAt: "2026-02-20",
    updatedAt: "2026-02-20",
  },
  {
    id: "prod-14",
    name: "Opaque Bordeaux",
    slug: "opaque-bordeaux",
    price: 44,
    images: [
      {
        url: "/products/opaque-bordeaux.jpg",
        alt: "Rich bordeaux opaque tights - autumn editorial styling",
      },
    ],
    description:
      "Rich bordeaux opaque tights in 80 denier. The colour of the season meets our signature matte finish — a statement in restraint.",
    shortDescription: "80 denier bordeaux opaque tights",
    category: categories[0],
    materials: ["microfiber", "elastane"],
    sizes: [
      { size: "XS", stock: 12 },
      { size: "S", stock: 18 },
      { size: "M", stock: 22 },
      { size: "L", stock: 14 },
    ],
    colors: [
      { name: "Bordeaux", hex: "#6B1624" },
      { name: "Forest", hex: "#0B3B0B" },
      { name: "Navy", hex: "#1C2951" },
    ],
    careInstructions: "Machine wash cold. Tumble dry low.",
    featured: true,
    new: false,
    createdAt: "2026-02-05",
    updatedAt: "2026-02-05",
  },
  {
    id: "prod-15",
    name: "Ribbed Merino Knee-High",
    slug: "ribbed-merino-grey",
    price: 58,
    images: [
      {
        url: "/products/ribbed-merino-grey.jpg",
        alt: "Ribbed merino wool knee-high socks - cozy luxury editorial",
      },
    ],
    description:
      "Australian merino wool ribbed knee-highs with natural temperature regulation. Luxuriously warm without the bulk.",
    shortDescription: "Merino wool ribbed knee-highs",
    category: categories[3],
    materials: ["merino wool", "nylon", "elastane"],
    sizes: [
      { size: "XS", stock: 6 },
      { size: "S", stock: 10 },
      { size: "M", stock: 14 },
      { size: "L", stock: 8 },
    ],
    colors: [
      { name: "Heather Grey", hex: "#9B9EA1" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Oatmeal", hex: "#C8B896" },
    ],
    careInstructions: "Hand wash cold. Reshape and lay flat to dry.",
    featured: false,
    new: false,
    createdAt: "2026-01-28",
    updatedAt: "2026-01-28",
  },
  {
    id: "prod-16",
    name: "Crystal Shimmer Evening",
    slug: "crystal-shimmer-evening",
    price: 78,
    images: [
      {
        url: "/products/crystal-shimmer-evening.jpg",
        alt: "Shimmer-infused evening sheers with subtle sparkle",
      },
    ],
    description:
      "Micro crystal-infused sheers that catch the light with every step. For galas, premieres, and any night that deserves a little magic.",
    shortDescription: "Crystal-shimmer 15 denier sheers",
    category: categories[5],
    materials: ["nylon", "lurex", "elastane"],
    sizes: [
      { size: "XS", stock: 4 },
      { size: "S", stock: 7 },
      { size: "M", stock: 10 },
      { size: "L", stock: 5 },
    ],
    colors: [
      { name: "Stardust", hex: "#C0B283" },
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    careInstructions: "Hand wash only. Do not wring. Store in provided pouch.",
    featured: true,
    new: true,
    createdAt: "2026-02-22",
    updatedAt: "2026-02-22",
  },
  {
    id: "prod-17",
    name: "Pattern Weave Everyday",
    slug: "pattern-weave-detail",
    price: 36,
    images: [
      {
        url: "/products/pattern-weave-detail.jpg",
        alt: "Subtle geometric weave pattern socks - everyday style",
      },
    ],
    description:
      "Geometric jacquard weave socks that add subtle texture to any outfit. Premium cotton blend for breathable comfort all day.",
    shortDescription: "Jacquard weave cotton socks",
    category: categories[0],
    materials: ["cotton", "polyamide", "elastane"],
    sizes: [
      { size: "XS", stock: 14 },
      { size: "S", stock: 20 },
      { size: "M", stock: 25 },
      { size: "L", stock: 16 },
    ],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Stone", hex: "#8A8D8F" },
      { name: "Midnight", hex: "#191970" },
    ],
    careInstructions: "Machine wash cold. Tumble dry low.",
    featured: false,
    new: false,
    createdAt: "2026-01-22",
    updatedAt: "2026-01-22",
  },
  {
    id: "prod-18",
    name: "Everyday Comfort Knit",
    slug: "everyday-comfort-knit",
    price: 30,
    images: [
      {
        url: "/products/everyday-comfort-knit.jpg",
        alt: "Soft knit everyday socks - comfort lifestyle editorial",
      },
    ],
    description:
      "Cloud-soft knit socks with cushioned sole and seamless toe. The everyday essential you'll reach for first, every morning.",
    shortDescription: "Cushioned knit everyday socks",
    category: categories[0],
    materials: ["cotton", "modal", "elastane"],
    sizes: [
      { size: "XS", stock: 20 },
      { size: "S", stock: 30 },
      { size: "M", stock: 35 },
      { size: "L", stock: 25 },
    ],
    colors: [
      { name: "White", hex: "#FAFAFA" },
      { name: "Black", hex: "#0A0A0A" },
      { name: "Nude", hex: "#D4A574" },
    ],
    careInstructions: "Machine wash warm. Tumble dry medium.",
    featured: false,
    new: false,
    createdAt: "2026-01-08",
    updatedAt: "2026-01-08",
  },
];

// Lookbook collections
export interface LookbookCollection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  season: string;
  heroImage: string;
  heroAlt: string;
  textPosition: "left" | "right" | "center";
  productSlugs: string[];
  shopCategory: string;
}

export const lookbookCollections: LookbookCollection[] = [
  {
    id: "lbc-1",
    title: "The Everyday Edit",
    subtitle: "Effortless essentials for every moment",
    description:
      "From morning commute to evening drinks — pieces that move with you. Premium cotton, bamboo, and microfiber crafted for all-day comfort without compromising on style.",
    season: "Spring/Summer 2026",
    heroImage: "/products/classic-ribbed-ankle.jpg",
    heroAlt: "Classic ribbed ankle socks styled for everyday elegance",
    textPosition: "left",
    productSlugs: ["classic-ribbed-ankle", "opaque-matte-60", "bamboo-everyday", "pattern-weave-detail", "everyday-comfort-knit", "opaque-bordeaux"],
    shopCategory: "everyday",
  },
  {
    id: "lbc-2",
    title: "Statement Nights",
    subtitle: "Bold choices for unforgettable evenings",
    description:
      "When the sun goes down, the legs come out. Fishnets, lace, and daring silhouettes designed to be seen. For the woman who dresses for herself.",
    season: "Spring/Summer 2026",
    heroImage: "/products/fishnet-statement.png",
    heroAlt: "Fishnet statement tights for bold evening looks",
    textPosition: "right",
    productSlugs: ["fishnet-statement", "lace-top-thigh-high", "velvet-noir-thigh", "micro-mesh-noir"],
    shopCategory: "statement",
  },
  {
    id: "lbc-3",
    title: "Sheer Confidence",
    subtitle: "The art of barely there",
    description:
      "Ultra-fine deniers that feel like a second skin. Our sheer range balances invisible elegance with tangible support — because confidence starts from the ground up.",
    season: "Spring/Summer 2026",
    heroImage: "/products/sheer-elegance-15.webp",
    heroAlt: "Sheer elegance hosiery for refined sophistication",
    textPosition: "left",
    productSlugs: ["sheer-elegance-15", "control-top-shaper"],
    shopCategory: "sheer",
  },
  {
    id: "lbc-4",
    title: "Luxe Touch",
    subtitle: "Indulge in extraordinary comfort",
    description:
      "Scottish cashmere. Italian craftsmanship. The feeling of pure luxury against your skin. Our premium collection for women who appreciate the finer things.",
    season: "Spring/Summer 2026",
    heroImage: "/products/cashmere-knee-high.jpg",
    heroAlt: "Cashmere blend knee-high socks in luxurious detail",
    textPosition: "center",
    productSlugs: ["cashmere-knee-high", "ribbed-merino-grey"],
    shopCategory: "luxury",
  },
  {
    id: "lbc-5",
    title: "After Dark",
    subtitle: "When the city lights come on",
    description:
      "Silk, shimmer, and seam-back glamour for nights that demand to be remembered. From intimate dinners to black-tie galas — our evening collection turns every entrance into a moment.",
    season: "Spring/Summer 2026",
    heroImage: "/products/silk-evening-sheer.jpg",
    heroAlt: "Silk evening sheers with luminous finish",
    textPosition: "right",
    productSlugs: ["silk-evening-sheer", "crystal-shimmer-evening", "seam-back-vintage"],
    shopCategory: "evening",
  },
  {
    id: "lbc-6",
    title: "The Bridal Suite",
    subtitle: "For your most beautiful chapter",
    description:
      "Hand-finished ivory sheers with delicate lace and a whisper of shimmer. Designed for the bride who believes every detail matters — from the first step down the aisle to the last dance.",
    season: "Spring/Summer 2026",
    heroImage: "/products/bridal-sheer-white.jpg",
    heroAlt: "Bridal ivory sheers with lace trim detail",
    textPosition: "center",
    productSlugs: ["bridal-sheer-white"],
    shopCategory: "bridal",
  },
];

export function getLookbookCollections(): LookbookCollection[] {
  return lookbookCollections;
}

export function getProductsBySlugs(slugs: string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category.slug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.new);
}
