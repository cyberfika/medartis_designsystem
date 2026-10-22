import React from 'react';

/** Disclosure list used for FAQs and the Resources download lists. */
export function Accordion({ items = [], defaultOpen = -1, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderTop: '1px solid var(--border-default)', ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-default)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--space-6)',
                padding: 'var(--space-6) 0',
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
                textAlign: 'left',
                font: 'var(--weight-medium) var(--text-md)/1.4 var(--font-sans)',
                color: 'var(--text-primary)',
              }}
            >
              <span>{it.title}</span>
              <span
                aria-hidden="true"
                style={{
                  flex: '0 0 auto',
                  width: 10,
                  height: 10,
                  borderRight: '1px solid var(--medartis-black)',
                  borderBottom: '1px solid var(--medartis-black)',
                  transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)',
                  transition: `transform var(--duration-base) var(--ease-standard)`,
                }}
              />
            </button>
            {isOpen && (
              <div style={{ padding: '0 0 var(--space-7)', font: 'var(--type-body)', color: 'var(--text-secondary)', maxWidth: 'var(--web-prose-max)' }}>
                {it.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
