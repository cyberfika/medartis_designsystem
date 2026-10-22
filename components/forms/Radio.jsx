import React from 'react';

/** Circular radio — the only round form control in the system. */
export function Radio({ label, checked, onChange, name, value, disabled = false, id, style, ...rest }) {
  const fieldId = id || `rd-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label
      htmlFor={fieldId}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        font: 'var(--type-meta)',
        color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      <span
        style={{
          position: 'relative',
          flex: '0 0 auto',
          width: 18,
          height: 18,
          borderRadius: 'var(--radius-circle)',
          border: `1px solid ${disabled ? 'var(--grey-300)' : 'var(--medartis-black)'}`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--medartis-black)' }} />}
        <input
          id={fieldId}
          type="radio"
          name={name}
          value={value}
          checked={!!checked}
          onChange={onChange}
          disabled={disabled}
          style={{ position: 'absolute', inset: 0, opacity: 0, margin: 0, cursor: 'inherit' }}
          {...rest}
        />
      </span>
      <span>{label}</span>
    </label>
  );
}
