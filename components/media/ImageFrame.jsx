import React from 'react';

/** Fixed-ratio image frame with optional caption and bottom scrim for overlaid text. */
export function ImageFrame({ src, alt = '', ratio = '3 / 2', caption, overlay, scrim = false, style, ...rest }) {
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div style={{ position: 'relative', aspectRatio: ratio, overflow: 'hidden', background: 'var(--medartis-black)' }}>
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {(scrim || overlay) && <div style={{ position: 'absolute', inset: 0, background: 'var(--surface-scrim)' }} />}
        {overlay && (
          <div style={{ position: 'absolute', left: 'var(--space-7)', right: 'var(--space-7)', bottom: 'var(--space-7)', color: 'var(--medartis-white)', font: 'var(--weight-regular) var(--display-6)/1.1 var(--font-display)' }}>
            {overlay}
          </div>
        )}
      </div>
      {caption && (
        <figcaption style={{ marginTop: 'var(--space-4)', font: 'var(--type-note)', color: 'var(--text-muted)' }}>{caption}</figcaption>
      )}
    </figure>
  );
}
