import * as React from 'react';

/** Icon-only control for toolbars, sliders and social rows. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid' | 'inverse' | 'bare';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'square' | 'circle';
  /** Required accessible name. */
  label: string;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
