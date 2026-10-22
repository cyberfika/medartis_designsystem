import * as React from 'react';

/** Medartis wordmark / figure mark, loaded from the supplied artwork. */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'wordmark' | 'symbol';
  /** Wordmark colour. The symbol artwork only exists in white. */
  tone?: 'black' | 'white';
  width?: number | string;
  /** Path to assets/logo relative to the page. */
  assetBase?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
