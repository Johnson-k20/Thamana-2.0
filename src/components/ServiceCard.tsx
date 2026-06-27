import { useState } from 'react'
import { Service } from '@/lib/data'

interface ServiceCardProps {
  service: Service
  onLearnMore: (service: Service) => void
}

export default function ServiceCard({ service, onLearnMore }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gray-800 bg-[#0a0f1f] hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay - Always Present */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Summary Overlay - Appears on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-[#0a0f1f]/90 flex flex-col items-center justify-center p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-200 leading-relaxed max-h-16 overflow-hidden">
              {service.fullDescription.substring(0, 100)}...
            </p>
            <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs font-semibold">
              <span>Explore Details</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-2">
          {service.description}
        </p>

        {/* Key Features Preview - Appears on Hover */}
        <div
          className={`mb-4 space-y-2 overflow-hidden transition-all duration-300 ${
            isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-xs font-semibold text-cyan-400">Key Features:</p>
          <ul className="text-xs text-gray-300 space-y-1">
            {service.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            onLearnMore(service)
          }}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 group/btn hover:gap-2"
        >
          Learn more
          <svg
            className="w-3 h-3 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Animated Border Glow */}
      <div
        className={`absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at top right, rgba(34, 211, 238, 0.1), transparent)',
        }}
      />
    </div>
  )
}
