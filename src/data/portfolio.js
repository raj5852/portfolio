export const email = 'raj.web58@gmail.com'

export const socials = {
  github: 'https://github.com/raj5852',
  linkedin: 'https://www.linkedin.com/in/rajkumar58',
  leetcode: 'https://leetcode.com/u/Oeo0QR01Ms',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const roles = ['Laravel Developer.', 'SaaS Architect.', 'Full-Stack Engineer.', 'API Specialist.']

export const stats = [
  { count: 5, suffix: '+', label: 'Years Experience' },
  { count: 100, suffix: 'K+', label: 'Users Served' },
  { count: 85, suffix: '%', label: 'Performance Gains' },
  { count: 4, suffix: '', label: 'Companies' },
]

export const skillGroups = [
  {
    title: 'Backend',
    icon: 'M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
    skills: ['PHP', 'Laravel', 'MySQL', 'Livewire', 'Filament', 'OOP', 'REST APIs', 'Queues', 'Caching'],
  },
  {
    title: 'Frontend',
    icon: 'M3 5h18v12H3zM8 21h8M12 17v4',
    skills: ['Vue.js', 'JavaScript', 'Inertia.js', 'Alpine.js', 'jQuery', 'TailwindCSS', 'Bootstrap'],
  },
  {
    title: 'Practices',
    icon: 'M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    skills: ['SDLC', 'SOLID', 'Agile / Scrum', 'Code Review', 'Unit Testing', 'Jira'],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'M3 15a4 4 0 0 0 4 4h10a5 5 0 1 0-1.9-9.62A6 6 0 0 0 3.5 12.6 4 4 0 0 0 3 15Z',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Apache', 'VPS', 'Docker', 'AWS'],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Focus Digital Solutions',
    period: 'Jan 2026 — Present · Greece (Remote)',
    current: true,
    points: [
      'Architected and built an MVP from the ground up, designing a scalable application architecture and database structure aligned with business requirements.',
      'Solved complex architectural challenges, evaluating trade-offs and implementing practical, maintainable solutions for long-term growth.',
      'Hired and supervised a developer — delegating tasks, conducting code reviews, and maintaining engineering standards.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Cikatech Inc',
    period: 'Jun 2024 — Feb 2025 · Cambodia (Remote)',
    points: [
      'Optimized database queries and implemented caching, improving performance for an application serving 100K+ users.',
      'Designed new APIs and maintained large-scale backend systems using job queues for reliable background processing.',
      'Collaborated in a distributed Scrum team using Jira, and automated build and deploy workflows with GitHub Actions.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Future Innovation LTD',
    period: 'Apr 2023 — Jan 2024 · Bangladesh',
    points: [
      'Built subscription-based, multi-vendor e-commerce APIs serving 10K+ users.',
      'Integrated Stripe, PayPal, Binance and NowPayments alongside an internal wallet system.',
      'Refactored and optimized the codebase, improving API performance and maintainability.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Shataj Soft Ltd',
    period: 'Jul 2022 — Apr 2023 · Bangladesh',
    points: [
      'Delivered multiple Laravel websites for clients, building both backend logic and responsive frontends.',
      'Built fast-loading, mobile-friendly interfaces and streamlined checkout with payment gateway integrations.',
      'Improved backend query performance through database indexing.',
    ],
  },
]

export const projects = [
  {
    tag: 'Featured · SaaS',
    title: 'SaaS E-Commerce Builder',
    description: 'Multi-tenant store builder with isolated databases per tenant, automated subdomain and custom-domain provisioning in under a minute, a Superadmin panel, and an MCP integration for AI-assisted store management.',
    highlights: ['100+ stores onboarded within 2 weeks of launch', 'Payments, couriers, SMS, SEO, analytics & Meta Pixel'],
    stack: ['Laravel', 'Tenancy for Laravel', 'Vue.js', 'Inertia.js', 'FilamentPHP'],
    link: socials.github,
  },
  {
    tag: 'SaaS · POS',
    title: 'POS & Inventory Management SaaS',
    description: 'Subscription-based, single-database multi-tenant POS with tenant-scoped data isolation, covering sales, purchases, stock, damage and returns.',
    highlights: ['Ledgers, low-stock alerts & sales reports', 'Roles & permissions, expenses and promotional SMS'],
    stack: ['Laravel', 'FilamentPHP 3', 'Livewire', 'TailwindCSS', 'Alpine.js'],
    link: socials.github,
  },
  {
    tag: 'API · Marketplace',
    title: 'Multi-Vendor & Affiliate E-Commerce',
    description: 'Marketplace API supporting vendors, affiliates and users on one platform, with vendor dashboards, automated affiliate commissions, a service marketplace with ratings, and real-time support chat.',
    highlights: ['Role-based access & subscription validation', 'Deployed on VPS with CI/CD'],
    stack: ['Laravel', 'Sanctum', 'Spatie Permission', 'REST API'],
    link: socials.github,
  },
  {
    tag: 'E-Commerce · 10K+ users',
    title: 'Digital Product Platform',
    description: 'Subscription-based digital product store with card and crypto payments, instant post-purchase delivery via queued jobs, and automatic emails of new versions to every previous buyer.',
    highlights: ['PayPal, Stripe, Binance & NowPayments', 'Fully automated delivery & update workflow'],
    stack: ['Laravel', 'Queues', 'JavaScript', 'jQuery', 'Bootstrap'],
    link: socials.github,
  },
]

export const education = [
  {
    period: 'In progress',
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Northern University Bangladesh (NUB)',
  },
  {
    period: 'Jul 2019 — Jul 2023',
    degree: 'Diploma in Engineering — Computer Technology',
    school: 'Faridpur, Bangladesh',
  },
]
