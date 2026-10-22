import * as React from 'react';

/** Slash-separated trail. */
export interface BreadcrumbItem { label: string; href?: string }
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
