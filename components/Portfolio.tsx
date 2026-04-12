'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 'verd',
    title: 'Verd Coffee Roasters',
    category: 'branding',
    description: 'A complete brand overhaul for an emerging specialty coffee brand — from wordmark to packaging system and retail environment guidelines.',
    bg: '#0d1a0d',
    large: true,
  },
  {
    id: 'aether',
    title: 'Aether Platform',
    category: 'digital',
    description: 'UX strategy, design system, and frontend development for a SaaS logistics intelligence dashboard serving enterprise clients.',
    bg: '#080d18',
    large: false,
  },
  {
    id: 'forma',
    title: 'Forma Editorial',
    category: 'content',
    description: 'Visual direction and editorial photography for a fashion-forward lifestyle brand launch spanning lookbooks and campaign assets.',
    bg: '#1a1008',
    large: false,
  },
  {
    id: 'nero',
    title: 'Nero Architecture',
    category: 'branding',
    description: 'Brand identity system for a minimalist architecture studio operating across Southeast Asia — including stationery and environmental signage.',
    bg: '#111111',
    large: false,
  },
  {
    id: 'pulse',
    title: 'Pulse Wellness App',
    category: 'digital',
    description: 'Full UX/UI design for a wellness tracking application focused on habit formation and a calm, intuitive interface.',
    bg: '#0d0f1a',
    large: false,
  },
  {
    id: 'maison',
    title: 'Maison Campaign',
    category: 'content',
    description: 'Campaign content strategy and full visual production for a Philippine luxury real estate brand from concept to rollout.',
    bg: '#0f0d08',
    large: false,
  },
]

const filters = [
  { label: 'All Work', value: 'all' },
  { label: 'Branding', value: 'branding' },
  { label: 'Digital', value: 'digital' },
  { label: 'Content', value: 'content' },
]

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

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

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  )

  return (
    <section
      id="portfolio"
      ref={ref}
      style={{ padding: '120px 48px', background: 'var(--surface)' }}
    >
      {/* Label */}
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
          Selected Work
        </span>
      </div>

      <h2 className="reveal" style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, color: 'var(--white)' }}>
        Built with Purpose
      </h2>

      {/* Filter tabs */}
      <div className="reveal" style={{ display: 'flex', gap: '4px', marginTop: '40px', marginBottom: '56px', borderBottom: '1px solid var(--border)' }}>
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            style={{
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: activeFilter === f.value ? 'var(--gold)' : 'var(--text-muted)',
              padding: '12px 24px 16px', border: 'none', background: 'transparent',
              cursor: 'none', fontFamily: 'DM Sans',
              borderBottom: activeFilter === f.value ? '2px solid var(--gold)' : '2px solid transparent',
              marginBottom: '-1px', transition: 'all 0.3s',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="reveal portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            style={{
              gridColumn: project.large && activeFilter === 'all' ? 'span 2' : 'span 1',
              aspectRatio: '4/3',
              background: project.bg,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'none',
            }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '0'
            }}
          >
            {/* Placeholder visual */}
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Bebas Neue', fontSize: '13px', letterSpacing: '0.2em', color: 'rgba(245,245,240,0.1)', textTransform: 'uppercase' }}>
                {project.title}
              </span>
            </div>

            {/* Hover overlay */}
            <div
              className="overlay"
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(8,8,8,0.88)',
                opacity: 0, transition: 'opacity 0.4s',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: '32px',
              }}
            >
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono', marginBottom: '8px' }}>
                {project.category}
              </div>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '24px', letterSpacing: '0.05em', color: 'var(--white)' }}>
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)', maxWidth: '600px', width: '90%',
              padding: '56px', position: 'relative',
              border: '1px solid var(--border)',
            }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'none', fontSize: '20px' }}
            >
              ✕
            </button>
            <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold-dim)', padding: '4px 12px', display: 'inline-block', marginBottom: '24px', fontFamily: 'DM Mono' }}>
              {selected.category}
            </div>
            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '40px', color: 'var(--white)', marginBottom: '16px' }}>
              {selected.title}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              {selected.description}
            </p>
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono', letterSpacing: '0.1em' }}>
              NTHNL Studios Production
            </div>
          </div>
        </div>
      )}
    </section>
  )
}