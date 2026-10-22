import React from 'react';

/* Brand icons shipped in assets/icons (extracted from the corporate PowerPoint template).
   Everything else falls through to Lucide, loaded from CDN — see readme.md › ICONOGRAPHY. */
const BRAND = {
  mail: 'mail.svg',
  phone: 'phone.svg',
  location: 'location.svg',
  'cursor-click': 'cursor-click.svg',
  instagram: 'social-instagram.svg',
  facebook: 'social-facebook.svg',
  youtube: 'social-youtube.svg',
};

/** Renders a Medartis brand glyph, or a Lucide glyph by name. */
export function Icon({ name, size = 20, tone = 'currentColor', assetBase = '/assets/icons', style, ...rest }) {
  if (BRAND[name]) {
    return (
      <span
        role="img"
        aria-label={name}
        style={{
          display: 'inline-block',
          width: size,
          height: size,
          background: tone,
          WebkitMaskImage: `url(${assetBase}/${BRAND[name]})`,
          maskImage: `url(${assetBase}/${BRAND[name]})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          flex: '0 0 auto',
          ...style,
        }}
        {...rest}
      />
    );
  }
  return (
    <i
      data-lucide={name}
      style={{ display: 'inline-flex', width: size, height: size, color: tone, flex: '0 0 auto', ...style }}
      {...rest}
    />
  );
}
