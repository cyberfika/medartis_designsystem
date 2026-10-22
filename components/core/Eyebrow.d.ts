import * as React from 'react';

/** Uppercase kicker with the brand's sky hairline. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the 32px sky-300 rule before the label. */
  rule?: boolean;
  tone?: 'default' | 'inverse';
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
