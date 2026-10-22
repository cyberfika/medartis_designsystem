One-line: the ten Medartis corporate slide layouts at 1280×720, geometry lifted from the supplied PowerPoint template.

```jsx
const { TitleSlide, AgendaSlide, ImageTextSlide, ClosingSlide } = window.MedartisDesignSystem_dbc0f7;

<TitleSlide title="Commercial Plan 2026" speaker="[Speaker]" dateAndPlace="Basel, July 2026"
  image="../assets/imagery/campaign-sprinter.png" assetBase="../assets/logo" />
```

Layouts: `TitleSlide` (Cover 01), `SectionSlide` (Section Header 01), `AgendaSlide`, `ImageTextSlide`
(`tone="dark"` for the black variant), `ColumnsSlide` (3 columns), `ChartSlide` (Market/Chart),
`QuoteSlide`, `TeamSlide`, `ThankYouSlide` (Thank you 01), `ClosingSlide` (Thank you 02).
All accept `footer`, `page` and `assetBase`. Never move the wordmark — 111×19px, top 40, right 26.67.
