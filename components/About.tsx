'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '120px 48px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Label */}
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
          About the Studio
        </span>
      </div>

      {/* Grid */}
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginTop: '48px' }}>

        {/* Big number */}
        <div className="reveal" style={{
          fontFamily: 'Bebas Neue', fontSize: '180px', lineHeight: 1,
          color: 'transparent', WebkitTextStroke: '1px rgba(184,149,42,0.15)',
        }}>
          01
        </div>

        {/* Text side */}
        <div className="reveal">
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, color: 'var(--white)', marginBottom: '24px' }}>
            A Studio Built for What&apos;s Next
          </h2>

          <p style={{ fontSize: '16px', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '16px' }}>
            NTHNL Studios is a creative and digital agency operating at the intersection of brand identity, storytelling, and digital craft. We work with founders, brands, and organizations ready to build something that lasts.
          </p>

          <p style={{ fontSize: '16px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
            As a growing studio with global ambitions, we bring senior-level thinking and meticulous execution to every project — regardless of scale.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px',
            marginTop: '48px', paddingTop: '40px', borderTop: '1px solid var(--border)',
          }}>
            {[
              { number: '3+', label: 'Core Services' },
              { number: '100%', label: 'Client Focused' },
              { number: '∞', label: 'Scalable Capacity' },
              { number: '1', label: 'Unified Vision' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '48px', color: 'var(--gold)', lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}