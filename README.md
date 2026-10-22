# Medartis Design System

Medartis AG is a Swiss medical-technology company founded in **1997 in Basel** and listed on SIX Swiss
Exchange as **MED**. It designs, manufactures and sells **titanium osteosynthesis implants** — plates,
screws and instruments — for surgery on the **extremities** (hand, wrist, forearm, elbow, shoulder, foot,
ankle) and the **craniomaxillofacial (CMF)** skeleton, plus **CMX**, its patient-specific 3D-printed
implant and cutting-guide service. Nine subsidiaries and 50+ distributor markets; group companies include
KeriMedical and CADskills (acquired 2026). The brand promise is movement returned to people:
**"Move again. Enjoy life."**

The customer is a **surgeon**, and the beneficiary is a **patient who wants their life back**. That split
explains the whole visual system: clinical precision in the type and grid, human joy in the photography.

## Sources this system was built from

| Source | What it gave us |
| --- | --- |
| `uploads/Template Medartis.pptx` — the corporate PowerPoint template (28 layouts, think-cell enabled) | The authoritative colour theme, the Old Standard TT / Roboto pairing, the 1280×720 grid and margins, all campaign photography, the social + contact icon set, and both logo lockups. **This is the ground truth for this design system.** |
| `uploads/medartis.pdf` | Two-page logo sheet (black wordmark / white on black). No additional design information. |
| `uploads/medartis_logo.png`, `uploads/medartis_logo_branco.png` | Wordmark raster artwork (black / white). |
| `uploads/Roboto-*.ttf` (20 files) | The complete supplied Roboto family — shipped in `fonts/`. |
| <https://medartis.com> (fetched 31 July 2026) | Information architecture, product and procedure naming, news copy, subsidiary addresses, footer structure, the `#back2fun / #back2focus / #back2joy / #back2play` campaign framing. |
| Attached folder `Medartis/` | Contained only copies of the PDF and the two logo PNGs — **no codebase**. Nothing was inferred from code, because there is none. |

**Not available:** the medartis.com front-end source, the CMX Portal application (login-walled), and any
product/implant photography. See "Gaps and asks" at the end.

---

## CONTENT FUNDAMENTALS

**Voice: precise, quietly confident, human at the edges.** Medartis writes like a Swiss engineer who
genuinely likes people. Technical copy is exact and unembellished; brand copy is short, warm and
verb-first.

**Person.** Corporate and product copy is third-person institutional — "Medartis has completed the
acquisition of CADskills". Invitations to the reader switch to **you** and to **we** as a shared subject:
"**Choose your** Region of Interest", "**Together we** revolutionize treatment options for orthopedic
diseases", "Engaged in Research. **Partnering with us.**" Never "I".

**Sentence shape.** Short declaratives, frequently as fragments used as headlines:

> It takes more than a plate.
> Move again. Enjoy life.
> Creating Worldwide Connections. The Locations of Medartis.
> Start your journey here.

Two-beat constructions ("Move again. Enjoy life.", "Engaged in Research. Partnering with us.") are the
brand's signature rhythm. Copy the rhythm, not the words.

**Casing.** Sentence case for headlines, with **Title Case for navigation, product names and section
labels** ("Area of Interest", "Distal Radius and Distal Ulna System 2.5", "New Idea Submission").
ALL CAPS only for the closing slide ("THANK YOU!"), team name labels, and eyebrows/tags where the caps
are a typographic device, not emphasis. The wordmark itself is always lowercase: **medartis**.

**Product naming is non-negotiable.** Brand families are set in caps — **APTUS**, **MODUS**, **CMX**,
**TriLock**, **SpeedTip CCS**, **MODUS 2 IMF** — and always carry their metric size: *Hallux System 2.8*,
*Fore- and Midfoot System 2.0/2.3, 2.8*, *MODUS 0.9/1.2*. Never drop or round the number. Registered
marks keep their symbol: TOUCH®, KeriFlex®, Carpitech™.

**Numbers and dates.** European conventions. Dates are `DD.MM.YYYY` ("10.06.2026"); phone numbers keep
their country format ("+41 61 633 34 34"); measurements are millimetres with a space ("2.8 mm").

**Hashtags.** The consumer campaign uses lowercase hashtags as headlines: `#back2fun`, `#back2focus`,
`#back2joy`, `#back2play`. They are set large in the display serif, never explained.

**Emoji: never.** Not in product copy, not in slides, not in social captions rendered inside the brand.
Unicode is used typographically instead: the bullet character is an **en-dash-like `⎼`** (from the
PowerPoint master), arrows are `→`, breadcrumb separators are `/`.

**Vibe.** Clinical calm with a heartbeat. If a sentence sounds like marketing, cut it; if it sounds cold,
add a person to it.

---

## VISUAL FOUNDATIONS

### Colour
The brand is **monochrome first**: pure `#000000` and pure `#FFFFFF` carry roughly 95% of every surface.
A slide, a page or a card is either black or white — never a tinted grey, never a gradient background.

Exactly **one signature accent** exists: **Medartis Sky `#BBD7F3`** (`--sky-300`, the PowerPoint theme's
accent1). It appears only in small doses — the hairline that opens a content block, the agenda numeral,
the subtitle under a cover title, an arrow, a focus ring. It is never a fill for a large area and never a
button background on light surfaces.

Five secondary hues come from the corporate theme and are for **charts and semantics only**:
blue `#357ABE`, teal `#358D94`, crimson `#BD1041`, green `#4EA72E`, gold `#DEBE5C`. `#E8E8E8`
(`--grey-150`) is the canonical light well. **Maximum two background colours per deck: black and white.**

Add `.medartis-inverse` to any black block and every semantic token flips (see the *Inverse context* card).

### Typography
Two families, no more.

* **Old Standard TT** (serif) — display and titles only, **Regular weight, never bold**, 90% line height,
  −0.01em tracking. This is the theme's "major" font. The serif against the geometric lowercase wordmark
  is deliberate: it reads as medical-literature authority rather than start-up sans.
* **Roboto** — everything else. **Light (300) is the house weight.** Regular is for eyebrows and small
  caps; Medium is for buttons, table-adjacent emphasis and card headings. Roboto Condensed exists for
  dense tables, chart axes and org charts.

Real values from the template: cover titles 48pt (64px), master title 38pt (51px), column headings 24pt
(32px), body 18pt (24px), footer 10.5pt (14px), notes 9pt (12px), closing statement 60pt (80px).

⚠️ **Font substitution:** no Old Standard TT binary was supplied, so `fonts/fonts.css` loads it from
Google Fonts. Everything else is the brand's own TTF. See "Gaps and asks".

### Layout
* **Slides:** 1280×720 canvas, **26.67px safe margin**, a **10-column grid** of 105.7px columns with
  19px gutters, plus four horizontal bands — all measured from the PowerPoint master's own guides.
  The wordmark is a **fixed element: 111×19px, 40px from the top, 26.67px from the right, on every
  page**. Footer text sits at y=662 left; the page number right-aligns at the same baseline.
* **Web:** 1440px max width, 12 columns, 24px gutters, 40px page padding, an **88px sticky header** over
  a 34px grey utility strip.
* Content blocks are **opened and closed by hairlines**, not boxed. Full-bleed is reserved for
  photography and black plates.

### Backgrounds
No pattern, no texture, no illustration, no gradient wash. A background is one of exactly three things:
**white**, **black**, or a **full-bleed photograph**. The only gradients in the system are *protection*
gradients over imagery (see below). Hand-drawn illustration is not part of this brand.

### Imagery
The campaign photography is instantly recognisable: **studio portraits shot against pure black**, hard
directional side light, **cool and slightly desaturated skin tones**, no grain, subjects captured
**mid-movement or mid-expression** — hands thrown open, a sprinter in the blocks, a handstand, a man
pointing at the lens, an athlete with a running blade. Bodies are cropped at the frame edge and the black
of the photograph merges into the black of the page. Product renders, when used, sit on `--grey-150`.

Cool, contrasty, black-seamless. Never warm, never lifestyle-stock, never a white cyclorama.

### Protection over imagery
Always a **linear gradient scrim**, never a capsule, plate or blurred panel. Two forms:
a left-to-right black wedge for hero and cover layouts (`rgba(0,0,0,.92) → transparent` at ~78%), and a
bottom-up scrim (`--surface-scrim`) for captions inside an image frame. Because the photography is already
black-backed, the scrim is usually invisible — which is the point.

### Transparency and blur
Blur is **not used**. Transparency is used only for text hierarchy on black (`rgba(255,255,255,.68)` for
secondary copy, `.24` for rules) and for image scrims. No frosted glass, no translucent cards.

### Corners
**Everything is square.** Buttons, cards, inputs, images, tags: 0px radius. The only round shapes in the
entire system are the **pill search field** and **circular social / avatar discs**. Do not introduce 8px
"soft" corners — it instantly stops looking like Medartis.

### Cards
A Medartis card has **no shadow and usually no border** — it is an image, a meta line, a heading and a
link, separated from its neighbours by a **bottom hairline** (`NewsCard`). Where a card must read as an
object (product tiles), it gets a **1px `--grey-200` border** and a `--grey-150` image well. Padding is
32px (`--pad-card`).

### Borders, rules and shadows
Depth is expressed with **rules, not shadows**. Four rules do all the work: 1px sky-300 (content block
open/close), 1px grey-200 (list and table separators), 1px black (table header underline), 2px black
(active nav item / tab). Only three shadows exist — `--shadow-hover` (0 2px 8px / 8%),
`--shadow-raised`, `--shadow-overlay` for dropdowns and modals. Never coloured, never glowing.

### Motion
Clinical and calm. Fast on interaction (150ms), moderate on layout (240ms), slow and gentle on the hero
(**1200ms cross-fade**, each visual resting 6s). Easing is `cubic-bezier(.4,0,.2,1)`.
**No bounce, no spring, no overshoot, no parallax, no slide transitions between hero visuals** — this is
a surgical-implant brand.

### States
* **Hover** — secondary buttons *fill* black and flip their label to white; primary buttons lighten to
  `--grey-700`; cards lift `translateY(-2px)` with the 8%-alpha shadow; nav items grow a 2px black
  underline; images inside a fixed frame may scale to 1.04.
* **Press** — `scale(.985)`. No colour change beyond the hover state.
* **Focus** — a two-ring outline (2px surface + 2px `--blue-600`), never a glow.
* **Disabled** — `--grey-200` fill with `--grey-400` label. No opacity fades.
* **Links** — inherit the text colour with a **1px sky-300 underline**; on hover the underline takes the
  text colour and the label shifts to `--blue-600`. On black, links go sky-300.

---

## ICONOGRAPHY

**What the brand actually ships.** The corporate PowerPoint template contains a small, purposeful icon
set, extracted verbatim into `assets/icons/` as **SVG plus a PNG fallback of each**:

* **Contact glyphs** — `mail`, `phone`, `location`: single-weight (~1.5px) **outline** strokes, rounded
  geometry, no fill, drawn on a square canvas. On slides they are placed inside a **black circular disc**
  in white.
* **Social marks** — `social-instagram`, `social-facebook`, `social-youtube`: the official platform marks
  as **solid black discs with knocked-out glyphs**. In the footer they invert to white discs with black
  glyphs. (LinkedIn and X appear on the website footer but no artwork was supplied — request them.)
* **`cursor-click`** — a solid arrow-cursor-with-rays mark used as an "interact / more here" affordance.

There is **no icon font** and no sprite sheet. There are **no PNG-only icons** in the brand assets, and
**no emoji anywhere**. Unicode characters are used as typographic marks rather than icons: the bullet
`⎼`, arrows `→`, breadcrumb `/`, chevrons drawn as rotated CSS borders.

**Substitution (flagged).** The brand set covers contact and social only. For the generic UI vocabulary a
web product needs — chevron, close, search, download, filter, external-link, play, menu — use
**[Lucide](https://lucide.dev)** from CDN, which matches the brand glyphs' single-weight outline style:

```html
<script src="https://unpkg.com/lucide@0.454.0/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

Set Lucide at `stroke-width: 1.5`, `size: 20` in body copy / `24` in headers, and `currentColor`.
The `Icon` component resolves brand glyphs first and falls through to Lucide by name. **If Medartis has
an official UI icon library, send it — this substitution should be replaced.**

Never draw a Medartis logo or an implant illustration by hand.

---

## Index — what is in this folder

```
styles.css              the single entry point consumers link
fonts/                  Roboto TTFs (brand-supplied) + fonts.css (@font-face, Old Standard TT via Google)
tokens/                 colors · typography · spacing · radii · elevation · motion · layout · base
assets/logo/            wordmark (black/white, SVG+PNG), figure symbol (white, SVG+PNG)
assets/icons/           mail · phone · location · cursor-click · instagram · facebook · youtube (SVG+PNG)
assets/imagery/         eight #back2* campaign visuals from the corporate template
components/             React primitives, grouped by concern (below)
slides/                 the eleven corporate slide layouts + a click-through deck (index.html)
templates/              starting folders consuming projects copy: corporate-deck, website-page
ui_kits/website/        click-through recreation of medartis.com (README.md inside)
guidelines/             25 foundation specimen cards feeding the Design System tab
SKILL.md                Agent-Skills entry point for use outside this workspace
thumbnail.html          homepage tile
```

### Components

Grouped by concern. Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one
`@dsCard` HTML.

**`components/core/`** — `Button`, `IconButton`, `Icon`, `Tag`, `Eyebrow`, `Divider`, `Logo`
**`components/forms/`** — `TextField`, `Select`, `Checkbox`, `Radio`, `SearchField`
**`components/content/`** — `SectionHeading`, `NewsCard`, `MediaCard`, `ProductCard`, `StatBlock`,
`Accordion`, `Quote`, `DataTable`
**`components/navigation/`** — `UtilityBar`, `NavBar`, `Breadcrumb`, `TabBar`, `SiteFooter`, `Pagination`
**`components/media/`** — `HeroSlider`, `ImageFrame`
**`slides/`** — `Slide`, `TitleSlide`, `SectionSlide`, `AgendaSlide`, `ImageTextSlide`, `ColumnsSlide`,
`ChartSlide`, `QuoteSlide`, `TeamSlide`, `ThankYouSlide`, `ClosingSlide` (all in `DeckSlides.jsx`)

Import them from the compiled bundle:

```html
<script src="/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, NewsCard, HeroSlider } = window.MedartisDesignSystem_dbc0f7;
</script>
```

#### Intentional additions

No source defined a component inventory (there is no codebase and no Figma file), so the set above is a
standard product kit sized to what medartis.com and the corporate deck actually contain. Two entries are
worth calling out explicitly:

* **`Icon`** — a thin wrapper so brand SVGs and the Lucide fallback share one call site. The brand ships
  loose SVGs with no wrapper.
* **`DeckSlides`** — the eleven PowerPoint layouts rebuilt in HTML at their measured coordinates, so a
  deck built here matches a deck built in PowerPoint.

### Templates

* **`templates/corporate-deck/`** — a five-slide 1280×720 deck (cover, agenda, section header, image +
  text, closing) at the PowerPoint template's measured coordinates. Every heading and bullet is plain,
  directly editable markup.
* **`templates/website-page/`** — a medartis.com page: utility strip, mega-menu header, `#back2*`
  campaign hero, three-up card grid, black patient-story band, corporate footer.

Both load the system through their sibling `ds-base.js` — one line to repoint in a consuming project.

### UI kits

* **`ui_kits/website/`** — medartis.com: home, solution detail, news, where-to-find-us. See its README.
* **No CMX Portal kit.** `cmx.medartis.com` requires a login and no screenshots or source were supplied;
  inventing it would be worse than omitting it.

---

## Gaps and asks

1. **Old Standard TT binary** — currently loaded from Google Fonts. Send the licensed TTF/WOFF2 if the
   brand uses a specific cut.
2. **Product photography** — no implant renders or body-map skeletons were supplied; UI-kit product
   tiles reuse campaign imagery as placeholders.
3. **UI icon library** — brand set covers contact + social only; Lucide is a flagged substitute.
4. **LinkedIn and X marks** — used on the live footer, not present in the supplied artwork.
5. **CMX Portal** — no access, therefore no UI kit.
