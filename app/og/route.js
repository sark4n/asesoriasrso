import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export function GET() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#121520', color: '#f8f9fc', padding: '65px 75px', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 56, letterSpacing: -3 }}>RSO</span><span style={{ fontSize: 21, color: '#d5f780' }}>TECNOLOGÍA DESDE CHILE</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 78, letterSpacing: -4, lineHeight: 1.06 }}><span>Tu negocio. Más conectado.</span><span style={{ color: '#bca5ff' }}>Más capaz.</span></div>
      <div style={{ display: 'flex', fontSize: 25, borderTop: '1px solid #494255', paddingTop: 25, justifyContent: 'space-between' }}><span>Software a medida · Integraciones · IA</span><span style={{ color: '#bca5ff' }}>asesoriasrso.cl</span></div>
    </div>,
    { width: 1200, height: 630 },
  );
}
