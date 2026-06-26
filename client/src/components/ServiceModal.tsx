import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { Service } from '@/lib/data'

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  )
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !service) return null

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-gray-900 rounded-lg border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-2 text-white">{service.title}</h2>
            <div className="w-12 h-1 bg-cyan-500 rounded-full mb-6" />

            <p className="text-base leading-relaxed mb-8 text-gray-300">
              {service.fullDescription}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-white">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-white">Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="mailto:dhamana@gmail.com"
                className="flex-1 px-6 py-3 text-sm font-semibold tracking-wide border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-200 rounded-sm text-center"
              >
                Get Started
              </a>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 text-sm font-semibold tracking-wide border border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white transition-all duration-200 rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  // Use portal to render modal at document root to avoid stacking context issues
  return createPortal(modalContent, document.body)
}
