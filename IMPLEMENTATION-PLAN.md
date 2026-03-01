# EN POINTE - Technical Implementation Plan

> Premium Women's Socks E-Commerce Website
> Next.js + Framer Motion Implementation Guide
> Created: February 2026

---

## TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Phase Breakdown](#phase-breakdown)
3. [Technical Architecture](#technical-architecture)
4. [Component Library](#component-library)
5. [Database & Backend](#database--backend)
6. [SEO & Performance](#seo--performance)
7. [Deployment Strategy](#deployment-strategy)
8. [Development Workflow](#development-workflow)
9. [Timeline & Milestones](#timeline--milestones)

---

## PROJECT OVERVIEW

### Brand Summary
- **Name:** EN POINTE
- **Positioning:** Premium women's socks (30-50 EUR)
- **Target:** Fashion-conscious women 18-30, EU market
- **Aesthetic:** Editorial Chic - dark theme with hot pink accent
- **Language:** English (single language)
- **Currency:** EUR

### Design Specifications
```
Primary Background: #0A0A0A
Secondary Background: #141414
Surface: #1A1A1A
Text Primary: #FAFAFA
Text Muted: #737373
Accent (Hot Pink): #FF007F
Accent Hover: #E60072

Font Display: Cormorant Garamond (serif)
Font Body: Inter or similar sans-serif
```

### Tech Stack
| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 14+ (App Router) | SSR, routing, API |
| Styling | Tailwind CSS | Utility-first CSS |
| Animations | Framer Motion | Page transitions, micro-interactions |
| State | Zustand | Cart, UI state |
| Forms | React Hook Form + Zod | Validation |
| Payments | Stripe | Checkout, subscriptions |
| CMS | Sanity.io | Product/content management |
| Database | PostgreSQL (via Supabase) | Orders, users |
| Hosting | Vercel | Deployment, edge functions |
| Email | Resend | Transactional emails |
| Analytics | Vercel Analytics + GA4 | Performance, behavior |

---

## PHASE BREAKDOWN

### Phase 1: Foundation (Week 1-2)
**Goal:** Project setup, design system, core infrastructure

#### Deliverables
- [ ] Next.js project initialization with TypeScript
- [ ] Tailwind CSS configuration with design tokens
- [ ] Framer Motion setup and base animations
- [ ] Component library foundation (primitives)
- [ ] Sanity CMS schema setup
- [ ] Database schema design
- [ ] Git repository and CI/CD pipeline

#### Technical Tasks
```bash
# Project initialization
npx create-next-app@latest en-pointe --typescript --tailwind --app --src-dir

# Key dependencies
npm install framer-motion zustand @stripe/stripe-js
npm install @sanity/client next-sanity
npm install react-hook-form @hookform/resolvers zod
npm install @supabase/supabase-js
npm install resend
npm install lucide-react  # Icons
npm install clsx tailwind-merge  # Utilities
```

#### Design System Implementation
```typescript
// tailwind.config.ts - Design tokens
const config = {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#141414',
          surface: '#1A1A1A',
        },
        text: {
          primary: '#FAFAFA',
          muted: '#737373',
          inverse: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#FF007F',
          hover: '#E60072',
          subtle: 'rgba(255, 0, 127, 0.1)',
        },
        semantic: {
          success: '#00D26A',
          error: '#FF3B3B',
          warning: '#FFAB00',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1' }],
        h1: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        h2: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        h3: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}
```

---

### Phase 2: Core Pages - Homepage (Week 2-3)
**Goal:** Complete homepage with all sections

#### Homepage Sections
| Section | Components | Animation |
|---------|------------|-----------|
| Hero | HeroSection, AnimatedText | Text reveal, parallax image |
| Featured Products | ProductCard, ProductGrid | Staggered fade-up |
| Categories | CategoryCard, CategoryGrid | Hover scale, overlay |
| Brand Story | SplitSection, AnimatedImage | Scroll-triggered reveal |
| Lookbook Preview | MasonryGrid, ImageCard | Parallax, hover zoom |
| Testimonials | TestimonialCarousel, Quote | Auto-slide, fade |
| Newsletter | NewsletterForm, Input | Success animation |
| Footer | FooterNav, SocialLinks | Link hover effects |

#### Key Animations (Framer Motion)
```typescript
// Hero text reveal animation
const heroTextVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

// Staggered grid animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}
```

---

### Phase 3: E-Commerce Core (Week 3-5)
**Goal:** Shop, product detail, cart functionality

#### 3.1 Shop/Product Listing Page
- [ ] Product grid with responsive columns (4/3/2/1)
- [ ] Filter sidebar (category, size, color, price, material)
- [ ] Sort functionality (price, newest, popular)
- [ ] Active filter tags with clear all
- [ ] Pagination or infinite scroll
- [ ] Quick view modal
- [ ] Empty state handling

#### 3.2 Product Detail Page
- [ ] Image gallery with zoom
- [ ] Size selector with availability
- [ ] Add to cart with quantity
- [ ] Product information accordion
- [ ] Size guide modal
- [ ] Related products carousel
- [ ] Recently viewed products

#### 3.3 Cart System
- [ ] Slide-out cart sidebar
- [ ] Cart item management (quantity, remove)
- [ ] Promo code input
- [ ] Order summary calculation
- [ ] Shipping estimation
- [ ] Persistent cart (localStorage + user sync)
- [ ] Cart empty state

#### Cart State Management (Zustand)
```typescript
// stores/cart-store.ts
interface CartStore {
  items: CartItem[]
  isOpen: boolean

  addItem: (product: Product, size: string, quantity: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void

  // Computed
  totalItems: number
  subtotal: number
  shipping: number
  total: number
}
```

---

### Phase 4: Checkout Flow (Week 5-6)
**Goal:** Complete purchase flow with Stripe

#### Checkout Steps
1. **Cart Review** - Final item check, promo code
2. **Shipping** - Address form, delivery options
3. **Payment** - Stripe Elements integration
4. **Confirmation** - Order success, email trigger

#### Stripe Integration
```typescript
// app/api/checkout/route.ts
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const { items, shipping, email } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    customer_email: email,
    shipping_address_collection: {
      allowed_countries: ['AT', 'BE', 'DE', 'FR', 'IT', 'NL', 'ES', 'PT', 'HR'],
    },
  })

  return Response.json({ sessionId: session.id })
}
```

#### Order Webhook Handler
```typescript
// app/api/webhooks/stripe/route.ts
export async function POST(req: Request) {
  const payload = await req.text()
  const sig = req.headers.get('stripe-signature')!

  const event = stripe.webhooks.constructEvent(
    payload,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET!
  )

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    // Create order in database
    await createOrder(session)

    // Send confirmation email
    await sendOrderConfirmation(session.customer_email, session.id)

    // Update inventory
    await updateInventory(session.line_items)
  }

  return Response.json({ received: true })
}
```

---

### Phase 5: Content Pages (Week 6-7)
**Goal:** Lookbook, About, Contact pages

#### 5.1 Lookbook/Editorial
- [ ] Editorial hero with full-bleed image
- [ ] Masonry image gallery
- [ ] "Shop the Look" product hotspots
- [ ] Editorial navigation (prev/next)
- [ ] Parallax scroll effects

#### 5.2 About Page
- [ ] Brand story hero
- [ ] Timeline or values section
- [ ] Quality/materials showcase
- [ ] Team section (optional)
- [ ] CTA to shop

#### 5.3 Contact Page
- [ ] Contact form with validation
- [ ] FAQ accordion
- [ ] Contact information
- [ ] Social links
- [ ] Form submission handling (Resend)

---

### Phase 6: Polish & Optimization (Week 7-8)
**Goal:** Performance, SEO, final touches

#### Tasks
- [ ] Page transition animations
- [ ] Loading states and skeletons
- [ ] Error boundaries
- [ ] 404 and error pages
- [ ] SEO meta tags (dynamic)
- [ ] Structured data (JSON-LD)
- [ ] Image optimization audit
- [ ] Performance profiling
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Mobile testing

---

## TECHNICAL ARCHITECTURE

### Folder Structure
```
en-pointe/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (shop)/                   # Shop route group
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── shop/
│   │   │   │   ├── page.tsx          # Product listing
│   │   │   │   └── [category]/
│   │   │   │       └── page.tsx      # Category page
│   │   │   ├── product/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Product detail
│   │   │   ├── cart/
│   │   │   │   └── page.tsx          # Cart page
│   │   │   └── checkout/
│   │   │       ├── page.tsx          # Checkout
│   │   │       └── success/
│   │   │           └── page.tsx      # Order confirmation
│   │   ├── (content)/                # Content route group
│   │   │   ├── lookbook/
│   │   │   │   ├── page.tsx          # Lookbook listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Editorial detail
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   ├── api/                      # API routes
│   │   │   ├── checkout/
│   │   │   │   └── route.ts
│   │   │   ├── webhooks/
│   │   │   │   └── stripe/
│   │   │   │       └── route.ts
│   │   │   ├── newsletter/
│   │   │   │   └── route.ts
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── layout.tsx                # Root layout
│   │   ├── not-found.tsx             # 404 page
│   │   ├── error.tsx                 # Error boundary
│   │   └── globals.css               # Global styles
│   │
│   ├── components/
│   │   ├── ui/                       # Primitive components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── badge.tsx
│   │   ├── layout/                   # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   ├── cart-sidebar.tsx
│   │   │   └── page-transition.tsx
│   │   ├── shop/                     # E-commerce components
│   │   │   ├── product-card.tsx
│   │   │   ├── product-grid.tsx
│   │   │   ├── product-gallery.tsx
│   │   │   ├── size-selector.tsx
│   │   │   ├── color-selector.tsx
│   │   │   ├── quantity-picker.tsx
│   │   │   ├── add-to-cart.tsx
│   │   │   ├── cart-item.tsx
│   │   │   ├── price-display.tsx
│   │   │   ├── filter-sidebar.tsx
│   │   │   ├── sort-dropdown.tsx
│   │   │   └── quick-view.tsx
│   │   ├── home/                     # Homepage sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── featured-products.tsx
│   │   │   ├── category-grid.tsx
│   │   │   ├── brand-story.tsx
│   │   │   ├── lookbook-preview.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── newsletter-section.tsx
│   │   ├── content/                  # Content page components
│   │   │   ├── editorial-hero.tsx
│   │   │   ├── masonry-gallery.tsx
│   │   │   ├── about-timeline.tsx
│   │   │   ├── contact-form.tsx
│   │   │   └── faq-accordion.tsx
│   │   └── shared/                   # Shared components
│   │       ├── animated-text.tsx
│   │       ├── parallax-image.tsx
│   │       ├── scroll-reveal.tsx
│   │       ├── loading-spinner.tsx
│   │       └── empty-state.tsx
│   │
│   ├── lib/                          # Utilities and configs
│   │   ├── utils.ts                  # Helper functions
│   │   ├── animations.ts             # Framer Motion variants
│   │   ├── sanity.ts                 # Sanity client
│   │   ├── stripe.ts                 # Stripe client
│   │   ├── supabase.ts               # Supabase client
│   │   └── resend.ts                 # Email client
│   │
│   ├── stores/                       # Zustand stores
│   │   ├── cart-store.ts
│   │   ├── filter-store.ts
│   │   └── ui-store.ts
│   │
│   ├── hooks/                        # Custom hooks
│   │   ├── use-cart.ts
│   │   ├── use-scroll-animation.ts
│   │   ├── use-media-query.ts
│   │   └── use-local-storage.ts
│   │
│   ├── types/                        # TypeScript types
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   ├── order.ts
│   │   └── sanity.ts
│   │
│   └── sanity/                       # Sanity configuration
│       ├── schemas/
│       │   ├── product.ts
│       │   ├── category.ts
│       │   ├── editorial.ts
│       │   └── testimonial.ts
│       └── lib/
│           └── queries.ts
│
├── public/
│   ├── fonts/
│   │   └── cormorant-garamond/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   └── editorial/
│   └── icons/
│
├── sanity/                           # Sanity Studio (separate)
│   ├── schemas/
│   └── sanity.config.ts
│
├── .env.local                        # Environment variables
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "zustand": "^4.5.0",
    "@stripe/stripe-js": "^2.4.0",
    "stripe": "^14.14.0",
    "@sanity/client": "^6.12.0",
    "next-sanity": "^7.0.0",
    "@supabase/supabase-js": "^2.39.0",
    "resend": "^3.1.0",
    "react-hook-form": "^7.50.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.321.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## COMPONENT LIBRARY

### Priority Order for Development

#### Priority 1 - Foundation (Week 1)
| Component | Variants | Notes |
|-----------|----------|-------|
| Button | primary, secondary, ghost, icon | Most used component |
| Input | default, focus, error, disabled | Forms throughout |
| Badge | default, accent, sale, new | Product status |
| Loading Spinner | sm, md, lg | Loading states |
| Skeleton | card, text, image | Loading placeholders |

#### Priority 2 - Navigation (Week 1-2)
| Component | Variants | Notes |
|-----------|----------|-------|
| Header | default, scrolled, transparent | Global nav |
| Mobile Menu | open/closed | Slide-in menu |
| Footer | full | Links, social, legal |
| Cart Sidebar | open/closed | Slide-out cart |

#### Priority 3 - E-Commerce (Week 2-3)
| Component | Variants | Notes |
|-----------|----------|-------|
| Product Card | default, hover, sale, soldOut | Shop grid |
| Product Gallery | with thumbnails | PDP main feature |
| Size Selector | available, selected, unavailable | Size picking |
| Quantity Picker | default | +/- buttons |
| Add to Cart | default, loading, added | CTA button |
| Cart Item | default, updating | Cart list item |
| Price Display | regular, sale, range | Price formatting |

#### Priority 4 - Forms (Week 3-4)
| Component | Variants | Notes |
|-----------|----------|-------|
| Form Field | with label, helper, error | Wrapper component |
| Select | default, open | Dropdowns |
| Checkbox | unchecked, checked, disabled | Forms |
| Textarea | default, focus, error | Contact form |
| Newsletter Form | inline | Email signup |

#### Priority 5 - Content (Week 4-5)
| Component | Variants | Notes |
|-----------|----------|-------|
| Accordion | single, multiple | FAQ, product details |
| Modal | default, fullscreen | Quick view, size guide |
| Toast | success, error, info | Notifications |
| Testimonial Card | default | Reviews |
| Editorial Card | large, small | Lookbook |

### Component Architecture Pattern
```typescript
// Example: Button component with variants
// components/ui/button.tsx

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-white hover:bg-accent-hover shadow-accent',
        secondary: 'bg-white text-bg-primary hover:bg-gray-100',
        ghost: 'text-text-primary hover:bg-white/10',
        outline: 'border border-text-muted text-text-primary hover:border-accent hover:text-accent',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <LoadingSpinner size="sm" /> : children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button, buttonVariants }
```

---

## DATABASE & BACKEND

### Sanity CMS Schemas

#### Product Schema
```typescript
// sanity/schemas/product.ts
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (EUR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'compareAtPrice',
      title: 'Compare at Price',
      type: 'number',
      description: 'Original price for sale items',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Merino Wool', value: 'merino' },
          { title: 'Cashmere', value: 'cashmere' },
          { title: 'Bamboo', value: 'bamboo' },
          { title: 'Silk Blend', value: 'silk' },
          { title: 'Cotton', value: 'cotton' },
          { title: 'Recycled Fibers', value: 'recycled' },
        ],
      },
    },
    {
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'size', type: 'string', title: 'Size' },
            { name: 'stock', type: 'number', title: 'Stock' },
          ],
        },
      ],
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Color Name' },
            { name: 'hex', type: 'string', title: 'Hex Code' },
          ],
        },
      ],
    },
    {
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'new',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      price: 'price',
    },
    prepare({ title, media, price }) {
      return {
        title,
        subtitle: `${price} EUR`,
        media,
      }
    },
  },
}
```

#### Category Schema
```typescript
// sanity/schemas/category.ts
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
```

### Supabase Database Schema (PostgreSQL)

```sql
-- Users table (extends Supabase auth)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Addresses
CREATE TABLE public.addresses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('shipping', 'billing')) DEFAULT 'shipping',
  full_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT NOT NULL,
  phone TEXT,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders
CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  order_number TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled')) DEFAULT 'pending',

  -- Amounts (stored in cents)
  subtotal INTEGER NOT NULL,
  shipping_cost INTEGER NOT NULL,
  discount_amount INTEGER DEFAULT 0,
  tax_amount INTEGER DEFAULT 0,
  total INTEGER NOT NULL,
  currency TEXT DEFAULT 'eur',

  -- Stripe
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,

  -- Shipping
  shipping_address JSONB NOT NULL,
  shipping_method TEXT,
  tracking_number TEXT,

  -- Promo
  promo_code TEXT,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  paid_at TIMESTAMPTZ,
  shipped_at TIMESTAMPTZ
);

-- Order Items
CREATE TABLE public.order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,  -- Sanity product ID
  product_name TEXT NOT NULL,
  product_image TEXT,
  size TEXT NOT NULL,
  color TEXT,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price INTEGER NOT NULL,
  total_price INTEGER NOT NULL
);

-- Newsletter Subscribers
CREATE TABLE public.newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  source TEXT DEFAULT 'website'
);

-- Promo Codes
CREATE TABLE public.promo_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  type TEXT CHECK (type IN ('percentage', 'fixed')) NOT NULL,
  value INTEGER NOT NULL,  -- Percentage (10 = 10%) or fixed amount in cents
  min_order_amount INTEGER,
  max_uses INTEGER,
  current_uses INTEGER DEFAULT 0,
  valid_from TIMESTAMPTZ DEFAULT NOW(),
  valid_until TIMESTAMPTZ,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_orders_user ON public.orders(user_id);
CREATE INDEX idx_orders_email ON public.orders(email);
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_order_items_order ON public.order_items(order_id);

-- Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);
```

### Stripe Configuration

#### Products & Pricing Strategy
- Products managed in Sanity CMS
- Prices sent dynamically to Stripe Checkout
- No Stripe Products created (flexible pricing)

#### Webhook Events to Handle
| Event | Action |
|-------|--------|
| `checkout.session.completed` | Create order, send confirmation |
| `payment_intent.payment_failed` | Send failure notification |
| `charge.refunded` | Update order status |

### Email Templates (Resend)

1. **Order Confirmation** - Order details, items, shipping
2. **Shipping Notification** - Tracking information
3. **Newsletter Welcome** - Welcome + first-time discount
4. **Contact Form Response** - Auto-reply acknowledgment

---

## SEO & PERFORMANCE

### SEO Implementation

#### Dynamic Meta Tags
```typescript
// app/product/[slug]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: `${product.name} | EN POINTE`,
    description: product.shortDescription || product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.images[0].url, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.shortDescription,
      images: [product.images[0].url],
    },
  }
}
```

#### Structured Data (JSON-LD)
```typescript
// components/seo/product-schema.tsx
export function ProductSchema({ product }: { product: Product }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map(img => img.url),
    brand: {
      '@type': 'Brand',
      name: 'EN POINTE',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'EUR',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'EN POINTE',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

#### Technical SEO Checklist
- [ ] Canonical URLs on all pages
- [ ] XML sitemap generation (dynamic)
- [ ] robots.txt configuration
- [ ] Open Graph tags on all pages
- [ ] Twitter Card tags
- [ ] Product structured data
- [ ] Organization structured data
- [ ] Breadcrumb structured data
- [ ] FAQ structured data (contact page)
- [ ] Hreflang tags (for future languages)

### Performance Requirements

#### Core Web Vitals Targets
| Metric | Target | Current |
|--------|--------|---------|
| LCP (Largest Contentful Paint) | < 2.5s | - |
| FID (First Input Delay) | < 100ms | - |
| CLS (Cumulative Layout Shift) | < 0.1 | - |
| TTFB (Time to First Byte) | < 600ms | - |

#### Image Optimization
```typescript
// next.config.js
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

#### Bundle Optimization
- [ ] Code splitting per route
- [ ] Dynamic imports for heavy components
- [ ] Tree shaking verification
- [ ] Analyze bundle with `@next/bundle-analyzer`

#### Caching Strategy
```typescript
// Product pages - ISR with 1 hour revalidation
export const revalidate = 3600

// Shop page - revalidate on demand
export const revalidate = 0  // Use on-demand revalidation

// Static pages - full static generation
export const dynamic = 'force-static'
```

---

## DEPLOYMENT STRATEGY

### Environment Setup

#### Development
```bash
# .env.local
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=development
SANITY_API_TOKEN=xxxxx

STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=xxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxx

RESEND_API_KEY=re_xxxxx
```

#### Production
```bash
# Vercel Environment Variables
NEXT_PUBLIC_URL=https://enpointe.com
NEXT_PUBLIC_SANITY_DATASET=production
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
# ... all production keys
```

### Vercel Configuration

#### vercel.json
```json
{
  "framework": "nextjs",
  "regions": ["fra1"],
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Deployment Pipeline

```
GitHub Repository
        │
        ▼
   Push to main ─────────────────┐
        │                        │
        ▼                        ▼
   Vercel Preview            Vercel Production
   (feature branches)        (main branch)
        │                        │
        ▼                        ▼
   Preview URL               enpointe.com
   (automatic)               (automatic)
```

### Pre-Launch Checklist
- [ ] Domain configured (enpointe.com)
- [ ] SSL certificate active
- [ ] Production environment variables set
- [ ] Stripe webhooks configured for production
- [ ] Sanity production dataset populated
- [ ] Email sending verified
- [ ] Analytics tracking verified
- [ ] Error monitoring setup (Sentry optional)
- [ ] Backup strategy documented

---

## DEVELOPMENT WORKFLOW

### Git Branching Strategy
```
main (production)
  │
  ├── develop (staging)
  │     │
  │     ├── feature/homepage-hero
  │     ├── feature/product-page
  │     ├── feature/cart-system
  │     └── fix/mobile-menu
  │
  └── release/v1.0.0
```

### Commit Convention
```
feat: add product gallery zoom functionality
fix: resolve cart quantity update bug
style: update button hover animations
refactor: extract price formatting utility
docs: add API documentation
test: add cart store unit tests
chore: update dependencies
```

### Code Quality Tools
```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

### ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
```

---

## TIMELINE & MILESTONES

### 8-Week Development Schedule

```
WEEK 1-2: Foundation
├── Day 1-2: Project setup, dependencies, Git
├── Day 3-4: Tailwind config, design tokens
├── Day 5-6: Primitive components (Button, Input, Badge)
├── Day 7-8: Layout components (Header, Footer)
├── Day 9-10: Sanity schemas, basic queries
└── Milestone: Dev environment complete, design system ready

WEEK 2-3: Homepage
├── Day 11-12: Hero section with animations
├── Day 13-14: Featured products, category grid
├── Day 15-16: Brand story, lookbook preview
├── Day 17-18: Testimonials, newsletter
├── Day 19-20: Footer, responsive adjustments
└── Milestone: Homepage complete (desktop + mobile)

WEEK 3-4: Shop Pages
├── Day 21-22: Product card, product grid
├── Day 23-24: Filter sidebar, sort dropdown
├── Day 25-26: Shop page assembly, pagination
├── Day 27-28: Category pages
├── Day 29-30: Quick view modal
└── Milestone: Shop functionality complete

WEEK 4-5: Product Detail
├── Day 31-32: Product gallery with zoom
├── Day 33-34: Size/color selectors, quantity
├── Day 35-36: Add to cart, product accordion
├── Day 37-38: Related products
├── Day 39-40: Size guide modal
└── Milestone: PDP complete

WEEK 5-6: Cart & Checkout
├── Day 41-42: Cart sidebar, cart page
├── Day 43-44: Cart item management
├── Day 45-46: Checkout form (shipping)
├── Day 47-48: Stripe integration
├── Day 49-50: Order confirmation, emails
└── Milestone: Full purchase flow working

WEEK 6-7: Content Pages
├── Day 51-52: Lookbook listing
├── Day 53-54: Editorial detail page
├── Day 55-56: About page
├── Day 57-58: Contact page + form
├── Day 59-60: 404, error pages
└── Milestone: All pages complete

WEEK 7-8: Polish & Launch
├── Day 61-62: Page transitions, loading states
├── Day 63-64: Performance optimization
├── Day 65-66: SEO audit, structured data
├── Day 67-68: Accessibility audit, fixes
├── Day 69-70: Cross-browser testing
├── Day 71-72: Final QA, bug fixes
├── Day 73-74: Production deployment
├── Day 75: Monitoring setup
└── Milestone: LAUNCH! 🚀
```

### Key Milestones

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 2 | Foundation Complete | Design system, components, CMS |
| 3 | Homepage Live | Full homepage with animations |
| 4 | Shop Ready | Product browsing functional |
| 5 | E-Commerce Core | Cart and product detail |
| 6 | Checkout Working | Full purchase flow |
| 7 | Content Complete | All pages built |
| 8 | **LAUNCH** | Production deployment |

---

## RISK MITIGATION

### Technical Risks
| Risk | Mitigation |
|------|------------|
| Stripe integration issues | Test thoroughly in sandbox, use Stripe CLI |
| Image performance | Use Next.js Image, lazy loading, CDN |
| Animation performance | Profile with React DevTools, reduce complexity |
| CMS learning curve | Start with simple schemas, iterate |

### Timeline Risks
| Risk | Mitigation |
|------|------------|
| Feature creep | Strict MVP scope, document "v2" features |
| Design changes | Lock designs before development phase |
| Third-party issues | Have backup plans (e.g., self-hosted fonts) |

---

## FUTURE CONSIDERATIONS (Post-Launch)

### Version 2 Features
- [ ] User accounts and order history
- [ ] Wishlist functionality
- [ ] Product reviews
- [ ] Gift cards
- [ ] Multi-currency support
- [ ] Additional languages (DE, FR, IT)
- [ ] Subscription box option
- [ ] Blog/journal section
- [ ] Loyalty program

### Technical Improvements
- [ ] PWA capabilities
- [ ] Advanced analytics
- [ ] A/B testing infrastructure
- [ ] Personalization engine
- [ ] Inventory management dashboard

---

## APPENDIX

### Quick Reference Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Production build
npm run lint                   # Run ESLint
npm run type-check            # TypeScript check

# Sanity
npx sanity dev                # Start Sanity Studio
npx sanity deploy             # Deploy Sanity Studio
npx sanity dataset export     # Export dataset

# Stripe CLI
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger checkout.session.completed

# Database
npx supabase db push          # Push schema changes
npx supabase gen types        # Generate TypeScript types
```

### Useful Links
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Stripe Checkout Docs](https://stripe.com/docs/payments/checkout)
- [Sanity.io Docs](https://www.sanity.io/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Resend Docs](https://resend.com/docs)

---

*Document created: February 2026*
*Project: EN POINTE - Premium Women's Socks*
*Status: Ready for Development*
