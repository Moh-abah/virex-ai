'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Sparkles, Code2, Cpu, Rocket } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="ltr" // English content, left-to-right
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0C29] via-[#302b63] to-[#004e92]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00C9A7]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#004e92]/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#302b63]/50 rounded-full blur-3xl" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00C9A7]/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">VIREX AI</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-normal text-gray-300">
              The Global Hub for Sovereign Engineering & Multi-Sector Innovation
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed">
            The leading company in advanced custom software implementation, incubating deep innovations
            that redefine the boundaries of medical and software technology worldwide.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#00C9A7] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}