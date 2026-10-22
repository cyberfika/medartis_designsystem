import React from 'react';

/** Native select styled to match TextField. */
export function Select({ label, required = false, options = [], hint, error, id, style, ...rest }) {
  const fieldId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ font: 'var(--type-meta)', color: 'var(--text-secondary)' }}>
          {label}
          {required && <span style={{ color: 'var(--status-danger)' }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          style={{
            appearance: 'none',
            font: 'var(--type-body)',
            color: 'var(--text-primary)',
            background: 'var(--surface-card)',
            border: `1px solid ${error ? 'var(--status-danger)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-input)',
            height: 44,
            width: '100%',
            padding: '0 40px 0 14px',
            outline: 'none',
          }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return (
              <option key={value} value={value}>
                {text}
              </option>
            );
          })}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 14,
            top: '50%',
            width: 8,
            height: 8,
            marginTop: -6,
            borderRight: '1px solid var(--medartis-black)',
            borderBottom: '1px solid var(--medartis-black)',
            transform: 'rotate(45deg)',
            pointerEvents: 'none',
          }}
        />
      </div>
      {(error || hint) && <small style={{ color: error ? 'var(--status-danger)' : 'var(--text-muted)' }}>{error || hint}</small>}
    </div>
  );
}
