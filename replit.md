# replit.md

## Overview

This is a full-stack web application for EcoAdvantage Inc., a professional cleaning services company serving Michigan and Indiana. The application features a high-converting, SEO-optimized landing page with pain-point focused hero content, comprehensive service descriptions targeting local keywords, and strong call-to-action elements designed to generate leads and bookings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Storage**: PostgreSQL session store (connect-pg-simple)

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Contact Submissions Table**: Stores contact form submissions with name, phone, email, service type, and message fields
- **Schema Management**: Drizzle Kit for migrations and schema management

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with multiple sections (hero, services, about, testimonials, contact)
- **Navigation**: Sticky navigation with smooth scrolling to sections
- **Contact Form**: Form with validation using react-hook-form and Zod schemas
- **UI Library**: Complete shadcn/ui component set including buttons, cards, forms, toasts, and dialogs

### Backend Services
- **API Routes**: RESTful endpoints for blog content only (contact form handled via FormSubmit)
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage)
- **Request Logging**: Comprehensive request/response logging middleware
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - Form data submitted through FormSubmit service
   - Success/error feedback displayed via toast notifications

2. **Admin Data Access**:
   - Form submissions delivered via email by FormSubmit

## External Dependencies

### Production Dependencies
- **UI Framework**: React, Radix UI components, Tailwind CSS
- **Backend**: Express.js, Drizzle ORM, Neon Database
- **Validation**: Zod for schema validation
- **State Management**: TanStack Query for API state
- **Utilities**: date-fns, clsx, class-variance-authority

### Development Tools
- **Build**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **Replit Integration**: Custom Replit plugins for development environment

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations stored in `./migrations` directory

### Environment Configuration
- **Development**: Uses `tsx` for TypeScript execution and Vite dev server
- **Production**: Compiled JavaScript execution with static file serving
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (configured for Neon Database)
- Environment variables for database connection
- Static file serving capability for frontend assets

## Recent Changes (July 2025)

### Performance Optimization Implementation - January 13, 2025
- **Comprehensive Performance Enhancements** for decreased loading times and improved user experience
- **Request optimization** with keepalive connections and request cancellation support in API layer
- **Database query optimization** with pagination limits (20 posts, 50 contact submissions) to prevent large data transfers
- **Optimized image component** with lazy loading, intersection observer, and progressive enhancement
- **Critical resource preloading** hook for above-the-fold content and next-page prefetching
- **Enhanced HTML structure** with performance-focused meta tags, structured data, and critical CSS inlining
- **CSS performance optimizations** including GPU acceleration, font-display swap, and layout containment
- **Reduced motion support** for accessibility and performance on low-power devices
- **Advanced caching strategy** with stale-while-revalidate patterns for optimal data freshness vs performance

### Technical Optimizations Applied:
- HTTP/2 optimization with connection reuse
- Intelligent retry logic for failed requests
- Image optimization with WebP support preparation
- Layout shift prevention with critical CSS
- Browser hint optimizations (preconnect, dns-prefetch)
- Structured data for enhanced SEO performance
- Performance monitoring setup with Web Vitals compatibility

## Recent Changes (July 2025)

### Comprehensive Mobile Optimization & Anchor Scrolling - July 15, 2025
- **Complete mobile-first responsive design** ensuring website fits precisely on phone screens without horizontal scrolling
- **Comprehensive CSS optimizations** including overflow-x: hidden, proper box-sizing, and max-width constraints
- **Centralized image system** with automatic centering and responsive sizing for all website images
- **Mobile-optimized navigation** with proper text wrapping and overflow prevention
- **Hero section mobile enhancements** with responsive text sizing and full-width button layouts
- **Contact form mobile optimization** with proper input sizing and 16px font-size to prevent iOS zoom
- **Blog content mobile formatting** with responsive typography and properly centered images
- **Footer mobile responsiveness** with centered content and proper text sizing
- **Card grid mobile layouts** forcing single-column layout on mobile devices
- **Button text color fix** changed "Back to Blog" button to black text for better readability
- **Perfect anchor scrolling system** accounting for sticky navigation bar height across all pages and devices
- **Comprehensive scroll utility** with proper offset calculations and cross-page navigation support
- **Hash navigation handling** for deep linking to specific sections from external sources

### Voiceflow AI Chat Integration - July 15, 2025
- **Complete Voiceflow chat widget integration** across all website pages for customer support
- **Professional AI assistant** with project ID 687558fd943c4ecd36f04be4 for instant customer service
- **Clean widget implementation** using official Voiceflow embed code without custom overrides
- **Dashboard-controlled configuration** allowing easy updates to launcher text, colors, and agent settings
- **React-optimized integration** with proper useEffect hooks and script cleanup across all pages
- **Cross-page availability** on home, window cleaning, power washing, healthcare cleaning, carpet care, and consulting pages
- **Custom red branding** with comprehensive CSS styling to match eco-red color scheme (#dc2626) throughout all chat interface elements

### Contact Information Consolidation - July 15, 2025
- **Unified phone number system** with single contact number (269) 849-6236 across all website pages
- **Updated navigation menus** with consolidated phone buttons using green branding for better visibility
- **Service page phone updates** across window cleaning, power washing, healthcare cleaning, carpet care, and consulting pages
- **Contact section simplification** removing dual Michigan/Indiana numbers for streamlined user experience
- **SEO metadata updates** including structured data with correct phone number for search engines
- **Green phone button styling** applied consistently across all components and service pages for enhanced user experience

### Scroll Progress Indicator Implementation - July 15, 2025
- **Subtle scroll progress bar** at top of page showing reading progress with red branding
- **Performance-optimized tracking** with throttled scroll events and requestAnimationFrame
- **Mobile-responsive design** with appropriate sizing and positioning for all screen sizes
- **Smooth animations** using Framer Motion for professional user experience enhancement

### Website Structure and Service Pages Implementation
- **Complete service page structure** with dedicated pages for each service category
- **Professional service pages** including window cleaning, power washing, healthcare cleaning, carpet/floor care, and consulting/training
- **Navigation enhancement** with Services dropdown menu for improved user experience
- **Regional SEO optimization** with enhanced Michiana area targeting and local keywords
- **Team member profiles** updated with accurate credentials and experience details
- **Service page routing** added to main application with proper URL structure
- **Mobile-responsive navigation** with service sub-menu for better mobile UX
- **Brand consistency** maintained across all service pages with eco-red color scheme

### Blog System Implementation - COMPLETED
- **Complete blog system fully operational** with PostgreSQL database integration for SEO content marketing
- **Blog schema implemented** with fields for title, slug, content, author, SEO metadata, publishing status, and featured posts
- **Full CRUD API endpoints** for blog post management (create, read, update, delete, featured posts)
- **Professional blog pages** including listing page with featured section and individual post pages
- **Blog admin interface** for content management with rich editing capabilities
- **Navigation integration** with blog links added to main and mobile navigation menus
- **SEO blog content published**: Multiple posts including "The Hidden Dangers Lurking in Your Floors & Windows" and "5 Signs Your Commercial Building Needs Professional Window Cleaning"
- **SEO optimization** with meta titles, descriptions, keywords, and structured content for search engines
- **Featured posts system** for highlighting important content and driving engagement
- **Taylor Hargis award recognition** added to blog post with magazine feature image and industry recognition section

### Image and Brand Updates
- **Team member photos** properly integrated with Kevin and Taylor's professional headshots
- **Image sizing optimization** with appropriate dimensions for better page layout
- **New company logo integration** in hero section with proper sizing and positioning
- **Hero section restructure** with logo prominently displayed above company description
- **Professional image imports** using ES6 import statements for proper asset management

### Smooth Page Transition Animations - COMPLETED
- **Framer Motion integration** with comprehensive animation system for enhanced user experience
- **Page transition wrapper** with smooth fade-in/fade-out animations between route changes
- **Section reveal animations** using intersection observers for progressive content display
- **Staggered item animations** for service cards, team members, and contact elements
- **Hero section animations** with orchestrated entrance effects for logo, text, and CTAs
- **Services section animations** with containerized stagger effects for service cards
- **About section animations** with motion-enhanced team profiles and stats
- **Contact section animations** with smooth reveal of form and contact information
- **Utility animation functions** for smooth scrolling and reusable animation variants

## Previous Changes (January 2025)

### SEO Optimization & Content Enhancement
- **Updated hero section** with pain-point focused messaging targeting customer frustrations (dirty windows, stained carpets, grimy floors)
- **Added Window Cleaning service** as primary offering with chemical-free water purification messaging
- **Implemented high-converting CTAs** including "Book A Free Consultation" and "Speak to a Specialist Today"
- **Enhanced service descriptions** with local SEO keywords (Michigan window cleaning, IICRC certified carpet cleaners, commercial floor care near me)
- **Updated meta tags and titles** for better search engine optimization
- **Added trust signals** throughout the site (5-star reviews, local experts, limited availability messaging)
- **Improved contact form** with specific service options and urgency-driven copy
- **Enhanced footer** with licensing information and regional service area emphasis

### Brand Color Theme Implementation
- **Updated entire website theme** to use colors from the EcoAdvantage logo (reds, blacks, whites)
- **Implemented brand color system** with eco-red (primary), eco-black, eco-gray, and eco-accent colors
- **Updated all UI components** including buttons, headers, navigation, and service cards to use brand colors
- **Enhanced visual consistency** across hero section, services, about section, contact form, and footer
- **Maintained readability** while strengthening brand identity throughout the site

### Content Strategy
- **Pain Points Addressed**: Streaky windows, dirty carpets with allergens, unprofessional-looking floors
- **Benefits Highlighted**: Cleaner environments, increased property value, extended asset life, customer confidence
- **Local Keywords Integrated**: Michigan/Indiana location terms, IICRC certification, commercial services
- **Call-to-Action Optimization**: Limited availability messaging, cost savings emphasis, ease of booking process

The application is designed as a high-converting lead generation website that transforms prospects into customers through strategic pain-point messaging, trust-building content, and compelling calls-to-action.