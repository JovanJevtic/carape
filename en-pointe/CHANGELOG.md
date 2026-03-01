# EN POINTE - Changelog

> All notable changes to this project.

---

## [0.9.0] - 2026-03-01

### Added
- **Lookbook Page** (`/lookbook`)
  - Full-screen cinematic hero with dark overlay, "LOOKBOOK" title, season tag, tagline
  - 4 themed collection sections with parallax scroll effect (Framer Motion useScroll + useTransform)
  - "The Everyday Edit" (left text), "Statement Nights" (right text), "Sheer Confidence" (left text), "Luxe Touch" (center text)
  - Each section: gradient overlay matching text position, product thumbnails linking to detail pages, "Shop the Collection" button with category filter
  - Final CTA section with "Shop All Products" and "Get in Touch" buttons
  - Mobile responsive: text always left-aligned, gradient from left, reduced section heights (80vh)

- **Lookbook Components**
  - `lookbook-hero.tsx` — Full-screen hero with animated text reveals
  - `lookbook-collection.tsx` — Parallax collection section (reused 4x with alternating layouts)
  - `lookbook-cta.tsx` — Final call-to-action section
  - Barrel exports via `index.ts`

- **Lookbook Data** (`mock-data.ts`)
  - `LookbookCollection` interface with title, subtitle, description, heroImage, textPosition, productSlugs
  - 4 collection entries mapped to existing product catalog
  - `getLookbookCollections()` and `getProductsBySlugs()` helpers

- **Cinematic Animation** (`animations.ts`)
  - `cinematicRevealVariants` — Slower editorial reveal (0.8s duration, 40px travel) for dramatic scroll-triggered text animations

### Fixed
- Lookbook nav link no longer returns 404

---

## [0.8.0] - 2026-02-22

### Removed
- **All Photographs Removed**
  - Removed all Unsplash image URLs from 8 products in mock-data.ts
  - Removed hero section image (hero-section.tsx)
  - Removed brand story image (page.tsx)
  - Removed about page banner image (about/page.tsx)
  - Cleaned up unused `Image` import from hero-section.tsx

### Changed
- **Elegant Gradient Placeholders**
  - Product cards now show category name + product name with decorative cherry lines
  - Product detail page shows larger placeholder with same design language
  - Hero section shows "New Collection / Spring/Summer 2026" text on gradient
  - Brand story section shows "EN POINTE" text on gradient
  - About page shows "Crafted in Europe" text on gradient
  - All placeholders use subtle accent/gold gradient tints

---

## [0.7.0] - 2026-02-22

### Added
- **Checkout Page** (`/checkout`)
  - Multi-step form: Shipping → Payment → Confirmation
  - Order summary sidebar with items, subtotal, shipping, total
  - Free shipping over €100
  - European + Balkan country dropdown
  - Credit card auto-formatting
  - Step indicator with checkmarks

- **About Page** (`/about`)
  - Hero: "Fashion Starts at the Ground Up"
  - Origin story with 2+ years experience narrative
  - 6 feature cards: Luxury Materials, Creative Designs, Rich Colours, Sizes for Every Body, International Shipping, Frequent Offers
  - Philosophy section about small-batch production
  - CTA section with Shop Now + Get in Touch

- **Contact Page** (`/contact`)
  - Contact form (name, email, subject, message)
  - Success confirmation state
  - Sidebar: email (hello@enpointe.eu), response time, HQ location
  - Social links (Instagram, Facebook, TikTok)
  - FAQ callout

### Changed
- **Brand Story Rewrite** (Homepage)
  - New heading: "Where Elegance Meets Expression"
  - 6-pillar grid: Luxury Materials, Designs That Speak, Express Who You Are, Sizes for Every Body, Shop Without Borders, Rewards & Offers
  - New tagline: "Crafted in Europe. Shipped worldwide. Worn with confidence."

- **Button Colors** - Gold (#D4AF37) → Beige (#C9B99A)
  - Updated CSS variables: --gold, --gold-hover, --gold-subtle, --shadow-gold

---

## [0.6.0] - 2026-02-05

### Changed
- **Product Images Overhaul** - Fashion Editorial Style
  - Replaced random/irrelevant images with fashion editorial photography
  - All product images now show elegant fashion models
  - Hero image updated to fashion editorial style
  - "Crafted for the Modern Woman" section image updated
  - Consistent luxury fashion aesthetic across all pages

### Removed
- Random Unsplash images (movie posters, Christmas socks, portraits)
- Non-fashion related imagery

---

## [0.5.0] - 2026-02-05

### Changed
- **Logo Refinement** - Cherry + Playfair Display
  - Logo "POINTE" now uses deep cherry (#8B1A3D) instead of gold
  - Added Playfair Display font for elegant logo typography
  - Primary CTA buttons (Shop Now) now use gold (#D4AF37)
  - Outline buttons (View Lookbook) use gold border/text

- **Category Update**
  - Replaced "Sport" category with "Sheer" for hosiery focus
  - Updated footer navigation links accordingly
  - Product data reflects hosiery/tights naming

---

## [0.4.0] - 2026-02-05

### Changed
- **Color Palette Redesign** - Deep Cherry + Gold
  - Primary accent changed from pink (#FF007F) to deep cherry (#8B1A3D)
  - Added gold (#D4AF37) as secondary accent for premium feel
  - Logo "POINTE" now displays in gold
  - "NEW" badges now use gold background
  - "SALE" badges use deep cherry
  - All buttons and CTAs updated to deep cherry
  - Updated shadows and subtle backgrounds

---

## [0.3.0] - 2026-02-04

### Added
- **Shop Page** (`/shop`)
  - Product grid with category filters
  - Sort dropdown (newest, price, popular)

- **Product Detail Page** (`/product/[slug]`)
  - Image gallery with thumbnail navigation
  - Color selector, size selector, quantity picker
  - Add to cart with success animation
  - Product info accordion

- **Cart Sidebar**
  - Slide-out drawer with item list
  - Quantity controls, remove item, promo code
  - Order summary with free shipping threshold

- **Mock Data** - 8 products across 4 categories

---

## [0.2.0] - 2026-02-04

### Added
- Homepage (hero, featured products, brand story, newsletter)
- Layout components (header, footer, mobile menu)
- UI components (Button, Badge, Skeleton)
- Zustand stores (cart, UI, wishlist)

---

## [0.1.0] - 2026-02-04

### Added
- Initial project setup
- Next.js 16 with App Router, TypeScript, Tailwind CSS
- Dark theme color palette, typography system
- Framer Motion setup, project documentation

---

*Format: [version] - date, grouped by Added/Changed/Fixed/Removed*
