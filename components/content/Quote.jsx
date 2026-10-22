import React from 'react';

/** Patient-story / Quickminds pull quote. Serif, large, no quotation glyph decoration. */
export function Quote({ children, author, role, tone = 'default', style, ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <figure style={{ margin: 0, maxWidth: 900, ...style }} {...rest}>
      <blockquote
        style={{
          margin: 0,
          font: 'var(--weight-regular) var(--display-6)/1.25 var(--font-display)',
          letterSpacing: 'var(--tracking-display)',
          color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)',
          textWrap: 'pretty',
        }}
      >
        {children}
      </blockquote>
      {(author || role) && (
        <figcaption style={{ marginTop: 'var(--space-7)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--sky-300)', font: 'var(--type-meta)', color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)' }}>
          {author && <strong style={{ fontWeight: 'var(--weight-medium)', color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)' }}>{author}</strong>}
          {author && role && ' — '}
          {role}
        </figcaption>
      )}
    </figure>
  );
}
