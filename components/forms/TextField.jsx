import React from 'react';

/** Single-line or multi-line text input. Square, hairline border, label above. */
export function TextField({
  label,
  required = false,
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `tf-${Math.random().toString(36).slice(2, 8)}`;
  const Control = multiline ? 'textarea' : 'input';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ font: 'var(--type-meta)', color: 'var(--text-secondary)' }}>
          {label}
          {required && <span style={{ color: 'var(--status-danger)' }}>*</span>}
        </label>
      )}
      <Control
        id={fieldId}
        rows={multiline ? rows : undefined}
        aria-invalid={!!error}
        style={{
          font: 'var(--type-body)',
          color: 'var(--text-primary)',
          background: 'var(--surface-card)',
          border: `1px solid ${error ? 'var(--status-danger)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-input)',
          padding: multiline ? '10px 14px' : '0 14px',
          height: multiline ? undefined : 44,
          width: '100%',
          outline: 'none',
          resize: multiline ? 'vertical' : undefined,
          transition: 'var(--transition-control)',
        }}
        {...rest}
      />
      {(error || hint) && (
        <small style={{ color: error ? 'var(--status-danger)' : 'var(--text-muted)' }}>{error || hint}</small>
      )}
    </div>
  );
}
