'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Fade out
    setVisible(false)

    const timeout = setTimeout(() => {
      // Swap content
      setDisplayChildren(children)
      // Fade in
      setVisible(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [pathname])

  useEffect(() => {
    // Initial fade in
    const timeout = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {displayChildren}
    </div>
  )
}