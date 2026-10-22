import React from 'react';

/** Small classification chip — news category, region, indication. */
export function Tag({ tone = 'neutral', children, style, ...rest }) {
  const tones = {
    neutral: { background: 'var(--grey-150)', color: 'var(--text-primary)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-default)' },
    accent: { background: 'var(--sky-300)', color: 'var(--medartis-black)', border: '1px solid transparent' },
    solid: { background: 'var(--medartis-black)', color: 'var(--medartis-white)', border: '1px solid transparent' },
    inverse: { background: 'transparent', color: 'var(--medartis-white)', border: '1px solid rgba(255,255,255,.4)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 24,
        padding: '0 var(--space-4)',
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-none)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
