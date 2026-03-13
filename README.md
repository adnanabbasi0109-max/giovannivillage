# Giovanni Village Resort — Website & Hospitality Platform

A world-class luxury resort website and hospitality platform for Giovanni Village Resort, built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This is a premium hospitality website that serves as:

1. **Luxury brand experience** — Cinematic, serene, and conversion-optimised
2. **Direct booking platform** — Native 3-step booking flow
3. **Events conversion engine** — Weddings, celebrations, and corporate events
4. **Party planning tool** — 7-step interactive budget estimator
5. **SEO/AEO powerhouse** — Optimised for search engines, answer engines, and AI systems
6. **PMS-ready architecture** — Vendor-agnostic integration with Mews (primary), Cloudbeds (fallback)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **UI Components**: Custom component library (shadcn/ui-inspired)
- **Icons**: Lucide React
- **Architecture**: CMS-ready, PMS-abstracted, modular

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage (12 sections)
│   ├── stay/                     # Rooms, suites, packages
│   │   ├── rooms/[slug]/         # Individual room detail pages
│   │   └── packages/             # Packages & offers
│   ├── weddings-events/          # Events hub
│   │   ├── weddings/             # Wedding page
│   │   ├── social-celebrations/  # Social events page
│   │   ├── corporate-events/     # Corporate events page
│   │   └── venues/[slug]/        # Individual venue detail pages
│   ├── party-planner/            # 7-step party planning module
│   ├── book/                     # 3-step booking flow
│   ├── dining/                   # Restaurant pages
│   ├── experiences/              # Spa, nature, activities
│   ├── gallery/                  # Filterable photo gallery
│   ├── about/                    # About the resort
│   ├── reviews/                  # Guest testimonials
│   ├── contact/                  # Contact form & info
│   ├── faq/                      # Filterable FAQ
│   ├── policies/                 # Resort policies
│   ├── journal/[slug]/           # Blog/editorial content
│   └── [SEO landing pages]/      # 9 local search landing pages
├── components/
│   ├── ui/                       # Design system components
│   ├── layout/                   # Header, Footer
│   ├── home/                     # Homepage sections
│   └── shared/                   # PageHero, Schema, SEO template
├── data/                         # CMS-ready content/data layer
│   ├── global.ts                 # Global settings, contact, address
│   ├── rooms.ts                  # Room categories & amenities
│   ├── venues.ts                 # Event venues
│   ├── dining.ts                 # Restaurant outlets
│   ├── experiences.ts            # Activities & experiences
│   ├── testimonials.ts           # Guest reviews
│   ├── faq.ts                    # FAQ items
│   └── party-planner.ts          # Menu packages, enhancements
├── services/
│   └── pms/                      # PMS adapter architecture
│       ├── index.ts              # Provider factory
│       ├── types.ts              # Provider interface & types
│       └── adapters/
│           ├── mock-provider.ts  # Development/fallback provider
│           └── mews-provider.ts  # Mews integration stub
├── types/
│   └── index.ts                  # All TypeScript interfaces
└── lib/
    ├── utils.ts                  # Utility functions
    └── design-tokens.ts          # Design system tokens
```

## Key Features

### Guest-Facing Experience

- **Cinematic homepage** with 11 carefully designed sections
- **Premium booking flow** — 3 steps: Search → Select Room → Confirm
- **Party planner** — 7 steps: Event Type → Venue → Date → Menu → Enhancements → Estimate → Submit
- **Room detail pages** with amenities, features, pricing, and comparison
- **Venue detail pages** with capacity, layouts, features, and FAQ
- **Dining pages** with restaurant details and editorial design
- **Gallery** with category filtering and animated grid
- **FAQ** with category filtering and accordion UI
- **Contact form** with enquiry type selection
- **Journal** for editorial content and SEO

### SEO & Discoverability

- **9 SEO landing pages** targeting key local search terms
- **Structured data** (JSON-LD) for Organization, LodgingBusiness, FAQPage, BreadcrumbList
- **XML sitemap** with all pages, rooms, and venues
- **robots.txt** with proper directives
- **Open Graph** and **Twitter Card** metadata on every page
- **Semantic HTML** with proper heading hierarchy
- **Breadcrumb navigation** on all inner pages
- **AEO-optimised** summary blocks on key pages

### AI/LLM Discoverability

- **`/llms.txt`** — Concise resort summary for AI systems
- **`/llms-full.txt`** — Extended reference with all details
- **`/resort-facts.json`** — Machine-readable structured data
- Consistent entity naming across all pages
- Clean factual summaries designed for retrieval

### PMS Integration Architecture

The website uses a vendor-agnostic adapter pattern:

```
Frontend → PMSProvider Interface → Adapter → PMS API
```

- **Primary recommendation**: Mews
- **Fallback**: Cloudbeds (architecture ready)
- **Development**: Mock provider with local data
- **Environment variable**: `NEXT_PUBLIC_PMS_PROVIDER=mews|cloudbeds|mock`

The adapter architecture includes interfaces for:
- Availability & rates
- Reservations (create, modify, cancel)
- Guest profiles
- Housekeeping (placeholder)
- Folio/charges (placeholder)
- POS/restaurant (placeholder)
- Event leads (placeholder)

### Why the Guest Experience Must Remain Brand-Native

The PMS is infrastructure, not the experience. The frontend wraps all PMS interactions in branded UI patterns so guests never see a third-party interface. This ensures:
- Consistent luxury brand experience
- No iframe-looking embedded flows
- Full control over UX, copy, and conversion paths
- PMS can be swapped without guest-facing changes

### Where Future Integrations Connect

| System | Connection Point |
|--------|-----------------|
| Mews PMS | `services/pms/adapters/mews-provider.ts` |
| Cloudbeds | `services/pms/adapters/` (new adapter) |
| POS/Restaurant | `POSAdapter` interface in `services/pms/types.ts` |
| CRM | `EventLeadAdapter` interface |
| WhatsApp Concierge | Contact data + WhatsApp links already in place |
| Marketing Automation | Event lead data + guest profile hooks |
| Wedding Follow-up | Event lead pipeline + CRM adapter |
| Payment Gateway | Payment adapter in PMS interface |

## CMS Integration

The data layer (`src/data/`) is structured to map directly to a headless CMS.

**Recommended CMS options**: Sanity, Payload CMS, or Strapi

Content models ready for:
- Global settings & contact details
- Room categories & amenities
- Venues & event types
- Dining outlets & menus
- Experiences
- Testimonials
- FAQ
- Policies
- Gallery assets
- Journal/blog posts
- Homepage sections
- SEO metadata & schema fields
- Party planner pricing logic

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

```env
# PMS Provider (mews | cloudbeds | mock)
NEXT_PUBLIC_PMS_PROVIDER=mock

# Mews (when using Mews provider)
MEWS_CLIENT_TOKEN=
MEWS_ACCESS_TOKEN=
MEWS_BASE_URL=

# Site URL
NEXT_PUBLIC_SITE_URL=https://giovanniresort.com
```

## Design System

### Colours
- **Primary**: Gold (#D4A853) — brand accent
- **Base**: Ivory/Warm White (#FFFDF9) — background
- **Text**: Earth tones (#1A1814 primary, #4E483D secondary)
- **Accent**: Forest green (#5A8F6F) — nature elements
- **Neutral**: Earth palette — cards, borders, muted text

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accents**: Cormorant Garamond (serif)

### Design Principles
- Understated opulence
- Spacious, editorial layouts
- Large image-led storytelling
- Soft shadows, refined dividers
- Restrained motion (Framer Motion)
- Mobile-first responsive design

## Performance

- Server-side rendering and static generation
- Optimised image handling (placeholder system ready for real images)
- Code splitting per route
- Minimal client-side JavaScript
- Tailwind CSS for minimal CSS output

## 41 Routes

The site builds with 41 routes including static pages, dynamic room/venue pages, and SEO landing pages — all pre-rendered for maximum performance.

## License

Private — Giovanni Village Resort
