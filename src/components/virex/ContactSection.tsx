'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Building,
  Clock,
  User,
  Briefcase,
  ChevronDown,
  X,
  MessageCircle,
  AtSign,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    items: [
      { label: 'General Inquiries', value: 'info@virex-ai.com' },
      { label: 'Sales & Contracts', value: 'sales@virex-ai.com' },
      { label: 'Technical Support', value: 'support@virex-ai.com' },
    ],
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    items: [
      { label: '', value: 'Riyadh, Saudi Arabia' },
      { label: 'Coming Soon', value: 'Shanghai, China' },
    ],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    items: [
      { label: '', value: 'Sunday - Thursday' },
      { label: '', value: '9:00 AM - 6:00 PM' },
    ],
  },
]

const sectors = [
  { value: 'academic', label: 'Academic & Research' },
  { value: 'healthcare', label: 'Healthcare (MedTech)' },
  { value: 'fintech', label: 'Financial Technology (FinTech)' },
  { value: 'enterprise', label: 'Enterprise & Business' },
  { value: 'government', label: 'Smart Cities & Government' },
  { value: 'other', label: 'Other Sector' },
]

// Team members data
const teamMembers = [

  {
    id: 1,
    name: 'ALAMRI, ALI MOHAMMAD A',
    role: 'Managing Director (MD)',
    title: 'Strategic Leadership & Business Development',
    image: '/ali.jpeg',
    whatsapp: '+966569920060',
    email: 'ali@virex-ai.com',
    description: 'Drives strategic vision and operational growth, ensuring alignment with organizational goals.',
  },

  {
    id: 2,
    name: 'ALHAISOUNI, SAIF GHAZY K',
    role: 'Chief Executive Officer (CEO)',
    title: 'Global Inventor & Strategic Researcher',
    image: '/saif.png',
    whatsapp: '+966546503807',
    email: 'saif@virex-ai.com',
    description: 'Global Inventor & Strategic Researcher | Aviation Weather Specialist | MSc in Climate Change: Aviation Public Relations (UK)',
  },
  {
    id: 3,
    name: 'MOHAMMED YAHYA ALI ALI ABAH',
    role: 'Technical Solutions Specialist (TSS)',
    title: 'Technical Solutions Specialist',
    image: '/mohammed.png',
    whatsapp: '+967780090882',
    email: 'mohabahadmin@virex-ai.com',
    description: 'Programming, Design & Technical Support Solutions',
  }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    projectType: '',
    message: '',
  })
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null)
  const [showContactOptions, setShowContactOptions] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    window.location.href = `mailto:info@virex-ai.com?subject=Service Request from ${formData.name}&body=${encodeURIComponent(formData.message)}`
  }

  const openContactModal = (member: typeof teamMembers[0]) => {
    setSelectedMember(member)
    setShowContactOptions(true)
  }

  const closeContactModal = () => {
    setShowContactOptions(false)
    setSelectedMember(null)
  }

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      dir="ltr"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C9A7] via-[#302b63] to-[#004e92]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00C9A7]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#302b63]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#302b63]/5 text-[#302b63] text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F0C29] mb-6">
            Start Your Innovation Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We're here to turn your ideas into reality. Reach out today.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0F0C29] mb-2">Meet Our Leadership</h3>
            <p className="text-gray-500">Direct contact with our technical experts</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openContactModal(member)}
              >
                <div className="p-6 text-center">
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-[#00C9A7]/20 group-hover:border-[#00C9A7] transition-all"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00C9A7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F0C29] mb-1">{member.name}</h4>
                  <p className="text-[#00C9A7] font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.title}</p>
                  <div className="flex justify-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
                      Click to contact
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#005F60] flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F0C29]">Service Request</h3>
                  <p className="text-sm text-gray-500">Fill the form and we'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-[#00C9A7] focus:ring-[#00C9A7]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-[#00C9A7] focus:ring-[#00C9A7]"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+966 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-[#00C9A7] focus:ring-[#00C9A7]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700">Sector</Label>
                    <Select
                      value={formData.sector}
                      onValueChange={(value) => setFormData({ ...formData, sector: value })}
                    >
                      <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-[#00C9A7] focus:ring-[#00C9A7]">
                        <SelectValue placeholder="Select sector" />
                      </SelectTrigger>
                      <SelectContent>
                        {sectors.map((sector) => (
                          <SelectItem key={sector.value} value={sector.value}>
                            {sector.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your software project or innovation you'd like to develop..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-50 border-gray-200 focus:border-[#00C9A7] focus:ring-[#00C9A7] min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#302b63] to-[#004e92] hover:from-[#302b63] hover:to-[#00C9A7] text-white font-semibold py-6 rounded-xl shadow-lg transition-all"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Request
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F0C29] to-[#302b63] rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#005F60] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3">{item.title}</h4>
                    <div className="space-y-2">
                      {item.items.map((subItem, idx) => (
                        <div key={idx} className="text-gray-300 text-sm">
                          {subItem.label && (
                            <span className="text-gray-500">{subItem.label}: </span>
                          )}
                          <span>{subItem.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-[#0F0C29] mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a
                  href="mailto:sales@virex-ai.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#00C9A7] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Request a Quote</span>
                </a>
                <a
                  href="mailto:support@virex-ai.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#00C9A7] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">Technical Support</span>
                </a>
                <a
                  href="mailto:info@virex-ai.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#00C9A7] transition-colors"
                >
                  <Building className="w-4 h-4" />
                  <span className="text-sm">General Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <Dialog open={showContactOptions} onOpenChange={closeContactModal}>
        <DialogContent className="sm:max-w-md bg-white rounded-2xl p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-2 border-b border-gray-100">
            <DialogTitle className="text-xl font-bold text-[#0F0C29]">
              Contact {selectedMember?.name}
            </DialogTitle>

            <DialogDescription className="sr-only">
              Choose a contact method to reach {selectedMember?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedMember?.image}
                alt={selectedMember?.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#00C9A7]"
              />
              <div>
                <h4 className="font-semibold text-[#0F0C29]">{selectedMember?.name}</h4>
                <p className="text-sm text-gray-500">{selectedMember?.role}</p>
                <p className="text-xs text-gray-400 mt-1">{selectedMember?.description}</p>
              </div>
            </div>
            <div className="grid gap-4">
              <Button
                variant="outline"
                className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white gap-2"
                onClick={() => selectedMember && handleWhatsApp(selectedMember.whatsapp)}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#00C9A7] text-[#00C9A7] hover:bg-[#00C9A7] hover:text-white gap-2"
                onClick={() => selectedMember && handleEmail(selectedMember.email)}
              >
                <Mail className="w-5 h-5" />
                Send Email
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}