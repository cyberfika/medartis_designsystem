import React from 'react';

/** The one pill-shaped control in the system — site search. */
export function SearchField({ placeholder = 'Search specific key words', value, onChange, onSubmit, style, ...rest }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(value);
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        height: 48,
        padding: '0 var(--space-3) 0 var(--space-6)',
        background: 'var(--surface-card)',
        border: '1px solid var(--medartis-black)',
        borderRadius: 'var(--radius-pill)',
        ...style,
      }}
    >
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          flex: 1,
          minWidth: 0,
          border: 0,
          outline: 'none',
          background: 'transparent',
          font: 'var(--type-body)',
          color: 'var(--text-primary)',
        }}
        {...rest}
      />
      <button
        type="submit"
        aria-label="Search"
        style={{
          flex: '0 0 auto',
          width: 36,
          height: 36,
          borderRadius: 'var(--radius-circle)',
          border: 0,
          background: 'var(--medartis-black)',
          color: 'var(--medartis-white)',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          font: 'var(--type-button)',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 11,
            height: 11,
            border: '1.5px solid currentColor',
            borderRadius: '50%',
            boxShadow: '4px 4px 0 -3.2px currentColor',
            transform: 'translate(-1px,-1px)',
          }}
        />
      </button>
    </form>
  );
}
