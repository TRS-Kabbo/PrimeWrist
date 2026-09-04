# Prime Wrist BD — Design System

Prime Wrist BD is a luxury watch shop based in Dhaka, Bangladesh, dealing in mechanical, automatic, and quartz timepieces from established watch houses (inventory photography in the source material shows Rolex, Patek Philippe, Cartier, Omega, Tissot and Audemars Piguet pieces changing hands). The brand positions itself as a considered, high-trust reseller/boutique rather than a discount marketplace — the tagline "A Journey Through Time, Perfected" and the engraved-Roman wordmark both signal heritage and restraint over flash.

**This is a brand-guidelines-only build.** No product codebase, Figma file, or existing website was provided — only a brand mark, a color/type brief, and a folder of real inventory photography. Every component, screen and guideline in this system was authored from that brief, not lifted from an existing product. Treat this as the *first* design system for the brand, not a recreation of one.

## Sources

- `Prime Wrist BD/Logo/` — the brand mark (also supplied as an upload; flattened on emerald, no transparent version).
- `Prime Wrist BD/PIC/Watch shared/` — ~300 handheld phone photos of real inventory (watches in-hand or in the shop's felt-lined display trays), used as the basis for the Imagery guidelines and product photography in the UI kit.
- `Prime Wrist BD/PIC/IP/` — a handful of raw `.DNG` camera files (unopenable in this environment) plus one WhatsApp-shared macro shot; not used directly.
- `Prime Wrist BD/Agreements and T&C/PARTNERSHIP.docx` — a legal partnership agreement; not design-relevant, not read for brand voice.
- Written brief from the client: primary/accent/highlight hex values, font character description, brand-voice adjectives.

No Figma link, GitHub repo, or live site was supplied. If one exists, attach it and this system should be revisited — the component inventory below is a standard e‑commerce/boutique set sized to the brief, not a copy of a real product UI.

## Content fundamentals

- **Voice:** elegant, restrained, editorial. Third person and declarative — the collection is described, never hyped. No exclamation points, no emoji, no "Hey!" / "Shop now 🎉" energy.
- **Casing:** headlines and nav labels use Title Case; taglines, eyebrows and UI micro-labels are set in tracked-out small caps (uppercase in code, wide `letter-spacing`) — e.g. "A JOURNEY THROUGH TIME, PERFECTED", "COLLECTION — HERITAGE — JOURNAL — CONTACT".
- **Sentence style:** short, confident, editorial-magazine sentences. Example pull quote used throughout: *"Every mechanism we place on a wrist has been examined, wound, and judged worthy of a lifetime."*
- **Numbers:** prices are plain and undramatized — currency code (BDT) + grouped number, no "was/now" shouting, a simple struck-through original price is enough.
- **No emoji, ever.** No filler stats or badges beyond what's true (movement type, condition, limited-edition status).

## Visual foundations

- **Color:** deep emerald (`--green-900 #053827`) is the base surface almost everywhere — this is a dark-mode-first brand, not a light one with dark accents. Gold (`--gold-500 #EEBA2B`) is the sole accent: CTAs, the wordmark, active states, focus. Cream-gold (`--gold-300 #F7DC92`) is a secondary highlight for hover text and quiet emphasis — never a second CTA color. Ivory/ink neutrals exist only for light editorial sections (long-form copy, print-style pages) — see Colors cards.
- **Type:** three faces, each with one job. Cinzel (display serif, tracked capitals) is the wordmark and headline face. Cormorant Garamond (body serif) carries prices, quotes and paragraph copy — it's allowed italics for pull-quotes. Montserrat, always uppercase and letter-spaced, is every UI label, nav item, button and tagline. Body copy is never set in the sans.
- **Spacing:** 4px-based scale that accelerates at the top end (`--space-9`/`--space-10` jump to 56/80px) so hero and section spacing can be generous without a huge token list. Container caps at 1360px with fluid edge padding (`clamp(24px, 5vw, 80px)`).
- **Backgrounds:** flat emerald, no gradients, no patterns/textures. The only imagery is real product photography (see Imagery below) — never illustration, never stock-photo lifestyle shots.
- **Imagery:** the source material is handheld phone photography of real inventory — warm, shallow depth of field, shot in-hand or resting in the shop's own dark-green felt display case/tray. That *is* the brand's product-photography style: intimate and tactile, not a white-background studio flatlay. No lifestyle/model photography exists; don't invent it.
- **Motion:** slow and deliberate. 280ms `ease-standard` for chrome (color/border hover), 500ms for image zoom on hover (a gentle 1.045× scale, never a bounce). No spring/elastic easing anywhere.
- **Hover states:** text and borders shift to `--gold-300`; product names gain a gold underline; icon buttons brighten from muted to full `--text-on-dark`. Never a background darken/lighten sweep.
- **Press/disabled:** disabled controls drop to 40% opacity — no shrink, no color change.
- **Borders:** always 1px hairlines, gold at low opacity on dark surfaces (`--border-on-dark`, 28%), ink at low opacity on light surfaces — never a solid saturated border.
- **Shadows:** used sparingly and only on ivory (light-surface) cards — a soft, dark-green-tinted `--shadow-card`, never black, never on the emerald surfaces themselves (hairlines do the separation there instead).
- **Corners:** sharp by default. Buttons/inputs get a minimal 3px radius; pills (badges, filter tags) are fully rounded; product cards and imagery are square-cornered — no rounded-card-with-shadow pattern.
- **Layout:** centered wordmark navigation (links flank left/right), symmetrical hero compositions, generous negative space between sections rather than dense stacking.
- **Transparency/blur:** none currently in use — the only logo asset supplied is flattened on solid emerald with no alpha channel (see Brand → Logo Lockup card and the caveat below).

## Iconography

- **System:** [Lucide](https://lucide.dev) (`unpkg.com/lucide`), loaded from CDN, thin 1.5px stroke, no fill — closest match to the brand's hairline-and-restraint aesthetic. This is a **substitution**: no icon font, sprite sheet, or SVG set was found in the source material, so Lucide was chosen as the nearest neutral CDN icon set and every UI kit/component uses it exclusively.
- **Wrapper:** the `Icon` component renders Lucide glyphs by name (`<Icon name="shopping-bag" />`) — see `components/icons/`.
- **No emoji, no unicode-symbol icons** (aside from the small gold ◆ diamond ornament used in `Divider`, which is a drawn brand motif, not an icon).
- **Photography vs. icon:** movement type, condition, etc. are communicated with type (`Badge`/`Tag`), never with icon pictograms.

## Components

Standard boutique e-commerce primitives, sized to the brief (no source codebase/Figma defined an inventory, so this is an intentional, from-scratch set):

- **Forms** — `Button`, `IconButton`, `Input`, `Select`
- **Feedback** — `Badge`, `Tag`
- **Commerce** — `ProductCard`, `PriceTag`
- **Layout** — `SectionHeading`, `Divider`, `Tabs`
- **Navigation** — `NavBar`, `Footer`
- **Icons** — `Icon`

## Index

- `styles.css` — root stylesheet; imports everything in `tokens/`.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css` — design tokens (custom properties).
- `components/<group>/` — reusable primitives listed above, each with `.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` HTML per directory.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `ui_kits/storefront/` — the one product surface for this brand: a click-through boutique storefront (home, collection grid, product detail, contact/inquiry).
- `assets/logo-on-green.png` — the supplied brand mark, flattened on emerald.
- `assets/imagery/` — curated real inventory photography used across cards and the UI kit.
- `SKILL.md` — Claude Code / Agent Skills–compatible entry point for this design system.

## Caveats & asks

- **No transparent logo.** The only mark supplied is flattened on solid emerald (#053827) at 4000×4000px. It can't be placed on ivory, photography, or any other background without visible edges. **Ask:** please supply a transparent (PNG/SVG) cutout of the mark, and if one exists, a horizontal lockup for tight nav-bar spaces.
- **No brand font files.** Cinzel / Cormorant Garamond / Montserrat are Google Fonts substitutes chosen to match the description of the real wordmark and tagline lettering. **Ask:** if the brand has licensed font files for the actual logotype face, please attach them so headings can match exactly.
- **No professional product photography.** All available imagery is handheld phone photography of real inventory (some frames include fingers, tape, or competing shelved stock in the background); a curated subset was used, cropped tight. It sets the *style* (warm, in-hand, felt-tray) but isn't publish-ready hero photography. **Ask:** professionally shot product photography (or at minimum, cleaner handheld shots without hands/clutter) would materially improve hero sections.
- **No existing product/codebase/Figma.** The component set and storefront UI kit are original, brief-driven designs, not a recreation — please flag anything that should instead match a real site or app you already have.
