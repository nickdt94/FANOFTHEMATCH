'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatHow from '@/components/WhatHow'
import Cases from '@/components/Cases'
import SpecificValue from '@/components/SpecificValue'
import GameModes from '@/components/GameModes'
import Ecosystem from '@/components/Ecosystem'
import Contact from '@/components/Contact'
import LogoScroller from '@/components/LogoScroller'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll('.scroll-animate')
    scrollElements.forEach(el => observer.observe(el))

    // Handle hash navigation - scroll to cases section if hash is present
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash === '#cases') {
        setTimeout(() => {
          const casesSection = document.getElementById('cases')
          if (casesSection) {
            casesSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100) // Small delay to ensure page is fully rendered
      }
    }

    // Check for hash on initial load
    handleHashNavigation()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation)

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
      scrollElements.forEach(el => observer.unobserve(el));
    }
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <WhatHow />
      <Cases />
      <SpecificValue />
      <GameModes />
      <Ecosystem />
      <Contact />
      <LogoScroller />
      <Footer />
    </main>
  )
}