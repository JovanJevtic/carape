# EN POINTE - Project Plan & Documentation

> Premium Women's Socks E-Commerce Website
> Created: February 2026

---

## PROJECT OVERVIEW

### Brand Identity
- **Name:** EN POINTE
- **Tagline:** TBD (cheeky, witty)
- **Positioning:** Playful & Trendy + Editorial Chic
- **Tone of Voice:** Cheeky & Witty - elegant but humorous
- **Target Audience:** Fashion-conscious women 18-30, EU market
- **Price Range:** Premium (30-50€ per pair)
- **Language:** English
- **Currency:** EUR

### Visual Identity
- **Aesthetic:** Editorial Chic - fashion magazine vibe
- **Color Palette:** Black/White base + Hot Pink accent
- **Photography:** Lifestyle + Artistic combination
- **Animations:** Subtle & Smooth

### Technical Stack
- **Platform:** Custom Next.js
- **Type:** E-commerce (classic shop functionality)
- **Responsive:** Desktop, Tablet, Mobile

---

## DESIGN TOKENS

### Colors
```css
:root {
  /* Backgrounds */
  --color-bg-primary: #0A0A0A;
  --color-bg-secondary: #141414;
  --color-bg-surface: #1A1A1A;

  /* Text */
  --color-text-primary: #FAFAFA;
  --color-text-muted: #737373;
  --color-text-inverse: #0A0A0A;

  /* Accent */
  --color-accent: #FF007F;
  --color-accent-hover: #E60072;
  --color-accent-subtle: rgba(255, 0, 127, 0.1);

  /* Semantic */
  --color-success: #00D26A;
  --color-error: #FF3B3B;
  --color-warning: #FFAB00;
}
```

### Typography
```css
:root {
  /* Font Families - TO BE SELECTED */
  --font-display: 'TBD Display Font', serif;
  --font-body: 'TBD Body Font', sans-serif;

  /* Font Sizes */
  --text-display: clamp(3rem, 8vw, 6rem);    /* 48-96px */
  --text-h1: clamp(2.5rem, 5vw, 4rem);       /* 40-64px */
  --text-h2: clamp(2rem, 4vw, 3rem);         /* 32-48px */
  --text-h3: clamp(1.5rem, 3vw, 2rem);       /* 24-32px */
  --text-h4: 1.25rem;                         /* 20px */
  --text-body: 1rem;                          /* 16px */
  --text-small: 0.875rem;                     /* 14px */
  --text-caption: 0.75rem;                    /* 12px */

  /* Line Heights */
  --leading-tight: 1.1;
  --leading-snug: 1.3;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;

  /* Letter Spacing */
  --tracking-tight: -0.03em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
}
```

### Spacing
```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

### Border Radius
```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

### Shadows
```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.5);
  --shadow-accent: 0 4px 24px rgba(255, 0, 127, 0.3);
}
```

### Animation
```css
:root {
  /* Durations */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;

  /* Easings */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.87, 0, 0.13, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Breakpoints
```css
/* Mobile First */
--bp-sm: 640px;   /* Large phones */
--bp-md: 768px;   /* Tablets */
--bp-lg: 1024px;  /* Small laptops */
--bp-xl: 1280px;  /* Desktops */
--bp-2xl: 1440px; /* Large desktops */
```

### Grid System
```
Desktop (1440px):
- Columns: 12
- Column width: 72px
- Gutter: 24px
- Margins: 80px

Tablet (768px):
- Columns: 8
- Gutter: 20px
- Margins: 40px

Mobile (375px):
- Columns: 4
- Gutter: 16px
- Margins: 20px
```

---

## BRANDING & IDENTITY

### 1. Logo Design
| Deliverable | Description | Status |
|-------------|-------------|--------|
| Wordmark | Primary logo - "EN POINTE" typographic | ⬜ TODO |
| Monogram | Simplified icon for favicon, social | ⬜ TODO |
| Logo Light | For dark backgrounds | ⬜ TODO |
| Logo Dark | For light backgrounds | ⬜ TODO |
| Logo + Tagline | With brand tagline | ⬜ TODO |
| Usage Guidelines | Spacing, minimum size, don'ts | ⬜ TODO |

### 2. Brand Assets
| Deliverable | Description | Status |
|-------------|-------------|--------|
| Pattern Library | Decorative patterns for backgrounds | ⬜ TODO |
| Icon Style | Custom icon set style guide | ⬜ TODO |
| Photography Guide | Art direction for product/lifestyle shots | ⬜ TODO |
| Illustration Style | If needed - style guide | ⬜ TODO |

---

## COMPONENT LIBRARY

### Primitives
| Component | Variants | Status |
|-----------|----------|--------|
| Button | Primary, Secondary, Ghost, Icon | 🟡 In Progress |
| Input | Default, Focus, Error, Disabled | ⬜ TODO |
| Textarea | Default, Focus, Error | ⬜ TODO |
| Checkbox | Unchecked, Checked, Disabled | ⬜ TODO |
| Radio | Unchecked, Checked, Disabled | ⬜ TODO |
| Toggle | Off, On | ⬜ TODO |
| Select/Dropdown | Default, Open, Selected | ⬜ TODO |
| Tag/Badge | Default, Accent, Sale, New | ⬜ TODO |
| Tooltip | Top, Bottom, Left, Right | ⬜ TODO |

### Navigation
| Component | Variants | Status |
|-----------|----------|--------|
| Navbar | Desktop, Mobile, Scrolled | ⬜ TODO |
| Mobile Menu | Open state, Animations | ⬜ TODO |
| Footer | Full, Minimal | ⬜ TODO |
| Breadcrumbs | Default | ⬜ TODO |
| Pagination | Numbers, Load More | ⬜ TODO |
| Tabs | Default, Active | ⬜ TODO |

### Cards
| Component | Variants | Status |
|-----------|----------|--------|
| Product Card | Default, Hover, Sale, Sold Out | ⬜ TODO |
| Category Card | Default, Hover | ⬜ TODO |
| Editorial Card | Large, Small | ⬜ TODO |
| Testimonial Card | Default | ⬜ TODO |

### E-commerce Specific
| Component | Variants | Status |
|-----------|----------|--------|
| Product Gallery | Main + Thumbnails | ⬜ TODO |
| Size Selector | Available, Selected, Unavailable | ⬜ TODO |
| Color Selector | Swatches | ⬜ TODO |
| Quantity Picker | +/- buttons | ⬜ TODO |
| Add to Cart | Default, Loading, Added | ⬜ TODO |
| Cart Item | Default, Updating | ⬜ TODO |
| Cart Sidebar | Open/Close | ⬜ TODO |
| Price Display | Regular, Sale, Range | ⬜ TODO |
| Stock Status | In Stock, Low Stock, Out | ⬜ TODO |

### Forms
| Component | Variants | Status |
|-----------|----------|--------|
| Form Field | With label, helper, error | ⬜ TODO |
| Search | Default, Active, Results | ⬜ TODO |
| Newsletter Form | Inline, Stacked | ⬜ TODO |
| Contact Form | Full form layout | ⬜ TODO |
| Checkout Form | Shipping, Payment | ⬜ TODO |

### Feedback
| Component | Variants | Status |
|-----------|----------|--------|
| Toast/Notification | Success, Error, Info | ⬜ TODO |
| Modal | Default, Fullscreen | ⬜ TODO |
| Loading Spinner | Default, Button size | ⬜ TODO |
| Skeleton | Card, Text, Image | ⬜ TODO |
| Empty State | No results, Empty cart | ⬜ TODO |

---

## PAGE DESIGNS

### Desktop (1440px)

#### Homepage
| Section | Description | Status |
|---------|-------------|--------|
| Hero | Full-width editorial, dramatic headline, CTA | ⬜ TODO |
| Featured Products | 4 product cards grid | ⬜ TODO |
| Categories | Visual category navigation | ⬜ TODO |
| Brand Story | Short intro + CTA to About | ⬜ TODO |
| Lookbook Preview | Editorial images grid | ⬜ TODO |
| Testimonials | Customer reviews carousel | ⬜ TODO |
| Newsletter | Email signup with witty copy | ⬜ TODO |
| Footer | Links, social, legal | ⬜ TODO |

#### Shop (Product Listing Page)
| Section | Description | Status |
|---------|-------------|--------|
| Page Header | Title, product count | ⬜ TODO |
| Filter Sidebar | Categories, Size, Color, Price | ⬜ TODO |
| Active Filters | Selected filter tags | ⬜ TODO |
| Sort Dropdown | Price, Newest, Popular | ⬜ TODO |
| Product Grid | 3-4 columns | ⬜ TODO |
| Pagination | Load more / pages | ⬜ TODO |

#### Product Detail Page
| Section | Description | Status |
|---------|-------------|--------|
| Breadcrumbs | Navigation path | ⬜ TODO |
| Image Gallery | Main image + thumbnails | ⬜ TODO |
| Product Info | Name, price, description | ⬜ TODO |
| Size Selector | Size options + guide link | ⬜ TODO |
| Add to Cart | Quantity + button | ⬜ TODO |
| Product Details | Accordion - materials, care | ⬜ TODO |
| Related Products | 4 product recommendations | ⬜ TODO |

#### Lookbook / Editorial
| Section | Description | Status |
|---------|-------------|--------|
| Editorial Hero | Full-bleed image + title | ⬜ TODO |
| Image Gallery | Masonry or grid layout | ⬜ TODO |
| Shop the Look | Product links on images | ⬜ TODO |
| Next/Prev | Navigation to other editorials | ⬜ TODO |

#### About
| Section | Description | Status |
|---------|-------------|--------|
| Hero | Brand statement | ⬜ TODO |
| Our Story | Brand narrative | ⬜ TODO |
| Values | What we stand for | ⬜ TODO |
| Quality | Materials & craftsmanship | ⬜ TODO |
| Team | Optional - founders | ⬜ TODO |

#### Contact
| Section | Description | Status |
|---------|-------------|--------|
| Contact Form | Name, email, message | ⬜ TODO |
| FAQ | Accordion with common questions | ⬜ TODO |
| Contact Info | Email, social links | ⬜ TODO |

#### Cart
| Section | Description | Status |
|---------|-------------|--------|
| Cart Items | Product list with quantities | ⬜ TODO |
| Order Summary | Subtotal, shipping, total | ⬜ TODO |
| Promo Code | Input field | ⬜ TODO |
| Checkout CTA | Proceed to checkout | ⬜ TODO |

#### Checkout
| Section | Description | Status |
|---------|-------------|--------|
| Progress Steps | Shipping > Payment > Review | ⬜ TODO |
| Shipping Form | Address fields | ⬜ TODO |
| Shipping Options | Delivery methods | ⬜ TODO |
| Payment Form | Card details | ⬜ TODO |
| Order Review | Final summary | ⬜ TODO |
| Confirmation | Success page | ⬜ TODO |

### Tablet (768px)
| Page | Adaptations | Status |
|------|-------------|--------|
| Homepage | 2-column grids, adjusted spacing | ⬜ TODO |
| Shop | 2-3 column grid, collapsible filters | ⬜ TODO |
| Product Detail | Stacked layout | ⬜ TODO |
| Lookbook | 2-column gallery | ⬜ TODO |
| About | Adjusted typography | ⬜ TODO |
| Contact | Full-width form | ⬜ TODO |
| Cart/Checkout | Stacked layout | ⬜ TODO |

### Mobile (375px)
| Page | Adaptations | Status |
|------|-------------|--------|
| Homepage | Single column, compact sections | ⬜ TODO |
| Shop | Single column, filter modal | ⬜ TODO |
| Product Detail | Full-width images, sticky cart | ⬜ TODO |
| Lookbook | Single column, swipeable | ⬜ TODO |
| About | Simplified sections | ⬜ TODO |
| Contact | Compact form | ⬜ TODO |
| Cart/Checkout | Simplified flow | ⬜ TODO |
| Mobile Navigation | Hamburger menu, full-screen | ⬜ TODO |

---

## ANIMATIONS & INTERACTIONS

### Page Load Sequence
```
1. Background fade in (0-200ms)
2. Logo/Nav fade in (200-400ms)
3. Hero headline slide up (300-600ms)
4. Hero image reveal (400-800ms)
5. CTA fade in (600-900ms)
6. Below-fold content ready
```

### Scroll Animations
| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headings | Fade up + slight scale | Enter viewport |
| Product cards | Staggered fade up | Enter viewport |
| Images | Parallax (subtle) | Scroll |
| Stats/Numbers | Count up | Enter viewport |

### Hover States
| Element | Animation |
|---------|-----------|
| Buttons | Background shift, subtle lift |
| Product Cards | Image zoom, overlay reveal |
| Links | Underline animation |
| Nav items | Color transition |
| Social icons | Scale + color |

### Micro-interactions
| Action | Feedback |
|--------|----------|
| Add to cart | Button state + cart badge pulse |
| Form submit | Button loading state |
| Filter select | Smooth grid reflow |
| Image zoom | Lightbox transition |
| Menu open | Staggered item reveal |

### Page Transitions
```
Exit: Current page fades/slides out (300ms)
Enter: New page fades/slides in (400ms)
Total: ~700ms with overlap
Easing: cubic-bezier(0.87, 0, 0.13, 1)
```

---

## FIGMA FILE STRUCTURE

```
📁 EN POINTE
├── 📄 Cover
│   └── Project cover with branding
│
├── 📄 Design System
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Shadows
│   ├── Icons
│   └── Components
│       ├── Buttons
│       ├── Inputs
│       ├── Cards
│       ├── Navigation
│       └── E-commerce
│
├── 📄 Wireframes
│   ├── Homepage
│   ├── Shop
│   ├── Product Detail
│   ├── Lookbook
│   ├── About
│   ├── Contact
│   └── Cart/Checkout
│
├── 📄 Desktop (1440px)
│   ├── Homepage
│   ├── Shop
│   ├── Product Detail
│   ├── Lookbook
│   ├── About
│   ├── Contact
│   └── Cart/Checkout
│
├── 📄 Tablet (768px)
│   └── All pages adapted
│
└── 📄 Mobile (375px)
    └── All pages adapted
```

---

## DEVELOPMENT HANDOFF

### Exports Needed
- [ ] Design tokens as CSS/JSON
- [ ] Component specifications
- [ ] Icon set (SVG)
- [ ] Image placeholders with dimensions
- [ ] Animation specifications
- [ ] Responsive breakpoint documentation

### Technical Notes
- Use CSS Grid for page layouts
- Flexbox for component layouts
- CSS custom properties for theming
- Framer Motion for React animations
- Next.js Image for optimization
- Intersection Observer for scroll triggers

---

## PROJECT PHASES & TIMELINE

### Phase 1: Foundation
- [x] Project setup in Figma
- [x] Color palette defined
- [x] Basic typography scale
- [ ] Logo design
- [ ] Complete design tokens
- [ ] Core components

### Phase 2: Homepage
- [ ] Hero section
- [ ] All homepage sections
- [ ] Desktop complete
- [ ] Responsive versions

### Phase 3: E-commerce
- [ ] Shop page
- [ ] Product detail page
- [ ] Cart & Checkout
- [ ] All responsive versions

### Phase 4: Content Pages
- [ ] Lookbook/Editorial
- [ ] About page
- [ ] Contact page
- [ ] All responsive versions

### Phase 5: Polish
- [ ] Animation specifications
- [ ] Interaction details
- [ ] Final review
- [ ] Development handoff

---

## NOTES & DECISIONS

### Open Questions
1. Font selection - need to choose display & body fonts
2. Tagline - need witty brand tagline
3. Photography - stock vs custom shoot
4. Size guide - popup vs separate page

### Design Decisions Made
- Dark theme (black background) for editorial feel
- Hot Pink (#FF007F) as signature accent
- Minimal animations - subtle & smooth, not flashy
- Classic e-commerce flow (no subscription for now)

---

## RESOURCES & REFERENCES

### Inspiration
- Fashion editorials (Vogue, Harper's Bazaar)
- Luxury sock brands (Falke, Wolford)
- Awwwards dark e-commerce sites

### Assets Needed
- Product photography (all sock styles)
- Lifestyle photography
- Model shots for lookbook
- Brand patterns/textures

---

*Document created: February 2026*
*Last updated: February 2026*
*Designer: Lana*
