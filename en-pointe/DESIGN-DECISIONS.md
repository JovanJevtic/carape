# EN POINTE - Design Decisions

> Visual rationale and aesthetic choices for the project.

---

## 🎨 Brand Aesthetic

**Direction:** Dark luxury minimalism
**Inspiration:** High-end fashion editorials, jewelry brand websites
**Mood:** Sophisticated, intimate, confident

---

## 🖤 Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Charcoal | `#0A0A0A` | Main background |
| Dark Grey | `#141414` | Secondary surfaces |
| Surface | `#1A1A1A` | Cards, elevated elements |

### Accent - Deep Cherry
| Name | Hex | Usage |
|------|-----|-------|
| Deep Cherry | `#8B1A3D` | **Logo "POINTE"**, brand identity, active states |
| Cherry Hover | `#A62850` | Hover states |
| Cherry Subtle | `rgba(139, 26, 61, 0.15)` | Backgrounds, overlays |

### Gold Accent
| Name | Hex | Usage |
|------|-----|-------|
| Gold | `#D4AF37` | **Primary CTA buttons**, NEW badges, highlights |
| Gold Hover | `#E5C564` | Hover states |
| Gold Subtle | `rgba(212, 175, 55, 0.15)` | Backgrounds |

### Text
| Name | Hex | Usage |
|------|-----|-------|
| White | `#FAFAFA` | Primary text |
| Muted | `#737373` | Secondary text, captions |

### Rationale
- Dark backgrounds create intimacy and luxury feel
- Deep cherry provides rich, sophisticated warmth
- Gold adds premium, elegant highlights
- Cherry + Gold = classic luxury fashion combination
- High contrast ensures readability

---

## ✒️ Typography

### Logo Font: Playfair Display
- **Style:** High-contrast elegant serif with luxury feel
- **Weights:** 400, 500, 600, 700
- **Usage:** Brand logo "EN POINTE" only

### Display Font: Cormorant Garamond
- **Style:** Elegant serif with fashion editorial feel
- **Weights:** 300 (light), 400, 500, 600, 700
- **Usage:** Headlines, product names, hero text

### Body Font: Inter
- **Style:** Clean, modern sans-serif
- **Weights:** 400, 500, 600
- **Usage:** Body text, UI elements, navigation

### Scale
```
h1: 3.5rem (56px) - Page titles
h2: 2.5rem (40px) - Section headers
h3: 1.75rem (28px) - Subsections
h4: 1.25rem (20px) - Card titles
body: 1rem (16px) - Default
small: 0.875rem (14px) - Captions
```

### Rationale
- Cormorant has ballet/dance elegance fitting "En Pointe" name
- Inter provides excellent readability for e-commerce
- Large display sizes create editorial magazine feel

---

## 🎬 Animation Principles

### Timing Functions
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
```

### Durations
- **Micro (hover):** 200-300ms
- **UI transitions:** 300-500ms
- **Reveals:** 600-800ms
- **Hero animations:** 1000-1500ms

### Patterns Used
- **Fade up:** Content reveals from below
- **Stagger:** Children animate in sequence (50-100ms delay)
- **Scale:** Subtle zoom on hover (1.02-1.05)
- **Parallax:** Background moves slower than content

---

## 📐 Layout Decisions

### Grid
- Max container width: 1280px
- Gutter: 16px mobile, 24px desktop
- Product grid: 2 cols mobile, 3 cols tablet, 4 cols desktop

### Spacing
- Section padding: 96px (py-24) vertical
- Content gap: 48px between major elements
- Card padding: 16-24px

### Product Cards
- Aspect ratio: 3:4 (portrait, fashion-forward)
- Hover reveals second image
- Minimal text below image

---

## 🖼️ Image Guidelines

### Product Photography Style
- Clean, minimal backgrounds
- Soft, diffused lighting
- Focus on texture and detail
- Lifestyle context when possible

### Placeholder Strategy
- Using Unsplash high-quality fashion/lifestyle images
- Consistent aspect ratios maintained
- Will be replaced with actual product shots

---

## 🔘 Component Decisions

### Buttons
- Primary: Filled gold, white text
- Secondary: Outlined, transparent
- Height: 48px (touch-friendly)
- Border radius: 2px (nearly square, premium feel)

### Cards
- No border, subtle background difference
- Generous padding
- Image-first, text minimal

### Forms
- Dark input fields with subtle borders
- Gold focus states
- Inline validation

---

## 📱 Responsive Strategy

- **Mobile first** approach
- **Breakpoints:**
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- Navigation: Hamburger below lg, full nav above

---

*Document new design decisions as they're made.*
