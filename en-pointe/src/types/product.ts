export interface ProductImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProductSize {
  size: string;
  stock: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface ProductSeo {
  metaTitle?: string;
  metaDescription?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  description: string;
  shortDescription?: string;
  category: Category;
  materials: string[];
  sizes: ProductSize[];
  colors: ProductColor[];
  careInstructions?: string;
  featured: boolean;
  new: boolean;
  seo?: ProductSeo;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: ProductImage;
  order: number;
}

export type SortOption = "newest" | "price-asc" | "price-desc" | "popular";

export interface ProductFilters {
  category?: string;
  size?: string[];
  color?: string[];
  material?: string[];
  priceRange?: [number, number];
  inStock?: boolean;
}
