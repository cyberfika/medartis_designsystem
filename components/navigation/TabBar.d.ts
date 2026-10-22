import * as React from 'react';

/** Underlined in-page tabs. */
export interface TabBarProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  tone?: 'default' | 'inverse';
}
export declare function TabBar(props: TabBarProps): JSX.Element;
