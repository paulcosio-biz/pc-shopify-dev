import { ImageResponse } from 'next/og';

export const alt = 'Paul Cosio — Shopify Development Lead';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 96px',
          background: '#080808',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Ambient glow — top-left blob */}
        <div style={{ position: 'absolute', top: '-120px', left: '-80px', width: '600px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,92,26,0.28) 0%, transparent 70%)' }} />
        {/* Ambient glow — bottom-right blob */}
        <div style={{ position: 'absolute', bottom: '-100px', right: '-60px', width: '500px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,140,66,0.18) 0%, transparent 70%)' }} />

        {/* Logo + domain */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #FF5C1A 0%, #FF8C42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '800', color: '#fff' }}>
            PC
          </div>
          <span style={{ fontSize: '18px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            paulcosio.com
          </span>
        </div>

        {/* Name */}
        <div style={{ fontSize: '80px', fontWeight: '800', lineHeight: '1.0', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '20px' }}>
          Paul <span style={{ color: '#FF5C1A' }}>Cosio</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: '28px', fontWeight: '400', color: 'rgba(255,255,255,0.60)', marginBottom: '52px', letterSpacing: '-0.01em' }}>
          Shopify Development Lead &middot; Philippines &middot; GMT+8
        </div>

        {/* Tag pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['Shopify Plus', 'Liquid', 'Headless Commerce', 'Southeast Asia'].map(tag => (
            <div key={tag} style={{ padding: '10px 22px', borderRadius: '9999px', border: '1px solid rgba(255,92,26,0.35)', background: 'rgba(255,92,26,0.10)', fontSize: '17px', color: '#FF8C42', fontWeight: '500' }}>
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom accent bar */}
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '4px', background: 'linear-gradient(90deg, #FF5C1A 0%, #FF8C42 50%, transparent 100%)' }} />
      </div>
    ),
    { ...size }
  );
}
