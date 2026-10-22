import React from 'react';

/** Thin top strip above the main header: language, CMX Portal, Partner network. */
export function UtilityBar({ items = [], language = 'EN', style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 'var(--space-7)',
        height: 34,
        padding: '0 var(--web-pad-x)',
        background: 'var(--grey-150)',
        font: 'var(--type-note)',
        color: 'var(--text-secondary)',
        ...style,
      }}
      {...rest}
    >
      <button style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer', font: 'inherit', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-wide)' }}>
        {language} ▾
      </button>
      {items.map((it) => (
        <a key={it.label} href={it.href || '#'} style={{ color: 'var(--text-secondary)', textDecoration: 'none', border: 0 }}>
          {it.label}
        </a>
      ))}
    </div>
  );
}
