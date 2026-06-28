# Scale Yourself — The User Manual (v1)

The **User Manual for Founder Psychology** — a content-discovery page for
scaleyourself.com, built with Next.js (App Router) from the Scale Yourself
design system.

This is **v1**: just the User Manual. It's intended to deploy on
**usermanual.scaleyourself.com**, and the main scaleyourself.com site links
out to it from its "The User Manual" nav item.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

## Routes

| Route | Page |
| ----- | ---- |
| `/`   | The User Manual — live search, featured picks, multi-select challenge filters, format filter, library grid |

## Navigation

The header mirrors the live scaleyourself.com navigation so the two stay
visually consistent. Links:

| Item | Destination |
| ---- | ----------- |
| Logo (Scale Yourself) | https://scaleyourself.com |
| The User Manual | `/` (this app) |
| Founder Coaching ▾ → Find a Founder Coach | https://scaleyourself.com/find-a-founder-coach |
| Founder Coaching ▾ → Work With Amy | https://scaleyourself.com/work-with-amy |
| About | https://scaleyourself.com/about |
| Subscribe | https://scaleyourself.com/subscribe |
| Get Started | https://scaleyourself.com/the-user-manual-for-founder-psychology |

"Founder Coaching" is a hover/click dropdown. The nav is responsive — it
collapses to a hamburger sheet below 920px. Edit the links in one place:
`components/site/SiteHeader.jsx` (and `components/site/Footer.jsx` for the
footer).

Reading actions (clicking a piece, "Start reading free") currently route to
the main site's User Manual page via `GATE` in `components/manual/types.jsx`,
since the articles still live on scaleyourself.com for v1.

## Structure

```
app/
  globals.css            Design tokens + @font-face + reset + header responsive rules
  layout.jsx             Root layout + metadata
  page.jsx               The User Manual page
components/
  ds/                    Design-system primitives: Button, Card, Badge, Avatar, Chip, Tabs, Input
  site/                  SiteHeader (nav), Footer
  manual/                ManualHero, Featured, Library, Ecosystem, types
public/assets/           Suisse Int'l fonts, gradient artwork, aurora backgrounds, logos
```

## Design system

One signature spectrum gradient (cyan → blue → violet → magenta → pink) over
deep ink and generous whitespace, set in **Suisse Int'l**. Tokens live as CSS
custom properties in `app/globals.css`.

> Note: the earlier marketing-homepage recreation (hero, coach grid, etc.) was
> removed for this v1 since the live scaleyourself.com site is being kept. Those
> components are still in the original design export if needed later.
