import React from 'react';

/** Large figure with a caption — investor and market slides. */
export function StatBlock({ value, unit, label, tone = 'default', align = 'left', style, ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div style={{ font: 'var(--weight-regular) var(--display-6)/1 var(--font-display)', color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)', letterSpacing: 'var(--tracking-display)' }}>
        {value}
        {unit && <span style={{ fontSize: '0.55em', marginLeft: 4, color: 'var(--sky-500)' }}>{unit}</span>}
      </div>
      <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--sky-300)', font: 'var(--type-meta)', color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)' }}>
        {label}
      </div>
    </div>
  );
}
