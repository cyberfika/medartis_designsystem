/* medartis.com home — campaign hero, news row, portfolio switcher, service row, search. */
const { HeroSlider, SectionHeading, NewsCard, MediaCard, TabBar, SearchField, Button, Eyebrow } = window.MedartisDesignSystem_dbc0f7;

const REGIONS = {
  CMF: ['Midface', 'Mandible', 'Orthognathics'],
  'Upper Extremities': ['Hand', 'Wrist', 'Forearm', 'Elbow', 'Shoulder', 'CCS Upper Extremities'],
  'Lower Extremities': ['Foot', 'Ankle', 'CCS Lower Extremities'],
  CMX: ['CMX Solutions', 'CMX Indications', 'CMX Service', 'CMX Portal', 'FAQs'],
};

function HomeScreen({ onNavigate }) {
  const [region, setRegion] = React.useState('Upper Extremities');
  const [q, setQ] = React.useState('');
  return (
    <div>
      <HeroSlider
        height={620}
        slides={[
          { image: IMG + 'campaign-hands.png', position: '72% center', headline: '#back2fun', body: 'Osteosynthesis that gives people their movement back.' },
          { image: IMG + 'campaign-sprinter.png', position: '62% center', headline: '#back2focus' },
          { image: IMG + 'campaign-handstand.jpg', position: '58% center', headline: '#back2joy' },
          { image: IMG + 'campaign-prosthetic-leg.png', position: '68% center', headline: '#back2play' },
        ]}
      />

      <Section>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-9)', marginBottom: 'var(--space-9)' }}>
          <SectionHeading eyebrow="Newsroom" title="Latest from Medartis" />
          <Button variant="secondary" onClick={() => onNavigate && onNavigate('News')}>Read More</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 'var(--space-9)' }}>
          <NewsCard image={IMG + 'campaign-pointing.png'} date="10.06.2026" category="Company News" title="Medartis wins the Swiss Medtech Award 2026" teaser="Medartis Holding AG has been named the winner of the Swiss Medtech Award 2026, recognising outstanding achievements within the Swiss medical technology industry." />
          <NewsCard image={IMG + 'campaign-bionic-hands.png'} date="18.05.2026" category="Company News" title="Medartis acquires CADskills, strengthening patient-specific implants" teaser="A Belgium-based specialist in patient-specific implant solutions and titanium 3D printing joins the group." />
          <NewsCard image={IMG + 'campaign-duo-mask.jpg'} date="23.04.2026" category="Company News" title="Shareholders endorse Board proposals at AGM 2026" teaser="All substantive proposals of the Board of Directors were approved with majorities exceeding 90.9%." />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading tone="inverse" eyebrow="Portfolio Overview" title="Choose your Region of Interest" lead="From 0.9 mm midface plates to patient-specific titanium — find the system that matches the indication." />
        <div style={{ marginTop: 'var(--space-9)' }}>
          <TabBar tone="inverse" tabs={Object.keys(REGIONS)} value={region} onChange={setRegion} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 'var(--space-11)', marginTop: 'var(--space-9)', alignItems: 'center' }}>
          <img src="../../assets/logo/medartis-symbol-white.png" alt="" style={{ width: 260, justifySelf: 'center', opacity: 0.9 }} />
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 0 }}>
            {REGIONS[region].map((r) => (
              <li key={r} style={{ margin: 0, borderTop: '1px solid rgba(255,255,255,.18)' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('Solutions'); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-6) 0', color: 'var(--medartis-white)', textDecoration: 'none', border: 0, font: 'var(--weight-light) var(--text-lg)/1.2 var(--font-sans)' }}>
                  {r}
                  <span aria-hidden="true" style={{ color: 'var(--sky-300)' }}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ maxWidth: 560, marginTop: 'var(--space-11)' }}>
          <Eyebrow tone="inverse">Or search specific key words</Eyebrow>
          <SearchField value={q} onChange={(e) => setQ(e.target.value)} style={{ background: 'transparent', borderColor: 'rgba(255,255,255,.5)' }} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Services" title="It takes more than a plate." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 'var(--space-9)', marginTop: 'var(--space-9)' }}>
          <MediaCard image={IMG + 'campaign-arm.png'} title="CMX Services" body="Order your custom implant, saw, or drill guide today, designed specifically for complex cases." />
          <MediaCard image={IMG + 'campaign-bionic-hands.png'} title="Clinical Research" body="Engaged in Research. Partnering with us." />
          <MediaCard image={IMG + 'campaign-pointing.png'} title="New Idea Submission" body="Together we revolutionize treatment options for orthopedic diseases." />
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
