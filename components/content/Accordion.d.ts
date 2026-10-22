import * as React from 'react';

/** Hairline-separated disclosure list. */
export interface AccordionItem {
  title: React.ReactNode;
  body: React.ReactNode;
}
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
