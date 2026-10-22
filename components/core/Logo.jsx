import React from 'react';

/** The supplied Medartis artwork. Never redraw, recolour or add effects to it. */
export function Logo({ variant = 'wordmark', tone = 'black', width, assetBase = '/assets/logo', style, ...rest }) {
  const file =
    variant === 'symbol'
      ? 'medartis-symbol-white.svg'
      : tone === 'white'
      ? 'medartis-wordmark-white.svg'
      : 'medartis-wordmark-black.svg';
  const w = width || (variant === 'symbol' ? 48 : 111);
  return (
    <img
      src={`${assetBase}/${file}`}
      alt="Medartis"
      style={{ width: w, height: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
}
