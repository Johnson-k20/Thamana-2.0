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
  title: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
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
    fullDescription: 'Our Point of Sale Systems provide comprehensive retail management solutions that streamline your sales operations, inventory tracking, and staff management. Built for East African retailers, our POS systems integrate seamlessly with local payment methods and banking systems.',
    features: [
      'Real-time inventory tracking and management',
      'Multi-user support with role-based access control',
      'Offline functionality with automatic sync',
      'Integrated payment processing',
      'Sales analytics and reporting',
      'Barcode scanning and product management',
    ],
    benefits: [
      'Reduce operational costs by 30%',
      'Improve inventory accuracy',
      'Faster checkout times',
      'Better customer insights',
      'Scalable for multiple locations',
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Websites',
    description: 'Showcase your past work and corporate experience to global clients.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Professional portfolio websites designed to showcase your expertise and attract high-value clients. We create stunning, conversion-focused portfolios that tell your story and demonstrate your capabilities.',
    features: [
      'Responsive design for all devices',
      'SEO-optimized structure',
      'Fast loading times',
      'Easy content management',
      'Project showcase galleries',
      'Client testimonials section',
    ],
    benefits: [
      'Attract premium clients',
      'Establish professional credibility',
      'Improve search engine visibility',
      'Increase conversion rates',
      'Build your personal brand',
    ],
  },
  {
    id: 'digital',
    title: 'Simple Digital Projects',
    description: 'Landing pages, business card pages, or basic promotional setups.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Quick-turnaround digital solutions for businesses looking to establish an online presence. Perfect for startups, campaigns, and promotional initiatives that need fast deployment.',
    features: [
      'Quick deployment (days, not weeks)',
      'Mobile-responsive design',
      'Social media integration',
      'Email capture forms',
      'Analytics tracking',
      'Cost-effective solutions',
    ],
    benefits: [
      'Fast time-to-market',
      'Affordable pricing',
      'Professional appearance',
      'Easy to update',
      'Perfect for testing ideas',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platforms',
    description: 'Complete online storefronts with seamless local checkout and payment logic.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Full-featured e-commerce solutions tailored for East African businesses. We handle everything from product catalogs to payment processing, ensuring a seamless shopping experience for your customers.',
    features: [
      'Product catalog management',
      'Shopping cart and checkout',
      'Local payment gateway integration',
      'Order management system',
      'Customer accounts',
      'Inventory synchronization',
    ],
    benefits: [
      'Increase sales channels',
      'Reach customers 24/7',
      'Reduce operational overhead',
      'Better customer data',
      'Scalable infrastructure',
    ],
  },
  {
    id: 'dashboards',
    title: 'Custom Dashboards & Ledgers',
    description: 'Real-time data visualization, financial tracking analytics, and secure administrative tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Enterprise-grade dashboards and financial management systems designed for accurate tracking and real-time insights. Perfect for businesses that need comprehensive data visualization and reporting.',
    features: [
      'Real-time data visualization',
      'Custom report generation',
      'Financial ledger management',
      'User role management',
      'Data export capabilities',
      'Automated alerts and notifications',
    ],
    benefits: [
      'Make data-driven decisions',
      'Improve financial accuracy',
      'Reduce manual work',
      'Better compliance tracking',
      'Actionable insights',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Architectural blueprint designing, software scaling advice, and infrastructure configuration.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    fullDescription: 'Expert technical consulting services to help your organization scale, optimize, and modernize your technology infrastructure. Our consultants bring years of experience in building scalable systems.',
    features: [
      'Architecture design and planning',
      'Technology stack recommendations',
      'Performance optimization',
      'Security audits and improvements',
      'Cloud infrastructure setup',
      'Team training and knowledge transfer',
    ],
    benefits: [
      'Avoid costly mistakes',
      'Optimize performance',
      'Improve security posture',
      'Reduce technical debt',
      'Future-proof your systems',
    ],
  },
]

export const team: TeamMember[] = [
  {
    id: 'emmanuel',
    name: 'Emmanuel Makori',
    title: 'CEO',
    bio: 'Visionary leader with 10+ years of experience in technology innovation and business strategy. Passionate about building transformative solutions for East Africa.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'emmanuel@thamanasolutions.com',
    },
  },
  {
    id: 'abdimalik',
    name: 'Abdimalik Abdinoor',
    title: 'Marketing Manager',
    bio: 'Strategic marketer focused on brand growth and market expansion. Drives Thamana\'s vision across East Africa with creative campaigns and partnerships.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'abdimalik@thamanasolutions.com',
    },
  },
  {
    id: 'johnson',
    name: 'Johnson Kuria',
    title: 'Product Manager',
    bio: 'Product-focused innovator dedicated to creating user-centric solutions. Leads product strategy and ensures every solution delivers measurable impact.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'johnson@thamanasolutions.com',
    },
  },
]

export const companyInfo = {
  name: 'Thamana Solutions',
  location: 'Nairobi, Kenya',
  founded: 2026,
  email: 'dhamana@gmail.com',
  description: 'We partner with organizations to design, build and scale technology that drives growth and lasting impact across East Africa.',
  social: {
    linkedin: 'https://linkedin.com/company/thamana-solutions',
    twitter: 'https://twitter.com/thamanasolutions',
    email: 'hello@thamanasolutions.com',
  },
}
