'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Endurance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative group">
                <button className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                  The Five Pillars
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/sanctuary" className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-white/10">
                    The Sanctuary
                  </Link>
                  <Link href="/mentor" className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-white/10">
                    The Mentor
                  </Link>
                  <Link href="/gymnasium" className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-white/10">
                    The Gymnasium
                  </Link>
                  <Link href="/chronicle" className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-white/10">
                    The Chronicle
                  </Link>
                  <Link href="/soundscape" className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-white/10">
                    The Soundscape
                  </Link>
                </div>
              </div>
              <Link href="/philosophy" className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                Our Philosophy
              </Link>
              <Link href="/pricing" className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="text">Log In</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/sanctuary" className="block px-3 py-2 text-white hover:text-orange-400">
              The Sanctuary
            </Link>
            <Link href="/mentor" className="block px-3 py-2 text-white hover:text-orange-400">
              The Mentor
            </Link>
            <Link href="/gymnasium" className="block px-3 py-2 text-white hover:text-orange-400">
              The Gymnasium
            </Link>
            <Link href="/chronicle" className="block px-3 py-2 text-white hover:text-orange-400">
              The Chronicle
            </Link>
            <Link href="/soundscape" className="block px-3 py-2 text-white hover:text-orange-400">
              The Soundscape
            </Link>
            <div className="border-t border-white/10 pt-4 mt-4">
              <Link href="/login" className="block px-3 py-2 text-white hover:text-orange-400">
                Log In
              </Link>
              <Link href="/register" className="block px-3 py-2 text-white hover:text-orange-400">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
