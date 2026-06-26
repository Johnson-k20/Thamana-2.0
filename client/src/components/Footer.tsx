function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 Thamana Solutions. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/company/thamana-solutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md border border-gray-800 text-gray-500 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/thamanasolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 rounded-md border border-gray-800 text-gray-500 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <TwitterIcon />
          </a>
          <a
            href="mailto:hello@thamanasolutions.com"
            aria-label="Email"
            className="p-2 rounded-md border border-gray-800 text-gray-500 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
