'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { use } from 'react'
import journal from '@/data/journal.json'

export default function PiecePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const piece = journal.find((p) => p.slug === slug)
  if (!piece) notFound()

  return (
    <main style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '120px' }}>

      {/* Back */}
      <div style={{ padding: '40px 48px 0' }}>
        <Link
          href="/writing"
          style={{
            fontFamily: 'DM Mono', fontSize: '11px', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--text-muted)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          ← Back to Writing
        </Link>
      </div>

      {/* Article */}
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 48px 120px' }}>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
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

        {/* Title */}
        <h1 style={{
          fontFamily: 'Bebas Neue',
          fontSize: 'clamp(48px, 7vw, 80px)',
          lineHeight: 0.95, color: 'var(--white)',
          marginBottom: '48px', letterSpacing: '0.02em',
        }}>
          {piece.title}
        </h1>

        {/* Divider */}
        <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '48px' }} />

        {/* Content */}
        <div style={{ fontSize: '17px', color: 'var(--text-dim)', lineHeight: 1.9, fontWeight: 300 }}>
          {piece.content.split('\n').map((line, i) =>
            line === '' ? <br key={i} /> : <p key={i} style={{ marginBottom: '8px' }}>{line}</p>
          )}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Mono', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            Narratives by NTHNL Studios
          </span>
          <Link
            href="/writing"
            style={{
              fontFamily: 'DM Mono', fontSize: '11px', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none',
            }}
          >
            More Writing →
          </Link>
        </div>
      </article>
    </main>
  )
}