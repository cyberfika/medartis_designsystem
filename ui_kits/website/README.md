# UI kit — medartis.com (corporate website)

A click-through recreation of the public Medartis website, composed **only** from the components in
`components/` plus the real brand assets in `assets/`.

Open `index.html`. The floating switcher (bottom-right) and the header nav both route between screens.

| Screen | File | Source it recreates |
| --- | --- | --- |
| Home | `home.kit.jsx` | medartis.com/en/ — #back2fun campaign hero, news row, "Portfolio Overview / Choose your Region of Interest", "It takes more than a plate." service row, keyword search |
| Solution detail | `solution.kit.jsx` | /en/solutions/upper-extremities/aptus-wrist/distal-radius-system — breadcrumb, black product hero, Overview / Indications / Instruments / Documents tabs, related systems |
| News | `news.kit.jsx` | /en/about-us/news — category chips, 3-up card grid, pagination, patient-story quote band |
| Where to find us | `contact.kit.jsx` | /en/about-us/where-to-find-us — subsidiary table, Distributor Form with consent gate |
| Shell | `shell.kit.jsx` | Utility strip (EN · CMX Portal · Partner network), 88px header with mega-menu, black footer |

## Fidelity notes

* Navigation labels, the Solutions/Procedures tree, subsidiary addresses, news headlines and dates are
  taken verbatim from medartis.com (fetched 31 July 2026).
* Campaign photography is the real `#back2*` studio imagery extracted from the corporate PowerPoint
  template — the same visuals the site's hero slider uses.
* **Product photography is not available.** Where the site shows implant renders and body-map skeletons,
  this kit reuses campaign imagery as a stand-in. Drop real product shots into
  `assets/imagery/` and swap the `image` props to finish the kit.
* **The CMX Portal (cmx.medartis.com) is behind a login**, so no kit exists for it. Nothing here should
  be treated as a recreation of that application.
