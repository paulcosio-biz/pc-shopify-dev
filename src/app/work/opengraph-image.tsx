import { ImageResponse } from 'next/og';

export const alt = 'Work & Case Studies — Paul Cosio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const STATS = [
  { value: '7+',  label: 'Industries' },
  { value: '50+', label: 'Stores built' },
  { value: '10+', label: 'Migrations' },
];

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px 96px', background: '#080808', position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', top: '-120px', left: '-80px', width: '600px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,92,26,0.28) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-60px', width: '500px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,140,66,0.16) 0%, transparent 70%)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #FF5C1A 0%, #FF8C42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '800', color: '#fff' }}>PC</div>
          <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Paul Cosio &middot; Portfolio</span>
        </div>

        <div style={{ display: 'flex', fontSize: '64px', fontWeight: '800', lineHeight: '1.0', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
          <div style={{ marginRight: '16px' }}>Work &amp;</div>
          <div style={{ color: '#FF5C1A' }}>Case Studies</div>
        </div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.55)', marginBottom: '52px' }}>
          Ecommerce challenges solved across 7 industries &mdash; all on Shopify
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          {STATS.map(s => (
            <div key={s.label} style={{ padding: '20px 32px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '44px', fontWeight: '800', color: '#FF5C1A', lineHeight: '1' }}>{s.value}</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '4px', background: 'linear-gradient(90deg, #FF5C1A 0%, #FF8C42 50%, transparent 100%)' }} />
      </div>
    ),
    { ...size }
  );
}
