import React from 'react';

/** Deep-hierarchy trail — the Solutions tree runs 4 levels deep. */
export function Breadcrumb({ items = [], style, ...rest }) {
  return (
    <nav aria-label="Breadcrumb" style={{ font: 'var(--type-note)', color: 'var(--text-muted)', ...style }} {...rest}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)', margin: 0, padding: 0, listStyle: 'none' }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', margin: 0 }}>
              {last ? (
                <span style={{ color: 'var(--text-primary)' }}>{it.label}</span>
              ) : (
                <a href={it.href || '#'} style={{ color: 'var(--text-muted)', textDecoration: 'none', border: 0 }}>
                  {it.label}
                </a>
              )}
              {!last && <span aria-hidden="true" style={{ color: 'var(--sky-400)' }}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
