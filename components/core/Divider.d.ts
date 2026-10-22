import * as React from 'react';

/** 1px rule. Medartis uses rules — not shadows — to separate content. */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  tone?: 'accent' | 'default' | 'strong' | 'inverse';
  /** CSS length for the non-1px axis. */
  length?: number | string;
}
export declare function Divider(props: DividerProps): JSX.Element;
