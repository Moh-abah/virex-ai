'use client'

import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About VIREX', href: '#about' },
    { name: 'Our Team', href: '#' },
    { name: 'Partnerships', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  services: [
    { name: 'Software Engineering', href: '#services' },
    { name: 'AI & Algorithms', href: '#services' },
    { name: 'IoT & Embedded Systems', href: '#services' },
    { name: 'Data Security', href: '#services' },
  ],
  resources: [
    { name: 'Innovation Lab', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/virex-ai', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/virex_ai', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/virex-ai', label: 'GitHub' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative bg-[#0F0C29] overflow-hidden" dir="ltr">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#00C9A7] via-[#302b63] to-[#004e92]" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00C9A7]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#005F60] flex items-center justify-center shadow-lg shadow-[#00C9A7]/20">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-wide">VIREX</span>
                <span className="text-[#00C9A7] text-xs font-medium tracking-widest">AI</span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              The leading company in advanced custom software implementation, incubating deep innovations
              that redefine the boundaries of technology worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@virex-ai.com" className="flex items-center gap-3 text-gray-400 hover:text-[#00C9A7] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@virex-ai.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Riyadh, Saudi Arabia | Shanghai (coming soon)</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-[#00C9A7] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-[#00C9A7] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-[#00C9A7] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2026 VIREX AI. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00C9A7] hover:border-[#00C9A7]/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#00C9A7] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00C9A7] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}