/* Solutions → Upper Extremities → Wrist → Distal Radius and Distal Ulna System 2.5 */
const { Breadcrumb, SectionHeading, TabBar, ProductCard, Accordion, DataTable, Button, Tag, Divider, ImageFrame } = window.MedartisDesignSystem_dbc0f7;

function SolutionScreen({ onNavigate }) {
  const [tab, setTab] = React.useState('Overview');
  return (
    <div>
      <Section pad="var(--space-8)" style={{ borderBottom: '1px solid var(--border-default)' }}>
        <Breadcrumb items={[{ label: 'Solutions' }, { label: 'Upper Extremities' }, { label: 'Wrist' }, { label: 'Distal Radius and Distal Ulna System 2.5' }]} />
      </Section>

      <Section tone="dark" pad="var(--space-11)">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--space-11)', alignItems: 'center' }}>
          <div>
            <Tag tone="inverse">Upper Extremities · Wrist</Tag>
            <div style={{ height: 'var(--space-6)' }} />
            <SectionHeading tone="inverse" title="Distal Radius and Distal Ulna System 2.5" lead="Anatomically pre-contoured 2.5 mm plates with TriLock multidirectional locking for intra- and extra-articular fractures, correction osteotomies and arthrodesis." />
            <div style={{ display: 'flex', gap: 'var(--space-5)', marginTop: 'var(--space-9)' }}>
              <Button variant="inverse">Ordering catalog</Button>
              <Button variant="secondary" style={{ color: '#fff', borderColor: '#fff' }}>eIFU / Surgical technique</Button>
            </div>
          </div>
          <ImageFrame src={IMG + 'campaign-arm.png'} ratio="4 / 3" />
        </div>
      </Section>

      <Section pad="var(--space-11)">
        <TabBar tabs={['Overview', 'Indications', 'Instruments', 'Documents']} value={tab} onChange={setTab} />
        <div style={{ marginTop: 'var(--space-9)' }}>
          {tab === 'Overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 'var(--space-8)' }}>
              <ProductCard region="Wrist" image={IMG + 'campaign-arm.png'} name="Volar Distal Radius Plates 2.5" meta="Standard, narrow and extended" />
              <ProductCard region="Wrist" image={IMG + 'campaign-bionic-hands.png'} name="Dorsal Distal Radius Plates 2.5" meta="L, T and straight" />
              <ProductCard region="Wrist" image={IMG + 'campaign-arm.png'} name="Distal Ulna Plates 2.5" meta="Hook and straight" />
              <ProductCard region="Wrist" image={IMG + 'campaign-bionic-hands.png'} name="SpeedTip CCS 2.2 / 3.0" meta="Cannulated compression screws" />
            </div>
          )}
          {tab === 'Indications' && (
            <ul data-bullets style={{ columns: 2, columnGap: 'var(--space-11)', maxWidth: 900 }}>
              {['Intra- and extra-articular distal radius fractures', 'Distal ulna fracture osteosynthesis', 'Correction osteotomy of the distal radius', 'Ulnar shortening osteotomy', 'Wrist arthrodesis', 'Scaphoid non-union'].map((i) => (
                <li key={i} style={{ font: 'var(--type-body)' }}>{i}</li>
              ))}
            </ul>
          )}
          {tab === 'Instruments' && (
            <DataTable
              columns={[{ key: 'ref', label: 'Ref.' }, { key: 'name', label: 'Instrument' }, { key: 'd', label: 'Ø mm', align: 'right' }, { key: 'qty', label: 'Qty', align: 'right' }]}
              rows={[
                { ref: 'M-2530.01', name: 'Drill bit, calibrated', d: '2.0', qty: '2' },
                { ref: 'M-2530.04', name: 'Screwdriver, TriLock', d: '—', qty: '1' },
                { ref: 'M-2530.11', name: 'Aiming block, volar', d: '—', qty: '1' },
                { ref: 'M-2530.22', name: 'Depth gauge', d: '—', qty: '1' },
              ]}
            />
          )}
          {tab === 'Documents' && (
            <Accordion defaultOpen={0} items={[
              { title: 'Surgical technique — Distal Radius 2.5 (EN)', body: 'PDF, 4.2 MB. Step-by-step technique including plate selection, TriLock screw placement and post-operative care.' },
              { title: 'Ordering catalog — APTUS Upper Extremities', body: 'PDF, 18 MB. Full reference list for plates, screws and instruments.' },
              { title: 'eIFU', body: 'Electronic instructions for use, available in 24 languages.' },
            ]} />
          )}
        </div>
      </Section>

      <Section pad="var(--space-11)" style={{ background: 'var(--surface-well)' }}>
        <SectionHeading eyebrow="Related" title="Also for the wrist" />
        <Divider style={{ margin: 'var(--space-7) 0 var(--space-9)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 'var(--space-8)' }}>
          <ProductCard region="Wrist" name="Arthrodesis System 2.0/2.3, 2.5" meta="Carpal and total wrist fusion" image={IMG + 'campaign-arm.png'} />
          <ProductCard region="Wrist" name="Ulna Shortening System 2.5" meta="Oblique osteotomy, compression" image={IMG + 'campaign-bionic-hands.png'} />
          <ProductCard region="Forearm" name="Radius Ulna Shaft System 2.8" meta="Diaphyseal plating" image={IMG + 'campaign-arm.png'} />
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { SolutionScreen });
