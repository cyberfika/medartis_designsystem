import * as React from 'react';

/** Single-choice control. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): JSX.Element;
