import React from 'react';

/** Editorial card: image on top, date + category meta, serif headline, teaser, Read more. */
export function NewsCard({ image, imageAlt = '', date, category, title, teaser, href = '#', style, ...rest }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        background: 'var(--surface-card)',
        border: 0,
        borderBottom: '1px solid var(--border-default)',
        paddingBottom: 'var(--space-7)',
        ...style,
      }}
      {...rest}
    >
      {image && (
        <div style={{ overflow: 'hidden', aspectRatio: '16 / 10', background: 'var(--grey-150)', marginBottom: 'var(--space-6)' }}>
          <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      )}
      <div style={{ display: 'flex', gap: 'var(--space-4)', font: 'var(--type-note)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-wide)', marginBottom: 'var(--space-4)' }}>
        {date && <span>{date}</span>}
        {category && <span>{category}</span>}
      </div>
      <h3 style={{ margin: 0, font: 'var(--type-h2)', fontSize: 'var(--text-xl)', letterSpacing: 'var(--tracking-display)', textWrap: 'pretty' }}>{title}</h3>
      {teaser && (
        <p style={{ margin: 'var(--space-4) 0 var(--space-6)', font: 'var(--type-body)', color: 'var(--text-secondary)' }}>{teaser}</p>
      )}
      <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', font: 'var(--type-button)', borderBottom: '1px solid var(--sky-300)', alignSelf: 'flex-start', paddingBottom: 2 }}>
        Read more
        <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
