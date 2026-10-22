import * as React from 'react';

/**
 * Primary call-to-action control.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. `inverse` is for black surfaces. */
  variant?: 'primary' | 'secondary' | 'inverse' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
