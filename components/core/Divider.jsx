import React from 'react';

/** The hairline rule that structures every Medartis layout. */
export function Divider({ orientation = 'horizontal', tone = 'accent', length, style, ...rest }) {
  const color =
    tone === 'accent' ? 'var(--sky-300)' : tone === 'strong' ? 'var(--medartis-black)' : tone === 'inverse' ? 'rgba(255,255,255,.24)' : 'var(--border-default)';
  const vertical = orientation === 'vertical';
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={{
        flex: '0 0 auto',
        width: vertical ? 1 : length || '100%',
        height: vertical ? length || '100%' : 1,
        background: color,
        ...style,
      }}
      {...rest}
    />
  );
}
