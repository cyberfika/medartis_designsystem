import React from 'react';

/** Black site footer: contact block, legal links, menu column, circular social row. */
export function SiteFooter({
  address = ['Medartis AG', 'Hochbergerstrasse 60E', '4057 Basel/Switzerland'],
  phone = '+41 61 633 34 34',
  email = 'info@medartis.com',
  legal = ['Imprint', 'Privacy Notice', 'Legal Notice', 'GTC'],
  menu = ['About Us', 'Education', 'Resources', 'Investors', 'Career', 'Technology'],
  social = ['instagram', 'facebook', 'youtube'],
  assetBase = '/assets/icons',
  logoSrc = '/assets/logo/medartis-wordmark-white.svg',
  copyright = '© 2026 Medartis AG',
  style,
  ...rest
}) {
  const link = { color: 'rgba(255,255,255,.68)', textDecoration: 'none', border: 0, font: 'var(--type-meta)' };
  const head = { font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--sky-300)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-5)', borderBottom: '1px solid rgba(255,255,255,.24)' };
  return (
    <footer style={{ background: 'var(--medartis-black)', color: 'var(--medartis-white)', padding: 'var(--space-12) var(--web-pad-x) var(--space-8)', ...style }} {...rest}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 'var(--space-10)' }}>
        <div>
          <img src={logoSrc} alt="Medartis" style={{ width: 132, display: 'block', marginBottom: 'var(--space-8)' }} />
          <div style={{ font: 'var(--type-meta)', color: 'rgba(255,255,255,.68)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {address.map((l, i) => (
              <span key={i} style={{ color: i === 0 ? 'var(--medartis-white)' : undefined }}>{l}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={head}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', font: 'var(--type-meta)', color: 'rgba(255,255,255,.68)' }}>
              <IconMask name="phone" assetBase={assetBase} />
              {phone}
            </span>
            <a href={`mailto:${email}`} style={{ ...link, display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <IconMask name="mail" assetBase={assetBase} />
              {email}
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', font: 'var(--type-meta)', color: 'rgba(255,255,255,.68)' }}>
              <IconMask name="location" assetBase={assetBase} />
              Basel, Switzerland
            </span>
          </div>
        </div>
        <div>
          <div style={head}>Menu</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {menu.map((m) => (
              <li key={m} style={{ margin: 0 }}>
                <a href="#" style={link}>{m}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={head}>Follow us</div>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            {social.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--medartis-white)', display: 'grid', placeItems: 'center', border: 0 }}
              >
                <IconMask name={s} assetBase={assetBase} size={20} tone="var(--medartis-black)" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 'var(--space-11)', paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(255,255,255,.24)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-7)', alignItems: 'center', font: 'var(--type-note)', color: 'rgba(255,255,255,.5)' }}>
        <span>{copyright}</span>
        <span style={{ display: 'flex', gap: 'var(--space-6)', marginLeft: 'auto' }}>
          {legal.map((l) => (
            <a key={l} href="#" style={{ ...link, font: 'var(--type-note)' }}>{l}</a>
          ))}
        </span>
      </div>
    </footer>
  );
}

function IconMask({ name, assetBase, size = 16, tone = 'var(--sky-300)' }) {
  const file = { mail: 'mail.svg', phone: 'phone.svg', location: 'location.svg', instagram: 'social-instagram.svg', facebook: 'social-facebook.svg', youtube: 'social-youtube.svg' }[name];
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flex: '0 0 auto',
        background: tone,
        WebkitMaskImage: `url(${assetBase}/${file})`,
        maskImage: `url(${assetBase}/${file})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}
