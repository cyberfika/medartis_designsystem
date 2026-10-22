/* medartis.com page shell — utility strip, mega-menu header, black footer. */
const { UtilityBar, NavBar, SiteFooter } = window.MedartisDesignSystem_dbc0f7;
const LOGO_BLACK = '../../assets/logo/medartis-wordmark-black.svg';
const LOGO_WHITE = '../../assets/logo/medartis-wordmark-white.svg';
const ICONS = '../../assets/icons';
const IMG = '../../assets/imagery/';

const NAV = [
  { label: 'Procedures', children: [
    { label: 'Head', items: ['Midface Fractures', 'Mandibular Fractures', 'Mandibular Reconstruction', 'Orthognathic Surgery', 'Occlusion'] },
    { label: 'Hand & Wrist', items: ['Metacarpal / Phalangeal fracture', 'Carpal arthrodesis', 'Scaphoid non-union', 'Distal radius fracture'] },
    { label: 'Forearm, Elbow & Shoulder', items: ['Radius & ulna shaft', 'Radial head fractures', 'Olecranon fracture', 'Clavicle fractures'] },
    { label: 'Foot & Ankle', items: ['Hallux Valgus / Varus', 'Lisfranc dislocation', 'Calcaneal fracture', 'Ankle arthritis'] },
  ]},
  { label: 'Solutions', children: [
    { label: 'Upper Extremities', items: ['Hand', 'Wrist', 'Forearm', 'Elbow', 'Shoulder', 'CCS Upper Extremities'] },
    { label: 'Lower Extremities', items: ['Foot', 'Ankle', 'CCS Lower Extremities'] },
    { label: 'CMF', items: ['Midface', 'Mandible', 'Orthognathics'] },
    { label: 'CMX — Personalized', items: ['CMX Solutions', 'CMX Indications', 'CMX Service', 'CMX Portal', 'FAQs'] },
  ]},
  { label: 'Research' },
  { label: 'Education', children: [
    { label: 'Formats', items: ['Events', 'Quickminds', 'Patient Story'] },
    { label: 'Research', items: ['Clinical Research', 'New Idea Submission'] },
  ]},
  { label: 'Resources', children: [
    { label: 'Downloads', items: ['eIFU / Surgical technique', 'Documents', 'Certificates', 'Videos'] },
  ]},
  { label: 'Investors' },
  { label: 'Career' },
  { label: 'About Us', children: [
    { label: 'Company', items: ['History', 'News', 'Media', 'Leadership', 'Group companies'] },
    { label: 'Responsibility', items: ['Sustainability', 'Compliance', 'Where to find us'] },
  ]},
];

function Shell({ active, onNavigate, children }) {
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)' }}>
      <UtilityBar language="EN" items={[{ label: 'CMX Portal' }, { label: 'Partner network' }]} />
      <div onClick={(e) => { const t = e.target.closest('a'); if (t && onNavigate) { e.preventDefault(); onNavigate(t.textContent.trim()); } }}>
        <NavBar items={NAV} active={active} logoSrc={LOGO_BLACK} />
      </div>
      <main>{children}</main>
      <SiteFooter assetBase={ICONS} logoSrc={LOGO_WHITE} />
    </div>
  );
}

function Section({ tone = 'light', pad = 'var(--space-13)', children, style }) {
  const dark = tone === 'dark';
  return (
    <section
      className={dark ? 'medartis-inverse' : undefined}
      style={{ background: dark ? 'var(--medartis-black)' : 'var(--surface-page)', color: dark ? 'var(--medartis-white)' : 'var(--text-primary)', padding: `${pad} var(--web-pad-x)`, ...style }}
    >
      <div style={{ maxWidth: 'var(--web-max)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

Object.assign(window, { Shell, Section, NAV, LOGO_BLACK, LOGO_WHITE, ICONS, IMG });
