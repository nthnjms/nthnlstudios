'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 'branding',
    num: '01',
    title: 'Branding & Identity',
    description: 'Logos, visual systems, brand voice, and positioning strategy. We build identities that hold up across every touchpoint — from print to pixel.',
    deliverables: ['Logo & Wordmark', 'Visual Identity Guidelines', 'Brand Voice & Tone', 'Typography & Color System'],
  },
  {
    id: 'content',
    num: '02',
    title: 'Content Creation',
    description: 'Photography direction, copywriting, social content, and editorial design. Stories that connect and convert across every platform.',
    deliverables: ['Content Strategy', 'Copywriting & Messaging', 'Social Content Production', 'Editorial Design'],
  },
  {
    id: 'web',
    num: '03',
    title: 'Web Design & Dev',
    description: 'High-performance websites and web apps. From landing pages to full-scale digital platforms — designed with intent, built to scale.',
    deliverables: ['UX Research & Wireframing', 'Visual Design', 'Next.js Development', 'SEO & Performance'],
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string | null>(null)

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
      id="services"
      ref={ref}
      style={{ padding: '120px 48px', background: 'var(--black)' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
        <div className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
              What We Do
            </span>
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, color: 'var(--white)' }}>
            Our Services
          </h2>
        </div>
        <p className="reveal" style={{ fontSize: '13px', color: 'var(--text-muted)', maxWidth: '260px', textAlign: 'right', lineHeight: 1.7 }}>
          Every engagement is built from first principles — no templates, no shortcuts.
        </p>
      </div>

      {/* Cards */}
     <div className="reveal services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setActive(active === service.id ? null : service.id)}
            style={{
              background: active === service.id ? 'var(--green-muted)' : 'var(--black)',
              padding: '48px 36px',
              cursor: 'none',
              transition: 'background 0.4s ease',
              position: 'relative',
            }}
            onMouseEnter={(e) => { if (active !== service.id) e.currentTarget.style.background = 'var(--green-muted)' }}
            onMouseLeave={(e) => { if (active !== service.id) e.currentTarget.style.background = 'var(--black)' }}
          >
            {/* Number */}
            <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '12px' }}>
              {service.num}
            </div>

            {/* Title */}
            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '28px', letterSpacing: '0.05em', color: 'var(--white)', marginBottom: '16px' }}>
              {service.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {service.description}
            </p>

            {/* Expanded deliverables */}
            {active === service.id && (
              <ul style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.deliverables.map((item) => (
                  <li key={item} style={{ fontSize: '12px', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '16px', height: '1px', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Learn more */}
            <div style={{
              marginTop: '24px', fontSize: '10px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              {active === service.id ? 'Close' : 'Learn More'} <span>{active === service.id ? '↑' : '→'}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}