import type { Service } from '@/lib/data'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]">
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-base mb-2 text-white group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 text-gray-400">
          {service.description}
        </p>
        <span className="text-xs font-semibold tracking-wide text-cyan-500 group-hover:text-cyan-400 transition-colors">
          Learn more →
        </span>
      </div>
    </div>
  )
}
