# Overview

This is a React/TypeScript web application for Alla Chihab Engineering, a Luxembourg-based engineering consultancy firm founded in 1981. The application serves as a corporate website showcasing their services in building technical equipment, energy optimization, and sustainable solutions. The site features a modern, web3-inspired design with neon color schemes and glass morphism effects, built as a single-page application with multiple pages for company information, services, projects, news, jobs, and contact.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark theme with neon accents (blue, purple, green)
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Build System**: ESBuild for server bundling, Vite for client bundling

## Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database serverless platform
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Storage**: In-memory storage implementation (MemStorage class) for development
- **Planned Storage**: PostgreSQL with Drizzle ORM for production

## Database Schema
The application defines several key entities:
- **Users**: Authentication with username/password
- **Contacts**: Contact form submissions with read status tracking
- **Job Applications**: Job application management with status tracking
- **Newsletter Subscriptions**: Email subscription management with active status

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **UI Framework**: Radix UI components for accessibility and customization
- **Icons**: Font Awesome for iconography
- **Fonts**: Google Fonts (Inter) for typography
- **Development**: Replit-specific tooling for development environment integration
- **Styling**: Tailwind CSS with PostCSS for processing
- **Validation**: Zod for runtime type checking and form validation

The architecture follows a modern full-stack pattern with clear separation between client and server code, shared schema definitions, and a modular component structure supporting the company's multilingual (French) content and professional engineering services presentation.