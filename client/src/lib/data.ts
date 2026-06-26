export interface Service {
  id: string
  title: string
  description: string
  image: string
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
  },
  {
    id: 'portfolio',
    title: 'Portfolio Websites',
    description: 'Showcase your past work and corporate experience to global clients.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'digital',
    title: 'Simple Digital Projects',
    description: 'Landing pages, business card pages, or basic promotional setups.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platforms',
    description: 'Complete online storefronts with seamless local checkout and payment logic.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'dashboards',
    title: 'Custom Dashboards & Ledgers',
    description: 'Real-time data visualization, financial tracking analytics, and secure administrative tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Architectural blueprint designing, software scaling advice, and infrastructure configuration.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
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
