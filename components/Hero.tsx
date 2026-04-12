'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '120px 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glowing background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 60% 60% at 70% 40%, rgba(13,61,43,0.4), transparent), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(184,149,42,0.08), transparent)',
      }} />

      {/* Grid lines */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '48px', right: '48px', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: 'var(--text-muted)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
        fontFamily: 'DM Mono',
        animation: 'fadeIn 1s 1.4s forwards', opacity: 0,
      }}>
        <div style={{
          width: '1px', height: '60px',
          background: 'linear-gradient(var(--gold), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
        <span>Scroll</span>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>

        {/* Eyebrow */}
        <p style={{
          fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--gold)', fontFamily: 'DM Mono', marginBottom: '32px',
          animation: 'fadeUp 0.8s 0.2s forwards', opacity: 0,
        }}>
          Creative &amp; Digital Studio — Est. 2024
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Bebas Neue',
          fontSize: 'clamp(80px, 12vw, 160px)',
          lineHeight: 0.9,
          color: 'var(--white)',
          animation: 'fadeUp 0.8s 0.4s forwards', opacity: 0,
        }}>
          NTHNL
            <span style={{
            display: 'block',
            color: 'transparent',
            WebkitTextStroke: '1px #b8952a',
            textShadow: 'none',
            }}>
            Studios
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(14px, 1.8vw, 18px)',
          color: 'var(--text-dim)', maxWidth: '520px',
          lineHeight: 1.7, fontWeight: 300,
          margin: '36px 0 52px',
          animation: 'fadeUp 0.8s 0.6s forwards', opacity: 0,
        }}>
          Building ideas through design, content, and digital experiences that demand attention.
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
          animation: 'fadeUp 0.8s 0.8s forwards', opacity: 0,
        }}>
          <a
            href="#portfolio"
            style={{
              background: 'var(--gold)', color: 'var(--black)',
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '16px 40px', textDecoration: 'none', fontWeight: 500,
              transition: 'all 0.3s', display: 'inline-block',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              background: 'transparent', color: 'var(--white)',
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '15px 40px', border: '1px solid rgba(245,245,240,0.25)',
              textDecoration: 'none', fontWeight: 300,
              transition: 'all 0.3s', display: 'inline-block',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--white)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(245,245,240,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Start a Project
          </a>
        </div>

      </div>
    </section>
  )
}