'use client'

import Link from 'next/link'

const deliverables = [
  'Content Strategy & Planning',
  'Professional Photography Direction',
  'Copywriting & Brand Messaging',
  'Social Media Content Production',
  'Platform-Specific Creative Assets',
  'Campaign Concept & Art Direction',
]

const platforms = ['Instagram', 'TikTok', 'LinkedIn', 'Facebook', 'YouTube', 'Twitter/X']

export default function ContentPage() {
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
          background: 'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(13,61,43,0.3), transparent)',
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
              Service 02
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Bebas Neue', fontSize: 'clamp(60px, 9vw, 110px)',
            lineHeight: 0.9, color: 'var(--white)', marginBottom: '32px',
          }}>
            Content<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Creation</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-dim)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
            Content that doesn't just fill a feed — it builds a presence. We produce photography, copy, and creative assets that make people stop, look, and remember your brand.
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
              Starting at ₱12,000 / month
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
              Content That Works Across Every Platform
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              As a solo creative, every piece of content that leaves NTHNL Studios carries a consistent point of view. No junior handoffs. No diluted creative. Just intentional, strategic content built to perform.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8, marginTop: '16px' }}>
              We work across all major platforms — tailoring content for each one's native format, audience behavior, and algorithm without ever losing your brand's voice.
            </p>

            {/* Platforms */}
            <div style={{ marginTop: '40px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '16px' }}>
                Platforms We Cover
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {platforms.map((p) => (
                  <span key={p} style={{
                    fontSize: '11px', letterSpacing: '0.1em',
                    color: 'var(--text-dim)', border: '1px solid var(--border)',
                    padding: '6px 14px', fontFamily: 'DM Mono',
                  }}>
                    {p}
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
              Flexible Packages
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              Content is an ongoing need — not a one-time purchase. Our packages are built for sustained brand growth, with monthly retainers that keep your presence consistent and your audience engaged.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {[
              { label: 'Starter Pack (8 posts/month)', price: 'From ₱12,000' },
              { label: 'Growth Pack (16 posts/month)', price: 'From ₱22,000' },
              { label: 'Full Management (all platforms)', price: 'From ₱35,000' },
              { label: 'Campaign / One-off Project', price: 'Custom Quote' },
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
          Let's Create<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Something Real</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-dim)', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Tell us about your brand and what you need. We'll put together a content plan that actually makes sense for your goals.
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