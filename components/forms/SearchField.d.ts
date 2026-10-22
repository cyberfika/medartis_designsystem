import * as React from 'react';

/** Pill search field from the homepage "Or search specific key words" block. */
export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onSubmit?: (value?: string) => void;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
