# EN POINTE - Project Configuration

> Premium women's socks e-commerce website
> Dark luxury aesthetic · Awwwards quality

---

## ⚠️ MANDATORY — Approval & Push Workflow

**Every change MUST be approved before pushing.** No exceptions.

### After EVERY code change:
1. Show the user what was changed (screenshot or description)
2. **Ask explicitly: "Odobravate ovu promjenu?"** (or equivalent)
3. Wait for user approval
4. Only after approval: `git add` → `git commit` → `git push origin main`
5. If not approved: revert or adjust based on feedback

### Commit rules:
- Git user: `Jovan Jevtic <contact@jjovan.com>`
- Repo: `github.com/JovanJevtic/carape` (private)
- Always push to `origin main` after approval
- Never push without explicit user confirmation

---

## 📚 Required Reading (Start of Session)

Before making any changes, read these files to understand current state:

1. **[PROJECT-STATE.md](./PROJECT-STATE.md)** - What's done, in progress, planned
2. **[TODO.md](./TODO.md)** - Prioritized task backlog
3. **[DESIGN-DECISIONS.md](./DESIGN-DECISIONS.md)** - Visual rationale
4. **[CHANGELOG.md](./CHANGELOG.md)** - History of changes

---

## 🎯 Project Overview

**Brand:** EN POINTE
**Product:** Premium women's socks
**Target:** Fashion-conscious women, 25-45
**Aesthetic:** Dark luxury, editorial fashion, minimalist elegance

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| State | Zustand |
| Fonts | Playfair Display + Cormorant Garamond + Inter |

---

## 🎨 Design System Quick Reference

### Colors
```
--bg-primary: #0A0A0A
--bg-secondary: #141414
--accent: #8B1A3D (deep cherry) → Logo, active states
--gold: #D4AF37 → CTA buttons, NEW badges
--text-primary: #FAFAFA
--text-muted: #A0A0A0
```

### Typography
```
Logo: font-playfair (Playfair Display) → Brand logo only
Display: font-display (Cormorant Garamond) → Headlines
Body: font-sans (Inter) → UI, navigation
```

### Animation Timing
```
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── shop/page.tsx      # Shop listing
│   └── product/[slug]/    # Product detail
├── components/
│   ├── home/              # Homepage sections
│   ├── layout/            # Header, Footer, CartSidebar
│   ├── shop/              # ProductCard, Grid, etc.
│   └── ui/                # Button, Badge, Skeleton
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   ├── mock-data.ts       # Product data
│   └── utils.ts           # Helpers
├── stores/                # Zustand stores
└── types/                 # TypeScript types
```

---

## ✅ Session End Checklist

Before ending work:

- [ ] Update `PROJECT-STATE.md` with current status
- [ ] Add completed items to `CHANGELOG.md`
- [ ] Update `TODO.md` (move done items, add new ones)
- [ ] Take final Playwright screenshots
- [ ] Commit changes with descriptive message

---

## 🚫 Don't

- Don't use bright/neon colors (maintain dark luxury feel)
- Don't add unnecessary animations (restraint is key)
- Don't skip mobile responsiveness
- Don't create placeholder pages without content

---

## ✨ Do

- Use generous whitespace
- Maintain consistent spacing (multiples of 4px)
- Add subtle hover states to all interactive elements
- Use high-quality imagery
- Keep product cards at 3:4 aspect ratio

---

## 🔗 Quick Links

- Dev server: `npm run dev` → http://localhost:3000
- Build: `npm run build`
- Routes: `/`, `/shop`, `/product/[slug]`, `/lookbook`, `/about`, `/contact`, `/checkout`

---

*This file provides project-specific context. See global ~/.claude/CLAUDE.md for workflow rules.*
