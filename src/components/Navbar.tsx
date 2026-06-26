import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo.jpeg" alt="Thamana Solutions" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            className="p-2 hover:bg-gray-900 rounded transition-colors"
            aria-label="Toggle theme"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden sm:inline-block px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-dark-950 transition-all text-sm font-medium rounded"
          >
            CONTACT
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-900">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-dark-950 transition-all text-sm font-medium rounded text-center"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
