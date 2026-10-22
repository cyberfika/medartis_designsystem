import * as React from 'react';

/** Pull quote for patient stories and Quickminds surgeon interviews. */
export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  author?: string;
  role?: string;
  tone?: 'default' | 'inverse';
  children?: React.ReactNode;
}
export declare function Quote(props: QuoteProps): JSX.Element;
