'use client'

import Header from '@/components/virex/Header'
import HeroSection from '@/components/virex/HeroSection'
import AboutSection from '@/components/virex/AboutSection'
import ServicesSection from '@/components/virex/ServicesSection'
// import InnovationSection from '@/components/virex/InnovationSection'
// import SectorsSection from '@/components/virex/SectorsSection'
import ContactSection from '@/components/virex/ContactSection'
import Footer from '@/components/virex/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <InnovationSection /> */}
      {/* <SectorsSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
