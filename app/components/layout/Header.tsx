'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {

  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {

    let timeout: NodeJS.Timeout

    const handleScroll = () => {

      // 조금이라도 스크롤되면 헤더 보이기
      if(window.scrollY > 80){

        setShowHeader(true)

        // 기존 타이머 제거
        clearTimeout(timeout)

        // 2초 뒤 숨김
        timeout = setTimeout(() => {

          setShowHeader(false)

        }, 2000)

      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => {

      window.removeEventListener('scroll', handleScroll)

      clearTimeout(timeout)

    }

  }, [])

  return (

    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-[9999]

        transition-all
        duration-500

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

            <button className="hover:text-black transition">
              Model
            </button>

            <Link
              href="/platform"
              className="hover:text-black transition"
            >
              Platform
            </Link>

            <Link href="/news" className="hover:text-black transition">
              News
            </Link>

            <button className="hover:text-black transition">
              Event
            </button>

          </nav>

        </div>

      </div>

    </header>

  )

}