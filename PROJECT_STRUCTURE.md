# Project Structure

```
trisz/
├── public/
│   └── favicon.svg                 # Website favicon
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx          # Navigation header with language selector
│   │       ├── Footer.tsx          # Footer with links and contact info
│   │       └── Layout.tsx          # Main layout wrapper
│   ├── pages/
│   │   ├── Home.tsx                # Landing page with hero & overview
│   │   ├── Services.tsx            # Detailed services (drone, accounting, media)
│   │   ├── References.tsx          # Portfolio & social media feed
│   │   ├── About.tsx               # Company information
│   │   ├── WhyUs.tsx               # Benefits and statistics
│   │   └── Contact.tsx             # Contact form & information
│   ├── i18n/
│   │   ├── config.ts               # i18next configuration
│   │   └── locales/
│   │       ├── hu.json             # Hungarian translations (default)
│   │       ├── en.json             # English translations
│   │       └── de.json             # German translations
│   ├── App.tsx                     # Main app with routing & SEO
│   ├── main.tsx                    # Application entry point
│   ├── index.css                   # Global styles & Tailwind
│   └── vite-env.d.ts              # TypeScript environment types
├── index.html                      # HTML template
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.node.json             # TypeScript config for Vite
├── vite.config.ts                 # Vite build configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── .eslintrc.cjs                  # ESLint configuration
├── .gitignore                     # Git ignore rules
├── README.md                       # Project overview
├── SETUP.md                        # Detailed setup guide
└── PROJECT_STRUCTURE.md           # This file
```

## Component Architecture

### Layout Components
- **Header**: Sticky navigation with scroll effects, mobile menu, language switcher
- **Footer**: Company info, links, contact details, social media
- **Layout**: Wraps all pages with header and footer

### Page Components
Each page is fully responsive and includes:
- Animations (Framer Motion)
- SEO optimization
- Mobile-first design
- Premium color scheme

### Key Features per Page

#### Home (`/`)
- Hero section with animated background
- Service cards with icons
- Benefits showcase
- Call-to-action sections

#### Services (`/services`)
- Three service categories:
  - Drone surveys (NDVI, yield estimation, damage assessment, area measurement)
  - Accounting (tax advisory, payroll, business accounting)
  - Media (drone photos/videos, promotional films, social content)

#### References (`/references`)
- Portfolio grid with hover effects
- Social media feed integration placeholder
- Image galleries

#### About (`/about`)
- Company introduction
- Experience highlights
- Mission statement
- Team photos

#### Why Us (`/why-us`)
- Six key benefits with icons
- Statistics showcase
- Visual emphasis on expertise

#### Contact (`/contact`)
- Quote request form with validation
- Service type selection
- Budget range (optional)
- Contact information
- Embedded Google Map

## Technology Stack

### Core
- **React 18.2**: UI library
- **TypeScript 5.2**: Type safety
- **Vite 5.1**: Build tool

### Routing & State
- **React Router 6.22**: Client-side routing
- **React Hook Form 7.51**: Form management

### Styling
- **Tailwind CSS 3.4**: Utility-first CSS
- **Framer Motion 11.0**: Animation library

### Internationalization
- **i18next 23.10**: i18n framework
- **react-i18next 14.0**: React bindings

### Icons & UI
- **Lucide React 0.344**: Icon library

## Color System

### Primary Colors
```css
--primary-dark: #0A1628   /* Deep navy blue */
--primary-blue: #1E3A5F   /* Medium blue */
--primary-light: #2E5C8F  /* Light blue */
```

### Accent Colors
```css
--accent-gold: #D4AF37      /* Premium gold */
--accent-lightGold: #F0D78C /* Light gold */
```

### Usage
- **Dark backgrounds**: Primary dark & blue
- **Highlights**: Accent gold
- **Text**: White on dark, dark on light
- **Hover states**: Accent light gold

## Typography

### Font Families
- **Headings**: Playfair Display (serif) - Elegant, classic
- **Body**: Montserrat (sans-serif) - Clean, modern

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extra Bold: 800

## Responsive Breakpoints

```css
sm:  640px  /* Mobile landscape */
md:  768px  /* Tablet */
lg:  1024px /* Desktop */
xl:  1280px /* Large desktop */
2xl: 1536px /* Extra large */
```

## Form Validation

Contact form includes:
- Required fields validation
- Email format validation
- Phone number validation
- Real-time error messages
- Success/error feedback
- Loading states

## SEO Features

- Dynamic page titles
- Meta descriptions per page
- Semantic HTML structure
- Optimized keywords
- Structured data ready
- Fast loading times
- Mobile-friendly

## Language Support

Default: **Hungarian** (hu)

Supported languages:
- Hungarian (HU) 🇭🇺
- English (EN) 🇬🇧
- German (DE) 🇩🇪

Language persists across page navigation.

## Performance Optimizations

- Code splitting by route
- Lazy loading components
- Optimized images
- CSS purging in production
- Minified JavaScript
- Tree shaking
- Fast refresh in development

## Animation Types

- **Fade in**: Opacity transitions
- **Slide in**: Y-axis movement
- **Scale**: Size transformations
- **Blob**: Floating background elements
- **Bounce**: Scroll indicators
- **Hover effects**: Interactive feedback

## Browser Compatibility

✅ Modern browsers (last 2 versions)
✅ Mobile browsers (iOS Safari, Chrome)
✅ Progressive enhancement
✅ Graceful degradation

---

**Version**: 1.0.0  
**Last Updated**: October 2024  
**Built For**: Plant Saver & Accounting Kft.

