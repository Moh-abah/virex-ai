'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Microscope, 
  Activity, 
  CloudCog, 
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const innovations = [
  {
    icon: Microscope,
    title: 'تقنية الامتصاص الضوئي',
    description: 'نظام يعتمد على فيزياء الضوء والترددات لقياس المؤشرات الحيوية (مثل الجلوكوز) عبر الجلد دون وخز. تقنية ثورية تستخدم خصائص الضوء في تحليل المكونات الحيوية بدقة مخبرية.',
    highlight: 'قياس غير جراحي',
  },
  {
    icon: Activity,
    title: 'النمذجة الرياضية',
    description: 'استخدام خوارزميات معقدة لمعالجة الإشارات وضمان دقة مخبرية في جهاز محمول. نموذج رياضي متطور يحول القراءات الضوئية إلى نتائج دقيقة موثوقة.',
    highlight: 'دقة مخبرية',
  },
  {
    icon: CloudCog,
    title: 'إنترنت الأشياء الطبي (IoMT)',
    description: 'ربط لحظي للبيانات عبر السحابة للمراقبة الصحية الشاملة والتنبؤ الاستباقي. نظام متكامل يجمع البيانات ويحللها في الوقت الفعلي.',
    highlight: 'مراقبة ذكية',
  },
]

export default function InnovationSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section
      id="innovation"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[#00C9A7] via-[#302b63] to-[#004e92]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00C9A7]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#302b63]/5 text-[#302b63] text-sm font-medium mb-4">
            مختبر الابتكار
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F0C29] mb-6">
            ثورة المراقبة الحيوية: عصر بلا ألم
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            نبتكر حلولاً طبية ثورية تعيد تعريف طريقة مراقبة الصحة والبيانات الحيوية
          </p>
        </div>

        {/* Patent Card */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-br from-[#0F0C29] via-[#302b63] to-[#004e92] rounded-3xl p-6 md:p-10 overflow-hidden">
            {/* Background pattern */}
            <div 
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Patent Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C9A7] to-[#005F60] flex items-center justify-center shadow-2xl shadow-[#00C9A7]/30">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Patent Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#00C9A7]/20 text-[#00C9A7] text-sm font-medium">
                      براءة اختراع دولية
                    </span>
                    <span className="text-white/60 text-sm">WO2016110745</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    تقنية القياس الحيوي غير الجراحي
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    ابتكار رائد في مجال القياسات الحيوية يتيح قياس المؤشرات الصحية دون الحاجة لأخذ عينات دم.
                  </p>
                </div>

                {/* Verification Badge */}
                <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00C9A7]">1.9</div>
                    <div className="text-xs text-gray-400">معامل التأثير</div>
                    <div className="mt-2 text-xs text-gray-500">Scopus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`rounded-full w-12 h-12 border-gray-200 ${
              canScrollRight ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`rounded-full w-12 h-12 border-gray-200 ${
              canScrollLeft ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
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
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] sm:w-[360px] snap-center"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 card-hover">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#302b63] to-[#004e92] flex items-center justify-center mb-4 shadow-lg shadow-[#302b63]/20">
                  <innovation.icon className="w-6 h-6 text-white" />
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#00C9A7]/10 text-[#00C9A7] text-sm font-medium mb-3">
                  {innovation.highlight}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0F0C29] mb-2">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2016110745"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#302b63] font-medium hover:text-[#00C9A7] transition-colors"
          >
            <span>عرض البراءة على WIPO</span>
            <ExternalLink className="mr-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
