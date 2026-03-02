# MWA Industries Website - Product Requirements Document

## Original Problem Statement
Build a premium, modern, trust-building company website for MWA Industries (Metal Fabrication & Heavy Engineering). The goal is to attract industrial clients, build strong credibility, and make it extremely easy for companies to understand our capabilities and contact us.

## Company Information
- **Company Name:** MWA Industries
- **Industry:** Metal Fabrication / Heavy Engineering / Industrial Manufacturing
- **Location:** Plot No. 77, Industrial Area, Bartori (Tilda), District Raipur (C.G.), India
- **Email:** mwaindustries@gmail.com
- **Mobile:** 8770618392
- **GST:** 22AOGPN2742G1Z8

## User Personas
1. **Procurement Managers** - Looking for reliable fabrication partners for industrial projects
2. **EPC Contractors** - Seeking fabrication support for large engineering projects
3. **Plant Heads** - Needing maintenance and custom fabrication solutions
4. **Industrial Buyers** - Researching metal fabrication capabilities

## Core Requirements (Static)
- Premium dark industrial theme with safety yellow accents
- Framer Motion animations throughout
- Mobile-first responsive design
- SEO-optimized pages
- Contact form with file upload
- RFQ form with detailed project fields
- Admin dashboard for form submissions
- Sticky WhatsApp + Call buttons

## What's Been Implemented (March 2, 2026)

### Pages
1. **Home** - Hero with parallax, stats counter, strengths grid, capabilities, industries, projects preview
2. **About** - Story, vision/mission, values, facility overview, management message
3. **Services** - All 12 fabrication offerings with category navigation
4. **Industries** - 8 industry sectors with service mapping
5. **Projects** - Portfolio with category filters (Structures, Piping, Vessels, etc.)
6. **Quality & Safety** - Quality process timeline, safety practices, standards
7. **Contact** - Form with file upload, map embed, contact details
8. **Request Quote (RFQ)** - Detailed project form with material/timeline options
9. **Blog** - SEO-focused articles with category filters
10. **Admin** - Dashboard for viewing contact and RFQ submissions

### Technical Implementation
- **Frontend:** React with Framer Motion animations
- **Backend:** FastAPI with MongoDB
- **Styling:** Tailwind CSS with Oswald/Manrope fonts
- **Features:** File upload, form validation, status management

### Key Features
- Scroll progress indicator
- Animated section reveals
- Count-up statistics animation
- Project filter transitions
- Sticky contact buttons (desktop & mobile)
- Success pages with quick contact options

## Prioritized Backlog

### P0 (Critical) - Completed
- [x] All core pages implemented
- [x] Contact and RFQ forms functional
- [x] Admin dashboard for submissions
- [x] Mobile responsive design
- [x] Animations and micro-interactions

### P1 (Important) - Future
- [ ] Email notifications for form submissions
- [ ] Admin authentication/login
- [ ] SEO meta tags and schema markup implementation
- [ ] Image optimization and lazy loading

### P2 (Nice to Have) - Future
- [ ] Multi-language support (Hindi)
- [ ] Project detail pages with galleries
- [ ] Client testimonials section
- [ ] Newsletter subscription
- [ ] Live chat integration

## Next Action Items
1. Add email notification system for form submissions
2. Implement admin login/authentication
3. Add proper SEO meta tags and LocalBusiness schema
4. Optimize images for faster loading
5. Consider adding testimonials section for social proof

## Technical Architecture
- Frontend: React (CRA) + Framer Motion + Tailwind CSS
- Backend: FastAPI + Motor (async MongoDB driver)
- Database: MongoDB (contact_submissions, rfq_submissions collections)
- Deployment: Kubernetes via Emergent Platform
