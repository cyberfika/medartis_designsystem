import React from 'react';

/** Service / offer card: image, sans heading, short body, Read more. Used in the "It takes more than a plate." row. */
export function MediaCard({ image, imageAlt = '', title, body, href = '#', ratio = '4 / 3', tone = 'default', style, ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        border: 0,
        color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)',
        background: inverse ? 'var(--grey-900)' : 'transparent',
        ...style,
      }}
      {...rest}
    >
      <div style={{ overflow: 'hidden', aspectRatio: ratio, background: inverse ? 'var(--medartis-black)' : 'var(--grey-150)' }}>
        {image && <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
      </div>
      <div style={{ padding: inverse ? 'var(--space-7)' : 'var(--space-7) 0 0' }}>
        <h4 style={{ margin: 0, font: 'var(--weight-medium) var(--text-lg)/1.3 var(--font-sans)' }}>{title}</h4>
        {body && (
          <p style={{ margin: 'var(--space-4) 0 var(--space-6)', font: 'var(--type-body)', color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)' }}>{body}</p>
        )}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', font: 'var(--type-button)', borderBottom: '1px solid var(--sky-300)', paddingBottom: 2 }}>
          Read More <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}
