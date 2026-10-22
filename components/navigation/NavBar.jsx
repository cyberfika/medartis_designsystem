import React from 'react';

/** Primary site navigation: wordmark left, top-level items right, hover reveals a mega panel. */
export function NavBar({ items = [], active, logoSrc = '/assets/logo/medartis-wordmark-black.svg', onSearch, style, ...rest }) {
  const [open, setOpen] = React.useState(null);
  return (
    <nav
      onMouseLeave={() => setOpen(null)}
      style={{ position: 'relative', background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)', ...style }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)', height: 'var(--web-header-h)', padding: '0 var(--web-pad-x)' }}>
        <a href="/" style={{ border: 0, flex: '0 0 auto' }}>
          <img src={logoSrc} alt="Medartis" style={{ width: 148, display: 'block' }} />
        </a>
        <ul style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', margin: 0, padding: 0, listStyle: 'none', flex: 1 }}>
          {items.map((it) => (
            <li key={it.label} onMouseEnter={() => setOpen(it.children ? it.label : null)} style={{ margin: 0 }}>
              <a
                href={it.href || '#'}
                style={{
                  display: 'block',
                  padding: '6px 0',
                  font: 'var(--weight-light) var(--text-md)/1 var(--font-sans)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: active === it.label || open === it.label ? '2px solid var(--medartis-black)' : '2px solid transparent',
                  transition: 'var(--transition-control)',
                }}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onSearch}
          aria-label="Search"
          style={{ flex: '0 0 auto', width: 40, height: 40, border: '1px solid var(--medartis-black)', background: 'transparent', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
        >
          <span aria-hidden="true" style={{ width: 12, height: 12, border: '1.5px solid var(--medartis-black)', borderRadius: '50%', boxShadow: '4px 4px 0 -3.2px var(--medartis-black)', transform: 'translate(-1px,-1px)' }} />
        </button>
      </div>
      {open && (
        <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)', boxShadow: 'var(--shadow-overlay)', padding: 'var(--space-9) var(--web-pad-x)', zIndex: 'var(--z-dropdown)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 'var(--space-9)' }}>
            {(items.find((i) => i.label === open)?.children || []).map((group) => (
              <div key={group.label}>
                <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--sky-300)', marginBottom: 'var(--space-5)' }}>
                  {group.label}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {(group.items || []).map((l) => (
                    <li key={l} style={{ margin: 0 }}>
                      <a href="#" style={{ font: 'var(--type-meta)', color: 'var(--text-primary)', textDecoration: 'none', border: 0 }}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
