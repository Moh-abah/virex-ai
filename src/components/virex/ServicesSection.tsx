'use client'

import { useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Cpu,
  Brain,
  Network,
  Shield,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  FlaskConical,
  GraduationCap,
  Globe,
  X
} from 'lucide-react'

// New data structure based on the provided content
const strategicItems = [
  {
    icon: Cpu,
    title: 'Advanced Software Engineering & Digital Solutions',
    color: 'from-[#00C9A7] to-[#005F60]',
    backContent: [
      'High-End Web & Cloud Architectures: Engineering ultra-fast, scalable web platforms and cloud-based SaaS systems using cutting-edge frameworks (Next.js, React).',
      'Elite UI/UX Design: Crafting digital experiences based on "Digital Minimalism" and luxury aesthetics, inspired by global tech leaders like Apple and Tesla.',
      'Custom Mobile Ecosystems: Developing high-performance Native and Cross-platform mobile applications with seamless backend integration.',
      'Scalable Backend Infrastructure: Designing robust database architectures and APIs capable of handling massive data throughput with zero latency.'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Algorithmic Trading Engines & Financial Intelligence',
    color: 'from-[#302b63] to-[#004e92]',
    backContent: [
      'High-Frequency Trading (HFT) Bots: Developing sophisticated execution engines specialized in scalping and real-time market liquidity analysis.',
      'Quantitative Logic & Predictive Modeling: Engineering proprietary mathematical models to identify market patterns and execute entries/exits with algorithmic precision.',
      'Custom Technical Indicators: Programming exclusive analytical tools and indicators that provide a competitive edge beyond standard market offerings.',
      'Automated Risk Management Protocols: Embedding strict capital protection logic and "Stop-Loss/Take-Profit" sequences directly into the source code.'
    ]
  },
  {
    icon: FlaskConical,
    title: 'Innovation Incubator & Prototyping (R&D)',
    color: 'from-[#005F60] to-[#008080]',
    backContent: [
      'From Concept to Prototype: Transforming theoretical patents (e.g., non-invasive diagnostic devices) into functional technical prototypes ready for clinical or market testing.',
      'Hardware-Software Integration: Developing embedded systems and firmware that bridge physical inventions with digital control platforms (IoT).',
      'Minimum Viable Product (MVP) Development: Supporting inventors by building the core technical version of their ideas for rapid validation and investment pitching.',
      'Technical Calibration & Validation: Conducting rigorous stress tests to ensure that every innovation meets global engineering and scientific standards.'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence & Research Support',
    color: 'from-[#004e92] to-[#302b63]',
    backContent: [
      'University Research Implementation: Undertaking complex technical tasks for academic papers that require advanced data processing or AI simulations.',
      'Student Graduation Project Mentorship: Elevating student concepts from academic requirements to market-ready professional software products.',
      'Scientific Data Analytics: Developing custom tools to extract and analyze statistical results from major global research databases (Scopus, PubMed).',
      'Technical Documentation for Scholars: Assisting in drafting the technical methodologies of research papers to ensure high-tier journal acceptance.'
    ]
  },
  {
    icon: Globe,
    title: 'Intellectual Property & Global Expansion',
    color: 'from-[#008080] to-[#00C9A7]',
    backContent: [
      'WIPO & International IP Support: Preparing comprehensive technical documentations and logic flowcharts required for international patent registration.',
      'Source Code Sovereignty: Guaranteeing full IP ownership and protection for clients\' proprietary algorithms and software assets.',
      'Global Strategic Presence: Establishing a technical footprint in international innovation hubs (e.g., Shanghai) to bridge local inventions with global manufacturing and markets.',
      'Technical Consulting & Strategy: Providing high-level engineering roadmaps for investors and startups to ensure long-term technological superiority.'
    ]
  }
]

export default function ServicesSection() {
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
      id="services"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0F0C29] via-[#1a1635] to-[#302b63] overflow-hidden"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#004e92]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00C9A7] text-sm font-medium mb-4 animate-pulse">
            Strategic Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-in slide-in-from-top duration-700">
            VIREX AI | Strategic Objectives & Operational Scope
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 animate-in fade-in duration-1000">
            Engineering the future through advanced software, algorithmic intelligence, and global innovation
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`rounded-full w-12 h-12 border-white/20 bg-white/5 transition-all duration-300 ${canScrollRight ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
              }`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`rounded-full w-12 h-12 border-white/20 bg-white/5 transition-all duration-300 ${canScrollLeft ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>

        {/* Horizontal Scroll Container */}
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
          {strategicItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[380px] sm:w-[450px] snap-center perspective"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`relative w-full h-[500px] transition-transform duration-700 transform-gpu cursor-pointer ${flippedIndex === index ? 'rotate-y-180' : ''
                  }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden card-hover hover:border-[#00C9A7]/50 transition-all duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <div className="flex-1" />
                      <div className="mt-6 text-[#00C9A7] text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <span>اضغط لمعرفة المزيد</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 backface-hidden rotate-y-180"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Card className="h-full bg-gradient-to-br from-[#0F0C29] to-[#1a1635] border border-[#00C9A7]/30 rounded-3xl overflow-hidden shadow-xl">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFlippedIndex(null)
                          }}
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex-1 overflow-y-auto scrollbar-thin pr-1 space-y-3">
                        {item.backContent.map((point, idx) => (
                          <div key={idx} className="flex gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`} />
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 text-[#00C9A7]/70 text-xs text-center">
                        اضغط للإغلاق
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="font-bold text-[#00C9A7]">Legal Disclaimer:</span> VIREX AI is a technology entity specializing in software engineering, technical consulting, and innovation prototyping. We do not provide financial advice, brokerage services, or asset management. In research and innovation projects (including medical and diagnostic technologies), our role is strictly limited to software and engineering implementation; the company does not guarantee final scientific or clinical outcomes, which remain the sole responsibility of the original researcher or inventor. All developed tools and systems are technical instruments managed and operated by the client at their own risk.
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
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #00C9A7;
          border-radius: 10px;
        }
      `}</style>
    </section>
  )
}