'use client'

import Spotlight from './Spotlight'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Spotlight />
      {children}
    </>
  )
}
