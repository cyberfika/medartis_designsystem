import React from 'react';

/** Uppercase kicker that sits above a display heading. */
export function Eyebrow({ rule = true, tone = 'default', children, style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: tone === 'inverse' ? 'var(--sky-300)' : 'var(--text-secondary)',
        marginBottom: 'var(--space-5)',
        ...style,
      }}
      {...rest}
    >
      {rule && <span style={{ width: 32, height: 1, background: 'var(--sky-300)', flex: '0 0 auto' }} />}
      {children}
    </div>
  );
}
