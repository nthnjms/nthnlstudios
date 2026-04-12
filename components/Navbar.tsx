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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkMobile)
    }
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
          fontFamily: 'Bebas Neue', fontSize: '22px',
          letterSpacing: '0.15em', color: 'var(--white)', textDecoration: 'none',
        }}>
          NTHNL STUDIOS<span style={{ color: 'var(--gold)' }}>.</span>
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0 }}>
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
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a href="#contact" style={{
            fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--gold)', border: '1px solid var(--gold-dim)',
            padding: '10px 24px', textDecoration: 'none', transition: 'all 0.3s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            Start a Project
          </a>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: '65px',
          background: 'var(--black)',
          borderTop: '1px solid var(--border)',
          zIndex: 99,
          display: 'flex', flexDirection: 'column',
        }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '16px 24px', borderBottom: '1px solid var(--border)',
                fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            padding: '16px 24px', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--gold)', textDecoration: 'none', marginTop: 'auto',
          }}>
            Start a Project
          </a>
        </div>
      )}
    </>
  )
}