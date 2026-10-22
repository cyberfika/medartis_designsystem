import * as React from 'react';

/** Square-cornered image frame with optional protection scrim. */
export interface ImageFrameProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio, e.g. "3 / 2". */
  ratio?: string;
  caption?: React.ReactNode;
  /** Text laid over the bottom of the image (forces the scrim on). */
  overlay?: React.ReactNode;
  scrim?: boolean;
}
export declare function ImageFrame(props: ImageFrameProps): JSX.Element;
