import * as React from 'react';

/**
 * medartis.com primary navigation with hover mega-panel.
 */
export interface NavBarGroup { label: string; items?: string[] }
export interface NavBarItem { label: string; href?: string; children?: NavBarGroup[] }
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavBarItem[];
  /** Label of the current section. */
  active?: string;
  logoSrc?: string;
  onSearch?: () => void;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
