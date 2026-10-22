import * as React from 'react';

/** Labelled text input — the distributor form on medartis.com uses this pattern. */
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
