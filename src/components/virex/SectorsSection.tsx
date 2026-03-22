// 'use client'

// import { useRef, useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { 
//   GraduationCap, 
//   HeartPulse, 
//   Landmark, 
//   Building2, 
//   Globe2,
//   ChevronLeft,
//   ChevronRight
// } from 'lucide-react'

// const sectors = [
//   {
//     icon: GraduationCap,
//     title: 'القطاع الأكاديمي والبحثي',
//     description: 'نقدم دعماً شاملاً لمشاريع التخرج النوعية لطلاب الحاسب والهندسة والطب. نوفر الخوارزميات المعقدة والنمذجة الرياضية لأبحاث الماجستير والدكتوراه.',
//     features: ['مشاريع تخرج', 'أبحاث عليا', 'نمذجة رياضية'],
//     gradient: 'from-[#00C9A7] to-[#005F60]',
//   },
//   {
//     icon: HeartPulse,
//     title: 'الرعاية الصحية (MedTech)',
//     description: 'نقدم حلولاً تقنية متكاملة للمستشفيات ومراكز التشخيص وتطبيقات المراقبة الصحية المنزلية. نطور أنظمة ذكية لتحسين جودة الرعاية الصحية.',
//     features: ['المستشفيات الذكية', 'مراكز التشخيص', 'المراقبة المنزلية'],
//     gradient: 'from-[#302b63] to-[#004e92]',
//   },
//   {
//     icon: Landmark,
//     title: 'التقنيات المالية (FinTech)',
//     description: 'نطور خوارزميات التداول الآلي والتحليل الكمي وأنظمة إدارة المخاطر المالية. حلول مبتكرة تساعد المؤسسات المالية على اتخاذ قرارات مستنيرة.',
//     features: ['التداول الآلي', 'التحليل الكمي', 'إدارة المخاطر'],
//     gradient: 'from-[#005F60] to-[#008080]',
//   },
//   {
//     icon: Building2,
//     title: 'قطاع الأعمال والمؤسسات',
//     description: 'نقدم الحلول البرمجية الخاصة مثل أنظمة ERP و CRM وأتمتة سلاسل الإمداد للشركات الكبرى. حلول مخصصة تواكب نمو أعمالكم.',
//     features: ['أنظمة ERP', 'أنظمة CRM', 'أتمتة الإمداد'],
//     gradient: 'from-[#004e92] to-[#302b63]',
//   },
//   {
//     icon: Globe2,
//     title: 'المدن الذكية والقطاع الحكومي',
//     description: 'نطور أنظمة الاستشعار الذكية وحوكمة البيانات والمنصات الخدمية المتكاملة. نساهم في بناء البنية التحتية الرقمية للمدن الذكية.',
//     features: ['الاستشعار الذكي', 'حوكمة البيانات', 'المنصات الخدمية'],
//     gradient: 'from-[#008080] to-[#00C9A7]',
//   },
// ]

// export default function SectorsSection() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null)
//   const [canScrollLeft, setCanScrollLeft] = useState(false)
//   const [canScrollRight, setCanScrollRight] = useState(true)

//   const checkScroll = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
//       setCanScrollLeft(scrollLeft > 0)
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
//     }
//   }

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 340
//       scrollContainerRef.current.scrollBy({
//         left: direction === 'left' ? scrollAmount : -scrollAmount,
//         behavior: 'smooth'
//       })
//       setTimeout(checkScroll, 300)
//     }
//   }

//   return (
//     <section
//       id="sectors"
//       className="relative py-24 lg:py-32 bg-gradient-to-b from-[#302b63] via-[#0F0C29] to-[#0F0C29] overflow-hidden"
//       dir="rtl"
//     >
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#00C9A7]/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#004e92]/20 rounded-full blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00C9A7] text-sm font-medium mb-4">
//             قطاعاتنا
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
//             القطاعات المستهدفة
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-400">
//             نخدم مجموعة واسعة من القطاعات بحلول تقنية متخصصة ومبتكرة
//           </p>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex justify-center gap-4 mb-8">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => scroll('right')}
//             disabled={!canScrollRight}
//             className={`rounded-full w-12 h-12 border-white/20 bg-white/5 ${
//               canScrollRight ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
//             }`}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => scroll('left')}
//             disabled={!canScrollLeft}
//             className={`rounded-full w-12 h-12 border-white/20 bg-white/5 ${
//               canScrollLeft ? 'hover:bg-[#00C9A7] hover:text-white hover:border-[#00C9A7]' : 'opacity-30'
//             }`}
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </Button>
//         </div>

//         {/* Horizontal Scroll Container */}
//         <div
//           ref={scrollContainerRef}
//           onScroll={checkScroll}
//           className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//             WebkitOverflowScrolling: 'touch',
//           }}
//         >
//           {sectors.map((sector, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-[300px] sm:w-[320px] snap-center"
//             >
//               <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 card-hover">
//                 {/* Icon */}
//                 <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center mb-4 shadow-lg`}>
//                   <sector.icon className="w-5 h-5 text-white" />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-base font-bold text-white mb-2">
//                   {sector.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
//                   {sector.description}
//                 </p>

//                 {/* Features */}
//                 <div className="flex flex-wrap gap-2">
//                   {sector.features.map((feature, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-1 rounded-md bg-white/5 text-gray-300 text-xs"
//                     >
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Hide scrollbar CSS */}
//       <style jsx global>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   )
// }
