import * as React from 'react';

/**
 * Section introduction: eyebrow + Old Standard TT title + optional lead.
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  level?: 1 | 2 | 3;
  /** Draw a sky hairline under the block. */
  rule?: boolean;
  tone?: 'default' | 'inverse';
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
