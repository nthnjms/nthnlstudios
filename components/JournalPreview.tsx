'use client'

import Link from 'next/link'
import journal from '@/data/journal.json'

export default function WritingShowcase() {
  const pieces = [...journal]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  if (pieces.length === 0) return null

  const [featured, ...rest] = pieces

  return (
    <section
      id="writing"
      style={{
        padding: '120px 48px',
        background: 'var(--black)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div className="writing-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
              Narratives by NTHNL
            </span>
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, color: 'var(--white)' }}>
            The Writing
          </h2>
        </div>
        <Link
          href="/writing"
          style={{
            fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold)', textDecoration: 'none', fontFamily: 'DM Mono',
            border: '1px solid var(--gold-dim)', padding: '12px 24px', transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(184,149,42,0.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          All Writing →
        </Link>
      </div>

      {/* Editorial grid */}
      <div className="writing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--border)' }}>

        {/* Featured piece — left, large */}
        <Link
          href={`/writing/${featured.slug}`}
          style={{ textDecoration: 'none', gridRow: 'span 2' }}
        >
          <article
            style={{
              background: 'var(--surface)',
              padding: '56px 48px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '520px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'none',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--surface)')}
          >
            {/* Issue number watermark */}
            <div style={{
              position: 'absolute', top: '40px', right: '40px',
              fontFamily: 'Bebas Neue', fontSize: '120px', lineHeight: 1,
              color: 'rgba(184,149,42,0.06)', userSelect: 'none',
            }}>
              01
            </div>

            <div>
              {/* Category + date */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{
                  fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--gold)', border: '1px solid var(--gold-dim)',
                  padding: '3px 10px', fontFamily: 'DM Mono',
                }}>
                  {featured.category}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                  {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>

              {/* Title — big */}
              <h3 style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 0.95,
                color: 'var(--white)',
                marginBottom: '24px',
                letterSpacing: '0.02em',
              }}>
                {featured.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontSize: '15px', color: 'var(--text-dim)',
                lineHeight: 1.8, marginBottom: '32px', maxWidth: '420px',
              }}>
                {featured.excerpt}
              </p>

              {/* Read + time */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
                  Read →
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                  {featured.readTime}
                </span>
              </div>
            </div>
          </article>
        </Link>

        {/* Smaller pieces — right column */}
        {rest.map((piece, i) => (
          <Link
            key={piece.id}
            href={`/writing/${piece.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <article
              style={{
                background: 'var(--surface)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '256px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'none',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--surface)')}
            >
              {/* Watermark */}
              <div style={{
                position: 'absolute', top: '20px', right: '24px',
                fontFamily: 'Bebas Neue', fontSize: '72px', lineHeight: 1,
                color: 'rgba(184,149,42,0.05)', userSelect: 'none',
              }}>
                0{i + 2}
              </div>

              <div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{
                    fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--gold)', border: '1px solid var(--gold-dim)',
                    padding: '3px 10px', fontFamily: 'DM Mono',
                  }}>
                    {piece.category}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                    {piece.readTime}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Bebas Neue', fontSize: 'clamp(24px, 3vw, 36px)',
                  color: 'var(--white)', lineHeight: 1, letterSpacing: '0.02em',
                  marginBottom: '12px',
                }}>
                  {piece.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                  {piece.excerpt}
                </p>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                  {new Date(piece.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{ color: 'var(--gold)', fontSize: '16px' }}>→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}