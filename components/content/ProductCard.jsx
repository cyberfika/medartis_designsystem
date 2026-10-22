import React from 'react';

/** Implant-system tile: product shot on a light well, system name, size range. */
export function ProductCard({ image, imageAlt = '', name, meta, region, href = '#', style, ...rest }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        border: '1px solid var(--border-default)',
        color: 'var(--text-primary)',
        background: 'var(--surface-card)',
        transition: 'var(--transition-card)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ aspectRatio: '3 / 2', background: 'var(--surface-well)', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
        {image && <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />}
      </div>
      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {region && (
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{region}</span>
        )}
        <span style={{ font: 'var(--weight-medium) var(--text-md)/1.35 var(--font-sans)' }}>{name}</span>
        {meta && <span style={{ font: 'var(--type-meta)', color: 'var(--text-secondary)' }}>{meta}</span>}
      </div>
    </a>
  );
}
