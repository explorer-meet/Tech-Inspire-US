# TEKinspire — Inspired by Technology

A production-ready marketing website for **TEKinspire** built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS** and **Framer Motion**.

Design inspired by the clean enterprise patterns of `tabdelta.com` and `vasconsultancy.in`, with a custom orange/white brand theme that matches the TEKinspire logo.

## ✨ Features

- **6 fully-built pages** — Home, About Us, Services, Jobs, Clients, Contact Us
- **Animated hero** with floating cards, animated SVG underline, and rotating glass illustration
- **Scroll-progress bar** + **cursor glow** following the pointer (desktop)
- **Reveal-on-scroll** animations (Framer Motion) across every section
- **Animated counters** for stats, **logo marquee** for clients
- **Hover lift, gradient glow, scale-rotate icons** on every card
- **Responsive** down to 360px, mobile menu, sticky shrinking navbar
- **Accessible** semantic landmarks, focus rings, alt text, aria labels
- **SEO** with per-page metadata, OpenGraph
- **Production-ready** — `npm run build` and deploy to Vercel in one click

## 🎨 Brand

Theme keyed to the TEKinspire logo:

| Token              | Value      |
| ------------------ | ---------- |
| `brand-500` (core) | `#f97316`  |
| `brand-600` (deep) | `#ea580c`  |
| `brand-700` (dark) | `#c2410c`  |
| `ink-950` (text)   | `#020617`  |
| Background         | White + radial brand fades |

## 🧱 Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript** strict
- **TailwindCSS 3** + custom keyframes (`marquee`, `blob`, `float`, `shimmer`)
- **Framer Motion** (scroll, layout, animated counters)
- **lucide-react** icons
- **next/font** for Inter + Poppins

## 🚀 Getting started

```bash
# 1. Install
npm install

# 2. Dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm start
```

## 📁 Structure

```
tekinspire/
├── app/
│   ├── layout.tsx         # Global shell (nav, footer, scroll progress, cursor glow)
│   ├── page.tsx           # Home
│   ├── globals.css        # Tailwind layers + brand component classes
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── jobs/page.tsx
│   ├── clients/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx         # Sticky, shrinking nav with active pill
│   ├── Footer.tsx         # Dark footer with gradient blobs
│   ├── Hero.tsx           # Animated hero + glass illustration
│   ├── ServicesGrid.tsx   # Card grid w/ hover gradient glow
│   ├── ProcessSection.tsx # 4-step "Discover → Sustain"
│   ├── IndustriesSection.tsx
│   ├── StatsBlock.tsx     # Counters that animate into view
│   ├── Testimonials.tsx
│   ├── MarqueeLogos.tsx
│   ├── CTASection.tsx
│   ├── ContactForm.tsx    # Validated form with success state
│   ├── Reveal.tsx         # Scroll-reveal wrapper
│   ├── PageHeader.tsx     # Shared hero for inner pages
│   ├── ScrollProgress.tsx # Top progress bar
│   └── CursorGlow.tsx     # Pointer-follow soft glow
├── lib/data.ts            # All content (services, jobs, stats, values…)
├── public/logo.png        # Company logo (downloaded from tekinspireus.com)
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## ✏️ Editing content

All copy (services, jobs, stats, testimonials, contact info) lives in **`lib/data.ts`**.
Update the constants there and every page picks it up automatically.

To swap the logo, replace `public/logo.png` (keep the same filename).

## 🌐 Pages

| Route       | What's on it |
| ----------- | ------------- |
| `/`         | Hero, marquee, stats, services preview, process, industries, testimonials, CTA |
| `/about`    | Story, mission/vision/approach/promise, stats, values, process, CTA |
| `/services` | Full grid of 14 services + deep detail rows with bullet points, process, industries, CTA |
| `/jobs`     | Benefits, 6 open roles with tags/location/exp, "submit resume" CTA |
| `/clients`  | Logo wall, stats, partner grid, 4 case studies, testimonials, industries |
| `/contact`  | Office card + embedded map + multi-field form with success state |

## 📦 Deployment

Optimised for **Vercel** — push to GitHub and import. No env vars required.

Other platforms work too (Netlify, Render, AWS Amplify) — it's a standard Next.js app.

## 📞 Contact info baked in

- **Address:** 1581 RT 27, Suite 101, Edison, NJ 08817
- **Phones:** 201-905-3550 · 732-640-7972
- **Email:** info@tekinspireus.com

— Built with care. ⚡
