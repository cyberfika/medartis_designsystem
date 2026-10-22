import React from 'react';

const H = { sm: 32, md: 40, lg: 48 };
const PX = { sm: 16, md: 24, lg: 32 };

/** Medartis button. Square corners, Roboto Medium, black-and-white first. */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-3)',
    height: H[size],
    padding: `0 ${PX[size]}px`,
    width: fullWidth ? '100%' : undefined,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-button)',
    font: 'var(--type-button)',
    fontSize: size === 'lg' ? 'var(--text-md)' : 'var(--text-sm)',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control)',
    whiteSpace: 'nowrap',
    ...variantStyle(variant, disabled),
    ...style,
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      disabled={href ? undefined : disabled}
      data-variant={variant}
      className="medartis-button"
      style={base}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </Tag>
  );
}

function variantStyle(variant, disabled) {
  if (disabled) {
    return { background: 'var(--action-disabled-bg)', color: 'var(--action-disabled-fg)', borderColor: 'transparent' };
  }
  switch (variant) {
    case 'secondary':
      return { background: 'transparent', color: 'var(--action-secondary-fg)', borderColor: 'var(--action-secondary-border)' };
    case 'inverse':
      return { background: 'var(--action-inverse-bg)', color: 'var(--action-inverse-fg)' };
    case 'ghost':
      return { background: 'transparent', color: 'var(--text-primary)', borderColor: 'transparent', padding: 0, height: 'auto' };
    case 'link':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        borderColor: 'transparent',
        padding: 0,
        height: 'auto',
        borderBottom: '1px solid var(--sky-300)',
      };
    default:
      return { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' };
  }
}
