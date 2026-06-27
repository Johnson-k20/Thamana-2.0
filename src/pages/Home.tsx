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
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0d1428] to-[#0a0f1f] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-cyan-500/20 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="inline-block">
                  <p className="text-xs font-bold text-cyan-400 tracking-widest uppercase px-4 py-2 border border-cyan-500/30 rounded">
                    {companyInfo.location} · EST. {companyInfo.founded}
                  </p>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  Building intelligent solutions
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300"> for a smarter tomorrow.</span>
                </h1>

                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  {companyInfo.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href="#solutions"
                    className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300 font-bold inline-flex items-center justify-center gap-2 rounded tracking-wide btn-geometric group"
                  >
                    Explore Solutions
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - 3D Cube */}
            <AnimatedSection className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-lg blur-2xl"></div>
                <WireframeCube />
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-cyan-500/20">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="group" style={{ animation: `fade-in-up 0.6s ease-out ${0.1 * idx}s both` }}>
                <div className="relative">
                  <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 group-hover:from-cyan-300 group-hover:to-cyan-200 transition-all duration-300">
                    {stat.value}
                  </p>
                  <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-300 group-hover:w-12 transition-all duration-300"></div>
                </div>
                <p className="text-sm text-gray-400 mt-4 font-semibold">{stat.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="solutions" className="relative py-20 md:py-32 border-b border-cyan-500/20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container relative z-10">
          <AnimatedSection className="mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight section-header">
                What we do
              </h2>
              <div className="divider-accent-short"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <AnimatedSection key={service.id}>
                <ServiceCard service={service} onLearnMore={handleLearnMore} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="relative py-20 md:py-32 border-b border-cyan-500/20 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container relative z-10">
          <AnimatedSection className="mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight section-header">
                Our Leadership Team
              </h2>
              <div className="divider-accent-short"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <AnimatedSection key={member.id}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="relative py-20 md:py-32 border-b border-cyan-500/20 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Insights</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Thought leadership and industry perspectives — coming soon.
              </p>
              <div className="inline-block px-6 py-3 border border-cyan-500/30 rounded text-sm text-cyan-400 font-semibold">
                Stay tuned for expert insights
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 md:py-32 border-b border-cyan-500/20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container relative z-10 text-center">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">Start a Project</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to build something? Send your specifications directly to our office inbox.
                </p>
              </div>
              
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300 font-bold rounded text-lg btn-geometric group"
              >
                {companyInfo.email}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
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
