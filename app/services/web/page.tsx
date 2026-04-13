'use client'

import Link from 'next/link'

const deliverables = [
  'UX Research & Wireframing',
  'Visual Design & Prototyping',
  'Next.js / WordPress / Webflow Development',
  'Mobile-Responsive Build',
  'CMS Integration',
  'SEO & Performance Optimization',
  'Post-Launch Support (3 months)',
]

const tech = ['Next.js', 'WordPress', 'Webflow', 'Tailwind CSS', 'TypeScript', 'Figma']

export default function WebPage() {
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
          background: 'radial-gradient(ellipse 60% 60% at 70% 30%, rgba(13,61,43,0.25), transparent)',
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
              Service 03
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Bebas Neue', fontSize: 'clamp(60px, 9vw, 110px)',
            lineHeight: 0.9, color: 'var(--white)', marginBottom: '32px',
          }}>
            Web Design<br />&amp;{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Development</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
            Websites that work as hard as you do. Fast, beautiful, and built to convert — whether it's a portfolio, a business site, or a full e-commerce platform.
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
              Starting at ₱25,000
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
              Design Meets Engineering
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              Every site we build starts with UX strategy — understanding who your users are and what they need to do. Design follows function. Then we build it clean, fast, and scalable.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8, marginTop: '16px' }}>
              We offer 3 months of post-launch support on every project — fixing bugs, making adjustments, and ensuring everything runs exactly as expected in the real world.
            </p>

            {/* Tech stack */}
            <div style={{ marginTop: '40px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '16px' }}>
                Technologies We Use
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tech.map((t) => (
                  <span key={t} style={{
                    fontSize: '11px', letterSpacing: '0.1em',
                    color: 'var(--text-dim)', border: '1px solid var(--border)',
                    padding: '6px 14px', fontFamily: 'DM Mono',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
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

      {/* Pricing */}
      <div style={{ padding: '80px 48px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
            Investment
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--white)', marginBottom: '24px', lineHeight: 1 }}>
              Built for Every Scale
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              From a clean portfolio page to a full e-commerce platform — we scope every project honestly and price it fairly. All projects include mobile-responsive design, SEO setup, and 3 months of post-launch support.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {[
              { label: 'Portfolio / Landing Page', price: 'From ₱25,000' },
              { label: 'Business Website (5–10 pages)', price: 'From ₱45,000' },
              { label: 'E-Commerce Website', price: 'From ₱80,000' },
              { label: 'Custom Web Application', price: 'Custom Quote' },
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
          <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Your Website?</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-dim)', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Tell us what you need. We'll scope it honestly, price it fairly, and build it right.
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