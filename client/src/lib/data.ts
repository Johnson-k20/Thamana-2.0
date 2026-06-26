export interface Service {
  id: string
  title: string
  description: string
  image: string
  fullDescription: string
  features: string[]
  benefits: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
  twitter: string
  email: string
}

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '4', label: 'Service Verticals' },
  { value: '100%', label: 'Satisfaction' },
  { value: '2026', label: 'Founded' },
]

export const services: Service[] = [
  {
    id: 'pos',
    title: 'Point of Sale Systems',
    description: 'Track inventory, physical sales records, and worker activities.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Our Point of Sale systems are designed to streamline retail operations across East Africa. We provide comprehensive solutions that integrate inventory management, sales tracking, and employee performance monitoring into a single, intuitive platform.',
    features: [
      'Real-time inventory tracking and stock management',
      'Multi-location sales synchronization',
      'Employee performance analytics',
      'Offline mode for unreliable connectivity',
      'Mobile-friendly interface',
      'Customizable reporting dashboards',
    ],
    benefits: [
      'Reduce operational costs by 30-40%',
      'Improve inventory accuracy to 99%+',
      'Streamline staff management and accountability',
      'Make data-driven business decisions',
      'Scale seamlessly as your business grows',
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Websites',
    description: 'Showcase your past work and corporate experience to global clients.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Build a stunning digital presence with our portfolio website solutions. We create beautiful, responsive websites that showcase your work, attract clients, and establish your professional brand globally.',
    features: [
      'Responsive design for all devices',
      'SEO-optimized structure',
      'Fast loading speeds',
      'Easy content management system',
      'Social media integration',
      'Contact forms and lead capture',
    ],
    benefits: [
      'Attract high-quality clients worldwide',
      'Establish credibility and trust',
      'Rank higher on search engines',
      'Showcase your best work professionally',
      'Generate qualified leads 24/7',
    ],
  },
  {
    id: 'digital',
    title: 'Simple Digital Projects',
    description: 'Landing pages, business card pages, or basic promotional setups.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Perfect for startups and small businesses looking to establish an online presence quickly. We build lightweight, focused digital projects that deliver results without unnecessary complexity.',
    features: [
      'Quick turnaround time (1-2 weeks)',
      'Mobile-responsive design',
      'Modern, clean aesthetics',
      'Basic analytics integration',
      'Easy updates and maintenance',
      'Affordable pricing',
    ],
    benefits: [
      'Get online faster than competitors',
      'Minimal investment with maximum impact',
      'Perfect for testing market ideas',
      'Establish immediate online credibility',
      'Scalable to larger projects later',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platforms',
    description: 'Complete online storefronts with seamless local checkout and payment logic.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Launch your online store with our comprehensive e-commerce solutions. We build secure, scalable platforms optimized for local payment methods and regional logistics in East Africa.',
    features: [
      'Secure payment gateway integration',
      'Local payment method support (M-Pesa, etc.)',
      'Inventory management system',
      'Order tracking and fulfillment',
      'Customer account management',
      'Marketing and promotion tools',
    ],
    benefits: [
      'Reach customers 24/7 online',
      'Reduce operational overhead',
      'Accept multiple payment methods',
      'Automate order processing',
      'Increase sales by 50-100%',
    ],
  },
  {
    id: 'dashboards',
    title: 'Custom Dashboards & Ledgers',
    description: 'Real-time data visualization, financial tracking analytics, and secure administrative tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Transform raw data into actionable insights with our custom dashboard solutions. We build powerful analytics platforms that help you monitor business metrics, track finances, and make informed decisions in real-time.',
    features: [
      'Real-time data visualization',
      'Custom KPI tracking',
      'Financial reporting and auditing',
      'User role-based access control',
      'Automated alerts and notifications',
      'Export and scheduling capabilities',
    ],
    benefits: [
      'Make faster, data-driven decisions',
      'Improve financial transparency',
      'Reduce reporting time by 80%',
      'Identify trends and opportunities',
      'Ensure regulatory compliance',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Architectural blueprint designing, software scaling advice, and infrastructure configuration.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Get expert guidance on your technology strategy. Our consulting team helps you design scalable architectures, optimize infrastructure, and navigate complex technical decisions to achieve your business goals.',
    features: [
      'System architecture design',
      'Technology stack recommendations',
      'Cloud infrastructure optimization',
      'Security and compliance audits',
      'Performance optimization',
      'Team training and knowledge transfer',
    ],
    benefits: [
      'Avoid costly technical mistakes',
      'Build scalable, future-proof systems',
      'Reduce infrastructure costs',
      'Improve system performance',
      'Accelerate time-to-market',
    ],
  },
]

export const team: TeamMember[] = [
  {
    id: 'emmanuel',
    name: 'Emmanuel Makori',
    role: 'CEO',
    bio: 'Visionary leader with 10+ years of experience in technology innovation and business strategy. Passionate about building transformative solutions for East Africa.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:emmanuel@thamanasolutions.com',
  },
  {
    id: 'abdimalik',
    name: 'Abdimalik Abdinoor',
    role: 'Marketing Manager',
    bio: 'Strategic marketer focused on brand growth and market expansion. Drives Thamana\'s vision across East Africa with creative campaigns and partnerships.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:abdimalik@thamanasolutions.com',
  },
  {
    id: 'johnson',
    name: 'Johnson Kuria',
    role: 'Product Manager',
    bio: 'Product-focused innovator dedicated to creating user-centric solutions. Leads product strategy and ensures every solution delivers measurable impact.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:johnson@thamanasolutions.com',
  },
]
