import * as React from 'react';

/** Image-led promotional card (CMX Services, Clinical Research, New Idea Submission). */
export interface MediaCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  image?: string;
  imageAlt?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  /** CSS aspect-ratio for the image frame. */
  ratio?: string;
  tone?: 'default' | 'inverse';
}
export declare function MediaCard(props: MediaCardProps): JSX.Element;
