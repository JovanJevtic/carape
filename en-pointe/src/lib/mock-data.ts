import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Everyday",
    slug: "everyday",
    description: "Comfortable socks for daily wear",
    order: 1,
  },
  {
    id: "cat-2",
    name: "Statement",
    slug: "statement",
    description: "Bold designs for special occasions",
    order: 2,
  },
  {
    id: "cat-3",
    name: "Sheer",
    slug: "sheer",
    description: "Elegant sheer hosiery",
    order: 3,
  },
  {
    id: "cat-4",
    name: "Luxury",
    slug: "luxury",
    description: "Premium materials for ultimate comfort",
    order: 4,
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
    productSlugs: ["classic-ribbed-ankle", "opaque-matte-60", "bamboo-everyday"],
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
    productSlugs: ["fishnet-statement", "lace-top-thigh-high"],
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
    productSlugs: ["cashmere-knee-high"],
    shopCategory: "luxury",
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
