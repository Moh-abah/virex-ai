'use client'

import { useRef, useState } from 'react'
import {
  Shield,
  Globe,
  Brain,
  GraduationCap,
  FileText,
  Eye,
  Target,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Data for the five strategic pillars
const pillars = [
  {
    icon: Shield,
    title: 'Sovereign Engineering',
    description: 'We build original, proprietary infrastructures that grant our clients total technological independence and unrivaled intellectual property ownership.',
    color: 'from-[#00C9A7] to-[#005F60]',
  },
  {
    icon: Globe,
    title: 'Global Innovation Integration',
    description: 'We scout the finest global advancements and mold them into high-intelligence technical frameworks for various industries.',
    color: 'from-[#302b63] to-[#004e92]',
  },
  {
    icon: Brain,
    title: 'Algorithmic Mastery',
    description: 'We rely on advanced mathematics as the ultimate reference for all engineering decisions, from financial markets to complex diagnostic systems.',
    color: 'from-[#005F60] to-[#008080]',
  },
  {
    icon: GraduationCap,
    title: 'Academic & Research Empowerment',
    description: 'We provide the technical backbone for universities and researchers, transforming complex methodologies into precise analytical tools.',
    color: 'from-[#004e92] to-[#302b63]',
  },
  {
    icon: FileText,
    title: 'IP Protection & Documentation',
    description: 'We ensure rigorous engineering documentation that facilitates international patent registration and guarantees the global scaling of innovations.',
    color: 'from-[#008080] to-[#00C9A7]',
  },
]

export default function AboutSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      dir="ltr" // English content, so left-to-right
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C9A7] via-[#302b63] to-[#004e92]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00C9A7]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#302b63]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">

            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00C9A7] text-sm font-medium mb-4 animate-pulse">
            The Corporate Manifesto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F0C29] mb-6">
            VIREX AI
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            At VIREX AI, we embody the pinnacle of digital logic and Sovereign Engineering. We are a premier strategic entity
            dedicated to scouting and integrating elite global innovations, transforming them into high-intelligence algorithmic
            solutions and integrated technological ecosystems. Our expertise spans from architecting elite cloud infrastructures
            and high-end SaaS platforms to developing complex Quantitative Trading Engines and financial intelligence. We bridge
            the gap between bold visions and tangible reality by providing technical implementation for Patents and Deep Innovations
            across all scientific and technical sectors, while empowering academic research with exceptional analytical tools.
            At VIREX AI, we merge advanced mathematics with engineering mastery to grant our partners absolute technological
            superiority, secured by global intellectual property standards.
          </p>
        </div>

        {/* Strategic Pillars Title */}
        <div className="text-center mt-20 mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0F0C29] mb-2">Strategic Pillars</h3>
          <p className="text-gray-500">The foundations that drive our engineering excellence</p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`rounded-full w-12 h-12 border-gray-200 ${canScrollRight ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
              }`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`rounded-full w-12 h-12 border-gray-200 ${canScrollLeft ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>

        {/* Horizontal Scroll Container for Pillars */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] sm:w-[400px] snap-center perspective"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`relative w-full h-[380px] transition-transform duration-700 transform-gpu cursor-pointer ${flippedIndex === index ? 'rotate-y-180' : ''
                  }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Card className="h-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <pillar.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F0C29] mb-4">
                        {pillar.title}
                      </h3>
                      <div className="flex-1" />
                      <div className="mt-6 text-[#00C9A7] text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Click to learn more</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 backface-hidden rotate-y-180"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-white border border-[#00C9A7]/20 rounded-3xl overflow-hidden shadow-xl">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 shadow-md`}>
                        <pillar.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F0C29] mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {pillar.description}
                      </p>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[#00C9A7] text-xs text-center">
                        Click to close
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#00C9A7]/5 to-transparent rounded-2xl p-8 border border-[#00C9A7]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#005F60] flex items-center justify-center shadow-md">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0C29]">Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted global technological pole in engineering integrated solutions and transforming patents into sovereign digital systems that lead global transformation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#302b63]/5 to-transparent rounded-2xl p-8 border border-[#302b63]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#302b63] to-[#004e92] flex items-center justify-center shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0C29]">Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower the elite of inventors, researchers, and investors through engineering exceptional solutions that adopt world-class technologies, with an unwavering commitment to protecting intellectual assets.
            </p>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS and 3D styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .perspective {
          perspective: 1500px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  )
}