import * as React from 'react';

/**
 * News / press-release card as used on the medartis.com homepage news row.
 */
export interface NewsCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  image?: string;
  imageAlt?: string;
  /** Displayed verbatim — the site uses DD.MM.YYYY. */
  date?: string;
  category?: string;
  title?: React.ReactNode;
  teaser?: React.ReactNode;
  href?: string;
}
export declare function NewsCard(props: NewsCardProps): JSX.Element;
