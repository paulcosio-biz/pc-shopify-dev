import { ImageResponse } from 'next/og';

export const alt = 'About Paul Cosio — Shopify Development Lead, Philippines';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '80px 96px', background: '#080808', position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif', gap: '80px' }}>
        <div style={{ position: 'absolute', top: '-120px', left: '-80px', width: '600px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,92,26,0.22) 0%, transparent 70%)' }} />

        {/* Left: text */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #FF5C1A 0%, #FF8C42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '800', color: '#fff' }}>PC</div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>About</span>
          </div>

          <div style={{ display: 'flex', fontSize: '64px', fontWeight: '800', lineHeight: '1.0', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
            <div style={{ marginRight: '16px' }}>Paul</div>
            <div style={{ color: '#FF5C1A' }}>Cosio</div>
          </div>
          <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.60)', marginBottom: '28px', lineHeight: '1.5' }}>
            Shopify ecommerce developer building high-converting stores for brands across Southeast Asia.
          </div>
          <div style={{ fontSize: '16px', color: '#FF8C42', fontWeight: '500' }}>
            Philippines &middot; GMT+8 &middot; Shopify Plus
          </div>
        </div>

        {/* Right: avatar card */}
        <div style={{ width: '200px', height: '250px', borderRadius: '24px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF5C1A 0%, #FF8C42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: '800', color: '#fff' }}>PC</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '14px', color: '#22c55e', fontWeight: '600' }}>Available</span>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '4px', background: 'linear-gradient(90deg, #FF5C1A 0%, #FF8C42 50%, transparent 100%)' }} />
      </div>
    ),
    { ...size }
  );
}
