/* @ds-bundle: {"format":4,"namespace":"MedartisDesignSystem_dbc0f7","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"DataTable","sourcePath":"components/content/DataTable.jsx"},{"name":"MediaCard","sourcePath":"components/content/MediaCard.jsx"},{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"HeroSlider","sourcePath":"components/media/HeroSlider.jsx"},{"name":"ImageFrame","sourcePath":"components/media/ImageFrame.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"UtilityBar","sourcePath":"components/navigation/UtilityBar.jsx"},{"name":"Slide","sourcePath":"slides/DeckSlides.jsx"},{"name":"TitleSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"SectionSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"AgendaSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"ImageTextSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"ColumnsSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"ChartSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"QuoteSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"TeamSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"ThankYouSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"ClosingSlide","sourcePath":"slides/DeckSlides.jsx"},{"name":"DeckSlides","sourcePath":"slides/DeckSlides.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"4475a5e80bc9","components/content/DataTable.jsx":"fcfe9d078992","components/content/MediaCard.jsx":"3145376fe613","components/content/NewsCard.jsx":"6bcfd6046abf","components/content/ProductCard.jsx":"38a26eba9f0e","components/content/Quote.jsx":"130853f382eb","components/content/SectionHeading.jsx":"2e2643993e5e","components/content/StatBlock.jsx":"f85d39b41e3e","components/core/Button.jsx":"03734954c77a","components/core/Divider.jsx":"a7873b56c30b","components/core/Eyebrow.jsx":"0550fb315d94","components/core/Icon.jsx":"25c53bd855ec","components/core/IconButton.jsx":"5eb18cc84e9b","components/core/Logo.jsx":"87dc38bd23bc","components/core/Tag.jsx":"e579705ece06","components/forms/Checkbox.jsx":"5223e2a421a8","components/forms/Radio.jsx":"ed45c539139b","components/forms/SearchField.jsx":"f72f79753f2f","components/forms/Select.jsx":"a80a94acb66f","components/forms/TextField.jsx":"e5be413af58b","components/media/HeroSlider.jsx":"f87af5c7135d","components/media/ImageFrame.jsx":"be713ecaca9d","components/navigation/Breadcrumb.jsx":"d2ea4d88ec1b","components/navigation/NavBar.jsx":"b4e73dc2ab94","components/navigation/Pagination.jsx":"e44ab447830b","components/navigation/SiteFooter.jsx":"17ff8609ed6a","components/navigation/TabBar.jsx":"aa75a0605acf","components/navigation/UtilityBar.jsx":"1119c7e25103","slides/DeckSlides.jsx":"95365cd94ff5","ui_kits/website/contact.kit.jsx":"0bd6703052f6","ui_kits/website/home.kit.jsx":"d37146e8504d","ui_kits/website/news.kit.jsx":"735570f3ac0c","ui_kits/website/shell.kit.jsx":"8b91feaecffa","ui_kits/website/solution.kit.jsx":"128173169922"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MedartisDesignSystem_dbc0f7 = window.MedartisDesignSystem_dbc0f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Disclosure list used for FAQs and the Resources download lists. */
function Accordion({
  items = [],
  defaultOpen = -1,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-default)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        padding: 'var(--space-6) 0',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--weight-medium) var(--text-md)/1.4 var(--font-sans)',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: '0 0 auto',
        width: 10,
        height: 10,
        borderRight: '1px solid var(--medartis-black)',
        borderBottom: '1px solid var(--medartis-black)',
        transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)',
        transition: `transform var(--duration-base) var(--ease-standard)`
      }
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 var(--space-7)',
        font: 'var(--type-body)',
        color: 'var(--text-secondary)',
        maxWidth: 'var(--web-prose-max)'
      }
    }, it.body));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline table for contacts, specifications and ordering catalogues. */
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  style,
  ...rest
}) {
  const pad = dense ? 'var(--space-3) var(--space-4)' : 'var(--space-5) var(--space-5)';
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: 'var(--type-meta)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      borderBottom: '1px solid var(--medartis-black)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      borderBottom: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/content/MediaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Service / offer card: image, sans heading, short body, Read more. Used in the "It takes more than a plate." row. */
function MediaCard({
  image,
  imageAlt = '',
  title,
  body,
  href = '#',
  ratio = '4 / 3',
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      border: 0,
      color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)',
      background: inverse ? 'var(--grey-900)' : 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      aspectRatio: ratio,
      background: inverse ? 'var(--medartis-black)' : 'var(--grey-150)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: inverse ? 'var(--space-7)' : 'var(--space-7) 0 0'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      font: 'var(--weight-medium) var(--text-lg)/1.3 var(--font-sans)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 var(--space-6)',
      font: 'var(--type-body)',
      color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)'
    }
  }, body), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      font: 'var(--type-button)',
      borderBottom: '1px solid var(--sky-300)',
      paddingBottom: 2
    }
  }, "Read More ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Editorial card: image on top, date + category meta, serif headline, teaser, Read more. */
function NewsCard({
  image,
  imageAlt = '',
  date,
  category,
  title,
  teaser,
  href = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: 0,
      borderBottom: '1px solid var(--border-default)',
      paddingBottom: 'var(--space-7)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      aspectRatio: '16 / 10',
      background: 'var(--grey-150)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      font: 'var(--type-note)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-wide)',
      marginBottom: 'var(--space-4)'
    }
  }, date && /*#__PURE__*/React.createElement("span", null, date), category && /*#__PURE__*/React.createElement("span", null, category)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-display)',
      textWrap: 'pretty'
    }
  }, title), teaser && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 var(--space-6)',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, teaser), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      font: 'var(--type-button)',
      borderBottom: '1px solid var(--sky-300)',
      alignSelf: 'flex-start',
      paddingBottom: 2
    }
  }, "Read more", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Implant-system tile: product shot on a light well, system name, size range. */
function ProductCard({
  image,
  imageAlt = '',
  name,
  meta,
  region,
  href = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      transition: 'var(--transition-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 2',
      background: 'var(--surface-well)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, region && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, region), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--text-md)/1.35 var(--font-sans)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-meta)',
      color: 'var(--text-secondary)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Patient-story / Quickminds pull quote. Serif, large, no quotation glyph decoration. */
function Quote({
  children,
  author,
  role,
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      maxWidth: 900,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) var(--display-6)/1.25 var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)',
      textWrap: 'pretty'
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--sky-300)',
      font: 'var(--type-meta)',
      color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)'
    }
  }, author && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--weight-medium)',
      color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)'
    }
  }, author), author && role && ' — ', role));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Display heading with optional eyebrow, lead paragraph and trailing rule. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  level = 2,
  rule = false,
  tone = 'default',
  style,
  ...rest
}) {
  const Tag = `h${level}`;
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 760 : undefined,
      margin: align === 'center' ? '0 auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      gap: 'var(--space-4)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--sky-300)' : 'var(--text-secondary)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: 'var(--sky-300)'
    }
  }), eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      font: 'var(--type-h1)',
      letterSpacing: 'var(--tracking-display)',
      color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)',
      textWrap: 'pretty'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      font: 'var(--type-body-lg)',
      color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)',
      maxWidth: '58ch',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, lead), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--sky-300)',
      marginTop: 'var(--space-8)'
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Large figure with a caption — investor and market slides. */
function StatBlock({
  value,
  unit,
  label,
  tone = 'default',
  align = 'left',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--display-6)/1 var(--font-display)',
      color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.55em',
      marginLeft: 4,
      color: 'var(--sky-500)'
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--sky-300)',
      font: 'var(--type-meta)',
      color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 32,
  md: 40,
  lg: 48
};
const PX = {
  sm: 16,
  md: 24,
  lg: 32
};

/** Medartis button. Square corners, Roboto Medium, black-and-white first. */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-3)',
    height: H[size],
    padding: `0 ${PX[size]}px`,
    width: fullWidth ? '100%' : undefined,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-button)',
    font: 'var(--type-button)',
    fontSize: size === 'lg' ? 'var(--text-md)' : 'var(--text-sm)',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control)',
    whiteSpace: 'nowrap',
    ...variantStyle(variant, disabled),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: href ? undefined : disabled,
    "data-variant": variant,
    className: "medartis-button",
    style: base
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: 'var(--action-disabled-bg)',
      color: 'var(--action-disabled-fg)',
      borderColor: 'transparent'
    };
  }
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--action-secondary-fg)',
        borderColor: 'var(--action-secondary-border)'
      };
    case 'inverse':
      return {
        background: 'var(--action-inverse-bg)',
        color: 'var(--action-inverse-fg)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        borderColor: 'transparent',
        padding: 0,
        height: 'auto'
      };
    case 'link':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        borderColor: 'transparent',
        padding: 0,
        height: 'auto',
        borderBottom: '1px solid var(--sky-300)'
      };
    default:
      return {
        background: 'var(--action-primary-bg)',
        color: 'var(--action-primary-fg)'
      };
  }
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The hairline rule that structures every Medartis layout. */
function Divider({
  orientation = 'horizontal',
  tone = 'accent',
  length,
  style,
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--sky-300)' : tone === 'strong' ? 'var(--medartis-black)' : tone === 'inverse' ? 'rgba(255,255,255,.24)' : 'var(--border-default)';
  const vertical = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    style: {
      flex: '0 0 auto',
      width: vertical ? 1 : length || '100%',
      height: vertical ? length || '100%' : 1,
      background: color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase kicker that sits above a display heading. */
function Eyebrow({
  rule = true,
  tone = 'default',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--sky-300)' : 'var(--text-secondary)',
      marginBottom: 'var(--space-5)',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: 'var(--sky-300)',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Brand icons shipped in assets/icons (extracted from the corporate PowerPoint template).
   Everything else falls through to Lucide, loaded from CDN — see readme.md › ICONOGRAPHY. */
const BRAND = {
  mail: 'mail.svg',
  phone: 'phone.svg',
  location: 'location.svg',
  'cursor-click': 'cursor-click.svg',
  instagram: 'social-instagram.svg',
  facebook: 'social-facebook.svg',
  youtube: 'social-youtube.svg'
};

/** Renders a Medartis brand glyph, or a Lucide glyph by name. */
function Icon({
  name,
  size = 20,
  tone = 'currentColor',
  assetBase = '/assets/icons',
  style,
  ...rest
}) {
  if (BRAND[name]) {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "img",
      "aria-label": name,
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        background: tone,
        WebkitMaskImage: `url(${assetBase}/${BRAND[name]})`,
        maskImage: `url(${assetBase}/${BRAND[name]})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        flex: '0 0 auto',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: tone,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: 32,
  md: 40,
  lg: 48
};

/** Square or circular icon-only control. Circular is reserved for social/media affordances. */
function IconButton({
  variant = 'outline',
  size = 'md',
  shape = 'square',
  label,
  children,
  style,
  ...rest
}) {
  const tone = variant === 'solid' ? {
    background: 'var(--medartis-black)',
    color: 'var(--medartis-white)',
    border: '1px solid var(--medartis-black)'
  } : variant === 'inverse' ? {
    background: 'transparent',
    color: 'var(--medartis-white)',
    border: '1px solid rgba(255,255,255,.4)'
  } : variant === 'bare' ? {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  } : {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--medartis-black)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    className: "medartis-icon-button",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: S[size],
      height: S[size],
      padding: 0,
      borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-none)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...tone,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The supplied Medartis artwork. Never redraw, recolour or add effects to it. */
function Logo({
  variant = 'wordmark',
  tone = 'black',
  width,
  assetBase = '/assets/logo',
  style,
  ...rest
}) {
  const file = variant === 'symbol' ? 'medartis-symbol-white.svg' : tone === 'white' ? 'medartis-wordmark-white.svg' : 'medartis-wordmark-black.svg';
  const w = width || (variant === 'symbol' ? 48 : 111);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${file}`,
    alt: "Medartis",
    style: {
      width: w,
      height: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small classification chip — news category, region, indication. */
function Tag({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--grey-150)',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    accent: {
      background: 'var(--sky-300)',
      color: 'var(--medartis-black)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--medartis-black)',
      color: 'var(--medartis-white)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'transparent',
      color: 'var(--medartis-white)',
      border: '1px solid rgba(255,255,255,.4)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 var(--space-4)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-none)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox with the brand's black tick. */
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      font: 'var(--type-meta)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 2,
      border: `1px solid ${disabled ? 'var(--grey-300)' : 'var(--medartis-black)'}`,
      background: checked && !disabled ? 'var(--medartis-black)' : 'transparent',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 4,
      top: 3,
      width: 8,
      height: 4,
      borderLeft: '1.5px solid var(--medartis-white)',
      borderBottom: '1.5px solid var(--medartis-white)',
      transform: 'rotate(-45deg)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest))), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular radio — the only round form control in the system. */
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `rd-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--type-meta)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-circle)',
      border: `1px solid ${disabled ? 'var(--grey-300)' : 'var(--medartis-black)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--medartis-black)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest))), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The one pill-shaped control in the system — site search. */
function SearchField({
  placeholder = 'Search specific key words',
  value,
  onChange,
  onSubmit,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      height: 48,
      padding: '0 var(--space-3) 0 var(--space-6)',
      background: 'var(--surface-card)',
      border: '1px solid var(--medartis-black)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-primary)'
    }
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Search",
    style: {
      flex: '0 0 auto',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-circle)',
      border: 0,
      background: 'var(--medartis-black)',
      color: 'var(--medartis-white)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--type-button)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 11,
      height: 11,
      border: '1.5px solid currentColor',
      borderRadius: '50%',
      boxShadow: '4px 4px 0 -3.2px currentColor',
      transform: 'translate(-1px,-1px)'
    }
  })));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match TextField. */
function Select({
  label,
  required = false,
  options = [],
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--type-meta)',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    style: {
      appearance: 'none',
      font: 'var(--type-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--status-danger)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-input)',
      height: 44,
      width: '100%',
      padding: '0 40px 0 14px',
      outline: 'none'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      width: 8,
      height: 8,
      marginTop: -6,
      borderRight: '1px solid var(--medartis-black)',
      borderBottom: '1px solid var(--medartis-black)',
      transform: 'rotate(45deg)',
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("small", {
    style: {
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line or multi-line text input. Square, hairline border, label above. */
function TextField({
  label,
  required = false,
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `tf-${Math.random().toString(36).slice(2, 8)}`;
  const Control = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--type-meta)',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)'
    }
  }, "*")), /*#__PURE__*/React.createElement(Control, _extends({
    id: fieldId,
    rows: multiline ? rows : undefined,
    "aria-invalid": !!error,
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--status-danger)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-input)',
      padding: multiline ? '10px 14px' : '0 14px',
      height: multiline ? undefined : 44,
      width: '100%',
      outline: 'none',
      resize: multiline ? 'vertical' : undefined,
      transition: 'var(--transition-control)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("small", {
    style: {
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/media/HeroSlider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The homepage campaign hero: full-bleed black photography, cross-fading, with a #hashtag headline. */
function HeroSlider({
  slides = [],
  height = 620,
  interval = 6000,
  autoplay = true,
  style,
  ...rest
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (!autoplay || slides.length < 2) return;
    const t = setInterval(() => setI(n => (n + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [autoplay, interval, slides.length]);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      height,
      background: 'var(--medartis-black)',
      overflow: 'hidden',
      color: 'var(--medartis-white)',
      ...style
    }
  }, rest), slides.map((s, n) => /*#__PURE__*/React.createElement("img", {
    key: n,
    src: s.image,
    alt: s.alt || '',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: s.position || 'center',
      opacity: n === i ? 1 : 0,
      transition: 'opacity var(--duration-hero) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,0) 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 var(--web-pad-x)',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--weight-regular) var(--display-2)/0.95 var(--font-display)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, slides[i]?.headline), slides[i]?.body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-7) 0 0',
      font: 'var(--type-body-lg)',
      color: 'rgba(255,255,255,.78)',
      maxWidth: '38ch'
    }
  }, slides[i].body)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--web-pad-x)',
      bottom: 'var(--space-9)',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, slides.map((s, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-label": `Show ${s.headline}`,
    onClick: () => setI(n),
    style: {
      width: n === i ? 40 : 16,
      height: 2,
      padding: 0,
      border: 0,
      cursor: 'pointer',
      background: n === i ? 'var(--sky-300)' : 'rgba(255,255,255,.4)',
      transition: 'width var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)'
    }
  }))));
}
Object.assign(__ds_scope, { HeroSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/HeroSlider.jsx", error: String((e && e.message) || e) }); }

// components/media/ImageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fixed-ratio image frame with optional caption and bottom scrim for overlaid text. */
function ImageFrame({
  src,
  alt = '',
  ratio = '3 / 2',
  caption,
  overlay,
  scrim = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--medartis-black)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), (scrim || overlay) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-scrim)'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--space-7)',
      right: 'var(--space-7)',
      bottom: 'var(--space-7)',
      color: 'var(--medartis-white)',
      font: 'var(--weight-regular) var(--display-6)/1.1 var(--font-display)'
    }
  }, overlay)), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      font: 'var(--type-note)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Deep-hierarchy trail — the Solutions tree runs 4 levels deep. */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      font: 'var(--type-note)',
      color: 'var(--text-muted)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-3)',
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        margin: 0
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-primary)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none',
        border: 0
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--sky-400)'
      }
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Primary site navigation: wordmark left, top-level items right, hover reveals a mega panel. */
function NavBar({
  items = [],
  active,
  logoSrc = '/assets/logo/medartis-wordmark-black.svg',
  onSearch,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", _extends({
    onMouseLeave: () => setOpen(null),
    style: {
      position: 'relative',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-10)',
      height: 'var(--web-header-h)',
      padding: '0 var(--web-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      border: 0,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Medartis",
    style: {
      width: 148,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      flex: 1
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label,
    onMouseEnter: () => setOpen(it.children ? it.label : null),
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    style: {
      display: 'block',
      padding: '6px 0',
      font: 'var(--weight-light) var(--text-md)/1 var(--font-sans)',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      borderBottom: active === it.label || open === it.label ? '2px solid var(--medartis-black)' : '2px solid transparent',
      transition: 'var(--transition-control)'
    }
  }, it.label)))), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    "aria-label": "Search",
    style: {
      flex: '0 0 auto',
      width: 40,
      height: 40,
      border: '1px solid var(--medartis-black)',
      background: 'transparent',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 12,
      height: 12,
      border: '1.5px solid var(--medartis-black)',
      borderRadius: '50%',
      boxShadow: '4px 4px 0 -3.2px var(--medartis-black)',
      transform: 'translate(-1px,-1px)'
    }
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-9) var(--web-pad-x)',
      zIndex: 'var(--z-dropdown)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 'var(--space-9)'
    }
  }, (items.find(i => i.label === open)?.children || []).map(group => /*#__PURE__*/React.createElement("div", {
    key: group.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      paddingBottom: 'var(--space-4)',
      borderBottom: '1px solid var(--sky-300)',
      marginBottom: 'var(--space-5)'
    }
  }, group.label), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, (group.items || []).map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--type-meta)',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      border: 0
    }
  }, l)))))))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered pager for news and document listings. */
function Pagination({
  page = 1,
  pages = 1,
  onChange,
  style,
  ...rest
}) {
  const cell = on => ({
    minWidth: 36,
    height: 36,
    padding: '0 var(--space-3)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${on ? 'var(--medartis-black)' : 'var(--border-default)'}`,
    background: on ? 'var(--medartis-black)' : 'transparent',
    color: on ? 'var(--medartis-white)' : 'var(--text-primary)',
    font: 'var(--type-meta)',
    cursor: 'pointer',
    transition: 'var(--transition-control)'
  });
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    style: cell(false),
    disabled: page === 1,
    onClick: () => onChange && onChange(page - 1),
    "aria-label": "Previous"
  }, "\u2039"), Array.from({
    length: pages
  }, (_, i) => i + 1).map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    style: cell(n === page),
    onClick: () => onChange && onChange(n),
    "aria-current": n === page ? 'page' : undefined
  }, n)), /*#__PURE__*/React.createElement("button", {
    style: cell(false),
    disabled: page === pages,
    onClick: () => onChange && onChange(page + 1),
    "aria-label": "Next"
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Black site footer: contact block, legal links, menu column, circular social row. */
function SiteFooter({
  address = ['Medartis AG', 'Hochbergerstrasse 60E', '4057 Basel/Switzerland'],
  phone = '+41 61 633 34 34',
  email = 'info@medartis.com',
  legal = ['Imprint', 'Privacy Notice', 'Legal Notice', 'GTC'],
  menu = ['About Us', 'Education', 'Resources', 'Investors', 'Career', 'Technology'],
  social = ['instagram', 'facebook', 'youtube'],
  assetBase = '/assets/icons',
  logoSrc = '/assets/logo/medartis-wordmark-white.svg',
  copyright = '© 2026 Medartis AG',
  style,
  ...rest
}) {
  const link = {
    color: 'rgba(255,255,255,.68)',
    textDecoration: 'none',
    border: 0,
    font: 'var(--type-meta)'
  };
  const head = {
    font: 'var(--type-eyebrow)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    color: 'var(--sky-300)',
    paddingBottom: 'var(--space-4)',
    marginBottom: 'var(--space-5)',
    borderBottom: '1px solid rgba(255,255,255,.24)'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--medartis-black)',
      color: 'var(--medartis-white)',
      padding: 'var(--space-12) var(--web-pad-x) var(--space-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Medartis",
    style: {
      width: 132,
      display: 'block',
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-meta)',
      color: 'rgba(255,255,255,.68)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, address.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i === 0 ? 'var(--medartis-white)' : undefined
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--type-meta)',
      color: 'rgba(255,255,255,.68)'
    }
  }, /*#__PURE__*/React.createElement(IconMask, {
    name: "phone",
    assetBase: assetBase
  }), phone), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      ...link,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(IconMask, {
    name: "mail",
    assetBase: assetBase
  }), email), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--type-meta)',
      color: 'rgba(255,255,255,.68)'
    }
  }, /*#__PURE__*/React.createElement(IconMask, {
    name: "location",
    assetBase: assetBase
  }), "Basel, Switzerland"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Menu"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, menu.map(m => /*#__PURE__*/React.createElement("li", {
    key: m,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, m))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Follow us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--medartis-white)',
      display: 'grid',
      placeItems: 'center',
      border: 0
    }
  }, /*#__PURE__*/React.createElement(IconMask, {
    name: s,
    assetBase: assetBase,
    size: 20,
    tone: "var(--medartis-black)"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-11)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(255,255,255,.24)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-7)',
      alignItems: 'center',
      font: 'var(--type-note)',
      color: 'rgba(255,255,255,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      ...link,
      font: 'var(--type-note)'
    }
  }, l)))));
}
function IconMask({
  name,
  assetBase,
  size = 16,
  tone = 'var(--sky-300)'
}) {
  const file = {
    mail: 'mail.svg',
    phone: 'phone.svg',
    location: 'location.svg',
    instagram: 'social-instagram.svg',
    facebook: 'social-facebook.svg',
    youtube: 'social-youtube.svg'
  }[name];
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: tone,
      WebkitMaskImage: `url(${assetBase}/${file})`,
      maskImage: `url(${assetBase}/${file})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain'
    }
  });
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal in-page tabs (Region of Interest switcher, product detail sections). */
function TabBar({
  tabs = [],
  value,
  onChange,
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: `1px solid ${inverse ? 'rgba(255,255,255,.24)' : 'var(--border-default)'}`,
      ...style
    }
  }, rest), tabs.map(t => {
    const key = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const on = value === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(key),
      style: {
        background: 'transparent',
        border: 0,
        borderBottom: `2px solid ${on ? inverse ? 'var(--sky-300)' : 'var(--medartis-black)' : 'transparent'}`,
        padding: '0 0 var(--space-5)',
        marginBottom: -1,
        cursor: 'pointer',
        font: `var(--weight-${on ? 'medium' : 'light'}) var(--text-md)/1 var(--font-sans)`,
        color: inverse ? on ? 'var(--medartis-white)' : 'rgba(255,255,255,.68)' : on ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UtilityBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thin top strip above the main header: language, CMX Portal, Partner network. */
function UtilityBar({
  items = [],
  language = 'EN',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 'var(--space-7)',
      height: 34,
      padding: '0 var(--web-pad-x)',
      background: 'var(--grey-150)',
      font: 'var(--type-note)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, language, " \u25BE"), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href || '#',
    style: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      border: 0
    }
  }, it.label)));
}
Object.assign(__ds_scope, { UtilityBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UtilityBar.jsx", error: String((e && e.message) || e) }); }

// slides/DeckSlides.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Medartis corporate deck — 1280×720. Geometry is lifted from the supplied PowerPoint template
   (uploads/Template Medartis.pptx): 26.67px safe margin, wordmark 111×19 at top 40 / right 26.67,
   footer baseline y=662, titles in Old Standard TT, body in Roboto Light, sky-300 hairlines. */

const W = 1280,
  H = 720,
  M = 26.67;
const LOGO = {
  position: 'absolute',
  top: 40,
  right: M,
  width: 111,
  height: 19
};

/** Slide chrome: background, wordmark, footer and page number. */
function Slide({
  tone = 'light',
  footer,
  page,
  logo = true,
  assetBase = '../assets/logo',
  children,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: W,
      height: H,
      overflow: 'hidden',
      background: dark ? 'var(--medartis-black)' : 'var(--medartis-white)',
      color: dark ? 'var(--medartis-white)' : 'var(--medartis-black)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), children, logo && /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/medartis-wordmark-${dark ? 'white' : 'black'}.svg`,
    alt: "Medartis",
    style: LOGO
  }), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: M,
      top: 662,
      font: 'var(--weight-light) 14px/1 var(--font-sans)',
      opacity: dark ? 0.7 : 0.62
    }
  }, footer), page != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: M,
      top: 660,
      font: 'var(--weight-light) 16px/1 var(--font-sans)',
      opacity: dark ? 0.7 : 0.62
    }
  }, page));
}

/** Cover 01 — full-height campaign photo on the right, title and speaker block on black. */
function TitleSlide({
  title,
  speaker,
  dateAndPlace,
  image,
  imagePosition = 'center',
  assetBase,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    tone: "dark",
    assetBase: assetBase
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      left: 183,
      top: 0,
      width: W - 183,
      height: H,
      objectFit: 'cover',
      objectPosition: imagePosition
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 760,
      height: H,
      background: 'linear-gradient(90deg,#000 0%,#000 46%,rgba(0,0,0,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'absolute',
      left: 95,
      top: 114,
      width: 583,
      margin: 0,
      font: 'var(--weight-regular) 64px/0.9 var(--font-display)',
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 95,
      top: 385,
      width: 583,
      font: 'var(--weight-light) 24px/1.35 var(--font-sans)',
      color: 'var(--sky-300)'
    }
  }, /*#__PURE__*/React.createElement("div", null, speaker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      opacity: 0.82
    }
  }, dateAndPlace)));
}

/** Section Header 01 — same split as the cover, with a lead paragraph instead of a speaker. */
function SectionSlide({
  kicker,
  title,
  lead,
  image,
  imagePosition = 'center',
  page,
  assetBase,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    tone: "dark",
    page: page,
    assetBase: assetBase
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      left: 183,
      top: 0,
      width: W - 183,
      height: H,
      objectFit: 'cover',
      objectPosition: imagePosition
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 800,
      height: H,
      background: 'linear-gradient(90deg,#000 0%,#000 44%,rgba(0,0,0,0) 100%)'
    }
  }), kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 87,
      top: 66,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      font: 'var(--weight-regular) 12px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--sky-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: 'var(--sky-300)'
    }
  }), kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: 87,
      top: 106,
      width: 592,
      margin: 0,
      font: 'var(--weight-regular) 64px/0.9 var(--font-display)',
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      left: 87,
      top: 294,
      width: 592,
      margin: 0,
      font: 'var(--weight-light) 24px/1.4 var(--font-sans)',
      color: 'rgba(255,255,255,.72)'
    }
  }, lead));
}

/** Agenda — sky-300 numerals, label column, right-aligned meta column. */
function AgendaSlide({
  title = 'Agenda',
  items = [],
  footer,
  page,
  assetBase,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    footer: footer,
    page: page,
    assetBase: assetBase
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: M,
      top: M,
      margin: 0,
      font: 'var(--weight-regular) 51px/0.9 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, title), items.map((it, i) => {
    const y = 166 + i * 64.5;
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 180,
        top: y,
        width: 57,
        height: 54,
        display: 'grid',
        placeItems: 'center',
        font: 'var(--weight-light) 48px/1 var(--font-display)',
        color: 'var(--sky-300)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 274,
        top: y,
        width: 474,
        height: 54,
        display: 'flex',
        alignItems: 'center',
        font: 'var(--weight-light) 24px/1.2 var(--font-sans)'
      }
    }, it.label), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 755,
        top: y,
        width: 375,
        height: 54,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        font: 'var(--weight-light) 24px/1.2 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, it.meta), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 180,
        top: y + 58,
        width: 950,
        height: 1,
        background: 'var(--sky-300)',
        opacity: 0.7
      }
    }));
  }));
}

/** Image + Text — 483×486 image left, sky rules top and bottom of the text column. */
function ImageTextSlide({
  tone = 'light',
  title,
  body = [],
  image,
  footer,
  page,
  assetBase,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(Slide, _extends({
    tone: tone,
    footer: footer,
    page: page,
    assetBase: assetBase
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: M,
      top: M,
      width: 900,
      margin: 0,
      font: 'var(--weight-regular) 51px/0.9 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, title), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      left: 26,
      top: 163,
      width: 483,
      height: 486,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 560,
      top: 163,
      width: 693,
      height: 1,
      background: 'var(--sky-300)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 560,
      top: 648,
      width: 693,
      height: 1,
      background: 'var(--sky-300)'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      position: 'absolute',
      left: 580,
      top: 209,
      width: 642,
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, body.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 30,
      margin: 0,
      font: 'var(--weight-light) 24px/1.35 var(--font-sans)',
      color: dark ? 'rgba(255,255,255,.86)' : 'var(--medartis-black)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      color: 'var(--sky-300)'
    }
  }, "\u23BC"), b))));
}

/** 3 Columns — icon, 24pt title, body; vertical sky rules between columns. */
function ColumnsSlide({
  title,
  columns = [],
  footer,
  page,
  assetBase,
  ...rest
}) {
  const xs = [26, 445, 853];
  return /*#__PURE__*/React.createElement(Slide, _extends({
    footer: footer,
    page: page,
    assetBase: assetBase
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: M,
      top: M,
      margin: 0,
      font: 'var(--weight-regular) 51px/0.9 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, title), [435, 844].map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      position: 'absolute',
      left: x,
      top: 165,
      width: 1,
      height: 434,
      background: 'var(--sky-300)'
    }
  })), columns.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, c.icon && /*#__PURE__*/React.createElement("img", {
    src: c.icon,
    alt: "",
    style: {
      position: 'absolute',
      left: xs[i],
      top: 155,
      width: 61,
      height: 61,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: xs[i],
      top: 226,
      width: 370,
      font: 'var(--weight-regular) 32px/1.15 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: xs[i],
      top: 274,
      width: 370,
      font: 'var(--weight-light) 24px/1.35 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, c.body))));
}

/** Market / Chart — a headline figure row over a simple bar chart. */
function ChartSlide({
  title,
  note,
  stats = [],
  series = [],
  footer,
  page,
  assetBase,
  ...rest
}) {
  const max = Math.max(1, ...series.map(s => s.value));
  return /*#__PURE__*/React.createElement(Slide, _extends({
    footer: footer,
    page: page,
    assetBase: assetBase
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: M,
      top: M,
      margin: 0,
      font: 'var(--weight-regular) 51px/0.9 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: M,
      top: 140,
      width: 1226,
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.max(stats.length, 1)},1fr)`,
      gap: 19
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) 51px/1 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, s.value, s.unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      marginLeft: 6,
      color: 'var(--sky-500)'
    }
  }, s.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px solid var(--sky-300)',
      font: 'var(--weight-light) 16px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: M,
      top: 320,
      width: 1226,
      height: 280,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 19,
      borderBottom: '1px solid var(--medartis-black)'
    }
  }, series.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-light) 16px/1 var(--font-sans)',
      textAlign: 'center',
      marginBottom: 8,
      color: 'var(--text-secondary)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${s.value / max * 84}%`,
      background: i === series.length - 1 ? 'var(--medartis-black)' : 'var(--sky-300)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: M,
      top: 604,
      width: 1226,
      display: 'flex',
      gap: 19
    }
  }, series.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      font: 'var(--weight-light) 14px/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, s.label))), note && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: M,
      top: 636,
      font: 'var(--weight-light) 12px/1.3 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, note));
}

/** Big quote — Old Standard TT over a full-bleed campaign visual. */
function QuoteSlide({
  quote,
  author,
  role,
  image,
  imagePosition = 'center',
  page,
  assetBase,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    tone: "dark",
    page: page,
    assetBase: assetBase
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: W,
      height: H,
      objectFit: 'cover',
      objectPosition: imagePosition
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      position: 'absolute',
      left: 108,
      top: 180,
      width: 680,
      margin: 0,
      font: 'var(--weight-regular) 51px/1.1 var(--font-display)',
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 108,
      top: 470,
      width: 680,
      paddingTop: 16,
      borderTop: '1px solid var(--sky-300)',
      font: 'var(--weight-light) 20px/1.4 var(--font-sans)',
      color: 'rgba(255,255,255,.75)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 500,
      color: '#fff'
    }
  }, author), author && role ? ' — ' : '', role));
}

/** Team — 4×2 grid of portraits with NAME / Job captions. */
function TeamSlide({
  title = 'Team',
  people = [],
  footer,
  page,
  assetBase,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    footer: footer,
    page: page,
    assetBase: assetBase
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: M,
      top: M,
      margin: 0,
      font: 'var(--weight-regular) 51px/0.9 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: M,
      top: 150,
      width: 1226,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 19
    }
  }, people.slice(0, 8).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      background: 'var(--medartis-black)',
      overflow: 'hidden'
    }
  }, p.photo && /*#__PURE__*/React.createElement("img", {
    src: p.photo,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: 'var(--weight-regular) 16px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--weight-light) 14px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, p.job)))));
}

/** Thank you 01 — black plate over a white contact band. */
function ThankYouSlide({
  headline = ['THANK', 'YOU!'],
  site = 'MEDARTIS.COM',
  phone = '61 633 34 34',
  email = 'info@medartis.com',
  address = 'Hochbergerstrasse 60E 4057 Basel/Switzerland',
  symbol = '../assets/logo/medartis-symbol-white.png',
  iconBase = '../assets/icons',
  assetBase,
  ...rest
}) {
  const item = (icon, text) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      font: 'var(--weight-light) 15px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--medartis-black)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      background: '#fff',
      WebkitMaskImage: `url(${iconBase}/${icon}.svg)`,
      maskImage: `url(${iconBase}/${icon}.svg)`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center'
    }
  })), text);
  return /*#__PURE__*/React.createElement(Slide, _extends({
    tone: "dark",
    logo: false,
    assetBase: assetBase
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 538,
      width: W,
      height: 182,
      background: 'var(--medartis-white)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'absolute',
      left: 139,
      top: 100,
      margin: 0,
      font: 'var(--weight-regular) 72px/1.02 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, headline[0], /*#__PURE__*/React.createElement("br", null), headline[1]), /*#__PURE__*/React.createElement("img", {
    src: symbol,
    alt: "",
    style: {
      position: 'absolute',
      left: 700,
      top: 120,
      width: 300,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 139,
      top: 340,
      width: 460,
      height: 1,
      background: 'var(--sky-300)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 139,
      top: 366,
      font: 'var(--weight-light) 20px/1 var(--font-sans)',
      color: 'var(--sky-300)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, site), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 139,
      top: 596,
      display: 'flex',
      gap: 56,
      color: 'var(--medartis-black)'
    }
  }, item('phone', phone), item('mail', email), item('location', address)), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/medartis-wordmark-black.svg",
    alt: "Medartis",
    style: {
      position: 'absolute',
      right: 26.67,
      top: 592,
      width: 140
    }
  }));
}

/** Thank you 02 — the brand's closing statement over a full-bleed visual. */
function ClosingSlide({
  lines = ['Move again.', 'Enjoy life.'],
  image,
  imagePosition = 'center',
  assetBase = '../assets/logo',
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    tone: "dark",
    logo: false,
    assetBase: assetBase
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: W,
      height: H,
      objectFit: 'cover',
      objectPosition: imagePosition
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.88) 0%,rgba(0,0,0,.5) 55%,rgba(0,0,0,.05) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 108,
      top: 156,
      width: 705,
      font: 'var(--weight-regular) 80px/1.05 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/medartis-wordmark-white.svg`,
    alt: "Medartis",
    style: {
      position: 'absolute',
      left: 122,
      top: 521,
      width: 159
    }
  }));
}

/** Namespace object holding every slide layout, for consumers that prefer one import. */
const DeckSlides = {
  Slide,
  TitleSlide,
  SectionSlide,
  AgendaSlide,
  ImageTextSlide,
  ColumnsSlide,
  ChartSlide,
  QuoteSlide,
  TeamSlide,
  ThankYouSlide,
  ClosingSlide
};
Object.assign(__ds_scope, { Slide, TitleSlide, SectionSlide, AgendaSlide, ImageTextSlide, ColumnsSlide, ChartSlide, QuoteSlide, TeamSlide, ThankYouSlide, ClosingSlide, DeckSlides });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/DeckSlides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contact.kit.jsx
try { (() => {
/* Where to find us — locations list + distributor form. */
const {
  SectionHeading,
  TextField,
  Select,
  Checkbox,
  Radio,
  Button,
  DataTable,
  Divider,
  Icon
} = window.MedartisDesignSystem_dbc0f7;
const SITES = [{
  c: 'Switzerland',
  e: 'Medartis AG',
  a: 'Hochbergerstrasse 60E, 4057 Basel',
  t: '+41 61 633 34 34'
}, {
  c: 'Germany',
  e: 'Medartis GmbH',
  a: 'Am Gansacker 10, 79224 Umkirch',
  t: '+49 7665 98 24 0'
}, {
  c: 'United Kingdom',
  e: 'Medartis Ltd.',
  a: '3 Pinnacle Way, Pride Park, Derby DE24 8ZS',
  t: '+44 1924 47 66 99'
}, {
  c: 'USA',
  e: 'Medartis Inc.',
  a: '1195 Polk Drive, Warsaw, IN 46582',
  t: '+1 574 376 2404'
}, {
  c: 'Brazil',
  e: 'Medartis Importação e Exportação Ltda',
  a: 'Rua Sena Madureira 796, São Paulo – SP',
  t: '+55 11 3624 7844'
}, {
  c: 'Japan',
  e: 'Medartis Co., Ltd.',
  a: 'NBF Shinagawa Tower 5F, Minato-ku, Tokyo',
  t: '+81 3 4520 5048'
}];
function ContactScreen() {
  const [consent, setConsent] = React.useState(false);
  const [kind, setKind] = React.useState('sub');
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About Us",
    title: "Creating Worldwide Connections.",
    lead: "Nine subsidiaries and more than fifty distributor markets. Find your local Medartis contact."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 'var(--space-12)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "kind",
    label: "Subsidiary",
    checked: kind === 'sub',
    onChange: () => setKind('sub')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "kind",
    label: "Distributor",
    checked: kind === 'dis',
    onChange: () => setKind('dis')
  })), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'c',
      label: 'Country'
    }, {
      key: 'e',
      label: 'Entity'
    }, {
      key: 'a',
      label: 'Address'
    }, {
      key: 't',
      label: 'Telephone',
      align: 'right'
    }],
    rows: SITES
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-9)',
      font: 'var(--type-meta)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    assetBase: ICONS,
    tone: "var(--medartis-black)"
  }), " +41 61 633 34 34"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    assetBase: ICONS,
    tone: "var(--medartis-black)"
  }), " info@medartis.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location",
    size: 16,
    assetBase: ICONS,
    tone: "var(--medartis-black)"
  }), " Basel, Switzerland"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: 'var(--surface-well)',
      padding: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h2)'
    }
  }, "Distributor Form"), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-6) 0 var(--space-8)'
    }
  }), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, "Thank you \u2014 a Medartis representative will be in touch within two working days.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    required: true,
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Surname",
    required: true,
    placeholder: "Surname"
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "E-Mail",
    required: true,
    type: "email",
    placeholder: "name@clinic.com"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Company Name",
    placeholder: "Clinic or distributor"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Country",
    required: true,
    options: ['Switzerland', 'Germany', 'United Kingdom', 'USA', 'Brazil', 'Japan']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Subject",
    required: true,
    options: ['Distribution enquiry', 'Product information', 'Education & events', 'Other']
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Message",
    required: true,
    multiline: true,
    rows: 4
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: consent,
    onChange: e => setConsent(e.target.checked),
    label: /*#__PURE__*/React.createElement("span", null, "I consent to the processing of my data in accordance with the ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "privacy policy"), " and know that I can revoke this consent at any time.*")
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: !consent,
    fullWidth: true
  }, "Send enquiry")))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.kit.jsx
try { (() => {
/* medartis.com home — campaign hero, news row, portfolio switcher, service row, search. */
const {
  HeroSlider,
  SectionHeading,
  NewsCard,
  MediaCard,
  TabBar,
  SearchField,
  Button,
  Eyebrow
} = window.MedartisDesignSystem_dbc0f7;
const REGIONS = {
  CMF: ['Midface', 'Mandible', 'Orthognathics'],
  'Upper Extremities': ['Hand', 'Wrist', 'Forearm', 'Elbow', 'Shoulder', 'CCS Upper Extremities'],
  'Lower Extremities': ['Foot', 'Ankle', 'CCS Lower Extremities'],
  CMX: ['CMX Solutions', 'CMX Indications', 'CMX Service', 'CMX Portal', 'FAQs']
};
function HomeScreen({
  onNavigate
}) {
  const [region, setRegion] = React.useState('Upper Extremities');
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroSlider, {
    height: 620,
    slides: [{
      image: IMG + 'campaign-hands.png',
      position: '72% center',
      headline: '#back2fun',
      body: 'Osteosynthesis that gives people their movement back.'
    }, {
      image: IMG + 'campaign-sprinter.png',
      position: '62% center',
      headline: '#back2focus'
    }, {
      image: IMG + 'campaign-handstand.jpg',
      position: '58% center',
      headline: '#back2joy'
    }, {
      image: IMG + 'campaign-prosthetic-leg.png',
      position: '68% center',
      headline: '#back2play'
    }]
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-9)',
      marginBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Newsroom",
    title: "Latest from Medartis"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate && onNavigate('News')
  }, "Read More")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(NewsCard, {
    image: IMG + 'campaign-pointing.png',
    date: "10.06.2026",
    category: "Company News",
    title: "Medartis wins the Swiss Medtech Award 2026",
    teaser: "Medartis Holding AG has been named the winner of the Swiss Medtech Award 2026, recognising outstanding achievements within the Swiss medical technology industry."
  }), /*#__PURE__*/React.createElement(NewsCard, {
    image: IMG + 'campaign-bionic-hands.png',
    date: "18.05.2026",
    category: "Company News",
    title: "Medartis acquires CADskills, strengthening patient-specific implants",
    teaser: "A Belgium-based specialist in patient-specific implant solutions and titanium 3D printing joins the group."
  }), /*#__PURE__*/React.createElement(NewsCard, {
    image: IMG + 'campaign-duo-mask.jpg',
    date: "23.04.2026",
    category: "Company News",
    title: "Shareholders endorse Board proposals at AGM 2026",
    teaser: "All substantive proposals of the Board of Directors were approved with majorities exceeding 90.9%."
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    eyebrow: "Portfolio Overview",
    title: "Choose your Region of Interest",
    lead: "From 0.9 mm midface plates to patient-specific titanium \u2014 find the system that matches the indication."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(TabBar, {
    tone: "inverse",
    tabs: Object.keys(REGIONS),
    value: region,
    onChange: setRegion
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '360px 1fr',
      gap: 'var(--space-11)',
      marginTop: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/medartis-symbol-white.png",
    alt: "",
    style: {
      width: 260,
      justifySelf: 'center',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 0
    }
  }, REGIONS[region].map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    style: {
      margin: 0,
      borderTop: '1px solid rgba(255,255,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('Solutions');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-6) 0',
      color: 'var(--medartis-white)',
      textDecoration: 'none',
      border: 0,
      font: 'var(--weight-light) var(--text-lg)/1.2 var(--font-sans)'
    }
  }, r, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--sky-300)'
    }
  }, "\u2192")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      marginTop: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Or search specific key words"), /*#__PURE__*/React.createElement(SearchField, {
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      background: 'transparent',
      borderColor: 'rgba(255,255,255,.5)'
    }
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Services",
    title: "It takes more than a plate."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-9)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(MediaCard, {
    image: IMG + 'campaign-arm.png',
    title: "CMX Services",
    body: "Order your custom implant, saw, or drill guide today, designed specifically for complex cases."
  }), /*#__PURE__*/React.createElement(MediaCard, {
    image: IMG + 'campaign-bionic-hands.png',
    title: "Clinical Research",
    body: "Engaged in Research. Partnering with us."
  }), /*#__PURE__*/React.createElement(MediaCard, {
    image: IMG + 'campaign-pointing.png',
    title: "New Idea Submission",
    body: "Together we revolutionize treatment options for orthopedic diseases."
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/news.kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* About Us → News listing, with the Quickminds / patient-story quote block. */
const {
  SectionHeading,
  NewsCard,
  Tag,
  Pagination,
  Quote,
  Divider
} = window.MedartisDesignSystem_dbc0f7;
const ITEMS = [{
  image: IMG + 'campaign-pointing.png',
  date: '10.06.2026',
  category: 'Company News',
  title: 'Medartis wins the Swiss Medtech Award 2026',
  teaser: 'The prize recognises outstanding achievements within the Swiss medical technology industry.'
}, {
  image: IMG + 'campaign-bionic-hands.png',
  date: '18.05.2026',
  category: 'Company News',
  title: 'Medartis acquires CADskills',
  teaser: 'Strengthening its position in patient-specific implants and titanium 3D printing.'
}, {
  image: IMG + 'campaign-duo-mask.jpg',
  date: '23.04.2026',
  category: 'Company News',
  title: 'Shareholders endorse Board proposals at AGM 2026',
  teaser: 'All substantive proposals approved with majorities exceeding 90.9%.'
}, {
  image: IMG + 'campaign-handstand.jpg',
  date: '11.03.2026',
  category: 'Product News',
  title: 'Fore- and Midfoot System 2.0/2.3, 2.8 expands',
  teaser: 'New plate geometries for Lisfranc and midfoot fractures.'
}, {
  image: IMG + 'campaign-sprinter.png',
  date: '04.02.2026',
  category: 'Education',
  title: 'Quickminds season three goes live',
  teaser: 'Eighteen surgeons on the cases that changed how they operate.'
}, {
  image: IMG + 'campaign-hands.png',
  date: '15.01.2026',
  category: 'Company News',
  title: 'Full-year results 2025',
  teaser: 'Group revenue and outlook for the extremities and CMF markets.'
}];
function NewsScreen() {
  const [filter, setFilter] = React.useState('All');
  const [page, setPage] = React.useState(1);
  const cats = ['All', 'Company News', 'Product News', 'Education'];
  const list = filter === 'All' ? ITEMS : ITEMS.filter(i => i.category === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About Us",
    title: "News",
    lead: "Company announcements, product releases and education programmes from Basel and the Medartis group."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-9)'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: filter === c ? 'solid' : 'outline'
  }, c)))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-8) 0 var(--space-9)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-9)'
    }
  }, list.map(i => /*#__PURE__*/React.createElement(NewsCard, _extends({
    key: i.title
  }, i)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pages: 4,
    onChange: setPage
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "var(--space-12)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    tone: "inverse",
    author: "Peter Neuenschwander",
    role: "Patient story, Basel"
  }, "Six weeks after the plate went in, I was back on my bike."), /*#__PURE__*/React.createElement("img", {
    src: IMG + 'campaign-prosthetic-leg.png',
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover'
    }
  }))));
}
Object.assign(window, {
  NewsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/news.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shell.kit.jsx
try { (() => {
/* medartis.com page shell — utility strip, mega-menu header, black footer. */
const {
  UtilityBar,
  NavBar,
  SiteFooter
} = window.MedartisDesignSystem_dbc0f7;
const LOGO_BLACK = '../../assets/logo/medartis-wordmark-black.svg';
const LOGO_WHITE = '../../assets/logo/medartis-wordmark-white.svg';
const ICONS = '../../assets/icons';
const IMG = '../../assets/imagery/';
const NAV = [{
  label: 'Procedures',
  children: [{
    label: 'Head',
    items: ['Midface Fractures', 'Mandibular Fractures', 'Mandibular Reconstruction', 'Orthognathic Surgery', 'Occlusion']
  }, {
    label: 'Hand & Wrist',
    items: ['Metacarpal / Phalangeal fracture', 'Carpal arthrodesis', 'Scaphoid non-union', 'Distal radius fracture']
  }, {
    label: 'Forearm, Elbow & Shoulder',
    items: ['Radius & ulna shaft', 'Radial head fractures', 'Olecranon fracture', 'Clavicle fractures']
  }, {
    label: 'Foot & Ankle',
    items: ['Hallux Valgus / Varus', 'Lisfranc dislocation', 'Calcaneal fracture', 'Ankle arthritis']
  }]
}, {
  label: 'Solutions',
  children: [{
    label: 'Upper Extremities',
    items: ['Hand', 'Wrist', 'Forearm', 'Elbow', 'Shoulder', 'CCS Upper Extremities']
  }, {
    label: 'Lower Extremities',
    items: ['Foot', 'Ankle', 'CCS Lower Extremities']
  }, {
    label: 'CMF',
    items: ['Midface', 'Mandible', 'Orthognathics']
  }, {
    label: 'CMX — Personalized',
    items: ['CMX Solutions', 'CMX Indications', 'CMX Service', 'CMX Portal', 'FAQs']
  }]
}, {
  label: 'Research'
}, {
  label: 'Education',
  children: [{
    label: 'Formats',
    items: ['Events', 'Quickminds', 'Patient Story']
  }, {
    label: 'Research',
    items: ['Clinical Research', 'New Idea Submission']
  }]
}, {
  label: 'Resources',
  children: [{
    label: 'Downloads',
    items: ['eIFU / Surgical technique', 'Documents', 'Certificates', 'Videos']
  }]
}, {
  label: 'Investors'
}, {
  label: 'Career'
}, {
  label: 'About Us',
  children: [{
    label: 'Company',
    items: ['History', 'News', 'Media', 'Leadership', 'Group companies']
  }, {
    label: 'Responsibility',
    items: ['Sustainability', 'Compliance', 'Where to find us']
  }]
}];
function Shell({
  active,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(UtilityBar, {
    language: "EN",
    items: [{
      label: 'CMX Portal'
    }, {
      label: 'Partner network'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const t = e.target.closest('a');
      if (t && onNavigate) {
        e.preventDefault();
        onNavigate(t.textContent.trim());
      }
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: NAV,
    active: active,
    logoSrc: LOGO_BLACK
  })), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(SiteFooter, {
    assetBase: ICONS,
    logoSrc: LOGO_WHITE
  }));
}
function Section({
  tone = 'light',
  pad = 'var(--space-13)',
  children,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("section", {
    className: dark ? 'medartis-inverse' : undefined,
    style: {
      background: dark ? 'var(--medartis-black)' : 'var(--surface-page)',
      color: dark ? 'var(--medartis-white)' : 'var(--text-primary)',
      padding: `${pad} var(--web-pad-x)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--web-max)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(window, {
  Shell,
  Section,
  NAV,
  LOGO_BLACK,
  LOGO_WHITE,
  ICONS,
  IMG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shell.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/solution.kit.jsx
try { (() => {
/* Solutions → Upper Extremities → Wrist → Distal Radius and Distal Ulna System 2.5 */
const {
  Breadcrumb,
  SectionHeading,
  TabBar,
  ProductCard,
  Accordion,
  DataTable,
  Button,
  Tag,
  Divider,
  ImageFrame
} = window.MedartisDesignSystem_dbc0f7;
function SolutionScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState('Overview');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)",
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Solutions'
    }, {
      label: 'Upper Extremities'
    }, {
      label: 'Wrist'
    }, {
      label: 'Distal Radius and Distal Ulna System 2.5'
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "var(--space-11)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "inverse"
  }, "Upper Extremities \xB7 Wrist"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    title: "Distal Radius and Distal Ulna System 2.5",
    lead: "Anatomically pre-contoured 2.5 mm plates with TriLock multidirectional locking for intra- and extra-articular fractures, correction osteotomies and arthrodesis."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, "Ordering catalog"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      color: '#fff',
      borderColor: '#fff'
    }
  }, "eIFU / Surgical technique"))), /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG + 'campaign-arm.png',
    ratio: "4 / 3"
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)"
  }, /*#__PURE__*/React.createElement(TabBar, {
    tabs: ['Overview', 'Indications', 'Instruments', 'Documents'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, tab === 'Overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    region: "Wrist",
    image: IMG + 'campaign-arm.png',
    name: "Volar Distal Radius Plates 2.5",
    meta: "Standard, narrow and extended"
  }), /*#__PURE__*/React.createElement(ProductCard, {
    region: "Wrist",
    image: IMG + 'campaign-bionic-hands.png',
    name: "Dorsal Distal Radius Plates 2.5",
    meta: "L, T and straight"
  }), /*#__PURE__*/React.createElement(ProductCard, {
    region: "Wrist",
    image: IMG + 'campaign-arm.png',
    name: "Distal Ulna Plates 2.5",
    meta: "Hook and straight"
  }), /*#__PURE__*/React.createElement(ProductCard, {
    region: "Wrist",
    image: IMG + 'campaign-bionic-hands.png',
    name: "SpeedTip CCS 2.2 / 3.0",
    meta: "Cannulated compression screws"
  })), tab === 'Indications' && /*#__PURE__*/React.createElement("ul", {
    "data-bullets": true,
    style: {
      columns: 2,
      columnGap: 'var(--space-11)',
      maxWidth: 900
    }
  }, ['Intra- and extra-articular distal radius fractures', 'Distal ulna fracture osteosynthesis', 'Correction osteotomy of the distal radius', 'Ulnar shortening osteotomy', 'Wrist arthrodesis', 'Scaphoid non-union'].map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      font: 'var(--type-body)'
    }
  }, i))), tab === 'Instruments' && /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'ref',
      label: 'Ref.'
    }, {
      key: 'name',
      label: 'Instrument'
    }, {
      key: 'd',
      label: 'Ø mm',
      align: 'right'
    }, {
      key: 'qty',
      label: 'Qty',
      align: 'right'
    }],
    rows: [{
      ref: 'M-2530.01',
      name: 'Drill bit, calibrated',
      d: '2.0',
      qty: '2'
    }, {
      ref: 'M-2530.04',
      name: 'Screwdriver, TriLock',
      d: '—',
      qty: '1'
    }, {
      ref: 'M-2530.11',
      name: 'Aiming block, volar',
      d: '—',
      qty: '1'
    }, {
      ref: 'M-2530.22',
      name: 'Depth gauge',
      d: '—',
      qty: '1'
    }]
  }), tab === 'Documents' && /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      title: 'Surgical technique — Distal Radius 2.5 (EN)',
      body: 'PDF, 4.2 MB. Step-by-step technique including plate selection, TriLock screw placement and post-operative care.'
    }, {
      title: 'Ordering catalog — APTUS Upper Extremities',
      body: 'PDF, 18 MB. Full reference list for plates, screws and instruments.'
    }, {
      title: 'eIFU',
      body: 'Electronic instructions for use, available in 24 languages.'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)",
    style: {
      background: 'var(--surface-well)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Related",
    title: "Also for the wrist"
  }), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-7) 0 var(--space-9)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    region: "Wrist",
    name: "Arthrodesis System 2.0/2.3, 2.5",
    meta: "Carpal and total wrist fusion",
    image: IMG + 'campaign-arm.png'
  }), /*#__PURE__*/React.createElement(ProductCard, {
    region: "Wrist",
    name: "Ulna Shortening System 2.5",
    meta: "Oblique osteotomy, compression",
    image: IMG + 'campaign-bionic-hands.png'
  }), /*#__PURE__*/React.createElement(ProductCard, {
    region: "Forearm",
    name: "Radius Ulna Shaft System 2.8",
    meta: "Diaphyseal plating",
    image: IMG + 'campaign-arm.png'
  }))));
}
Object.assign(window, {
  SolutionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/solution.kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.HeroSlider = __ds_scope.HeroSlider;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

__ds_ns.Slide = __ds_scope.Slide;

__ds_ns.TitleSlide = __ds_scope.TitleSlide;

__ds_ns.SectionSlide = __ds_scope.SectionSlide;

__ds_ns.AgendaSlide = __ds_scope.AgendaSlide;

__ds_ns.ImageTextSlide = __ds_scope.ImageTextSlide;

__ds_ns.ColumnsSlide = __ds_scope.ColumnsSlide;

__ds_ns.ChartSlide = __ds_scope.ChartSlide;

__ds_ns.QuoteSlide = __ds_scope.QuoteSlide;

__ds_ns.TeamSlide = __ds_scope.TeamSlide;

__ds_ns.ThankYouSlide = __ds_scope.ThankYouSlide;

__ds_ns.ClosingSlide = __ds_scope.ClosingSlide;

__ds_ns.DeckSlides = __ds_scope.DeckSlides;

})();
