import React from 'react';

/* Medartis corporate deck — 1280×720. Geometry is lifted from the supplied PowerPoint template
   (uploads/Template Medartis.pptx): 26.67px safe margin, wordmark 111×19 at top 40 / right 26.67,
   footer baseline y=662, titles in Old Standard TT, body in Roboto Light, sky-300 hairlines. */

const W = 1280, H = 720, M = 26.67;
const LOGO = { position: 'absolute', top: 40, right: M, width: 111, height: 19 };

/** Slide chrome: background, wordmark, footer and page number. */
export function Slide({ tone = 'light', footer, page, logo = true, assetBase = '../assets/logo', children, style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <div
      style={{
        position: 'relative',
        width: W,
        height: H,
        overflow: 'hidden',
        background: dark ? 'var(--medartis-black)' : 'var(--medartis-white)',
        color: dark ? 'var(--medartis-white)' : 'var(--medartis-black)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {logo && <img src={`${assetBase}/medartis-wordmark-${dark ? 'white' : 'black'}.svg`} alt="Medartis" style={LOGO} />}
      {footer && (
        <div style={{ position: 'absolute', left: M, top: 662, font: 'var(--weight-light) 14px/1 var(--font-sans)', opacity: dark ? 0.7 : 0.62 }}>{footer}</div>
      )}
      {page != null && (
        <div style={{ position: 'absolute', right: M, top: 660, font: 'var(--weight-light) 16px/1 var(--font-sans)', opacity: dark ? 0.7 : 0.62 }}>{page}</div>
      )}
    </div>
  );
}

/** Cover 01 — full-height campaign photo on the right, title and speaker block on black. */
export function TitleSlide({ title, speaker, dateAndPlace, image, imagePosition = 'center', assetBase, ...rest }) {
  return (
    <Slide tone="dark" assetBase={assetBase} {...rest}>
      {image && (
        <img src={image} alt="" style={{ position: 'absolute', left: 183, top: 0, width: W - 183, height: H, objectFit: 'cover', objectPosition: imagePosition }} />
      )}
      <div style={{ position: 'absolute', left: 0, top: 0, width: 760, height: H, background: 'linear-gradient(90deg,#000 0%,#000 46%,rgba(0,0,0,0) 100%)' }} />
      <h1 style={{ position: 'absolute', left: 95, top: 114, width: 583, margin: 0, font: 'var(--weight-regular) 64px/0.9 var(--font-display)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>{title}</h1>
      <div style={{ position: 'absolute', left: 95, top: 385, width: 583, font: 'var(--weight-light) 24px/1.35 var(--font-sans)', color: 'var(--sky-300)' }}>
        <div>{speaker}</div>
        <div style={{ fontSize: 21, opacity: 0.82 }}>{dateAndPlace}</div>
      </div>
    </Slide>
  );
}

/** Section Header 01 — same split as the cover, with a lead paragraph instead of a speaker. */
export function SectionSlide({ kicker, title, lead, image, imagePosition = 'center', page, assetBase, ...rest }) {
  return (
    <Slide tone="dark" page={page} assetBase={assetBase} {...rest}>
      {image && <img src={image} alt="" style={{ position: 'absolute', left: 183, top: 0, width: W - 183, height: H, objectFit: 'cover', objectPosition: imagePosition }} />}
      <div style={{ position: 'absolute', left: 0, top: 0, width: 800, height: H, background: 'linear-gradient(90deg,#000 0%,#000 44%,rgba(0,0,0,0) 100%)' }} />
      {kicker && (
        <div style={{ position: 'absolute', left: 87, top: 66, display: 'flex', alignItems: 'center', gap: 14, font: 'var(--weight-regular) 12px/1 var(--font-sans)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--sky-300)' }}>
          <span style={{ width: 32, height: 1, background: 'var(--sky-300)' }} />
          {kicker}
        </div>
      )}
      <h2 style={{ position: 'absolute', left: 87, top: 106, width: 592, margin: 0, font: 'var(--weight-regular) 64px/0.9 var(--font-display)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>{title}</h2>
      <p style={{ position: 'absolute', left: 87, top: 294, width: 592, margin: 0, font: 'var(--weight-light) 24px/1.4 var(--font-sans)', color: 'rgba(255,255,255,.72)' }}>{lead}</p>
    </Slide>
  );
}

/** Agenda — sky-300 numerals, label column, right-aligned meta column. */
export function AgendaSlide({ title = 'Agenda', items = [], footer, page, assetBase, ...rest }) {
  return (
    <Slide footer={footer} page={page} assetBase={assetBase} {...rest}>
      <h2 style={{ position: 'absolute', left: M, top: M, margin: 0, font: 'var(--weight-regular) 51px/0.9 var(--font-display)', letterSpacing: '-0.01em' }}>{title}</h2>
      {items.map((it, i) => {
        const y = 166 + i * 64.5;
        return (
          <div key={i}>
            <div style={{ position: 'absolute', left: 180, top: y, width: 57, height: 54, display: 'grid', placeItems: 'center', font: 'var(--weight-light) 48px/1 var(--font-display)', color: 'var(--sky-300)' }}>{i + 1}</div>
            <div style={{ position: 'absolute', left: 274, top: y, width: 474, height: 54, display: 'flex', alignItems: 'center', font: 'var(--weight-light) 24px/1.2 var(--font-sans)' }}>{it.label}</div>
            <div style={{ position: 'absolute', left: 755, top: y, width: 375, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', font: 'var(--weight-light) 24px/1.2 var(--font-sans)', color: 'var(--text-secondary)' }}>{it.meta}</div>
            <div style={{ position: 'absolute', left: 180, top: y + 58, width: 950, height: 1, background: 'var(--sky-300)', opacity: 0.7 }} />
          </div>
        );
      })}
    </Slide>
  );
}

/** Image + Text — 483×486 image left, sky rules top and bottom of the text column. */
export function ImageTextSlide({ tone = 'light', title, body = [], image, footer, page, assetBase, ...rest }) {
  const dark = tone === 'dark';
  return (
    <Slide tone={tone} footer={footer} page={page} assetBase={assetBase} {...rest}>
      {title && (
        <h2 style={{ position: 'absolute', left: M, top: M, width: 900, margin: 0, font: 'var(--weight-regular) 51px/0.9 var(--font-display)', letterSpacing: '-0.01em' }}>{title}</h2>
      )}
      {image && <img src={image} alt="" style={{ position: 'absolute', left: 26, top: 163, width: 483, height: 486, objectFit: 'cover' }} />}
      <div style={{ position: 'absolute', left: 560, top: 163, width: 693, height: 1, background: 'var(--sky-300)' }} />
      <div style={{ position: 'absolute', left: 560, top: 648, width: 693, height: 1, background: 'var(--sky-300)' }} />
      <ul style={{ position: 'absolute', left: 580, top: 209, width: 642, margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 22 }}>
        {body.map((b, i) => (
          <li key={i} style={{ position: 'relative', paddingLeft: 30, margin: 0, font: 'var(--weight-light) 24px/1.35 var(--font-sans)', color: dark ? 'rgba(255,255,255,.86)' : 'var(--medartis-black)' }}>
            <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--sky-300)' }}>⎼</span>
            {b}
          </li>
        ))}
      </ul>
    </Slide>
  );
}

/** 3 Columns — icon, 24pt title, body; vertical sky rules between columns. */
export function ColumnsSlide({ title, columns = [], footer, page, assetBase, ...rest }) {
  const xs = [26, 445, 853];
  return (
    <Slide footer={footer} page={page} assetBase={assetBase} {...rest}>
      {title && <h2 style={{ position: 'absolute', left: M, top: M, margin: 0, font: 'var(--weight-regular) 51px/0.9 var(--font-display)', letterSpacing: '-0.01em' }}>{title}</h2>}
      {[435, 844].map((x) => (
        <div key={x} style={{ position: 'absolute', left: x, top: 165, width: 1, height: 434, background: 'var(--sky-300)' }} />
      ))}
      {columns.slice(0, 3).map((c, i) => (
        <div key={i}>
          {c.icon && <img src={c.icon} alt="" style={{ position: 'absolute', left: xs[i], top: 155, width: 61, height: 61, objectFit: 'contain' }} />}
          <div style={{ position: 'absolute', left: xs[i], top: 226, width: 370, font: 'var(--weight-regular) 32px/1.15 var(--font-display)', letterSpacing: '-0.01em' }}>{c.title}</div>
          <div style={{ position: 'absolute', left: xs[i], top: 274, width: 370, font: 'var(--weight-light) 24px/1.35 var(--font-sans)', color: 'var(--text-secondary)' }}>{c.body}</div>
        </div>
      ))}
    </Slide>
  );
}

/** Market / Chart — a headline figure row over a simple bar chart. */
export function ChartSlide({ title, note, stats = [], series = [], footer, page, assetBase, ...rest }) {
  const max = Math.max(1, ...series.map((s) => s.value));
  return (
    <Slide footer={footer} page={page} assetBase={assetBase} {...rest}>
      {title && <h2 style={{ position: 'absolute', left: M, top: M, margin: 0, font: 'var(--weight-regular) 51px/0.9 var(--font-display)', letterSpacing: '-0.01em' }}>{title}</h2>}
      <div style={{ position: 'absolute', left: M, top: 140, width: 1226, display: 'grid', gridTemplateColumns: `repeat(${Math.max(stats.length, 1)},1fr)`, gap: 19 }}>
        {stats.map((s, i) => (
          <div key={i}>
            <div style={{ font: 'var(--weight-regular) 51px/1 var(--font-display)', letterSpacing: '-0.01em' }}>
              {s.value}
              {s.unit && <span style={{ fontSize: 22, marginLeft: 6, color: 'var(--sky-500)' }}>{s.unit}</span>}
            </div>
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--sky-300)', font: 'var(--weight-light) 16px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: M, top: 320, width: 1226, height: 280, display: 'flex', alignItems: 'flex-end', gap: 19, borderBottom: '1px solid var(--medartis-black)' }}>
        {series.map((s, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ font: 'var(--weight-light) 16px/1 var(--font-sans)', textAlign: 'center', marginBottom: 8, color: 'var(--text-secondary)' }}>{s.value}</div>
            <div style={{ height: `${(s.value / max) * 84}%`, background: i === series.length - 1 ? 'var(--medartis-black)' : 'var(--sky-300)' }} />
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: M, top: 604, width: 1226, display: 'flex', gap: 19 }}>
        {series.map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', font: 'var(--weight-light) 14px/1 var(--font-sans)', color: 'var(--text-secondary)' }}>{s.label}</div>
        ))}
      </div>
      {note && <div style={{ position: 'absolute', left: M, top: 636, font: 'var(--weight-light) 12px/1.3 var(--font-sans)', color: 'var(--text-muted)' }}>{note}</div>}
    </Slide>
  );
}

/** Big quote — Old Standard TT over a full-bleed campaign visual. */
export function QuoteSlide({ quote, author, role, image, imagePosition = 'center', page, assetBase, ...rest }) {
  return (
    <Slide tone="dark" page={page} assetBase={assetBase} {...rest}>
      {image && <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: W, height: H, objectFit: 'cover', objectPosition: imagePosition }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.15) 100%)' }} />
      <blockquote style={{ position: 'absolute', left: 108, top: 180, width: 680, margin: 0, font: 'var(--weight-regular) 51px/1.1 var(--font-display)', letterSpacing: '-0.01em', textWrap: 'pretty' }}>{quote}</blockquote>
      <div style={{ position: 'absolute', left: 108, top: 470, width: 680, paddingTop: 16, borderTop: '1px solid var(--sky-300)', font: 'var(--weight-light) 20px/1.4 var(--font-sans)', color: 'rgba(255,255,255,.75)' }}>
        <strong style={{ fontWeight: 500, color: '#fff' }}>{author}</strong>
        {author && role ? ' — ' : ''}
        {role}
      </div>
    </Slide>
  );
}

/** Team — 4×2 grid of portraits with NAME / Job captions. */
export function TeamSlide({ title = 'Team', people = [], footer, page, assetBase, ...rest }) {
  return (
    <Slide footer={footer} page={page} assetBase={assetBase} {...rest}>
      <h2 style={{ position: 'absolute', left: M, top: M, margin: 0, font: 'var(--weight-regular) 51px/0.9 var(--font-display)', letterSpacing: '-0.01em' }}>{title}</h2>
      <div style={{ position: 'absolute', left: M, top: 150, width: 1226, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 19 }}>
        {people.slice(0, 8).map((p, i) => (
          <div key={i}>
            <div style={{ aspectRatio: '1 / 1', background: 'var(--medartis-black)', overflow: 'hidden' }}>
              {p.photo && <img src={p.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </div>
            <div style={{ marginTop: 12, font: 'var(--weight-regular) 16px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase' }}>{p.name}</div>
            <div style={{ marginTop: 4, font: 'var(--weight-light) 14px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>{p.job}</div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/** Thank you 01 — black plate over a white contact band. */
export function ThankYouSlide({
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
  const item = (icon, text) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, font: 'var(--weight-light) 15px/1 var(--font-sans)' }}>
      <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--medartis-black)', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
        <span style={{ width: 15, height: 15, background: '#fff', WebkitMaskImage: `url(${iconBase}/${icon}.svg)`, maskImage: `url(${iconBase}/${icon}.svg)`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
      </span>
      {text}
    </div>
  );
  return (
    <Slide tone="dark" logo={false} assetBase={assetBase} {...rest}>
      <div style={{ position: 'absolute', left: 0, top: 538, width: W, height: 182, background: 'var(--medartis-white)' }} />
      <h1 style={{ position: 'absolute', left: 139, top: 100, margin: 0, font: 'var(--weight-regular) 72px/1.02 var(--font-display)', letterSpacing: '-0.01em' }}>
        {headline[0]}
        <br />
        {headline[1]}
      </h1>
      <img src={symbol} alt="" style={{ position: 'absolute', left: 700, top: 120, width: 300, opacity: 0.9 }} />
      <div style={{ position: 'absolute', left: 139, top: 340, width: 460, height: 1, background: 'var(--sky-300)' }} />
      <div style={{ position: 'absolute', left: 139, top: 366, font: 'var(--weight-light) 20px/1 var(--font-sans)', color: 'var(--sky-300)', letterSpacing: 'var(--tracking-caps)' }}>{site}</div>
      <div style={{ position: 'absolute', left: 139, top: 596, display: 'flex', gap: 56, color: 'var(--medartis-black)' }}>
        {item('phone', phone)}
        {item('mail', email)}
        {item('location', address)}
      </div>
      <img src="../assets/logo/medartis-wordmark-black.svg" alt="Medartis" style={{ position: 'absolute', right: 26.67, top: 592, width: 140 }} />
    </Slide>
  );
}

/** Thank you 02 — the brand's closing statement over a full-bleed visual. */
export function ClosingSlide({ lines = ['Move again.', 'Enjoy life.'], image, imagePosition = 'center', assetBase = '../assets/logo', ...rest }) {
  return (
    <Slide tone="dark" logo={false} assetBase={assetBase} {...rest}>
      {image && <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: W, height: H, objectFit: 'cover', objectPosition: imagePosition }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,.88) 0%,rgba(0,0,0,.5) 55%,rgba(0,0,0,.05) 100%)' }} />
      <div style={{ position: 'absolute', left: 108, top: 156, width: 705, font: 'var(--weight-regular) 80px/1.05 var(--font-display)', letterSpacing: '-0.01em' }}>
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <img src={`${assetBase}/medartis-wordmark-white.svg`} alt="Medartis" style={{ position: 'absolute', left: 122, top: 521, width: 159 }} />
    </Slide>
  );
}

/** Namespace object holding every slide layout, for consumers that prefer one import. */
export const DeckSlides = { Slide, TitleSlide, SectionSlide, AgendaSlide, ImageTextSlide, ColumnsSlide, ChartSlide, QuoteSlide, TeamSlide, ThankYouSlide, ClosingSlide };
