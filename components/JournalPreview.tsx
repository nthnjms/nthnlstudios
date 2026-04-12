'use client'

import Link from 'next/link'
import journal from '@/data/journal.json'

export default function JournalPreview() {
  const latest = [...journal]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section
      id="journal"
      style={{
        padding: '120px 48px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
              Personal Space
            </span>
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, color: 'var(--white)' }}>
            Journal
          </h2>
        </div>
        <Link
          href="/journal"
          style={{
            fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold)', textDecoration: 'none', fontFamily: 'DM Mono',
            display: 'flex', alignItems: 'center', gap: '8px', transition: 'gap 0.3s',
            border: '1px solid var(--gold-dim)', padding: '12px 24px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(184,149,42,0.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          All Writing →
        </Link>
      </div>

      {/* Latest pieces */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
        {latest.map((piece) => (
          <Link
            key={piece.id}
            href={`/journal/${piece.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <article
              style={{
                background: 'var(--surface)',
                padding: '40px 32px',
                height: '100%',
                transition: 'background 0.3s',
                cursor: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--surface)')}
            >
              {/* Category */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
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

              {/* Title */}
              <h3 style={{
                fontFamily: 'Bebas Neue', fontSize: '28px',
                color: 'var(--white)', marginBottom: '16px',
                letterSpacing: '0.02em', lineHeight: 1.1,
              }}>
                {piece.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontSize: '13px', color: 'var(--text-dim)',
                lineHeight: 1.7, marginBottom: '32px',
              }}>
                {piece.excerpt}
              </p>

              {/* Date + arrow */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                  {new Date(piece.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <span style={{ color: 'var(--gold)', fontSize: '16px' }}>→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {latest.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px', color: 'var(--text-muted)', fontFamily: 'DM Mono', fontSize: '13px' }}>
          No entries yet. Add your first piece at{' '}
          <a href="/admin" style={{ color: 'var(--gold)' }}>/admin</a>
        </div>
      )}
    </section>
  )
}