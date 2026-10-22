import React from 'react';

/** Horizontal in-page tabs (Region of Interest switcher, product detail sections). */
export function TabBar({ tabs = [], value, onChange, tone = 'default', style, ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-8)', borderBottom: `1px solid ${inverse ? 'rgba(255,255,255,.24)' : 'var(--border-default)'}`, ...style }} {...rest}>
      {tabs.map((t) => {
        const key = typeof t === 'string' ? t : t.value;
        const label = typeof t === 'string' ? t : t.label;
        const on = value === key;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={on}
            onClick={() => onChange && onChange(key)}
            style={{
              background: 'transparent',
              border: 0,
              borderBottom: `2px solid ${on ? (inverse ? 'var(--sky-300)' : 'var(--medartis-black)') : 'transparent'}`,
              padding: '0 0 var(--space-5)',
              marginBottom: -1,
              cursor: 'pointer',
              font: `var(--weight-${on ? 'medium' : 'light'}) var(--text-md)/1 var(--font-sans)`,
              color: inverse ? (on ? 'var(--medartis-white)' : 'rgba(255,255,255,.68)') : on ? 'var(--text-primary)' : 'var(--text-secondary)',
              transition: 'var(--transition-control)',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
