# Gran Fiesta Rentals Website

A modern, responsive display website for Gran Fiesta Rentals party rental business in the Rio Grande Valley, built with Next.js and TailwindCSS.

## 🎯 Project Overview

This repository contains a display-only website for Gran Fiesta Rentals, showcasing tables & chairs rental services for the Rio Grande Valley area. The site provides comprehensive rental information, interactive delivery zone mapping, and multiple contact options for customers to request quotes.

**Current Status:** Display website with JSON-based data management (no backend required)
**Future Plans:** Integration with Stripe or Shopify for online booking and payments

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Inventory Display** - Tables and chairs with pricing and descriptions
- **Interactive Delivery Zone Map** - Leaflet-powered map showing three pricing tiers (Free, $20, $40 delivery zones) with GeoJSON polygon boundaries
- **Multiple Contact Options** - Phone, SMS, WhatsApp, and email integration for easy customer communication
- **Rental Information Page** - Comprehensive pricing details, delivery areas, setup requirements, and rental policies
- **FAQ Section** - 9 common questions and answers with expandable accordion interface
- **Service Areas** - Covering 10 cities in the Rio Grande Valley with zone-based delivery pricing
- **Party-Themed Design** - Gradient backgrounds, custom animations, and festive styling
- **Modern Design System** - Professional iconography, refined typography hierarchy, and micro-interactions
- **Sticky Header Navigation** - Fixed header with animated underlines and smooth transitions
- **Enhanced Footer** - Comprehensive site links, contact info, and social media integration

## 🛠 Tech Stack

### Frontend (Current)
- **Framework:** Next.js 15.4.6 (App Router)
- **UI Library:** React 19.0.0
- **Styling:** TailwindCSS 4.x
- **Language:** TypeScript 5.0.0
- **Animation:** GSAP 3.x for professional animations and interactions
- **Effects:** Canvas-Confetti for celebratory particle effects
- **Icons:** Lucide React for professional iconography
- **Maps:** Leaflet 1.9.4 + React-Leaflet 5.0.0 for interactive delivery zones
- **Data Management:** JSON files for inventory and GeoJSON for delivery zones
- **Fonts:** Google Fonts (Fredoka, Nunito, Inter)
- **Deployment:** Optimized for Vercel hosting

### Future Integration (Planned)
- **Payment Processing:** Stripe or Shopify for online booking and payments
- **Booking System:** Real-time availability and reservations (TBD based on chosen platform)

## 📁 Repository Structure

```
gran_fiesta_rentals/
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx                  # Home page
│   │   ├── inventory/                # Product showcase
│   │   ├── service-areas/            # Interactive delivery map
│   │   ├── rental-info/              # Policies & pricing
│   │   ├── faq/                      # FAQ accordion
│   │   ├── contact/                  # Contact & quote form
│   │   └── layout.tsx                # Root layout with Header/Footer
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx                # Navigation header
│   │   ├── Footer.tsx                # Footer with links
│   │   └── ServiceAreaMap.tsx        # Leaflet map component
│   ├── data/                  # JSON-based data storage
│   │   ├── inventory.json            # Tables & chairs catalog
│   │   ├── free-zones.json           # Free delivery GeoJSON
│   │   ├── 20-dollar-zones.json      # $20 delivery GeoJSON
│   │   └── 40-dollar-zones.json      # $40 delivery GeoJSON
│   └── lib/                   # Configuration and utilities
│       └── config.ts                 # Business info & settings
├── public/                    # Static assets (SVG icons)
├── package.json               # Dependencies and scripts
└── README.md                  # This file - main project documentation
```

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure business details**
   - Edit `src/lib/config.ts` with contact information
   - Update `src/data/inventory.json` with actual rental items
   - Add item photos to `public/images/`

3. **Run locally**
   ```bash
   npm run dev
   ```

4. **View website**
   - Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management

All content is managed through JSON files and TypeScript configuration - **no backend or database required**.

### Business Information
- **Contact Details:** Update in [src/lib/config.ts](src/lib/config.ts)
  - Phone: (956) 534-2589
  - Email: granfiestarentals@gmail.com
  - Business hours, social media links
- **Rental Policies:** Edit [src/app/rental-info/page.tsx](src/app/rental-info/page.tsx)
- **FAQ Content:** Modify [src/app/faq/page.tsx](src/app/faq/page.tsx)

### Inventory Management
- **Add/Edit Items:** Update [src/data/inventory.json](src/data/inventory.json)
- **Pricing:** Set per-day rental prices for each item
- **Descriptions:** Add capacity and feature details

### Delivery Zone Configuration
- **Free Zone:** Edit [src/data/free-zones.json](src/data/free-zones.json)
- **$20 Zone:** Edit [src/data/20-dollar-zones.json](src/data/20-dollar-zones.json)
- **$40 Zone:** Edit [src/data/40-dollar-zones.json](src/data/40-dollar-zones.json)
- Format: GeoJSON with Polygon/MultiPolygon geometries

## 🌐 Deployment Options

### Recommended: Vercel
- Connect GitHub repository to Vercel
- Automatic deployments on code changes
- Free tier available with custom domain support

### Alternative Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🔄 Development Roadmap

### Phase 1: Display Website (✅ Complete)
- [x] Responsive frontend with Next.js and TypeScript
- [x] Tables & chairs inventory display
- [x] Interactive delivery zone map with GeoJSON polygons
- [x] Service areas covering 10 cities in Rio Grande Valley
- [x] Multiple contact options (phone, SMS, WhatsApp, email)
- [x] Rental information and FAQ pages
- [x] Party-themed design with gradients and animations
- [x] JSON-based data management (no backend needed)
- [x] Professional design system with Lucide icons and micro-animations
- [x] Enhanced UX/UI across all pages with skeleton loaders and smooth transitions
- [x] Sticky header with animated navigation and mobile menu with staggered animations
- [x] Enhanced footer with professional icons and comprehensive navigation
- [x] GSAP-powered animations throughout the site with 3D effects and interactive elements
- [x] Advanced home page animations with floating gradient text and card tilt effects
- [x] Inventory page animations with staggered grid entrance, floating icons, and price counters

### Phase 2: Online Booking (Planned)
- [ ] **Platform Selection** - Choose between Stripe or Shopify integration
- [ ] **Payment Processing** - Accept online bookings and deposits
- [ ] **Booking Interface** - Date selection and item reservation
- [ ] **Email Confirmations** - Automated booking confirmations

### Phase 3: Enhanced Features (Future)
- [ ] **Availability Calendar** - Real-time booking status
- [ ] **Customer Portal** - Order tracking and history
- [ ] **Admin Dashboard** - Manage inventory and bookings
- [ ] **Automated Reminders** - SMS/Email notifications

## 📊 Performance & SEO

- Optimized for Google search rankings
- Fast loading times with Next.js optimization
- Mobile-first responsive design
- Structured data for better search visibility

## 📊 Current Website Pages

1. **Home** (`/`) - Landing page with call-to-action buttons
2. **Inventory** (`/inventory`) - Tables and chairs catalog with pricing
3. **Service Areas** (`/service-areas`) - Interactive map with delivery zones and pricing
4. **Rental Info** (`/rental-info`) - Policies, pricing details, and booking information
5. **FAQ** (`/faq`) - Frequently asked questions with expandable answers
6. **Contact** (`/contact`) - Multiple contact methods and quick quote form

## 📞 Business Contact

**Gran Fiesta Rentals**
- **Phone:** (956) 534-2589
- **Email:** mifiestarentals@gmail.com
- **Service Area:** Rio Grande Valley (10 cities)
- **Products:** Tables and chairs for parties and events
- **Delivery:** Zone-based pricing (Free, $20, or $40 based on location)

## 🗺️ Service Areas

**Cities Served:**
- Edcouch-Elsa
- Edinburg
- McAllen
- Pharr
- Mission
- Hidalgo
- Sullivan City
- Raymondville
- Harlingen
- San Benito

**Delivery Zones:**
- **Free Delivery:** Core service areas
- **$20 Delivery:** Extended zones (9 regions)
- **$40 Delivery:** Distant zones (2+ regions)

## 🎨 Design System

### Typography Hierarchy
- **Headings:** `font-extrabold` with `tracking-tight` for impactful titles
- **Subheadings:** `font-bold` for section headers and labels
- **Body Text:** `font-light` for comfortable readability
- **Price Display:** Large bold numbers with baseline-aligned units

### Component Styling
- **Cards:** `rounded-2xl` with subtle shadows and hover effects
- **Padding:** `p-8 lg:p-10` for consistent spacing
- **Borders:** `border border-gray-100` for subtle separation
- **Shadows:** `shadow-sm` to `hover:shadow-lg` for depth

### Animations
- **GSAP Timeline Sequences:** Professional entrance animations with coordinated timing
- **3D Card Tilt:** Mouse-following 3D rotation effects on hover for interactive cards
- **Staggered Grid Entrance:** Product cards appear in wave patterns with 3D rotation
- **Floating Elements:** Continuous gentle floating animations for icons and gradient text
- **Counter Animations:** Prices count up from $0 for engaging effect
- **Slide & Reveal:** Section headers slide in from left with bounce effects
- **Elastic Bounces:** Springy entrance animations for hero elements
- **Shimmer Effects:** Gradient text with continuous shimmer animation
- **Loading States:** Skeleton loaders with pulse animations (inventory page)

### Interactive Elements
- **Group Hover Patterns:** Coordinated animations on parent hover
- **3D Card Interactions:** Cards tilt in 3D space following mouse movement
- **Magnetic Effects:** Elements respond to cursor proximity with smooth GSAP animations
- **Micro-Interactions:** Icon scales, rotations, and translations with elastic easing
- **Form Focus States:** Ring effects with brand colors
- **Dynamic Pricing:** Animated counters that count up to final price values

### Icon System
- **Library:** Lucide React for consistent, professional iconography
- **Usage:** Semantic icons throughout (Phone, Mail, Package, MapPin, PartyPopper, Menu, X, etc.)
- **Styling:** Coordinated with brand colors and hover states
- **Animation:** Icon rotations, scales, and translations on hover

### Navigation
- **Sticky Header:** Fixed position with backdrop blur for modern feel
- **Animated Underlines:** Desktop nav links feature expanding underline on hover
- **Mobile Menu:** Slide-in menu with staggered fadeInUp animations
- **CTA Button:** Prominent call-to-action with phone icon and lift effect

## 📋 Technical Notes

- **No Backend Required:** All data stored in JSON files
- **No Database:** Inventory and zones managed through static files
- **Easy Updates:** Edit JSON files to modify content
- **Future-Ready:** Structured for easy integration with Stripe/Shopify
- **GSAP Integration:** Professional animation library with `fromTo()` methods and proper cleanup
- **Performance Optimized:** Animations use `will-change` and `transform-style: preserve-3d` for smooth 60fps rendering
- **Navigation Safety:** Proper animation state management prevents white screen issues when navigating between pages
- **Git History:** Recent focus on GSAP animations, 3D interactions, and professional motion design

---

**Built to showcase Gran Fiesta Rentals' services in the Rio Grande Valley community**