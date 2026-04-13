'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import JournalPreview from '@/components/JournalPreview'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <JournalPreview />
      <ContactForm />
      <Footer />
    </main>
  )
}