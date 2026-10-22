import * as React from 'react';

/** Tile for an implant system in a Solutions listing. */
export interface ProductCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  image?: string;
  imageAlt?: string;
  /** e.g. "Distal Radius and Distal Ulna System 2.5" */
  name?: React.ReactNode;
  /** Secondary line — screw diameters, plate count. */
  meta?: React.ReactNode;
  /** Uppercase eyebrow: Upper Extremities, CMF, … */
  region?: string;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
