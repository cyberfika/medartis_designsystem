import * as React from 'react';

/** Icon wrapper — brand SVGs first, Lucide as the documented fallback set. */
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand glyph (mail, phone, location, cursor-click, instagram, facebook, youtube) or any Lucide name. */
  name: string;
  size?: number;
  /** CSS colour applied to the glyph. */
  tone?: string;
  /** Path to assets/icons relative to the page. */
  assetBase?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
