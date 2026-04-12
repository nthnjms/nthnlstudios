'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 24px',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.15em',
          color: 'var(--white)', textDecoration: 'none',
        }}>
          NTHNL<span style={{ color: 'var(--gold)' }}>.</span>
        </a>

        {/* Desktop links — hidden on mobile */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0 }}
          className="hidden lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — hidden on mobile */}
        <a href="#contact"
          className="hidden lg:inline-block"
          style={{
            fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--gold)', border: '1px solid var(--gold-dim)',
            padding: '10px 24px', textDecoration: 'none', transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
        >
          Start a Project
        </a>

        {/* Hamburger — always visible on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          style={{
            background: 'none', border: 'none', cursor: 'none',
            display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: '24px', height: '1px', background: 'var(--white)',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1px', background: 'var(--white)',
            transition: 'all 0.3s', opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1px', background: 'var(--white)',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile full screen menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: '65px',
          background: 'var(--black)',
          borderTop: '1px solid var(--border)',
          zIndex: 99,
          display: 'flex', flexDirection: 'column',
          gap: '0',
        }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Bebas Neue', fontSize: '52px',
                letterSpacing: '0.05em', color: 'var(--white)',
                textDecoration: 'none', padding: '20px 32px',
                borderBottom: '1px solid var(--border)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              margin: '32px', textAlign: 'center',
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--gold)', border: '1px solid var(--gold-dim)',
              padding: '18px', textDecoration: 'none',
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  )
}