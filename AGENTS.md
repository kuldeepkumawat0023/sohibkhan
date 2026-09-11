<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md - High-Performance QA Engineer Portfolio (100% Static Next.js App)

This file defines the project architecture, operational workflows, UI/UX design standards, performance benchmarks, and coding rules for AI Agents working within this repository.

---

## 1. Project Overview & Static Architecture

This project is a modern, high-conversion **100% Static Developer Portfolio (Static Site Generation / SSG with Static HTML Export)** for **Sohib Khan (Full Stack QA Engineer & Automation Specialist)**.

> [!IMPORTANT]
> **STRICTLY STATIC ONLY (NO DYNAMIC SERVER RUNTIME):**
> - This application must be built exclusively as a **Static Export (`output: 'export'`)**.
> - **ZERO** Server-Side Rendering (SSR), **ZERO** server headers/cookies, **ZERO** dynamic API routes (`/api/*`), and **ZERO** server databases.
> - All content, profile details, and test metrics are compiled statically at build time into pre-rendered HTML, CSS, and client-side JavaScript assets.
> - Can be hosted directly on GitHub Pages, Vercel, Netlify, Cloudflare Pages, AWS S3, or any static web server without a Node.js server runtime.

```
portfolio/
├── public/                     # Static assets (Resume PDF, favicon, SVG icons, images)
│   ├── Sohib_Khan_Resume.pdf
│   └── favicon.ico
├── src/
│   ├── app/                    # Next.js App Router (Static Generation)
│   │   ├── favicon.ico
│   │   ├── globals.css         # Claymorphism design system & token definitions
│   │   ├── layout.tsx          # Root layout with fonts, SEO meta & static schema
│   │   └── page.tsx            # Single-page static portfolio composition
│   ├── components/             # Reusable UI component library
│   │   ├── ui/                 # Atomic design elements (Button, Badge, Card, Modal, Tooltip)
│   │   ├── layout/             # Navigation, Sticky Header, Footer, Section Wrapper
│   │   ├── sections/           # Static domain sections (Hero, About, Experience, Projects, Skills, Education, Contact)
│   │   └── interactive/        # Browser-only interactive widgets (RunlogTerminal, ProjectFilter, TestReportDialog)
│   ├── data/                   # Centralized type-safe portfolio data (Bundled statically)
│   │   ├── profile.ts          # Bio, roles, social links & contact info
│   │   ├── experience.ts       # Internships, job history & responsibilities
│   │   ├── projects.ts         # Tested projects, validations, live URLs & metrics
│   │   ├── skills.ts           # Categorized QA, tools, languages & database skills
│   │   └── education.ts        # Academic credentials & certifications
│   ├── hooks/                  # Client-side React hooks (useScrollSpy, useIntersectionObserver, usePrefersReducedMotion)
│   ├── types/                  # Strict TypeScript interfaces & schema definitions
│   └── lib/                    # Static utility functions (class mergers, string helpers)
├── AGENTS.md                   # This execution contract
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript strict configuration
└── next.config.ts              # Next.js static export configuration (`output: 'export'`)
```

---

## 2. Identity & Persona Contract (Derived from `index/index.html`)

Every agent implementing features or content MUST strictly adhere to the verified candidate credentials:

| Field | Specification |
| :--- | :--- |
| **Full Name** | Sohib Khan |
| **Professional Role** | Full Stack QA Intern / QA Automation Engineer |
| **Value Proposition** | "QA Engineer dedicated to breaking software so users don't have to. Specializing in rigorous manual validation while actively advancing into automation testing with Selenium and Playwright." |
| **Current Position** | Full Stack QA Intern at **Artifact Geeks** (Feb 2026 — Present) |
| **Primary Skillset** | Manual Testing, Functional/Regression Testing, Selenium, Playwright, API Testing (Postman), Core Java, MySQL, Git/GitHub |
| **Key Projects Tested** | 1. **Namdev Community** (User workflows, UI/UX, cross-browser)<br>2. **LinkHub** (Auth, profile customization, theme engine, responsive testing)<br>3. **AI Job Fit** (Resume parser validation, form constraints, AI output sanity) |
| **Education** | Bachelor of Computer Applications (BCA, 2026 — Present), 12th (2025, 62%), 10th (2023, 64%) |
| **Certification** | RSCIT (Rajasthan State Certificate in Information Technology) |
| **Contact Links** | Email: `sohiblodhi59@gmail.com` • Phone: `+91 91459 21300` • GitHub: `https://github.com/Sohib-Khan` • LinkedIn: `https://www.linkedin.com/in/sohib-lodhi-6059083ab/` |

---

## 3. Dark Claymorphism Design System & Aesthetic Standard

This portfolio uses a signature **Matte Dark-Claymorphism** visual language. Agents must NEVER use default generic Tailwind colors (e.g. plain red, bright blue) or flat cards.

### 3.1 Core Color Palette
- **`--paper`**: `#262B37` (Base slab background)
- **`--paper-raised`**: `#2C3240` (Raised clay platform)
- **`--clay`**: `#2E3543` (Default elevated clay card surface)
- **`--clay-soft`**: `#333B4B` (Nested / secondary surface)
- **`--clay-deep`**: `#232833` (Recessed / pressed / tag background)
- **`--ink`**: `#FFFFFF` (Primary headings and high-contrast text)
- **`--ink-soft`**: `#C7CCD9` (Readable body paragraphs)
- **`--ink-faint`**: `#8891A1` (Meta information, timestamps, tags)
- **`--accent`**: `#6FE0B0` (Soft matte mint-clay primary brand accent)
- **`--accent-bright`**: `#8BEAC3` (Highlight glow, live pulse, links)
- **`--accent-ink`**: `#123526` (Text on accent background)
- **`--accent-soft`**: `rgba(111, 224, 176, 0.14)` (Subtle pill fills)

### 3.2 Signature Clay Elevation & Shadows
```css
/* Standard elevated clay card */
box-shadow: 9px 9px 20px rgba(10,12,17,0.55),
            -7px -7px 16px rgba(255,255,255,0.05),
            inset 2px 2px 4px rgba(255,255,255,0.07),
            inset -3px -3px 7px rgba(0,0,0,0.38);

/* Small clay buttons & interactive pills */
box-shadow: 5px 5px 12px rgba(10,12,17,0.55),
            -4px -4px 10px rgba(255,255,255,0.05),
            inset 1.5px 1.5px 3px rgba(255,255,255,0.07),
            inset -2px -2px 5px rgba(0,0,0,0.38);

/* Recessed / Pressed clay (tags, active states, code blocks) */
box-shadow: inset 3px 3px 7px rgba(0,0,0,0.38),
            inset -2px -2px 5px rgba(255,255,255,0.07);
```

### 3.3 Typography Hierarchy
- **Headings**: `'Quicksand'`, `'Space Grotesk'`, sans-serif (Weights: 600, 700)
- **Body**: `'IBM Plex Sans'`, system-ui, sans-serif (Weights: 400, 500)
- **Code & Test Badges**: `'IBM Plex Mono'`, monospace (Weights: 400, 500)

---

## 4. Static Component Architecture & Rules

### A. 100% Static Export Compliant
- `next.config.ts` must declare:
  ```typescript
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    output: "export",
    images: {
      unoptimized: true, // required for static HTML export
    },
    reactCompiler: true,
  };

  export default nextConfig;
  ```
- Running `npm run build` must cleanly generate static HTML in the `out/` directory with zero runtime errors.

### B. Static Components vs Pure Client Interactivity
- **Static Pre-rendered Sections:** `About`, `Experience`, `Education`, `Certifications`, and `Skills` render purely as static HTML markup.
- **Client Leaf Components (`'use client'`):**
  - **`HeroRunlog`**: Browser simulated test runner animation (orchestrated client timer with reduced-motion check).
  - **`Navbar`**: Pure browser scroll-spy and anchor link navigation.
  - **`ProjectFilter` / `TestReportDialog`**: Pure client-side filtering and modal preview with static data.
  - **`ContactLinks`**: Direct `mailto:`, `tel:`, and external URLs (no backend form handler needed).

### C. Clean Centralized Static Data (`src/data/*.ts`)
- All content lives in centralized `.ts` files:
  - `profile.ts`
  - `experience.ts`
  - `projects.ts`
  - `skills.ts`
  - `education.ts`
- Zero hardcoded duplicate strings in UI components. Any edit in `src/data/` reflects across the entire static build.

---

## 5. Global Skills Integration & Enforcement

Agents working in this codebase must reference and align with the following curated skills:

| Domain | Integrated Skills | Directives & Standards |
| :--- | :--- | :--- |
| **Frontend & UI/UX** | `frontend-design`, `ui-ux-pro-max`, `web-design-guidelines`, `high-end-visual-design`, `stitch-design-taste` | Build a premier, dark claymorphic static page. Ensure cohesive lighting, tactile depth, balanced negative space, smooth spring animations, and zero generic flat-UI components. |
| **Static Next.js Architecture** | `vercel-react-best-practices`, `vercel-composition-patterns` | Strict static page composition. Zero dynamic server dependencies, zero waterfalls, minimal client bundle size, and flawless static HTML export. |
| **Quality & Completeness** | `improve-codebase-architecture`, `full-output-enforcement`, `clean-code`, `tdd` | Write complete, production-grade files. No placeholders, no `// TODO` items, full type safety, and clean separation between UI and data models. |
| **Security & SEO** | `security`, `codebase-audit-pre-push`, `bug-hunter` | Implement static OpenGraph metadata, Twitter cards, semantic HTML5, valid JSON-LD `Person` schema, sanitized links (`rel="noopener noreferrer"`). |

---

## 6. Core Execution Rules & Coding Standards

1. **Static-Only Rule (Zero Dynamic Server Runtime):**
   - **MANDATORY:** Never introduce server actions, `/api` route handlers, cookies, headers, or external database queries. The build must produce pure static files.
2. **Reference-First Context Analysis (`index/index.html`):**
   - **MANDATORY:** All candidate details, descriptions, tags, and timeline entries must strictly match the verified data in `../index/index.html`.
3. **Zero-Placeholder Guarantee:**
   - **STRICTLY PROHIBITED:** `// TODO`, `// Add more projects later`, mocked blank screens, or unfinished components.
4. **Strict TypeScript (Zero `any`):**
   - Define exact interfaces for `Project`, `ExperienceItem`, `SkillGroup`, `EducationItem`, and `ContactLink`.
5. **Tailwind CSS v4 & Custom Clay Tokens:**
   - Maintain the custom claymorphism CSS tokens in `src/app/globals.css`.
6. **SEO & Performance Benchmarks:**
   - Perfect 98+ Google Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.
   - Use `next/font/google` for zero-layout-shift font loading.

---

## 7. Mandatory Implementation Plan Protocol

Whenever preparing an implementation plan, feature addition, or architectural proposal for this repository, the agent MUST explicitly structure the plan with the following 6 mandatory sections:

### 1. Active Skills Declaration
- List every skill being activated for this specific task (e.g. `frontend-design`, `ui-ux-pro-max`, `vercel-react-best-practices`, `clean-code`).
- Detail **why** each skill is selected and how it shapes the static implementation.

### 2. Feature & Scope Specification ("What Are We Making")
- Plain-language description of what static section or component is being built or enhanced.
- Reference corresponding sections in `../index/index.html`.

### 3. Conditions, Edge Cases & Failure Modes ("Conditions We Suffer")
- Static export compatibility: ensuring all features function without server runtime.
- Accessibility barriers: color contrast ratios on clay cards, focus-visible rings for keyboard users.
- Motion sensitivity: graceful fallback when `prefers-reduced-motion` is active.
- Device responsiveness: mobile navigation overlay, wrapping of grid columns on small viewports (<640px).
- Hydration mismatches: avoiding hydration mismatch on animated terminal or local date strings.

### 4. Exact File Map ("Files to Create / Modify")
- Explicitly list all files to create (`[NEW]`) or edit (`[MODIFY]`) with relative and clickable file paths.
- Summarize the exact components, interfaces, or styles inside each file.

### 5. Aesthetics & UX/Accessibility Check
- Verify clay shadow consistency (dual drop-shadow + inset highlights).
- Validate color palette adherence (mint accent `#6FE0B0`, matte dark clay `#262B37`).
- Check keyboard navigation, ARIA landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), and contrast compliance.

### 6. Optimization & Performance Strategy
- 100% static HTML generation with `output: 'export'`.
- Static font preloading via `next/font/google`.
- Zero unnecessary client JavaScript; static SVG symbols; CSS-driven animations where possible.
