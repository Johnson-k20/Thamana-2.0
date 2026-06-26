export default function WireframeCube() {
  return (
    <div className="w-full h-full flex items-center justify-center perspective">
      <svg
        viewBox="0 0 200 200"
        className="w-64 h-64 animate-spin-slow"
        style={{
          animation: 'spin-slow 8s linear infinite',
        }}
      >
        {/* Define the perspective */}
        <g transform="translate(100, 100)">
          {/* Front face */}
          <line x1="-50" y1="-50" x2="50" y2="-50" stroke="#22d3ee" strokeWidth="2" />
          <line x1="50" y1="-50" x2="50" y2="50" stroke="#22d3ee" strokeWidth="2" />
          <line x1="50" y1="50" x2="-50" y2="50" stroke="#22d3ee" strokeWidth="2" />
          <line x1="-50" y1="50" x2="-50" y2="-50" stroke="#22d3ee" strokeWidth="2" />

          {/* Back face */}
          <line x1="-30" y1="-30" x2="30" y2="-30" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="30" y1="-30" x2="30" y2="30" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="30" y1="30" x2="-30" y2="30" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
          <line x1="-30" y1="30" x2="-30" y2="-30" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />

          {/* Connecting lines */}
          <line x1="-50" y1="-50" x2="-30" y2="-30" stroke="#22d3ee" strokeWidth="2" opacity="0.4" />
          <line x1="50" y1="-50" x2="30" y2="-30" stroke="#22d3ee" strokeWidth="2" opacity="0.4" />
          <line x1="50" y1="50" x2="30" y2="30" stroke="#22d3ee" strokeWidth="2" opacity="0.4" />
          <line x1="-50" y1="50" x2="-30" y2="30" stroke="#22d3ee" strokeWidth="2" opacity="0.4" />

          {/* Labels */}
          <text x="0" y="-60" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">
            FRONT
          </text>
          <text x="0" y="75" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">
            BACK
          </text>
          <text x="65" y="5" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">
            RIGHT
          </text>
          <text x="-65" y="5" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">
            LEFT
          </text>
          <text x="0" y="0" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">
            TOP
          </text>
          <text x="0" y="20" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">
            BOTTOM
          </text>
        </g>
      </svg>
    </div>
  )
}
