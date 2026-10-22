import * as React from 'react';

/** Shared slide chrome: 1280×720 frame, wordmark, footer, page number. */
export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'light' | 'dark';
  footer?: React.ReactNode;
  page?: number | string;
  /** Set false on cover/closing layouts that carry the wordmark themselves. */
  logo?: boolean;
  /** Path to assets/logo relative to the page. */
  assetBase?: string;
}
export declare function Slide(props: SlideProps): JSX.Element;

/** Cover 01 — title + speaker on black, campaign photo bleeding off the right edge. */
export interface TitleSlideProps extends SlideProps {
  title?: React.ReactNode;
  speaker?: React.ReactNode;
  dateAndPlace?: React.ReactNode;
  image?: string;
  imagePosition?: string;
}
export declare function TitleSlide(props: TitleSlideProps): JSX.Element;

/** Section Header 01 — chapter divider. */
export interface SectionSlideProps extends TitleSlideProps {
  kicker?: string;
  lead?: React.ReactNode;
}
export declare function SectionSlide(props: SectionSlideProps): JSX.Element;

/** Agenda — sky-300 numerals with label and right-aligned meta columns. */
export interface AgendaItem { label: React.ReactNode; meta?: React.ReactNode }
export interface AgendaSlideProps extends SlideProps {
  title?: React.ReactNode;
  items?: AgendaItem[];
}
export declare function AgendaSlide(props: AgendaSlideProps): JSX.Element;

/** Image + Text — 483×486 image left, dashed list right between two sky rules. */
export interface ImageTextSlideProps extends SlideProps {
  title?: React.ReactNode;
  body?: React.ReactNode[];
  image?: string;
}
export declare function ImageTextSlide(props: ImageTextSlideProps): JSX.Element;

/** 3 Columns — icon / serif heading / body, separated by vertical sky rules. */
export interface ColumnSpec { icon?: string; title?: React.ReactNode; body?: React.ReactNode }
export interface ColumnsSlideProps extends SlideProps {
  title?: React.ReactNode;
  columns?: ColumnSpec[];
}
export declare function ColumnsSlide(props: ColumnsSlideProps): JSX.Element;

/** Market / Chart — stat row over a bar chart. */
export interface ChartStat { value: React.ReactNode; unit?: string; label?: React.ReactNode }
export interface ChartPoint { label: React.ReactNode; value: number }
export interface ChartSlideProps extends SlideProps {
  title?: React.ReactNode;
  note?: React.ReactNode;
  stats?: ChartStat[];
  series?: ChartPoint[];
}
export declare function ChartSlide(props: ChartSlideProps): JSX.Element;

/** Big quote over a full-bleed campaign visual. */
export interface QuoteSlideProps extends SlideProps {
  quote?: React.ReactNode;
  author?: string;
  role?: string;
  image?: string;
  imagePosition?: string;
}
export declare function QuoteSlide(props: QuoteSlideProps): JSX.Element;

/** Team — 4-up portrait grid with NAME / Job captions. */
export interface Person { name?: string; job?: string; photo?: string }
export interface TeamSlideProps extends SlideProps {
  title?: React.ReactNode;
  people?: Person[];
}
export declare function TeamSlide(props: TeamSlideProps): JSX.Element;

/** Thank you 01 — black plate over a white contact band. */
export interface ThankYouSlideProps extends SlideProps {
  headline?: [string, string];
  site?: string;
  phone?: string;
  email?: string;
  address?: string;
  symbol?: string;
  iconBase?: string;
}
export declare function ThankYouSlide(props: ThankYouSlideProps): JSX.Element;

/** Thank you 02 — "Move again. Enjoy life." over a full-bleed visual. */
export interface ClosingSlideProps extends SlideProps {
  lines?: string[];
  image?: string;
  imagePosition?: string;
}
export declare function ClosingSlide(props: ClosingSlideProps): JSX.Element;
