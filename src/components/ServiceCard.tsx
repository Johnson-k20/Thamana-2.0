import { Service } from '@/lib/data'

interface ServiceCardProps {
  service: Service
  onLearnMore: (service: Service) => void
}

export default function ServiceCard({ service, onLearnMore }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-dark-800 bg-dark-900 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-dark-800">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 flex-grow">
          {service.description}
        </p>

        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            onLearnMore(service)
          }}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
        >
          Learn more
          <svg
            className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
