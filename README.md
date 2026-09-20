# Developer Portfolio

A personal developer portfolio built on a brutalist, terminal-inspired design
system. Every visual — the hero panel, the collaborative cursors, the
typewriter headlines — is rendered from code (SVG + CSS animations), so the
site ships with zero image assets and no UI libraries.

## Tech Stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router)                       |
| UI         | React 19                                      |
| Styling    | Tailwind CSS v4 (CSS-first config)            |
| Language   | TypeScript 5 (strict)                         |
| Fonts      | Space Grotesk + IBM Plex Mono (`next/font`)   |
| Animations | Hand-written CSS keyframes + `IntersectionObserver` |

No component library, no animation library, no icon package.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the dev server with hot reload |
| `npm run build`    | Create an optimized production build |
| `npm start`        | Serve the production build           |
| `npm run lint`     | Run ESLint over the project          |
| `npm run lint:fix` | Run ESLint and apply auto-fixes      |
| `npm run format`   | Format every file with Prettier      |

## Project Structure

```
app/
  layout.tsx        Root layout: fonts, metadata, global shell
  page.tsx          Single-page composition of every section
  globals.css       Design tokens, Tailwind theme, font utilities
components/
  Navbar.tsx        Fixed header, scroll state, active-section tracking
  ...               One file per page section
data/
  profile.ts        Name, role, links, socials, nav items
  skills.ts         Tech logos, what-I-do cards, tech stack tiles
  content.ts        Metrics, process steps, references
  projects.ts       Projects and work experience
  index.ts          Barrel re-export for convenient imports
```

## Customization

All copy lives in the `data/` directory rather than being hardcoded inside
components. To make the site your own, edit those files:

1. **`data/profile.ts`** — your name, role, email, resume link, social URLs and
   the navigation items.
2. **`data/projects.ts`** — your projects (title, summary, tech, live/repo
   links) and your work history.
3. **`data/skills.ts`** — the technologies you list as logos and cards.
4. **`data/content.ts`** — headline numbers, process steps and references.

### Theming

Colors are defined as CSS custom properties in `app/globals.css`:

```css
:root {
  --yellow: #ffd600;    /* primary accent */
  --orange: #ff6b35;    /* secondary accent */
  --bg-primary: #0a0a0a; /* page background */
}
```

Change `--yellow` / `--orange` to re-skin the entire site.

## Accessibility

- **Keyboard first:** a skip link is the first tab stop on every page, and all
  interactive controls render a visible focus ring.
- **Motion:** every animation is disabled under
  `prefers-reduced-motion: reduce`.
- **Structure:** `main`, `nav` and `footer` landmarks are used throughout, with
  a single `h1` and section-level `h2`s.
- **Screen readers:** the hero workspace panel is decorative and hidden from
  assistive technology, and the typewriter headings are announced once rather
  than character by character.

## SEO

- Metadata, Open Graph and Twitter cards are generated from `data/profile.ts`.
- `app/sitemap.ts`, `app/robots.ts` and `app/manifest.ts` are convention-based
  routes.
- Person + WebSite JSON-LD is rendered by `components/StructuredData.tsx`.
- **Set `siteUrl` in `data/profile.ts` to your real domain before deploying.**

## Tooling

Editor, formatting and linting configs ship with the repo — `.editorconfig`,
`.gitattributes`, `prettier.config.mjs` and `eslint.config.mjs`. ESLint,
`eslint-config-next` and Prettier are listed as dev dependencies, so a plain
`npm install` is all that is required to run them:

```bash
npm run lint        # lint the whole project
npm run lint:fix    # lint and apply auto-fixes
npm run format      # format with Prettier
```

`eslint.config.mjs` uses ESLint's flat config format and consumes the native
flat presets exported by `eslint-config-next`, so no legacy `FlatCompat` bridge
is needed.

## Deployment

The site is fully static and prerenders to plain HTML, so any host works. On
Vercel:

1. Push the repository to GitHub.
2. Import it in Vercel — the Next.js preset is detected automatically.
3. No environment variables are required.

Next.js 16 requires **Node.js 20.9.0 or newer** (declared in `engines` in
`package.json`).

## License

None of the fonts are licensed by this repository. Space Grotesk and IBM Plex
Mono are both available under the SIL Open Font License.
