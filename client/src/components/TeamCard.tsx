import type { TeamMember } from '@/lib/data'

interface TeamCardProps {
  member: TeamMember
  featured?: boolean
}

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

export default function TeamCard({ member, featured }: TeamCardProps) {
  return (
    <div className={`rounded-lg overflow-hidden border transition-all duration-300 ${
      featured
        ? 'border-cyan-500/50 bg-gray-900'
        : 'border-gray-800 bg-gray-900 hover:border-cyan-500/40'
    }`}>
      {/* Photo */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        {featured && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-bold text-lg mb-0.5 ${featured ? 'text-cyan-400' : 'text-white'}`}>
          {member.name}
        </h3>
        <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-cyan-500">
          {member.role}
        </p>
        <p className="text-sm leading-relaxed mb-5 text-gray-400">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 rounded-md border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <TwitterIcon />
          </a>
          <a
            href={member.email}
            aria-label="Email"
            className="p-2 rounded-md border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
