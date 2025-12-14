# SAASPRO – SaaS Landing Page Template

**SAASPRO** is a modern and professional SaaS landing page template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Perfect for startups, SaaS products, and tech companies who want a clean, conversion-focused online presence.

🔗 **Live Demo & Details:** [aniq-ui.com SaaS Dashboard Template](https://www.aniq-ui.com/en/templates/saas-dashboard-nextjs-app-template)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd landing-page-template-2
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**

   ```sh
   npm run build
   npm start
   ```

---

## 🧠 Project Structure

This project follows a **feature-based architecture** with modular, reusable components:

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
│
├── components/             # Shared/Reusable components
│   ├── ui/                 # UI primitives (Button, Input, etc.)
│   └── index.ts            # Component exports
│
├── config/                 # App configuration
│   └── site.config.ts      # Site-wide settings (nav, footer, social links)
│
├── features/               # Page-specific features (organized by page)
│   ├── index.ts            # Feature exports
│   └── home/               # Home page features
│       ├── Hero/
│       │   ├── index.tsx
│       │   ├── components/
│       │   └── config/
│       ├── SocialProof/
│       ├── Features/
│       ├── HowItWorks/
│       ├── Testimonials/
│       ├── Pricing/
│       ├── ComparisonTable/
│       ├── Integrations/
│       ├── Faq/
│       ├── BlogPreview/
│       ├── Cta/
│       └── Newsletter/
│
├── hooks/                  # Global custom hooks
│   └── use-mobile.tsx      # Mobile detection hook
│
├── layouts/                # Layout components
│   ├── Header/
│   │   ├── index.tsx
│   │   ├── components/     # DesktopNav, MobileMenu, Logo, HeaderActions
│   │   └── config/         # mega-menu.config.tsx
│   └── Footer/
│       └── index.tsx
│
├── lib/                    # Utility functions
│   └── utils.ts            # cn() helper for Tailwind classes
│
├── providers/              # React context providers
│   └── theme-provider.tsx  # ThemeProvider setup
│
├── services/               # API services (future use)
├── store/                  # State management (future use)
├── styles/                 # Additional styles
└── types/                  # TypeScript type definitions
    └── index.ts
```

---

## 📄 Adding a New Page

Follow these steps to add a new page (e.g., `/about`):

### Step 1: Create the Page Route

Create a new file in `src/app/`:

```tsx
// src/app/about/page.tsx
import { AboutHero, AboutTeam, AboutValues } from "@/features/about";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutTeam />
    </main>
  );
}
```

### Step 2: Create the Features Folder

Create the feature folder structure:

```
src/features/about/
├── index.ts              # Export all features
├── AboutHero/
│   ├── index.tsx         # Main component
│   ├── components/       # Sub-components
│   └── config/           # Feature-specific config/data
├── AboutTeam/
│   ├── index.tsx
│   └── components/
└── AboutValues/
    └── index.tsx
```

### Step 3: Create a Feature Component

Example feature component:

```tsx
// src/features/about/AboutHero/index.tsx
import { heroConfig } from "./config/hero.config";
import { HeroContent } from "./components/HeroContent";

export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <HeroContent />
    </section>
  );
}
```

### Step 4: Export from Feature Index

```tsx
// src/features/about/index.ts
export { default as AboutHero } from "./AboutHero";
export { default as AboutTeam } from "./AboutTeam";
export { default as AboutValues } from "./AboutValues";
```

### Step 5: Add to Main Features Export

```tsx
// src/features/index.ts
// Home features
export {
  Hero,
  SocialProof,
  Features,
  HowItWorks,
  Testimonials,
  Pricing,
  ComparisonTable,
  Integrations,
  Faq,
  BlogPreview,
  Cta,
  Newsletter,
} from "./home";

// About features
export { AboutHero, AboutTeam, AboutValues } from "./about";
```

### Step 6: Update Navigation (Optional)

Add the new page to `src/config/site.config.ts`:

```tsx
export const siteConfig = {
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" }, // Add new link
    // ...
  ],
};
```

---

## 🧩 Component Architecture

### UI Components (`src/components/ui/`)

Reusable, stateless UI primitives:

- `Button` - Styled button with variants
- `Input` - Form input component

### Feature Components

Each feature follows this pattern with **separation of concerns**:

```
src/features/home/Hero/
├── index.tsx           # Main export (composition only)
├── components/         # UI sub-components
│   ├── HeroContent.tsx
│   ├── HeroImage.tsx
│   └── GridPattern.tsx
└── config/             # Data, constants, configurations
    └── hero.config.ts
```

**Key Principles:**

- **index.tsx** - Only composes sub-components, no business logic
- **components/** - Reusable UI pieces specific to the feature
- **config/** - Static data, text content, configuration objects

### Layout Components

```
src/layouts/Header/
├── index.tsx           # Main export
├── components/         # Logo, DesktopNav, MobileMenu, HeaderActions, MegaMenu
└── config/             # Navigation configuration
    └── mega-menu.config.tsx
```

---

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Theme colors defined in `globals.css`
- **Dark Mode** - Supported via `next-themes`
- **Custom Utilities** - `cn()` helper for conditional classes

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")} />;
```

---

## 🔧 Configuration

### Site Config (`src/config/site.config.ts`)

Centralized configuration for:

- Navigation links
- Footer links
- Social media links
- Site metadata

### TypeScript Paths

Path aliases configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Usage:

```tsx
import { Button } from "@/components/ui/button";
import { Hero } from "@/features/home/Hero";
import { cn } from "@/lib/utils";
```

---

## 🌟 Features

- ✨ **Next.js 15** with App Router
- 📝 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for animations
- 🌙 **Dark Mode** support
- 📱 **Fully Responsive** design
- 🧩 **Feature-based Architecture** for scalability
- 🔄 **Separation of Concerns** (components, config, hooks)

---

## 📦 Tech Stack

| Technology    | Purpose                         |
| ------------- | ------------------------------- |
| Next.js 15    | React framework with App Router |
| TypeScript    | Type safety                     |
| Tailwind CSS  | Utility-first styling           |
| Framer Motion | Animations                      |
| Lucide React  | Icons                           |
| next-themes   | Theme management                |
| Radix UI      | Accessible UI primitives        |

---

## 💬 Support

For questions or support, contact the [Aniq UI team](https://www.aniq-ui.com/#contact).

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created by [Aniq UI](https://www.aniq-ui.com) — Premium Next.js Templates for modern web apps.
