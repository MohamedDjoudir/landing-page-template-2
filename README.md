# SAASPRO: SaaS Landing Page Template

**SAASPRO** is a SaaS landing page with pricing, built with **Next.js 15**, **TypeScript** and **Tailwind CSS**. It ships in **English** and **Arabic** (right to left). It is one Next.js app with no database and no backend.

**Live demo and details:** [aniq-ui.com](https://www.aniq-ui.com/en/templates/saas-dashboard-nextjs-app-template)

---

## Requirements

Pick one:

- **Docker** (Docker Desktop on Windows and macOS). Nothing else is needed.
- **Node.js 22 or newer** and **Yarn 4**. The project pins Yarn 4 in `package.json`. If the `yarn` command is missing, run `corepack enable` once.

---

## Path A: run it with Docker

Open a terminal in this folder and run:

```sh
docker build -t saas-landing .
docker run -p 3030:3030 saas-landing
```

Open [http://localhost:3030](http://localhost:3030). Stop it with `Ctrl+C`.

---

## Path B: run it without Docker

Open a terminal in this folder.

1. Install the dependencies:

   ```sh
   yarn install
   ```

2. Start the development server:

   ```sh
   yarn dev
   ```

   Open [http://localhost:3030](http://localhost:3030). The page reloads when you save a file.

3. For production, build once, then serve the build:

   ```sh
   yarn build
   yarn start
   ```

   It also answers on [http://localhost:3030](http://localhost:3030).

No `.env` file is needed for a first run. Visiting `/` sends the visitor to `/en`, or to `/ar` when the browser prefers Arabic.

---

## A port is already in use?

Another program is using port 3030. Stop that program, or use another port:

- **Docker:** change the left number, for example `docker run -p 3041:3030 saas-landing`, then open http://localhost:3041.
- **Without Docker:** run `yarn dev -p 3041` (or `yarn start -p 3041`), then open http://localhost:3041.

---

## Scripts

| Script           | What it does                                 |
| ---------------- | -------------------------------------------- |
| `yarn dev`       | Development server on port 3030              |
| `yarn build`     | Production build                             |
| `yarn start`     | Serve the production build on port 3030      |
| `yarn typecheck` | Check the TypeScript types                   |

Every dependency is pinned to an exact version and `yarn.lock` is included. To upgrade a package, edit its version in `package.json`, run `yarn install`, then run `yarn build` to check it.

---

## Environment variables

Both are optional. To change one, copy `.env.example` to `.env.local` and edit it. They are read when the app builds, so restart `yarn dev` or run `yarn build` again after a change. With Docker, pass them as build arguments, for example `docker build --build-arg NEXT_PUBLIC_SITE_URL=https://www.your-domain.com -t saas-landing .`

| Variable                   | Default                 | Purpose |
| -------------------------- | ----------------------- | ------- |
| `NEXT_PUBLIC_SITE_URL`     | `http://localhost:3030` | The public address of the site. The canonical link and the social sharing cards are built from it. Set it to your domain before you go live. |
| `NEXT_PUBLIC_API_BASE_URL` | empty                   | An API that receives newsletter sign-ups. The form posts `{ "email": string }` to `${NEXT_PUBLIC_API_BASE_URL}/newsletter/subscribe`. When it is empty, the form sends nothing and shows its error message. |

---

## Make it yours

| To change | Edit |
| --------- | ---- |
| Brand name (logo and page text) | `name` in `src/config/site.ts` |
| Social links in the footer | `links` in `src/config/site.ts` |
| Any text on the page, the page title and description | `messages/en.json` and `messages/ar.json` |
| Hero image, favicons, social sharing image | `public/` (`public/images/hero.webp`, `public/favicon.svg`, `public/image.png`) |
| Testimonial photos, company and integration logos | The `constants/` folder of each section under `src/features/home/` |
| Prices and plan features | `src/features/home/Pricing/constants/plans.ts` and `src/features/home/ComparisonTable/constants/` |
| Theme colours | The CSS variables in `src/styles/globals.css`. The purple and pink accents are Tailwind classes (`purple-*`, `pink-*`) in the components. |
| Fonts | `src/lib/fonts.ts` (Inter for English, Noto Sans Arabic for Arabic) |
| Which sections appear, and their order | `src/app/[locale]/page.tsx` |

The company and integration logos are SVG files in `public/images/logos/`. The testimonial photos load from `images.unsplash.com`, so they need an internet connection. To serve your own, put the files in `public/` and use paths such as `/images/your-photo.jpg`.

---

## Languages

The page ships in English (`en`, the default) and Arabic (`ar`). Every address starts with the language (`/en`, `/ar`), and Arabic renders right to left.

- `messages/en.json` and `messages/ar.json` hold every visible string, aria label, alt text and the page title and description. Both files must keep the same keys.
- `src/i18n/` holds the routing (`routing.ts`), the request config (`request.ts`), the navigation helpers and the text direction helper.
- `src/middleware.ts` picks the language for a visitor.

To add a language, add it to `locales` in `src/i18n/routing.ts`, add `messages/<locale>.json`, and add its name under `LocaleSwitcher.names` in every messages file.

---

## Project structure

```
messages/                 en.json, ar.json
public/                   Images, favicons, web manifest
src/
├── app/[locale]/         layout.tsx (html, providers, metadata) and page.tsx (the page)
├── components/           Shared UI: ui/, backgrounds/, Logo, SectionHeader, LocaleSwitcher
├── config/               Site constants (name, URL, social links)
├── features/home/        One folder per page section
│   └── <Section>/        index.tsx, components/, constants/, types/, hooks/ and utils/ where needed
├── hooks/                Shared hooks (one per file)
├── i18n/                 next-intl routing, request config, navigation
├── layouts/              Header and Footer
├── lib/
│   ├── api/              The only place that calls an endpoint
│   └── utils.ts          cn() helper
├── providers/            Theme and TanStack Query providers
├── services/             TanStack Query hooks per domain, built on lib/api
├── styles/               globals.css
├── types/                Shared types
└── middleware.ts         Language routing
```

### Adding a section

1. Create `src/features/home/<Section>/` with `index.tsx`, `components/` and `constants/`.
2. Add its texts under a new key in both `messages/*.json` files and read them with `useTranslations`.
3. Export it from `src/features/home/index.ts` and place it in `src/app/[locale]/page.tsx`.

---

## Styling

Tailwind CSS, with the theme tokens as CSS variables in `src/styles/globals.css`. The page renders in dark mode. The layouts use logical utilities (`ms-*`, `pe-*`, `start-*`, `text-start`) so they mirror in Arabic.

---

## Tech stack

| Technology            | Purpose                          |
| --------------------- | -------------------------------- |
| Next.js 15            | React framework with App Router  |
| TypeScript            | Type safety                      |
| Tailwind CSS          | Styling                          |
| next-intl             | Languages and routing            |
| TanStack Query        | Newsletter request               |
| React Hook Form + Zod | Newsletter form and validation   |
| Framer Motion         | Animations                       |
| Radix UI              | Accordion and slot primitives    |
| Lucide React          | Icons                            |
| next-themes           | Theme management                 |

---

## Support

For questions or support, contact the [Aniq UI team](https://www.aniq-ui.com/#contact).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Created by [Aniq UI](https://www.aniq-ui.com), premium Next.js templates for modern web apps.
