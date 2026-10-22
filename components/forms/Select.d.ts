import * as React from 'react';

/** Labelled dropdown. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  /** Strings, or { value, label } pairs. */
  options?: Array<string | { value: string; label: string }>;
}
export declare function Select(props: SelectProps): JSX.Element;
