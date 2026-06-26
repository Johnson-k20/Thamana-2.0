import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WireframeCube from '@/components/WireframeCube'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import SectionHeading from '@/components/SectionHeading'
import { stats, services, team } from '@/lib/data'

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Text */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6 flex items-center gap-2 text-gray-500">
                <span className="w-4 h-px bg-current inline-block" />
                Nairobi, Kenya · Est. 2026
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Building intelligent solutions{' '}
                <span className="text-cyan-400">for a smarter tomorrow.</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed mb-10 max-w-lg text-gray-400">
                We partner with organizations to design, build and scale technology that drives
                growth and lasting impact across East Africa.
              </p>

              <a
                href="#solutions"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wide border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-200 rounded-sm"
              >
                Explore Solutions ›
              </a>

              {/* Stats */}
              <div className="mt-14 pt-8 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map(stat => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-cyan-400">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest mt-0.5 text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Cube */}
            <div className="hidden md:flex items-center justify-center">
              <WireframeCube />
            </div>
          </div>
        </section>

        {/* ─── Services ─────────────────────────────────────────── */}
        <section
          id="solutions"
          className="py-24 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeading>What we do</SectionHeading>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <AnimatedSection key={service.id} className={`delay-${i * 100}`}>
                  <ServiceCard service={service} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Team ─────────────────────────────────────────────── */}
        <section
          id="about"
          className="py-24 bg-gray-950"
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeading>Our Leadership Team</SectionHeading>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <AnimatedSection key={member.id} className={`delay-${i * 100}`}>
                  <TeamCard
                    member={member}
                    featured={member.id === 'abdimalik'}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Insights placeholder ─────────────────────────────── */}
        <section
          id="insights"
          className="py-24 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeading>Insights</SectionHeading>
              <p className="text-sm text-gray-500">
                Thought leadership and industry perspectives — coming soon.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── Contact ──────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-24 bg-gray-950"
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeading>Start a Project</SectionHeading>
              <p className="text-base mb-8 max-w-xl text-gray-400">
                Ready to build something? Send your specifications directly to our office inbox.
              </p>
              <a
                href="mailto:dhamana@gmail.com"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wide border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-200 rounded-sm"
              >
                dhamana@gmail.com ›
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
