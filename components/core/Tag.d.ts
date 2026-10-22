import * as React from 'react';

/** Uppercase classification chip. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'outline' | 'accent' | 'solid' | 'inverse';
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
