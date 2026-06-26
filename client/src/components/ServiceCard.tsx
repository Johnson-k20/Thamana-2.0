import type { Service } from '@/lib/data'

interface ServiceCardProps {
  service: Service
  onLearnMore: (service: Service) => void
}

export default function ServiceCard({ service, onLearnMore }: ServiceCardProps) {
  return (
    <div className="group relative h-full rounded-lg overflow-hidden border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] hover:-translate-y-1 cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden h-44">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Overlay Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-xs font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <h3 className="font-semibold text-base mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 text-gray-400 flex-grow">
          {service.description}
        </p>

        {/* Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onLearnMore(service)
          }}
          className="inline-flex items-center text-xs font-semibold tracking-wide text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300 hover:gap-1.5 gap-1 relative z-10"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse" />
      </div>
    </div>
  )
}
