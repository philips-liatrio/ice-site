# Ice Baseball — Website

A modern rebuild of [icebaseball.org](https://www.icebaseball.org/) for **Ice Baseball**, a youth travel baseball organization in East Tennessee (Knoxville & Chattanooga).

The goal of this rebuild: keep **all** the functionality of the original Squarespace site, but make it **faster**, **easier to edit**, and **better looking** — built on a modern, content-driven stack.

> ⚠️ **This project is in development.** All contact information (email, phone,
> store links, social profiles) is currently **dummy data** so nothing can
> accidentally reach the real organization while we build. See
> [Dummy data & launch checklist](#-dummy-data--launch-checklist) before going live.

---

## 🧱 Tech stack

| Tool | Why |
| :--- | :--- |
| [Astro](https://astro.build) | Ships near-zero JavaScript → very fast. Content-first. |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling, fast to iterate. |
| `astro:assets` | Automatic image optimization (resize + WebP). |
| TypeScript | Type-safe content/config. |
| GitHub Actions | CI build on every push & PR. |

---

## 🚀 Getting started

Requires **Node.js 22+** (the build runs on Node 22 in CI).

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

> On Windows, the project's `CLAUDE.md` notes you can run the dev server in the
> background with `astro dev --background` (manage it via `astro dev status`,
> `astro dev logs`, `astro dev stop`).

---

## 📂 Project structure

```text
ice-site/
├── .github/workflows/ci.yml     # CI: build on push & PR
├── public/
│   ├── favicon.png              # site favicon (the Ice logo)
│   └── images/from-old-site/    # all 15 original photos pulled from the old site
├── src/
│   ├── assets/
│   │   ├── logo.png             # logo (optimized at build time)
│   │   └── coaches/             # coach/team photos used on the Coaches page
│   ├── components/              # Header, Footer, PageHeader, SocialLinks
│   ├── config.ts                # ⭐ site-wide content (edit this first)
│   ├── data/coaches.ts          # ⭐ teams, bios, and photo mappings
│   ├── layouts/Layout.astro     # shared page shell (head, nav, footer)
│   ├── pages/                   # one file per page → one route
│   │   ├── index.astro          # Home
│   │   ├── about.astro
│   │   ├── tryouts.astro
│   │   ├── coaches.astro
│   │   ├── team-shop.astro
│   │   ├── uniforms.astro
│   │   ├── terms.astro
│   │   └── contact.astro
│   └── styles/global.css        # Tailwind import + brand theme tokens
└── package.json
```

Each file in `src/pages/` becomes a route automatically (e.g. `about.astro` → `/about`).

---

## ✏️ Editing content

Most updates **don't require touching components** — they live in two files.

### `src/config.ts` — site-wide info

The single source of truth for:

- Organization name, tagline, description, region
- **Contact** email & phone
- **External links**: tryout sign-up (Google Form), the team store, store invite code
- **Social** profile URLs (Facebook, Instagram, X, TikTok)
- **Contact form** delivery (Formspree form ID)
- **Navigation** order

Change the text between the quotes and the whole site updates.

### `src/data/coaches.ts` — teams & coaches

One block per team. Each entry supports:

| Field | Meaning |
| :--- | :--- |
| `ageGroup` | Chip shown on the card, e.g. `"17/18"` |
| `name` | Team name, e.g. `"Team Ice Select Olmeda"` |
| `coaches` | Coach names line |
| `bio` | The team/coach bio paragraph |
| `location` | `"Knoxville"` or `"Chattanooga"` |
| `pending` | `true` → shown in the "Coaching Positions Open" section |
| `photo` | Filename in `src/assets/coaches/` (or omit for a branded placeholder) |
| `photoAlt` | Accessible description of the photo |
| `focal` | Crop focus for the banner, e.g. `"center 25%"` (lower % = show more top) |

### Pages

Page copy (Home, About, Tryouts, Terms, etc.) lives near the top of each
`src/pages/*.astro` file in plain text.

---

## 🖼️ Images

- **Originals** from the old site are archived in `public/images/from-old-site/`.
- Images used in the build live in `src/assets/` and are **optimized
  automatically** (resized + converted to WebP) — no manual export needed.
- To add a coach photo: drop it in `src/assets/coaches/`, then set the team's
  `photo` field to the filename in `src/data/coaches.ts`.
- If a face gets cropped on a Coaches card, tune that team's `focal` value.

---

## 📨 Contact form

The Contact page has a working form. It submits to
[Formspree](https://formspree.io) when a form ID is set in `config.ts`
(`formspreeId`). Until then, it **falls back** to opening the visitor's email
client addressed to the configured `email`.

To enable real submissions:

1. Create a free form at [formspree.io](https://formspree.io), pointed at the real inbox.
2. Put the form ID (the part after `/f/`) into `formspreeId` in `src/config.ts`.

---

## 🤖 CI

`.github/workflows/ci.yml` runs on every push to `main` and every pull request:

- Installs dependencies with `npm ci`
- Builds the site with `npm run build`
- Uploads the `dist/` output as an artifact

A green check means the site builds cleanly.

---

## 🌳 Development workflow

```sh
git checkout -b feature/my-change   # branch per change
# ...edit...
git commit -m "feat: describe the change"
git push -u origin feature/my-change
gh pr create                        # open a PR → CI runs → review → merge
```

Keep `main` always building. (Branch protection isn't enabled yet, but the
intent is PR-based changes.)

---

## ✅ Dummy data & launch checklist

All real contact info is currently **fictional placeholders** (`example.com`
domains, `555-01xx` phone) so nothing reaches the real org during development.
The real values are preserved in a clearly-marked comment block at the top of
`src/config.ts`.

**Before launch**, in `src/config.ts`:

- [ ] Restore the real `email` and `phone` / `phoneHref`
- [ ] Set `links.tryoutForm` to the real Google Form URL
- [ ] Set `links.teamShop` + `teamShopCode` to the real store
- [ ] Restore the real `social` profile URLs
- [ ] Create a Formspree form and set `formspreeId`
- [ ] Verify the 3 lower-confidence Coaches photos (Swigert, Cusey, Pointer) — see `src/data/coaches.ts`
- [ ] Fill in the real **Terms** content (`src/pages/terms.astro`)
- [ ] Choose a host and deploy `dist/` (e.g. Netlify, Cloudflare Pages, Vercel)

---

## 📦 Deployment

The site builds to static files in `./dist/`, so it can be hosted anywhere
(Netlify, Cloudflare Pages, Vercel, GitHub Pages, etc.). Point the host at this
repo, set the build command to `npm run build` and the output directory to
`dist`.
