import React from 'react';

/** Numbered pager for news and document listings. */
export function Pagination({ page = 1, pages = 1, onChange, style, ...rest }) {
  const cell = (on) => ({
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
    transition: 'var(--transition-control)',
  });
  return (
    <nav aria-label="Pagination" style={{ display: 'flex', gap: 'var(--space-2)', ...style }} {...rest}>
      <button style={cell(false)} disabled={page === 1} onClick={() => onChange && onChange(page - 1)} aria-label="Previous">‹</button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button key={n} style={cell(n === page)} onClick={() => onChange && onChange(n)} aria-current={n === page ? 'page' : undefined}>
          {n}
        </button>
      ))}
      <button style={cell(false)} disabled={page === pages} onClick={() => onChange && onChange(page + 1)} aria-label="Next">›</button>
    </nav>
  );
}
