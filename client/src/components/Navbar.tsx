import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = theme === 'dark'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center gap-2.5 font-bold text-sm tracking-widest uppercase transition-colors ${
            isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-cyan-600'
          }`}
        >
          <span className="w-7 h-7 rounded bg-cyan-500 flex items-center justify-center text-white font-black text-xs">
            T
          </span>
          Thamana Solutions
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors ${
              isDark
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-200 rounded-sm"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${
          isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
        }`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-200 rounded-sm w-fit"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
