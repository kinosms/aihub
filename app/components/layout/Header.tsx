'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {

  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      setShowHeader(window.scrollY > 80)

    }

      window.addEventListener('scroll', handleScroll)

      return () =>

        window.removeEventListener('scroll', handleScroll)

    }, [])
  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-9999
        transition-all duration-500
        ${
          showHeader
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }
      `}
    >
      <div className="backdrop-blur-xl bg-white/70 border-b border-zinc-200">
        <div className="w-full px-6 lg:px-36 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            Kanana
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            <Link href="/brand" className="hover:text-black transition">
              Brand
            </Link>
            <Link href="/service" className="hover:text-black transition">
              Service
            </Link>
            <button className="hover:text-black transition">Model</button>
            <button className="hover:text-black transition">Platform</button>
            <button className="hover:text-black transition">News</button>
            <button className="hover:text-black transition">Event</button>
          </nav>
        </div>
      </div>
    </header>
  )
}