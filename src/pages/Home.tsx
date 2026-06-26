import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WireframeCube from '@/components/WireframeCube'
import ServiceCard from '@/components/ServiceCard'
import ServiceModal from '@/components/ServiceModal'
import TeamCard from '@/components/TeamCard'
import { stats, services, team, companyInfo } from '@/lib/data'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { Service } from '@/lib/data'

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useIntersectionObserver()
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMore = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedService(null), 200)
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 border-b border-dark-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-sm font-semibold text-cyan-400 tracking-widest">
                  {companyInfo.location} · EST. {companyInfo.founded}
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building intelligent solutions
                  <span className="text-cyan-400"> for a smarter tomorrow.</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-lg">
                  {companyInfo.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#solutions"
                    className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-dark-950 transition-all font-semibold inline-flex items-center justify-center gap-2"
                  >
                    Explore Solutions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - 3D Cube */}
            <AnimatedSection className="hidden md:flex">
              <WireframeCube />
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-dark-800">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-cyan-400">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="solutions" className="py-20 md:py-32 border-b border-dark-800">
        <div className="container">
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do</h2>
            <div className="w-12 h-1 bg-cyan-400 rounded-full" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <AnimatedSection key={service.id}>
                <ServiceCard service={service} onLearnMore={handleLearnMore} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 md:py-32 border-b border-dark-800">
        <div className="container">
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <div className="w-12 h-1 bg-cyan-400 rounded-full" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <AnimatedSection key={member.id}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 md:py-32 border-b border-dark-800">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Insights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Thought leadership and industry perspectives — coming soon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 border-b border-dark-800">
        <div className="container text-center">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start a Project</h2>
            <p className="text-gray-400 mb-8">
              Ready to build something? Send your specifications directly to our office inbox.
            </p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {companyInfo.email}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Service Modal */}
      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
