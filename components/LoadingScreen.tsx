'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'visible' | 'hiding' | 'hidden'>('visible')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // Count from 0 to 100
    const countInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(countInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Start hiding after 2 seconds
    const hideTimer = setTimeout(() => {
      setPhase('hiding')
    }, 2000)

    // Fully remove after animation
    const removeTimer = setTimeout(() => {
      setPhase('hidden')
    }, 2800)

    return () => {
      clearInterval(countInterval)
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (phase === 'hidden') return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#080808',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: phase === 'hiding' ? 0 : 1,
      transform: phase === 'hiding' ? 'translateY(-20px)' : 'translateY(0)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>

      {/* Top gold line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: '#b8952a',
        transformOrigin: 'left',
        transform: `scaleX(${counter / 100})`,
        transition: 'transform 0.1s linear',
      }} />

      {/* Green glow */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13,61,43,0.3), transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Logo */}
      <div style={{
        position: 'relative',
        textAlign: 'center',
        animation: 'fadeUp 0.6s 0.2s forwards',
        opacity: 0,
      }}>
        <div style={{
          fontFamily: 'Bebas Neue',
          fontSize: 'clamp(60px, 12vw, 120px)',
          lineHeight: 0.9,
          color: '#f5f5f0',
          letterSpacing: '0.05em',
        }}>
          NTHNL
        </div>
        <div style={{
          fontFamily: 'Bebas Neue',
          fontSize: 'clamp(60px, 12vw, 120px)',
          lineHeight: 0.9,
          color: 'transparent',
          WebkitTextStroke: '1px #b8952a',
          letterSpacing: '0.05em',
        }}>
          Studios
        </div>

        {/* Tagline */}
        <div style={{
          marginTop: '24px',
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(245,245,240,0.4)',
          fontFamily: 'DM Mono',
          animation: 'fadeUp 0.6s 0.5s forwards',
          opacity: 0,
        }}>
          Creative &amp; Digital Studio
        </div>
      </div>

      {/* Counter */}
      <div style={{
        position: 'absolute',
        bottom: '48px',
        right: '48px',
        fontFamily: 'DM Mono',
        fontSize: '12px',
        color: 'rgba(184,149,42,0.6)',
        letterSpacing: '0.1em',
      }}>
        {counter.toString().padStart(3, '0')}
      </div>

      {/* Bottom label */}
      <div style={{
        position: 'absolute',
        bottom: '48px',
        left: '48px',
        fontFamily: 'DM Mono',
        fontSize: '11px',
        color: 'rgba(245,245,240,0.2)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        Loading
      </div>

    </div>
  )
}