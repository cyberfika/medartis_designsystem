import * as React from 'react';

/** Hairline data table. */
export interface DataTableColumn {
  key: string;
  label: React.ReactNode;
  align?: 'left' | 'right' | 'center';
}
export interface DataTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns?: DataTableColumn[];
  rows?: Array<Record<string, React.ReactNode>>;
  dense?: boolean;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
