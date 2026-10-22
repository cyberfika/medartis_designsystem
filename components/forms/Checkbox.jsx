import React from 'react';

/** Square checkbox with the brand's black tick. */
export function Checkbox({ label, checked, onChange, disabled = false, id, style, ...rest }) {
  const fieldId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label
      htmlFor={fieldId}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
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
          marginTop: 2,
          border: `1px solid ${disabled ? 'var(--grey-300)' : 'var(--medartis-black)'}`,
          background: checked && !disabled ? 'var(--medartis-black)' : 'transparent',
          transition: 'var(--transition-control)',
        }}
      >
        {checked && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 4,
              top: 3,
              width: 8,
              height: 4,
              borderLeft: '1.5px solid var(--medartis-white)',
              borderBottom: '1.5px solid var(--medartis-white)',
              transform: 'rotate(-45deg)',
            }}
          />
        )}
        <input
          id={fieldId}
          type="checkbox"
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
