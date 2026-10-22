import React from 'react';

const S = { sm: 32, md: 40, lg: 48 };

/** Square or circular icon-only control. Circular is reserved for social/media affordances. */
export function IconButton({ variant = 'outline', size = 'md', shape = 'square', label, children, style, ...rest }) {
  const tone =
    variant === 'solid'
      ? { background: 'var(--medartis-black)', color: 'var(--medartis-white)', border: '1px solid var(--medartis-black)' }
      : variant === 'inverse'
      ? { background: 'transparent', color: 'var(--medartis-white)', border: '1px solid rgba(255,255,255,.4)' }
      : variant === 'bare'
      ? { background: 'transparent', color: 'var(--text-primary)', border: '1px solid transparent' }
      : { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--medartis-black)' };
  return (
    <button
      aria-label={label}
      title={label}
      className="medartis-icon-button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: S[size],
        height: S[size],
        padding: 0,
        borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-none)',
        cursor: 'pointer',
        transition: 'var(--transition-control)',
        ...tone,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
