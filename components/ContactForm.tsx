'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', service: '', description: '', budget: '',
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '120px 48px', background: 'var(--black)' }}
    >
      {/* Label */}
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono' }}>
          Get in Touch
        </span>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginTop: '48px' }}>

        {/* Left side info */}
        <div className="reveal">
          <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.1, color: 'var(--white)', marginBottom: '24px' }}>
            Let&apos;s Talk About Your Next Move
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '40px' }}>
            Whether you&apos;re starting from scratch or elevating an existing brand, we&apos;re ready to listen. Fill out the brief and we&apos;ll respond within 48 hours.
          </p>

          <div style={{ fontFamily: 'DM Mono', fontSize: '13px', color: 'var(--gold)', borderBottom: '1px solid var(--gold-dim)', paddingBottom: '8px', display: 'inline-block' }}>
            nthnlstudios@gmail.com
          </div>

          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'DM Mono', marginBottom: '20px' }}>
              Office Hours
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 2 }}>
              Mon – Fri &nbsp;|&nbsp; 9AM – 6PM PHT<br />
              Remote-first, globally available
            </p>
          </div>
        </div>

        {/* Right side form */}
        <div className="reveal">
          {!submitted ? (
            <form onSubmit={handleSubmit}>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Service */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>
                  Service
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="" disabled>Select a service...</option>
                  <option>Branding & Identity</option>
                  <option>Content Creation</option>
                  <option>Web Design & Development</option>
                  <option>Multiple Services</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              {/* Description */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>
                  Project Description
                </label>
                <textarea
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>

              {/* Budget */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>
                  Budget Range
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  <option value="" disabled>Select a range...</option>
                  <option>Under $1,000</option>
                  <option>$1,000 – $3,000</option>
                  <option>$3,000 – $8,000</option>
                  <option>$8,000 – $20,000</option>
                  <option>$20,000+</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%', background: loading ? 'var(--gold-dim)' : 'var(--gold)',
                  color: 'var(--black)', border: 'none',
                  fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontWeight: 500, padding: '18px', cursor: 'none',
                  transition: 'all 0.3s', fontFamily: 'DM Sans',
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = 'var(--gold-light)' }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = 'var(--gold)' }}
              >
                {loading ? 'Sending...' : 'Send Project Brief →'}
              </button>

            </form>
          ) : (
            /* Success message */
            <div style={{ textAlign: 'center', padding: '60px 40px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '64px', color: 'var(--gold)', lineHeight: 1 }}>✓</div>
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '32px', color: 'var(--white)', margin: '16px 0 12px' }}>
                Message Received
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                We&apos;ll review your brief and get back to you within 48 hours. Keep an eye on your inbox.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}