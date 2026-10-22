import * as React from 'react';

/** Square numbered pager. */
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  page?: number;
  pages?: number;
  onChange?: (page: number) => void;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
