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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0a0f1f] to-[#0a0f1f]/80 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="container flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
          <div className="relative">
            <img src="/logo.jpeg" alt="Thamana Solutions" className="h-12 w-auto group-hover:drop-shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all duration-300" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              style={{
                animation: `slide-in-left 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            className="p-2 hover:bg-cyan-500/10 rounded transition-all duration-300 hover:text-cyan-400 border border-transparent hover:border-cyan-500/30"
            aria-label="Toggle theme"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden sm:inline-block px-6 py-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all duration-300 text-sm font-semibold rounded tracking-wider btn-geometric"
          >
            CONTACT
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-cyan-400 transition-colors duration-300"
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
        <div className="md:hidden bg-[#0a0f1f]/95 backdrop-blur-lg border-t border-cyan-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container py-4 space-y-3 px-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-sm font-semibold rounded text-center mt-4 btn-geometric"
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
