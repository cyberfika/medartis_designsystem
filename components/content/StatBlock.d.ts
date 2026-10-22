import * as React from 'react';

/** Headline figure over a sky hairline. */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: React.ReactNode;
  unit?: string;
  label?: React.ReactNode;
  tone?: 'default' | 'inverse';
  align?: 'left' | 'center';
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
