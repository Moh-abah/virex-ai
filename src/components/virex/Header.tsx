'use client'

import { useState, useEffect } from 'react'
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const activeItem = navItems.find(item => item.id === activeSection)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      dir="ltr"
    >
      {/* Gradient background overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          background: 'linear-gradient(90deg, #0F0C29 0%, #1a1a2e 30%, #2d2d44 60%, #3d3d5c 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#hero')
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#005F60] flex items-center justify-center shadow-lg shadow-[#00C9A7]/20 group-hover:shadow-[#00C9A7]/40 transition-shadow">
                <span className="text-white font-bold text-lg">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg tracking-wide transition-colors ${isScrolled ? 'text-gray-300' : 'text-white'
                  }`}
              >
                VIREX
              </span>
              <span className="text-[#00C9A7] text-xs font-medium tracking-widest">AI</span>
            </div>
          </a>

          {/* Current Section Indicator - Desktop */}
          <div
            className={`hidden lg:flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
              <span className="text-gray-400 text-sm font-medium">
                {activeItem?.name || 'Home'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${activeSection === item.id
                    ? 'text-[#00C9A7]'
                    : isScrolled
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Section Indicator & Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Current Section Indicator - Mobile */}
            <div
              className={`transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-pulse" />
                <span className="text-gray-400 text-xs font-medium">
                  {activeItem?.name || 'Home'}
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isScrolled ? 'text-gray-300' : 'text-white'}`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gradient-to-b from-[#0F0C29] via-[#1a1a2e] to-[#2d2d44] border-r border-white/10 w-80 p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C9A7] to-[#005F60] flex items-center justify-center">
                        <span className="text-white font-bold">V</span>
                      </div>
                      <span className="text-gray-300 font-bold text-lg">VIREX AI</span>
                    </div>
                  </div>
                  <nav className="flex-1 p-6">
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              scrollToSection(item.href)
                            }}
                            className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === item.id
                                ? 'bg-[#00C9A7]/10 text-[#00C9A7]'
                                : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                              }`}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-6 border-t border-white/10">
                    <div className="text-center text-gray-500 text-sm">
                      Riyadh, Saudi Arabia
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}