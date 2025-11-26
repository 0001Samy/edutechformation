# EduTech Formation Remake

A modern remake of the EduTech Formation website built with Next.js, TypeScript, Tailwind CSS, and GSAP.

## 🚀 Technologies Used

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **GSAP** for animations
- **Lucide React** for icons

## 📁 Project Structure

```
edutech-formation-remake/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header & Footer
│   ├── page.tsx                 # Homepage with GSAP animations
│   ├── about/                   # About page
│   ├── cours/                   # Courses listing
│   │   └── [slug]/             # Individual course detail
│   ├── temoignages/            # Testimonials page
│   ├── blog/                    # Blog listing
│   │   └── [slug]/             # Individual blog post
│   └── contact/                 # Contact page with form
├── components/                  # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── Button.tsx              # Button component
│   ├── Card.tsx                # Card component
│   └── SectionHeading.tsx      # Section heading component
├── lib/                         # Utility functions
│   └── gsap-utils.ts           # GSAP animation helpers
└── public/                      # Static assets
```

## 🎨 Design Features

### Brand Colors

- **Primary**: `#274bec` (Blue)
- **Accent**: `#fad02e` (Yellow)

These colors are configured in `app/globals.css` and can be used with Tailwind classes:

- `text-primary`, `bg-primary`, `border-primary`
- `text-accent`, `bg-accent`, `border-accent`

### Pages Included

1. **Homepage** (`/`) - Hero section with GSAP animations, features, and CTA
2. **About** (`/about`) - Company mission, vision, and values
3. **Courses** (`/cours`) - List of all available courses
4. **Course Detail** (`/cours/[slug]`) - Detailed course information and enrollment
5. **Testimonials** (`/temoignages`) - Student reviews and ratings
6. **Blog** (`/blog`) - Blog articles listing
7. **Blog Post** (`/blog/[slug]`) - Individual blog post
8. **Contact** (`/contact`) - Contact form and information

### Components

- **Header**: Responsive navigation with mobile menu
- **Footer**: Multi-column footer with links and social media
- **Button**: Reusable button with variants
- **Card**: Card container component
- **SectionHeading**: Consistent section headings

## 🚀 Getting Started

### Installation

```bash
cd edutech-formation-remake
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

### GSAP Animations

Pages that use GSAP animations are marked with `"use client"` directive. Example animations are implemented on the homepage:

- Hero section fade-in with stagger
- Scroll-triggered animations available in `lib/gsap-utils.ts`

### Adding Content

To add real content:

1. **Courses**: Edit the `formations` array in `app/cours/page.tsx`
2. **Blog**: Edit the `articles` array in `app/blog/page.tsx`
3. **Testimonials**: Edit the `testimonials` array in `app/temoignages/page.tsx`

For dynamic content, consider integrating a CMS like:

- Sanity
- Contentful
- Strapi
- Or a database (PostgreSQL, MongoDB, etc.)

### Images

Replace placeholder images in the `public/` directory and update image references in components.

## 🔧 Customization

### Tailwind Configuration

The project uses Tailwind CSS v4 with the new `@theme` inline syntax in `app/globals.css`. To add custom styles:

```css
@theme inline {
  --color-custom: #yourcolor;
}
```

### Fonts

The project uses Geist Sans and Geist Mono fonts. To change fonts, edit `app/layout.tsx`.

## 📦 Key Dependencies

```json
{
  "next": "^16.0.1",
  "react": "^18.3.1",
  "tailwindcss": "^4.0.0",
  "gsap": "^3.12.5",
  "lucide-react": "^0.460.0"
}
```
