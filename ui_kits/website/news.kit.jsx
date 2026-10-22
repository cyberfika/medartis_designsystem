/* About Us → News listing, with the Quickminds / patient-story quote block. */
const { SectionHeading, NewsCard, Tag, Pagination, Quote, Divider } = window.MedartisDesignSystem_dbc0f7;

const ITEMS = [
  { image: IMG + 'campaign-pointing.png', date: '10.06.2026', category: 'Company News', title: 'Medartis wins the Swiss Medtech Award 2026', teaser: 'The prize recognises outstanding achievements within the Swiss medical technology industry.' },
  { image: IMG + 'campaign-bionic-hands.png', date: '18.05.2026', category: 'Company News', title: 'Medartis acquires CADskills', teaser: 'Strengthening its position in patient-specific implants and titanium 3D printing.' },
  { image: IMG + 'campaign-duo-mask.jpg', date: '23.04.2026', category: 'Company News', title: 'Shareholders endorse Board proposals at AGM 2026', teaser: 'All substantive proposals approved with majorities exceeding 90.9%.' },
  { image: IMG + 'campaign-handstand.jpg', date: '11.03.2026', category: 'Product News', title: 'Fore- and Midfoot System 2.0/2.3, 2.8 expands', teaser: 'New plate geometries for Lisfranc and midfoot fractures.' },
  { image: IMG + 'campaign-sprinter.png', date: '04.02.2026', category: 'Education', title: 'Quickminds season three goes live', teaser: 'Eighteen surgeons on the cases that changed how they operate.' },
  { image: IMG + 'campaign-hands.png', date: '15.01.2026', category: 'Company News', title: 'Full-year results 2025', teaser: 'Group revenue and outlook for the extremities and CMF markets.' },
];

function NewsScreen() {
  const [filter, setFilter] = React.useState('All');
  const [page, setPage] = React.useState(1);
  const cats = ['All', 'Company News', 'Product News', 'Education'];
  const list = filter === 'All' ? ITEMS : ITEMS.filter((i) => i.category === filter);
  return (
    <div>
      <Section pad="var(--space-11)">
        <SectionHeading eyebrow="About Us" title="News" lead="Company announcements, product releases and education programmes from Basel and the Medartis group." />
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-9)' }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}>
              <Tag tone={filter === c ? 'solid' : 'outline'}>{c}</Tag>
            </button>
          ))}
        </div>
        <Divider style={{ margin: 'var(--space-8) 0 var(--space-9)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 'var(--space-9)' }}>
          {list.map((i) => <NewsCard key={i.title} {...i} />)}
        </div>
        <div style={{ marginTop: 'var(--space-10)' }}>
          <Pagination page={page} pages={4} onChange={setPage} />
        </div>
      </Section>

      <Section tone="dark" pad="var(--space-12)">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 'var(--space-11)', alignItems: 'center' }}>
          <Quote tone="inverse" author="Peter Neuenschwander" role="Patient story, Basel">Six weeks after the plate went in, I was back on my bike.</Quote>
          <img src={IMG + 'campaign-prosthetic-leg.png'} alt="" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }} />
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { NewsScreen });
