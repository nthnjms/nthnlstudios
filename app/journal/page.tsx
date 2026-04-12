'use client'

import Link from 'next/link'
import journal from '@/data/journal.json'

export default function JournalPage() {
  const sorted = [...journal].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '120px' }}>

      {/* Header */}
      <div style={{ padding: '80px 48px 64px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
            Personal Space
          </span>
        </div>
        <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(60px, 8vw, 100px)', lineHeight: 0.9, color: 'var(--white)', marginBottom: '24px' }}>
          Journal
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-dim)', maxWidth: '480px', lineHeight: 1.7 }}>
          A personal space for essays, poetry, short stories, and everything in between. Unfiltered and ongoing.
        </p>
      </div>

      {/* Works list */}
      <div style={{ padding: '0 48px 120px' }}>
        {sorted.map((piece) => (
          <Link
            key={piece.id}
            href={`/journal/${piece.slug}`}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <article
              style={{
                padding: '48px 0',
                borderBottom: '1px solid var(--border)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '40px',
                alignItems: 'start',
                transition: 'all 0.3s',
                cursor: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = '16px'
                e.currentTarget.style.borderBottomColor = 'var(--gold-dim)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = '0'
                e.currentTarget.style.borderBottomColor = 'var(--border)'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--gold)', border: '1px solid var(--gold-dim)',
                    padding: '3px 10px', fontFamily: 'DM Mono',
                  }}>
                    {piece.category}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                    {new Date(piece.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                    {piece.readTime}
                  </span>
                </div>
                <h2 style={{
                  fontFamily: 'Bebas Neue', fontSize: 'clamp(28px, 4vw, 48px)',
                  color: 'var(--white)', marginBottom: '12px', letterSpacing: '0.02em',
                }}>
                  {piece.title}
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.7, maxWidth: '600px' }}>
                  {piece.excerpt}
                </p>
              </div>
              <div style={{ fontFamily: 'DM Mono', fontSize: '24px', color: 'var(--gold)', marginTop: '8px' }}>
                →
              </div>
            </article>
          </Link>
        ))}

        {sorted.length === 0 && (
          <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'DM Mono', fontSize: '13px', letterSpacing: '0.1em' }}>
            No entries yet.
          </div>
        )}
      </div>
    </main>
  )
}