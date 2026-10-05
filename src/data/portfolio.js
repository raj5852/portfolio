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
    link: 'https://storabd.com',
    liveLink: 'https://storabd.com',
    githubLink: 'https://github.com/raj5852/multi-tenant-multi-database-ecommerce',
    images: ['/desi-saas/1.webp', '/desi-saas/2.webp', '/desi-saas/3.webp', '/desi-saas/4.webp'],
    features: [
      'Isolated database per tenant using Tenancy for Laravel',
      'Automated subdomain and custom-domain provisioning in under a minute',
      'Superadmin panel for managing tenants, plans and stores',
      'MCP integration so merchants can manage their stores through ChatGPT and Claude',
      'Payments, couriers, SMS, SEO, analytics and Meta Pixel integrations',
    ],
  },
  {
    tag: 'SaaS · POS',
    title: 'POS & Inventory Management SaaS',
    description: 'Subscription-based, single-database multi-tenant POS with tenant-scoped data isolation, covering sales, purchases, stock, damage and returns.',
    highlights: ['Ledgers, low-stock alerts & sales reports', 'Roles & permissions, expenses and promotional SMS'],
    stack: ['Laravel', 'FilamentPHP 3', 'Livewire', 'TailwindCSS', 'Alpine.js'],
    link: 'https://pos.esolutionbangla.com/user/login',
    liveLink: 'https://pos.esolutionbangla.com/user/login',
    githubLink: 'https://github.com/raj5852/laravel-filamentphp-stock-management',
    images: ['/pos/1.webp', '/pos/2.webp', '/pos/3.webp', '/pos/4.webp'],
    features: [
      'Single-database multi-tenancy with tenant-scoped data isolation',
      'Sales, purchases, stock, damage and returns management',
      'Customer and supplier ledgers with sales reports',
      'Low-stock alerts, expense tracking and promotional SMS',
      'Role and permission management per tenant',
    ],
  },
  {
    tag: 'API · Marketplace',
    title: 'Multi-Vendor & Affiliate E-Commerce',
    description: 'Marketplace API supporting vendors, affiliates and users on one platform, with vendor dashboards, automated affiliate commissions, a service marketplace with ratings, and real-time support chat.',
    highlights: ['Role-based access & subscription validation', 'Deployed on VPS with CI/CD'],
    stack: ['Laravel', 'Sanctum', 'Spatie Permission', 'REST API'],
    link: 'https://github.com/raj5852/backend-multivendor-services',
    liveLink: '',
    githubLink: 'https://github.com/raj5852/backend-multivendor-services',
    images: ['/api-sos/1.webp'],
    features: [
      'Vendors, affiliates and users served from one platform',
      'Vendor dashboards and automated affiliate commissions',
      'Service marketplace with ratings',
      'Real-time support chat',
      'Role-based access and subscription validation',
      'Deployed on VPS with a CI/CD pipeline',
    ],
  },
  {
    tag: 'E-Commerce · 10K+ users',
    title: 'Digital Product Platform',
    description: 'Subscription-based digital product store with card and crypto payments, instant post-purchase delivery via queued jobs, and automatic emails of new versions to every previous buyer.',
    highlights: ['PayPal, Stripe, Binance & NowPayments', 'Fully automated delivery & update workflow'],
    stack: ['Laravel', 'Queues', 'JavaScript', 'jQuery', 'Bootstrap'],
    link: 'https://fintechea.com',
    liveLink: 'https://fintechea.com',
    githubLink: 'https://github.com/raj5852/fintech-project',
    images: ['/degital-product/1.webp', '/degital-product/2.webp'],
    features: [
      'Card and crypto payments via PayPal, Stripe, Binance and NowPayments',
      'Instant post-purchase delivery through queued jobs',
      'New product versions emailed automatically to every previous buyer',
      'Subscription-based access serving 10K+ users',
    ],
  },
  {
    tag: 'SaaS · Farm Management',
    title: 'Dairy Farm Management SaaS',
    description: 'Multi-tenant, single-database SaaS that helps dairy farm owners run daily operations from one dashboard — milk collection and sales, feed stock, cow health records, finances, employees and invoicing.',
    highlights: ['Milk, feed, cow health & finances in one dashboard', 'Custom FilamentPHP panels with light & dark mode'],
    stack: ['Laravel', 'FilamentPHP', 'Multi-Tenancy', 'MySQL'],
    link: 'https://dairy.esolutionbangla.com/demo',
    liveLink: 'https://dairy.esolutionbangla.com/demo',
    githubLink: 'https://github.com/raj5852/laravel-filamentphp-dairy-farm',
    images: ['/dairy/1.webp', '/dairy/2.webp', '/dairy/3.webp'],
    features: [
      'Milk collection and daily milk entries',
      'Milk sale tracking',
      'Income and expense management',
      'Feed stock tracking, feed purchase and distribution',
      'Cow records and cow categories',
      'Pregnancy, vaccine and treatment records',
      'User roles and permissions',
      'Employee management',
      'Invoice system',
      'Dashboard analytics and reports',
      'Custom FilamentPHP panels',
      'Multi-tenant SaaS on a single database with an optimized relational structure',
      'Clean UI with light and dark mode',
    ],
  },
  {
    tag: 'SaaS · Backend Developer',
    title: 'Tjar — E-Commerce SaaS Platform',
    description: 'Backend developer on Tjar, a Saudi Arabia-focused e-commerce SaaS platform that lets businesses create and manage their own online stores. Built and maintained production backend features, integrated the Tabby payment gateway, and improved performance and reliability across the platform.',
    highlights: ['Tabby payment gateway integration', 'Query & application-logic optimization in production'],
    stack: ['Laravel', 'PHP', 'REST API', 'Tabby', 'MySQL'],
    link: 'https://tjar.sa/',
    liveLink: 'https://tjar.sa/',
    images: ['/tjar/1.webp'],
    featuresTitle: 'Key contributions',
    features: [
      'Developed and maintained backend functionality for the e-commerce platform using Laravel and PHP',
      'Integrated the Tabby payment gateway, handling payment flows and API communication on the backend',
      'Optimized database queries and application logic to improve performance and reliability',
      'Diagnosed and resolved production issues by analyzing API requests, database operations and application behavior',
      'Worked closely with frontend developers to define API contracts, troubleshoot integrations and keep frontend–backend communication smooth',
      'Took part in technical discussions to clarify requirements and shape the implementation of new features',
      'Built and maintained REST APIs and third-party service integrations in a live e-commerce environment',
    ],
  },
  {
    tag: 'AI Automation · ~96% cost cut',
    title: 'AI Sales & Support Agent for Messenger',
    description: 'An AI agent on Facebook Messenger that replaced human customer support and runs the entire customer journey on its own — from understanding the first question to recommending a product, collecting and verifying payment, and triggering delivery. Support costs dropped from ৳15,000 to ৳500–600, a reduction of about 96%.',
    highlights: ['Support cost: ৳15,000 → ৳500–600 (~96% lower)', 'Query to delivery with no human intervention'],
    stack: ['n8n', 'ChatGPT API', 'DeepSeek API', 'Messenger'],
    images: ['/n8n/1.webp'],
    features: [
      'Understands customer intent from natural Messenger conversations',
      'Provides complete product information on request',
      'Recommends the right product based on what the customer wants',
      'Closes the sale inside the chat',
      'Collects payment and verifies it automatically',
      'Triggers product delivery once payment is confirmed',
      'Sends a thank-you message to complete the journey',
      'Messenger workflows orchestrated with n8n',
      'Combines ChatGPT for language understanding with DeepSeek for cost-efficient inference',
    ],
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
