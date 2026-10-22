import React from 'react';

/** The homepage campaign hero: full-bleed black photography, cross-fading, with a #hashtag headline. */
export function HeroSlider({ slides = [], height = 620, interval = 6000, autoplay = true, style, ...rest }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (!autoplay || slides.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [autoplay, interval, slides.length]);

  return (
    <section
      style={{ position: 'relative', height, background: 'var(--medartis-black)', overflow: 'hidden', color: 'var(--medartis-white)', ...style }}
      {...rest}
    >
      {slides.map((s, n) => (
        <img
          key={n}
          src={s.image}
          alt={s.alt || ''}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: s.position || 'center',
            opacity: n === i ? 1 : 0,
            transition: 'opacity var(--duration-hero) var(--ease-standard)',
          }}
        />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,0) 78%)' }} />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 var(--web-pad-x)', maxWidth: 720 }}>
        <h1 style={{ margin: 0, font: 'var(--weight-regular) var(--display-2)/0.95 var(--font-display)', letterSpacing: 'var(--tracking-display)' }}>
          {slides[i]?.headline}
        </h1>
        {slides[i]?.body && (
          <p style={{ margin: 'var(--space-7) 0 0', font: 'var(--type-body-lg)', color: 'rgba(255,255,255,.78)', maxWidth: '38ch' }}>{slides[i].body}</p>
        )}
      </div>
      <div style={{ position: 'absolute', left: 'var(--web-pad-x)', bottom: 'var(--space-9)', display: 'flex', gap: 'var(--space-4)' }}>
        {slides.map((s, n) => (
          <button
            key={n}
            aria-label={`Show ${s.headline}`}
            onClick={() => setI(n)}
            style={{
              width: n === i ? 40 : 16,
              height: 2,
              padding: 0,
              border: 0,
              cursor: 'pointer',
              background: n === i ? 'var(--sky-300)' : 'rgba(255,255,255,.4)',
              transition: 'width var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
