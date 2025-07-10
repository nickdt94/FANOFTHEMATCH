'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoScroller from '@/components/LogoScroller'
import Product from '@/components/Product'
import StadiumExperience from '@/components/StadiumExperience'
import Cases from '@/components/Cases'
import Ecosystem from '@/components/Ecosystem'
import ForWhom from '@/components/ForWhom'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.querySelector('.spotlight') as HTMLElement
      if (spotlight) {
        spotlight.style.setProperty('--mouse-x', e.clientX + 'px')
        spotlight.style.setProperty('--mouse-y', e.clientY + 'px')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

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
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('hashchange', handleHashNavigation)
      scrollElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <LogoScroller />
      <StadiumExperience />
      <Cases />
      <Product />
      <Ecosystem />
      <ForWhom />
      <Contact />
      <Footer />
    </main>
  )
}