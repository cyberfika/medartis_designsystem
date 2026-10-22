/* Where to find us — locations list + distributor form. */
const { SectionHeading, TextField, Select, Checkbox, Radio, Button, DataTable, Divider, Icon } = window.MedartisDesignSystem_dbc0f7;

const SITES = [
  { c: 'Switzerland', e: 'Medartis AG', a: 'Hochbergerstrasse 60E, 4057 Basel', t: '+41 61 633 34 34' },
  { c: 'Germany', e: 'Medartis GmbH', a: 'Am Gansacker 10, 79224 Umkirch', t: '+49 7665 98 24 0' },
  { c: 'United Kingdom', e: 'Medartis Ltd.', a: '3 Pinnacle Way, Pride Park, Derby DE24 8ZS', t: '+44 1924 47 66 99' },
  { c: 'USA', e: 'Medartis Inc.', a: '1195 Polk Drive, Warsaw, IN 46582', t: '+1 574 376 2404' },
  { c: 'Brazil', e: 'Medartis Importação e Exportação Ltda', a: 'Rua Sena Madureira 796, São Paulo – SP', t: '+55 11 3624 7844' },
  { c: 'Japan', e: 'Medartis Co., Ltd.', a: 'NBF Shinagawa Tower 5F, Minato-ku, Tokyo', t: '+81 3 4520 5048' },
];

function ContactScreen() {
  const [consent, setConsent] = React.useState(false);
  const [kind, setKind] = React.useState('sub');
  const [sent, setSent] = React.useState(false);
  return (
    <Section pad="var(--space-11)">
      <SectionHeading eyebrow="About Us" title="Creating Worldwide Connections." lead="Nine subsidiaries and more than fifty distributor markets. Find your local Medartis contact." />
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 'var(--space-12)', marginTop: 'var(--space-10)' }}>
        <div>
          <div style={{ display: 'flex', gap: 'var(--space-8)', marginBottom: 'var(--space-7)' }}>
            <Radio name="kind" label="Subsidiary" checked={kind === 'sub'} onChange={() => setKind('sub')} />
            <Radio name="kind" label="Distributor" checked={kind === 'dis'} onChange={() => setKind('dis')} />
          </div>
          <DataTable
            columns={[{ key: 'c', label: 'Country' }, { key: 'e', label: 'Entity' }, { key: 'a', label: 'Address' }, { key: 't', label: 'Telephone', align: 'right' }]}
            rows={SITES}
          />
          <div style={{ display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-9)', font: 'var(--type-meta)', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={16} assetBase={ICONS} tone="var(--medartis-black)" /> +41 61 633 34 34</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="mail" size={16} assetBase={ICONS} tone="var(--medartis-black)" /> info@medartis.com</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="location" size={16} assetBase={ICONS} tone="var(--medartis-black)" /> Basel, Switzerland</span>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          style={{ background: 'var(--surface-well)', padding: 'var(--space-9)' }}
        >
          <h3 style={{ margin: 0, font: 'var(--type-h2)' }}>Distributor Form</h3>
          <Divider style={{ margin: 'var(--space-6) 0 var(--space-8)' }} />
          {sent ? (
            <p style={{ font: 'var(--type-body)', color: 'var(--text-secondary)' }}>Thank you — a Medartis representative will be in touch within two working days.</p>
          ) : (
            <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                <TextField label="Name" required placeholder="Name" />
                <TextField label="Surname" required placeholder="Surname" />
              </div>
              <TextField label="E-Mail" required type="email" placeholder="name@clinic.com" />
              <TextField label="Company Name" placeholder="Clinic or distributor" />
              <Select label="Country" required options={['Switzerland', 'Germany', 'United Kingdom', 'USA', 'Brazil', 'Japan']} />
              <Select label="Subject" required options={['Distribution enquiry', 'Product information', 'Education & events', 'Other']} />
              <TextField label="Message" required multiline rows={4} />
              <Checkbox
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                label={<span>I consent to the processing of my data in accordance with the <a href="#">privacy policy</a> and know that I can revoke this consent at any time.*</span>}
              />
              <Button type="submit" disabled={!consent} fullWidth>Send enquiry</Button>
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}
Object.assign(window, { ContactScreen });
