# Portfolio — Mehtab Badwal

Personal portfolio for UX researcher/designer positioning systems-level thinking in B2B SaaS.

## Tech Stack

**Framework:** React 19.2.4 (JSX)  
**Routing:** React Router DOM 7.13.2  
**Build Tool:** Vite 8.0.1  
**Styling:** CSS (no Tailwind, no CSS-in-JS) + CSS custom properties  
**Deployment:** GitHub Pages + Netlify

## Design System (STRICT)

**Colors (cream-based only, NO white #FFFFFF):**
- `--color-bg: #F4F0E8` (main background)
- `--color-dark: #2C2420` (text, buttons)
- `--color-accent: #C4603E` (terracotta - CTAs, emphasis)
- `--color-card: #EAE4D8` (card backgrounds)
- `--color-border: #DDD6CC` (borders)
- `--color-light: #B0A090` (secondary text)

**Typography:**
- Headings: Fraunces (serif, italic) — `var(--font-heading)`
- Body: Inter (sans-serif) — `var(--font-body)`
- Satoshi also used in some components

**Spacing:** 0.5rem, 1rem, 1.5rem, 2.5rem, 4rem, 6rem, 8rem (`--space-xs` to `--space-3xl`)

**Breakpoints (mobile-first):**
- Desktop: Default
- Tablet: `max-width: 1024px`
- Mobile: `max-width: 768px`

## Coding Conventions

**Naming:**
- Components: `PascalCase.jsx` + matching `.css`
- CSS classes: `kebab-case` (`.hero-title`, `.project-card`)
- Functions: `camelCase` (`handleClick`, `scrollToBottom`)
- Constants: `SCREAMING_SNAKE_CASE`

**Component Structure:**
```jsx
// 1. Imports
import { Link } from 'react-router-dom';
import './Component.css';

// 2. Data constants
const items = [...];

// 3. Component function
function Component() {
  const [state, setState] = useState(initial);
  
  return (
    <div className="component">
      {/* JSX */}
    </div>
  );
}

// 4. Export
export default Component;
```

**React Patterns:**
- State: `useState` for simple state
- Refs: `useRef` for DOM access
- Effects: `useEffect` for side effects
- Conditionals: Ternary `{cond ? <A /> : <B />}` or `{cond && <C />}`
- Lists: `.map()` with keys

**CSS Organization:**
1. Component base styles
2. Modifier classes
3. Responsive (mobile-first with `max-width`)
4. Comments for major sections

## File Structure

```
src/
  components/
    Header.jsx/css
    Footer.jsx/css
    BlogPost.jsx (reusable template)
    FloatingChatButton.jsx
    Layout.jsx
  pages/
    Landing.jsx/css
    Projects.jsx/css
    Writing.jsx/css
    About.jsx/css
  case-studies/
    HPEChatbot.jsx/css
    HPEPFA.jsx
    Qubera.jsx
    FluidraPro.jsx
    FluidraRewards.jsx
  blog/
    ShadowSystemProblem.jsx
    StayOutOfTheWay.jsx
    [etc.]
  hooks/
    useScrollReveal.js
  App.jsx (routing)
  main.jsx (entry)
  index.css (global styles)
```

## Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Design Philosophy

**Core Principles:**
- Simple, human, and clear
- Systems-thinking over surface fixes
- Behavioral psychology-driven
- First-person voice ("I design...", not "As a designer...")
- No BS, no fluff

**Accessibility Focus:**
- High-sunlight/outdoor visibility (cream palette reduces glare)
- No white backgrounds (eye strain reduction)
- Clear contrast ratios
- Responsive images that never crop important content

**Image Handling:**
- Always responsive across ALL breakpoints
- Placeholder paths: `src="/assets/images/project-name.jpg"`
- `object-fit: cover` for full-bleed desktop
- `object-fit: contain` for mobile (no cropping)
- Auto-height: `width: 100%; height: auto;`
- SVG: `mix-blend-mode: multiply` only if white background issue

**UI Patterns:**
- Minimal, purposeful components
- Hover: `translateY(-4px)` + subtle shadow
- Border radius: 8-16px
- Transitions: 0.2-0.4s ease
- No redundant CTAs (if whole card is clickable, no "Read more →")

## Writing Style

**Blog Posts:**
- 680px max reading width
- 18px body text, 1.7 line-height
- Sparse subheadings (only when necessary)
- Pull quotes: Fraunces italic, terracotta left border
- Natural prose flow over sectioned structure

**Case Studies:**
- First-person when relevant
- Grounded in behavioral frameworks
- Specific metrics ("32% fewer escalations", not "significantly improved")
- Real constraints ("40-minute service window", not "time-limited scenario")

## Critical Rules

❌ **NEVER:**
- Use white (#FFFFFF) backgrounds
- Crop important image content
- Add redundant CTAs if whole element is clickable
- Use third-person portfolio speak
- Skip responsive image testing

✅ **ALWAYS:**
- Maintain cream-based color palette
- Test images at mobile breakpoints
- Use first-person voice
- Ground insights in behavioral frameworks
- Check existing CSS classes before creating new ones
