import * as React from 'react';

/**
 * Full-bleed cross-fading campaign hero (#back2fun / #back2focus / #back2joy / #back2play).
 */
export interface HeroSlide {
  image: string;
  alt?: string;
  /** CSS object-position for the crop. */
  position?: string;
  headline?: React.ReactNode;
  body?: React.ReactNode;
}
export interface HeroSliderProps extends React.HTMLAttributes<HTMLElement> {
  slides?: HeroSlide[];
  height?: number | string;
  /** ms each visual rests. */
  interval?: number;
  autoplay?: boolean;
}
export declare function HeroSlider(props: HeroSliderProps): JSX.Element;
