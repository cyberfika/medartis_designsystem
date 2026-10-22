import * as React from 'react';

/**
 * Black corporate footer used on every medartis.com page.
 */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  address?: string[];
  phone?: string;
  email?: string;
  legal?: string[];
  menu?: string[];
  /** Brand glyph names: instagram | facebook | youtube. */
  social?: string[];
  assetBase?: string;
  logoSrc?: string;
  copyright?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
