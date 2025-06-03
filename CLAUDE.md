# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 13+ landing page for "Raft" (banking/financial services) built with:
- **Next.js 13.5.4** with App Router (`src/app/` directory)
- **Styled Components** for styling with SSR support via custom registry
- **Framer Motion** for animations and transitions
- **GSAP** for advanced animations
- **ReactLenis** for smooth scrolling

### Key Architecture Patterns

**Layout Structure:**
- Root layout (`src/app/layout.tsx`) wraps everything in a custom `Layout` component
- `Layout` component (`src/components/Layout/index.tsx`) provides:
  - Styled Components registry for SSR
  - ReactLenis smooth scrolling wrapper
  - Global styles injection
  - Preloader with completion state management
  - Header/Footer structure

**Component Organization:**
- `src/components/UI/` - Page sections (HeroSection, Featured, OffersSection, etc.)
- `src/components/Common/` - Reusable components (MaskText, AnimatedLink, etc.)
- `src/components/Layout/` - Layout-specific components
- All components export from `src/components/index.ts`

**Animation Patterns:**
- `MaskText` component uses Framer Motion with `useInView` for scroll-triggered text reveals
- Components follow consistent animation patterns with staggered delays
- Global smooth scrolling via ReactLenis with custom easing

**Styling:**
- Each component has co-located `styles.ts` file using styled-components
- Global styles in `src/components/Layout/GlobalStyles.tsx`
- TypeScript paths configured for `@/*` imports

**Page Structure:**
- Single page application with sections: HeroSection → Featured → OffersSection → FinancialFreedom → FinancialFuture → IntroSection → JoinSection → FAQ
- Preloader system that shows/hides content based on completion state