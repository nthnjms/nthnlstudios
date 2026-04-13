'use client'

import Link from 'next/link'

const deliverables = [
  'Brand Copywriting & Messaging',
  'Campaign Narrative & Concept',
  'Editorial Direction & Voice',
  'Website & Landing Page Copy',
  'Creative & Long-Form Writing',
  'Social Media Copy',
  'Scripts & Presentation Writing',
]

export default function NarrativesPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '120px' }}>

      {/* Hero */}
      <div style={{
        padding: '80px 48px',
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 80% at 60% 40%, rgba(13,61,43,0.3), transparent)',
        }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <Link href="/#services" style={{
            fontFamily: 'DM Mono', fontSize: '11px', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px',
            transition: 'color 0.3s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            ← Back to Services
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
              Service 04
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Bebas Neue', fontSize: 'clamp(60px, 9vw, 110px)',
            lineHeight: 0.9, color: 'var(--white)', marginBottom: '16px',
          }}>
            Narratives
          </h1>
          <div style={{
            fontFamily: 'DM Mono', fontSize: '12px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '32px',
          }}>
            by NTHNL Studios
          </div>
          <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
            Every brand has a story. Most just don't know how to tell it yet. We write the words that make people feel something — and then do something.
          </p>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="/#contact" style={{
              background: 'var(--gold)', color: 'var(--black)',
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '16px 36px', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Start a Project
            </a>
            <span style={{ fontFamily: 'DM Mono', fontSize: '12px', color: 'var(--text-muted)' }}>
              Starting at ₱8,000
            </span>
          </div>
        </div>
      </div>

      {/* What we write */}
      <div style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
              <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
                What We Write
              </span>
            </div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--white)', marginBottom: '24px', lineHeight: 1 }}>
              Words That Work as Hard as Design
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              Most brands underinvest in words. They spend months perfecting their visual identity and then write their own website copy in an afternoon. We fix that.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8, marginTop: '16px' }}>
              Narratives by NTHNL covers everything from a single punchy tagline to a full editorial content system — always rooted in your brand strategy, always written to convert.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
              {deliverables.map((item, i) => (
                <li key={i} style={{
                  padding: '20px 0', borderBottom: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', gap: '16px',
                  fontSize: '15px', color: 'var(--text-dim)',
                }}>
                  <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Writing samples */}
      <div style={{ padding: '80px 48px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
            The Work
          </span>
        </div>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--white)', marginBottom: '16px', lineHeight: 1 }}>
          Read the Writing
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-dim)', marginBottom: '48px', maxWidth: '480px', lineHeight: 1.7 }}>
          Every piece below is a live sample of what Narratives produces — from brand essays to creative long-form.
        </p>
        <a href="/writing" style={{
          display: 'inline-block',
          fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--gold)', border: '1px solid var(--gold-dim)',
          padding: '14px 32px', textDecoration: 'none', transition: 'all 0.3s',
          fontFamily: 'DM Mono',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(184,149,42,0.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          View All Writing →
        </a>
      </div>

      {/* Pricing */}
      <div style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
            Investment
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--white)', marginBottom: '24px', lineHeight: 1 }}>
              Priced by Scope
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              Writing projects are scoped by word count, complexity, and turnaround time. All projects include a brief session, one round of revisions, and final delivery in your preferred format.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {[
              { label: 'Tagline / Brand Voice', price: 'From ₱8,000' },
              { label: 'Website Copy (full site)', price: 'From ₱18,000' },
              { label: 'Campaign Narrative', price: 'From ₱15,000' },
              { label: 'Editorial / Long-form', price: 'From ₱5,000 per piece' },
              { label: 'Ongoing Content Retainer', price: 'Custom Quote' },
            ].map((tier) => (
              <div key={tier.label} style={{
                background: 'var(--black)', padding: '20px 24px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>{tier.label}</span>
                <span style={{ fontFamily: 'DM Mono', fontSize: '13px', color: 'var(--gold)' }}>{tier.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '80px 48px', textAlign: 'center', background: 'var(--green-muted)' }}>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--white)', marginBottom: '24px', lineHeight: 1 }}>
          What&apos;s Your<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Story?</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-dim)', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Tell us what you need written. We&apos;ll make it worth reading.
        </p>
        <a href="/#contact" style={{
          display: 'inline-block', background: 'var(--gold)', color: 'var(--black)',
          fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          padding: '18px 48px', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
        >
          Start a Project →
        </a>
      </div>
    </main>
  )
}