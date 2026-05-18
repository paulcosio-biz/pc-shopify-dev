import { ImageResponse } from 'next/og';

export const alt = 'Contact Paul Cosio — Shopify Development Lead';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 96px', background: '#080808', position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', top: '-80px', left: '200px', right: '200px', width: '800px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,92,26,0.22) 0%, transparent 70%)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #FF5C1A 0%, #FF8C42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '800', color: '#fff' }}>PC</div>
          <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Paul Cosio</span>
        </div>

        <div style={{ fontSize: '68px', fontWeight: '800', lineHeight: '1.05', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '18px' }}>
          Let&apos;s build something <span style={{ color: '#FF5C1A' }}>great</span>
        </div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.55)', marginBottom: '44px', maxWidth: '640px' }}>
          Have a Shopify project in mind? Fill in the form and I&apos;ll respond within 24 hours.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 36px', borderRadius: '9999px', background: 'rgba(255,92,26,0.12)', border: '1px solid rgba(255,92,26,0.38)', fontSize: '18px', color: '#FF8C42', fontWeight: '600' }}>
          biz.paulcosio@gmail.com
        </div>

        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '4px', background: 'linear-gradient(90deg, transparent 0%, #FF5C1A 35%, #FF8C42 65%, transparent 100%)' }} />
      </div>
    ),
    { ...size }
  );
}
