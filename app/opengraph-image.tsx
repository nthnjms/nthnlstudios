import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NTHNL Studios — Creative & Digital Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#080808',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Gold border top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '4px', background: '#b8952a', display: 'flex',
        }} />

        {/* Green glow */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(13,61,43,0.6), transparent)',
          display: 'flex',
        }} />

        {/* Studio label */}
        <div style={{
          fontSize: '14px', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#b8952a',
          marginBottom: '32px', display: 'flex',
        }}>
          CREATIVE &amp; DIGITAL STUDIO
        </div>

        {/* Main title */}
        <div style={{
          fontSize: '120px', fontWeight: 900,
          color: '#f5f5f0', lineHeight: 0.9,
          marginBottom: '8px', display: 'flex',
        }}>
          NTHNL
        </div>
        <div style={{
          fontSize: '120px', fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '2px #b8952a',
          lineHeight: 0.9,
          marginBottom: '48px', display: 'flex',
        }}>
          STUDIOS
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '22px', color: 'rgba(245,245,240,0.6)',
          maxWidth: '600px', lineHeight: 1.5, display: 'flex',
        }}>
          Building ideas through design, content, and digital experiences.
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute', bottom: '48px', right: '80px',
          fontSize: '14px', color: 'rgba(245,245,240,0.3)',
          letterSpacing: '0.1em', display: 'flex',
        }}>
          nthnlstudios.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}