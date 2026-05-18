import { ImageResponse } from 'next/og';

export const alt = 'Services — Paul Cosio Shopify Development Lead';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SERVICES = [
  'Custom Theme Development',
  'Shopify Plus Setup',
  'Platform Migrations',
  'Headless / Hydrogen',
  'Speed Optimisation',
  'App Integration',
];

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px 96px', background: '#080808', position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '550px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,92,26,0.24) 0%, transparent 70%)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #FF5C1A 0%, #FF8C42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '800', color: '#fff' }}>PC</div>
          <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Services</span>
        </div>

        <div style={{ display: 'flex', fontSize: '64px', fontWeight: '800', lineHeight: '1.0', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '14px' }}>
          <div style={{ marginRight: '16px' }}>What I</div>
          <div style={{ color: '#FF5C1A' }}>Build</div>
        </div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.55)', marginBottom: '44px' }}>
          End-to-end Shopify development for growing brands
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', maxWidth: '900px' }}>
          {SERVICES.map(s => (
            <div key={s} style={{ padding: '10px 22px', borderRadius: '9999px', border: '1px solid rgba(255,92,26,0.30)', background: 'rgba(255,92,26,0.08)', fontSize: '16px', color: '#FF8C42', fontWeight: '500' }}>{s}</div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '4px', background: 'linear-gradient(90deg, #FF5C1A 0%, #FF8C42 50%, transparent 100%)' }} />
      </div>
    ),
    { ...size }
  );
}
