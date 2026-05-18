import { ImageResponse } from 'next/og';

export const alt = 'Tech Stack — Paul Cosio Shopify Development Lead';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#FF4500',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              marginRight: '20px',
            }}
          >
            PC
          </div>
          <div style={{ fontSize: '32px', color: 'white', fontWeight: 'bold' }}>
            Paul Cosio
          </div>
        </div>
        
        <div style={{ fontSize: '72px', color: 'white', fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}>
          Tech Stack &<br />
          <span style={{ color: '#FF4500' }}>Philosophy</span>
        </div>

        <div style={{ fontSize: '28px', color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.01em' }}>
          Shopify Development Lead &middot; Philippines
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
