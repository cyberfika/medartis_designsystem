import React from 'react';

/** Display heading with optional eyebrow, lead paragraph and trailing rule. */
export function SectionHeading({ eyebrow, title, lead, align = 'left', level = 2, rule = false, tone = 'default', style, ...rest }) {
  const Tag = `h${level}`;
  const inverse = tone === 'inverse';
  return (
    <header style={{ textAlign: align, maxWidth: align === 'center' ? 760 : undefined, margin: align === 'center' ? '0 auto' : undefined, ...style }} {...rest}>
      {eyebrow && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: align === 'center' ? 'center' : 'flex-start',
            gap: 'var(--space-4)',
            font: 'var(--type-eyebrow)',
            letterSpacing: 'var(--tracking-caps)',
            textTransform: 'uppercase',
            color: inverse ? 'var(--sky-300)' : 'var(--text-secondary)',
            marginBottom: 'var(--space-5)',
          }}
        >
          <span style={{ width: 32, height: 1, background: 'var(--sky-300)' }} />
          {eyebrow}
        </div>
      )}
      <Tag
        style={{
          margin: 0,
          font: 'var(--type-h1)',
          letterSpacing: 'var(--tracking-display)',
          color: inverse ? 'var(--medartis-white)' : 'var(--text-primary)',
          textWrap: 'pretty',
        }}
      >
        {title}
      </Tag>
      {lead && (
        <p
          style={{
            margin: 'var(--space-6) 0 0',
            font: 'var(--type-body-lg)',
            color: inverse ? 'rgba(255,255,255,.68)' : 'var(--text-secondary)',
            maxWidth: '58ch',
            marginLeft: align === 'center' ? 'auto' : undefined,
            marginRight: align === 'center' ? 'auto' : undefined,
          }}
        >
          {lead}
        </p>
      )}
      {rule && <div style={{ height: 1, background: 'var(--sky-300)', marginTop: 'var(--space-8)' }} />}
    </header>
  );
}
