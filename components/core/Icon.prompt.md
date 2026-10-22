One-line: single entry point for iconography — brand SVGs from assets/icons, Lucide for the generic UI set.

```jsx
<Icon name="mail" size={20} assetBase="../../assets/icons" />
<Icon name="chevron-right" size={16} />
```

Brand glyphs are masked so they inherit `tone`. Lucide names need `lucide.createIcons()` after mount (the CDN script is listed in readme.md › ICONOGRAPHY). This is an **intentional addition** — the source materials ship loose SVGs with no wrapper.
