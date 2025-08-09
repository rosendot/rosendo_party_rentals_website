# Rosendo Party Rentals Website
A modern, responsive website for Rosendo's party rental business in the Rio Grande Valley, built with Next.js and TailwindCSS.

## 🎯 Project Overview
This repository contains the complete website for Rosendo Party Rentals, showcasing bounce houses, combo units, tables & chairs, and party add-ons for the Rio Grande Valley area. The site provides easy contact options for customers to request quotes and book rentals.

## 🚀 Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Inventory Showcase** - Professional grid layout displaying all rental items with photos and pricing
- **Multiple Contact Options** - Phone, SMS, WhatsApp, and email integration for easy customer communication
- **Rental Information** - Comprehensive pricing, delivery areas, setup requirements, and policies
- **FAQ Section** - Common questions and answers to help customers
- **Professional Styling** - Clean, modern design optimized for the party rental industry

## 🛠 Tech Stack
### Frontend
- **Framework:** Next.js 15.4.6 (App Router)
- **Styling:** TailwindCSS 4.x
- **Language:** TypeScript
- **Data Management:** JSON-based inventory system (expandable to database)
- **Deployment:** Optimized for Vercel hosting
### Backend (Planned)
- **Database:** Supabase or Firebase
- **API:** Next.js API routes or separate backend service
- **Authentication:** Admin dashboard for inventory management
- **Booking System:** Real-time availability and reservations

## 📁 Repository Structure
rosendo_party_rentals_website/
├── frontend/                   # Main website application
│   ├── src/
│   │   ├── app/               # Next.js pages (Home, Inventory, Contact, etc.)
│   │   ├── components/        # Reusable UI components
│   │   ├── data/             # Inventory and business data
│   │   └── lib/              # Configuration and utilities
│   ├── public/               # Static assets (images, icons)
│   ├── package.json          # Dependencies and scripts
│   └── README.md             # Frontend-specific documentation
├── backend/                   # Future backend services (planned)
│   ├── api/                  # API endpoints
│   ├── database/             # Database schemas and migrations
│   └── services/             # Business logic services
└── README.md                 # This file - main project documentation

## 🚀 Quick Start
1. **Navigate to the frontend directory**
   cd frontend
2. **Install dependencies**
   npm install
3. **Configure business details**
   - Edit `src/lib/config.ts` with Rosendo's contact information
   - Update `src/data/inventory.json` with actual rental items
   - Add item photos to `public/images/`
4. **Run locally**
   npm run dev
5. **View website**
   - Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management
### Business Information
- **Contact Details:** Update in `frontend/src/lib/config.ts`
- **Rental Policies:** Edit `frontend/src/app/rental-info/page.tsx`
- **FAQ Content:** Modify `frontend/src/app/faq/page.tsx`
### Inventory Management
- **Add Items:** Update `frontend/src/data/inventory.json`
- **Item Photos:** Place in `frontend/public/images/` directory
- **Pricing:** Set starting prices for each category

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
### Phase 1: Static Website (Current)
- [x] Responsive frontend with Next.js
- [x] Inventory showcase
- [x] Contact integration
- [x] Business information pages
### Phase 2: Backend Integration (Planned)
- [ ] **Database Setup** - Move from JSON to proper database (Supabase/Firebase)
- [ ] **Admin Dashboard** - Manage inventory, pricing, and availability
- [ ] **API Development** - Backend services for data management
### Phase 3: Booking System (Future)
- [ ] **Online Reservations** - Allow customers to check availability and book online
- [ ] **Payment Processing** - Accept deposits and payments online
- [ ] **Calendar Integration** - Real-time availability checking
- [ ] **Customer Portal** - Order history and rental tracking
### Phase 4: Advanced Features (Future)
- [ ] **Automated Communications** - Email/SMS confirmations and reminders
- [ ] **Inventory Tracking** - Real-time equipment status and maintenance
- [ ] **Analytics Dashboard** - Business insights and reporting
- [ ] **Mobile App** - Native iOS/Android applications

## 📊 Performance & SEO
- Optimized for Google search rankings
- Fast loading times with Next.js optimization
- Mobile-first responsive design
- Structured data for better search visibility

## 📞 Business Contact
**Rosendo Party Rentals**
- Serving the Rio Grande Valley
- Bounce houses, tables, chairs, and party essentials
- Professional setup and delivery service

## 🤝 Development Support
For detailed technical documentation:
- **Frontend:** See `frontend/README.md` for setup and customization
- **Backend:** Documentation will be added as backend development begins

## 📋 Development Notes
This project is structured as a monorepo to support future expansion:
- **Frontend** contains the current Next.js website
- **Backend** directory reserved for future API and database services
- Each component can be developed and deployed independently

**Built to help Rosendo's business grow in the Rio Grande Valley community**