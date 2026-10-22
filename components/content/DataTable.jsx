import React from 'react';

/** Hairline table for contacts, specifications and ordering catalogues. */
export function DataTable({ columns = [], rows = [], dense = false, style, ...rest }) {
  const pad = dense ? 'var(--space-3) var(--space-4)' : 'var(--space-5) var(--space-5)';
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', font: 'var(--type-meta)', ...style }} {...rest}>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th
              key={i}
              style={{
                textAlign: c.align || 'left',
                padding: pad,
                borderBottom: '1px solid var(--medartis-black)',
                font: 'var(--type-eyebrow)',
                letterSpacing: 'var(--tracking-caps)',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                whiteSpace: 'nowrap',
              }}
            >
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            {columns.map((c, ci) => (
              <td key={ci} style={{ textAlign: c.align || 'left', padding: pad, borderBottom: '1px solid var(--border-default)', color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
