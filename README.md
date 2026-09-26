# SAASPRO – SaaS Landing Page Template

**SAASPRO** is a modern SaaS landing page template built with **Next.js 15**, **TypeScript** and **Tailwind CSS**, available in **English** and **Arabic** (right-to-left).

**Live Demo & Details:** [aniq-ui.com SaaS Dashboard Template](https://www.aniq-ui.com/en/templates/saas-dashboard-nextjs-app-template)

---

## Getting Started

Requires Node.js 18.17 or later and [Yarn](https://yarnpkg.com) (the repository pins Yarn 4 through `packageManager`; run `corepack enable` once).

```sh
yarn install
cp .env.example .env.local
yarn dev
```

The dev and start scripts serve on [http://localhost:3030](http://localhost:3030). Visiting `/` redirects to `/en`.

| Script           | What it does                        |
| ---------------- | ----------------------------------- |
| `yarn dev`       | Development server on port 3030     |
| `yarn build`     | Production build                    |
| `yarn start`     | Serve the production build on 3030  |
| `yarn typecheck` | Run the TypeScript compiler         |

Every dependency is pinned to an exact version and `yarn.lock` is committed. Upgrade on purpose: edit the version, run `yarn install`, then verify the build.

---

## Environment variables

| Variable                   | Purpose                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the API that receives newsletter sign-ups. The form posts `{ "email": string }` to `${NEXT_PUBLIC_API_BASE_URL}/newsletter/subscribe`. When it is empty the form shows its error message and sends nothing. |

---

## Languages

Locales are `en` (default) and `ar`. Routes are prefixed with the locale (`/en`, `/ar`), and `<html lang dir>` follows it, so Arabic renders right-to-left.

- `messages/en.json` and `messages/ar.json` hold every visible string, aria label, alt text and the page metadata. Both files must keep the same keys.
- `src/i18n/` holds the routing (`routing.ts`), request config (`request.ts`), locale-aware navigation helpers and the text direction helper.
- `src/middleware.ts` negotiates the locale.
- Constants only carry keys, routes, icons and numbers. Components resolve the text with `useTranslations` from those keys.
- Styling uses logical utilities (`ms-*`, `pe-*`, `start-*`, `text-start`, `rtl:rotate-180` on directional icons) so the layout mirrors in Arabic.

To add a language, add it to `locales` in `src/i18n/routing.ts`, add `messages/<locale>.json`, and add its name under `LocaleSwitcher.names` in every messages file.

---

## Project structure

```
messages/                 en.json, ar.json
src/
├── app/[locale]/         layout.tsx (html, providers, metadata) and page.tsx (the page composition)
├── components/           Shared UI: ui/, backgrounds/, Logo, SectionHeader, LocaleSwitcher
├── config/               Site constants (name, URL, social links)
├── features/home/        One folder per page section
│   └── <Section>/        index.tsx, components/, constants/, types/, hooks/ and utils/ where needed
├── hooks/                Shared hooks (one per file)
├── i18n/                 next-intl routing, request config, navigation
├── layouts/              Header and Footer, each with components/, hooks/, constants/, types/
├── lib/
│   ├── api/              The only place that calls an endpoint (fetch + URL)
│   └── utils.ts          cn() helper
├── providers/            Theme and TanStack Query providers
├── services/             TanStack Query hooks and keys per domain, built on lib/api
├── styles/               globals.css
├── types/                Shared types (ApiResponse, route params)
└── middleware.ts         Locale routing
```

Conventions:

- `page.tsx` composes sections; each section folder has an `index.tsx` and everything else in subfolders.
- One component per file, one hook per file in `hooks/`, one helper per file in `utils/`. `index.ts` files only re-export.
- Data flows `src/lib/api` (endpoint) -> `src/services` (TanStack Query hook) -> feature. Components never call `fetch` directly.
- The newsletter form uses React Hook Form with a Zod schema built from translated messages.

### Adding a section

1. Create `src/features/home/<Section>/` with `index.tsx`, `components/` and `constants/`.
2. Add its texts under a new namespace in both `messages/*.json` files and read them with `useTranslations`.
3. Export it from `src/features/home/index.ts` and place it in `src/app/[locale]/page.tsx`.

---

## Styling

Tailwind CSS with CSS variables for the theme tokens in `src/styles/globals.css` (light and dark, dark by default through `next-themes`). Cards and sections separate from the page by fill; borders are kept for inputs, dividers and outlined buttons. Hover states change colour rather than scale, and entrance animations only fade.

---

## Tech Stack

| Technology     | Purpose                            |
| -------------- | ---------------------------------- |
| Next.js 15     | React framework with App Router    |
| TypeScript     | Type safety                        |
| Tailwind CSS   | Utility-first styling              |
| next-intl      | Internationalisation and routing   |
| TanStack Query | Server requests (newsletter)       |
| React Hook Form + Zod | Forms and validation        |
| Framer Motion  | Animations                         |
| Radix UI       | Accordion and slot primitives      |
| Lucide React   | Icons                              |
| next-themes    | Theme management                   |

---

## Support

For questions or support, contact the [Aniq UI team](https://www.aniq-ui.com/#contact).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created by [Aniq UI](https://www.aniq-ui.com), premium Next.js templates for modern web apps.
