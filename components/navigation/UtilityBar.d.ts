import * as React from 'react';

/** Grey utility strip at the very top of medartis.com. */
export interface UtilityBarItem { label: string; href?: string }
export interface UtilityBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: UtilityBarItem[];
  /** Two-letter language code shown in the picker. */
  language?: string;
}
export declare function UtilityBar(props: UtilityBarProps): JSX.Element;
