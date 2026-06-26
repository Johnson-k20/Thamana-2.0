import { companyInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center text-dark-950 font-bold">
                T
              </div>
              <span className="font-bold text-white">{companyInfo.name}</span>
            </div>
            <p className="text-sm text-gray-400">{companyInfo.location}</p>
            <p className="text-sm text-gray-400">Est. {companyInfo.founded}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#insights" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  POS Systems
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Dashboards
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                {companyInfo.social.linkedin && (
                  <a
                    href={companyInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {companyInfo.social.twitter && (
                  <a
                    href={companyInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                    </svg>
                  </a>
                )}
                {companyInfo.social.email && (
                  <a
                    href={`mailto:${companyInfo.social.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
