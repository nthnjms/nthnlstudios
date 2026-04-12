'use client'
export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section
        style={{
          padding: '120px 48px',
          background: 'var(--green-muted)',
          borderTop: '1px solid rgba(13,61,43,0.8)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono', marginBottom: '24px' }}>
          Ready When You Are
        </p>
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(56px, 8vw, 100px)', lineHeight: 0.95, color: 'var(--white)', marginBottom: '48px' }}>
          Let&apos;s Build<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px #b8952a' }}>Something</span><br />
          Together.
        </h2>
        <a
          href="#contact"
          style={{
            display: 'inline-block', background: 'var(--gold)', color: 'var(--black)',
            fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '18px 56px', textDecoration: 'none', fontWeight: 500,
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Start Your Project
        </a>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--black)', borderTop: '1px solid var(--border)', padding: '60px 48px 40px' }}>

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>

          {/* Logo + tagline */}
          <div>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '32px', letterSpacing: '0.1em', color: 'var(--white)' }}>
              NTHNL Studios<span style={{ color: 'var(--gold)' }}>.</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', letterSpacing: '0.05em' }}>
              Creative &amp; Digital Studio
            </div>
          </div>

          {/* Nav columns */}
          <div style={{ display: 'flex', gap: '48px' }}>
            {[
              {
                heading: 'Studio',
                links: [
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Work', href: '#portfolio' },
                ],
              },
              {
                heading: 'Services',
                links: [
                  { label: 'Branding', href: '#services' },
                  { label: 'Content', href: '#services' },
                  { label: 'Web & Dev', href: '#services' },
                ],
              },
              {
                heading: 'Connect',
                links: [
                  { label: 'Instagram', href: '#' },
                  { label: 'LinkedIn', href: '#' },
                  { label: 'Contact', href: '#contact' },
                ],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h4 style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono', marginBottom: '16px' }}>
                  {col.heading}
                </h4>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
            © 2024 NTHNL Studios. All rights reserved.
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
            nthnlstudios@gmail.com
          </div>
        </div>

      </footer>
    </>
  )
}