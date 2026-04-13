'use client'

import Link from 'next/link'

const deliverables = [
  'Logo & Wordmark System',
  'Visual Identity Guidelines',
  'Brand Voice & Tone',
  'Typography & Color System',
  'Stationery & Collateral Design',
  'Brand Strategy & Positioning',
]

const process = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We start with a deep-dive discovery call — understanding your business, audience, competitors, and what you want your brand to feel like.',
  },
  {
    num: '02',
    title: 'Moodboard',
    desc: 'We curate a visual direction that captures the essence of your brand before any design work begins. You approve the direction first.',
  },
  {
    num: '03',
    title: 'Concepts',
    desc: 'We develop 2–3 distinct brand concepts — each a fully considered identity system, not just a logo.',
  },
  {
    num: '04',
    title: 'Refinement',
    desc: 'You choose a direction and we refine it together through focused revision rounds until it\'s exactly right.',
  },
]

export default function BrandingPage() {
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
          background: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(13,61,43,0.3), transparent)',
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
              Service 01
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Bebas Neue', fontSize: 'clamp(60px, 9vw, 110px)',
            lineHeight: 0.9, color: 'var(--white)', marginBottom: '32px',
          }}>
            Branding &<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Identity</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
            Your brand is the first impression, the lasting memory, and everything in between. We build identities that are impossible to ignore and impossible to forget.
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
              Starting at ₱15,000
            </span>
          </div>
        </div>
      </div>

      {/* What's included */}
      <div style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
              <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
                What You Get
              </span>
            </div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--white)', marginBottom: '24px', lineHeight: 1 }}>
              A Complete Identity System
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              We don't just design logos. We build complete brand ecosystems — visual systems that work cohesively across every platform, format, and context your brand will ever appear in.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8, marginTop: '16px' }}>
              What sets our branding apart is the thinking behind the aesthetics. Every choice — color, type, mark — is rooted in strategy. Built to attract the right clients, communicate the right values, and stand the test of time.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {deliverables.map((item, i) => (
                <li key={i} style={{
                  padding: '20px 0',
                  borderBottom: '1px solid var(--border)',
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

      {/* Process */}
      <div style={{ padding: '80px 48px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
            Our Process
          </span>
        </div>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--white)', marginBottom: '56px', lineHeight: 1 }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {process.map((step) => (
            <div key={step.num} style={{ background: 'var(--surface)', padding: '36px 28px' }}>
              <div style={{ fontFamily: 'DM Mono', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '16px' }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '24px', color: 'var(--white)', marginBottom: '12px', letterSpacing: '0.05em' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
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
              Transparent Pricing
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              Every project is quoted based on scope, complexity, and timeline. We believe in transparent pricing — no hidden fees, no surprises. Just honest work at honest rates.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {[
              { label: 'Logo & Basic Identity', price: 'From ₱15,000' },
              { label: 'Full Brand Identity System', price: 'From ₱35,000' },
              { label: 'Brand Strategy + Identity', price: 'From ₱60,000' },
              { label: 'Complete Brand Overhaul', price: 'Custom Quote' },
            ].map((tier) => (
              <div key={tier.label} style={{
                background: 'var(--black)',
                padding: '20px 24px',
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
          Ready to Build<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Your Brand?</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-dim)', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Let's start with a conversation. Tell us about your project and we'll get back to you within 48 hours.
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