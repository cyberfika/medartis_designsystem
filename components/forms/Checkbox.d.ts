import * as React from 'react';

/** Square checkbox — consent rows, filter lists. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
