export type Theme = 'glass' | 'minimal' | 'ember' | 'corporate';

export const THEMES: { id: Theme; label: string; description: string; emoji: string }[] = [
  { id: 'glass',     label: 'Glassmorphism', description: 'Frosted glass, premium dark',   emoji: '🪟' },
  { id: 'minimal',   label: 'Minimal Dark',  description: 'Clean lines, editorial',        emoji: '◼' },
  { id: 'ember',     label: 'Ember',          description: 'Cyberpunk, glowing embers',    emoji: '🔥' },
  { id: 'corporate', label: 'Corporate',      description: 'Warm professional tone',       emoji: '🏢' },
];

export type Industry =
  | 'fashion'
  | 'food'
  | 'apparel'
  | 'furniture'
  | 'footwear'
  | 'coffee'
  | 'essentials'
  | 'development';

export interface Project {
  slug: string;
  industry: Industry;
  label: string;
  tagline: string;
  challenge: string;
  solution: string;
  tech: string[];
  results: { label: string; value: string }[];
  featured: boolean;
  year: number;
}

export const PROJECTS: Project[] = [
  {
    slug: 'portfolio-case-study',
    industry: 'development',
    label: 'Development & Documentation',
    tagline: 'A high-performance developer portfolio built with Next.js & Framer Motion',
    challenge: 'Creating a portfolio that not only showcases past work but serves as a live demonstration of modern web development practices, high-fidelity design, and rigorous accessibility standards.',
    solution: 'Built a scalable Next.js App Router application featuring a custom dual-theme CSS architecture (Minimal Dark & Glassmorphism), a serverless contact system via Resend, and dynamic edge-generated OpenGraph images. All code is meticulously documented and publicly available on GitHub.',
    tech: ['Next.js 14', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Resend API', 'GitHub'],
    results: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'A11y Compliant', value: 'WCAG AA' },
      { label: 'Source Code', value: 'Public' },
    ],
    featured: true,
    year: 2026,
  },
  {
    slug: 'fashion-intimates',
    industry: 'fashion',
    label: 'Fashion & Intimates',
    tagline: 'Migrating a premium intimates brand to Shopify Plus',
    challenge:
      'A luxury lingerie brand with 5,000+ SKUs needed a full platform migration from Magento 2, retaining complex variant logic (size, colour, fit) and preserving 7 years of SEO equity.',
    solution:
      'Built a custom Shopify Plus theme using Liquid and JSON templates, implemented metafield-driven size guides, and scripted a Python-based image deduplication pipeline post-migration.',
    tech: ['Shopify Plus', 'Liquid', 'JSON Templates', 'Metafields', 'Python', 'Shopify REST API'],
    results: [
      { label: 'Faster page load', value: '62%' },
      { label: 'Conversion uplift', value: '+18%' },
      { label: 'SKUs migrated', value: '5,200+' },
    ],
    featured: true,
    year: 2024,
  },
  {
    slug: 'food-seasoning',
    industry: 'food',
    label: 'Food & Culinary Brands',
    tagline: 'Multi-market Shopify store for a global seasoning brand',
    challenge:
      'A global food brand needed a single Shopify storefront serving multiple markets (PH, MY, SG) with localized pricing, language, and regulatory compliance for food labelling.',
    solution:
      'Implemented Shopify Markets with market-specific metafields for ingredient labels, currency rounding rules, and locale-aware content blocks in a custom Liquid theme.',
    tech: ['Shopify Markets', 'Liquid', 'Metafields', 'Shopify Functions', 'GraphQL Admin API'],
    results: [
      { label: 'Markets launched', value: '3' },
      { label: 'Revenue growth (6mo)', value: '+34%' },
      { label: 'Setup time vs custom', value: '60% faster' },
    ],
    featured: true,
    year: 2024,
  },
  {
    slug: 'apparel',
    industry: 'apparel',
    label: 'Apparel & Streetwear',
    tagline: 'High-conversion Shopify storefront for a fast-fashion brand',
    challenge:
      'A clothing retailer launching online needed a fast, mobile-first Shopify store that could handle flash sales with hundreds of concurrent checkouts without slowdowns.',
    solution:
      'Developed an optimised Shopify Dawn-based custom theme with lazy-load image carousels, deferred JS loading, and Shopify Functions for automated discount stacking during sales.',
    tech: ['Shopify', 'Liquid', 'Dawn Theme', 'Shopify Functions', 'Performance Optimization'],
    results: [
      { label: 'Core Web Vitals LCP', value: '1.8s' },
      { label: 'Flash sale uptime', value: '100%' },
      { label: 'Mobile sessions', value: '78% share' },
    ],
    featured: false,
    year: 2023,
  },
  {
    slug: 'furniture-home',
    industry: 'furniture',
    label: 'Furniture & Home Living',
    tagline: 'B2B + B2C hybrid store for a modern furniture brand',
    challenge:
      'A furniture brand needed a Shopify store that served both retail consumers and trade/wholesale clients with different pricing tiers, MOQ rules, and order form experiences.',
    solution:
      'Built a custom Shopify B2B + retail hybrid using customer tags for price tier logic, a quote-request form with a Shopify webhook integration, and a custom product bundler app.',
    tech: ['Shopify Plus', 'B2B Features', 'Customer Tags', 'Liquid', 'Webhooks', 'Shopify App'],
    results: [
      { label: 'B2B order value avg', value: '+45%' },
      { label: 'Trade accounts onboarded', value: '120+' },
      { label: 'Manual quote time saved', value: '80%' },
    ],
    featured: true,
    year: 2024,
  },
  {
    slug: 'footwear',
    industry: 'footwear',
    label: 'Footwear & Accessories',
    tagline: 'Replatforming a national footwear chain to Shopify',
    challenge:
      'A well-known footwear brand with 50+ physical stores needed an omnichannel Shopify setup syncing in-store POS inventory with online stock in real time.',
    solution:
      "Deployed Shopify POS Pro across all locations, built a custom inventory sync integration using Shopify's Inventory API, and created a store-locator + click-and-collect feature.",
    tech: ['Shopify POS Pro', 'Inventory API', 'Shopify Plus', 'Click & Collect', 'Liquid', 'REST API'],
    results: [
      { label: 'POS locations live', value: '52' },
      { label: 'Inventory accuracy', value: '99.4%' },
      { label: 'Click & Collect rate', value: '22%' },
    ],
    featured: false,
    year: 2023,
  },
  {
    slug: 'coffee-beverages',
    industry: 'coffee',
    label: 'Coffee & Beverage Retail',
    tagline: 'Subscription + DTC Shopify store for a specialty coffee brand',
    challenge:
      'A specialty coffee retailer wanted to sell single-origin bags via one-time purchase and a subscription model, with grind-size and roast-preference personalisation per order.',
    solution:
      'Integrated Recharge Subscriptions with a custom Liquid UI for subscription management, built a product recommendation quiz, and optimised the checkout for sub-3-step purchase flow.',
    tech: ['Shopify', 'Recharge Subscriptions', 'Liquid', 'Product Quiz', 'Checkout Customization'],
    results: [
      { label: 'Subscription take-up', value: '41%' },
      { label: 'Repeat purchase rate', value: '+55%' },
      { label: 'Churn (mo 3)', value: '< 8%' },
    ],
    featured: false,
    year: 2024,
  },
  {
    slug: 'daily-essentials',
    industry: 'essentials',
    label: 'Everyday Essentials & FMCG',
    tagline: 'Fast-moving consumer goods store on Shopify with bundle logic',
    challenge:
      'An FMCG brand selling household essentials needed value-bundle mechanics, auto-replenishment reminders, and a streamlined repeat-purchase experience for busy consumers.',
    solution:
      'Created a Shopify store with custom bundle app logic (Shopify Functions), SMS replenishment reminders via Klaviyo, and a one-click reorder feature in the customer account portal.',
    tech: ['Shopify', 'Shopify Functions', 'Klaviyo', 'Customer Accounts', 'Bundle App', 'Liquid'],
    results: [
      { label: 'Bundle attach rate', value: '38%' },
      { label: 'SMS reorder click rate', value: '14%' },
      { label: 'AOV increase', value: '+29%' },
    ],
    featured: false,
    year: 2024,
  },
];

export const INDUSTRY_LABELS: Record<Industry, string> = {
  fashion:    'Fashion & Intimates',
  food:       'Food & Culinary',
  apparel:    'Apparel',
  furniture:  'Furniture & Home',
  footwear:   'Footwear',
  coffee:     'Coffee & Beverage',
  essentials: 'Daily Essentials',
  development:'Development',
};

export const SKILLS = [
  { 
    category: 'Shopify Platform', 
    items: [
      { name: 'Shopify Plus', icon: 'ShoppingBag' }, 
      { name: 'Shopify POS', icon: 'Store' }, 
      { name: 'Shopify Markets', icon: 'Globe' }, 
      { name: 'B2B Commerce', icon: 'Briefcase' }, 
      { name: 'Hydrogen (Headless)', icon: 'Cpu' }
    ] 
  },
  { 
    category: 'Theme Development', 
    items: [
      { name: 'Liquid', icon: 'Droplet' }, 
      { name: 'JSON Templates', icon: 'FileJson' }, 
      { name: 'Dawn / Craft / Horizon', icon: 'LayoutTemplate' }, 
      { name: 'Sections Everywhere', icon: 'LayoutDashboard' }, 
      { name: 'Theme Architecture', icon: 'Layers' }
    ] 
  },
  { 
    category: 'Frontend', 
    items: [
      { name: 'React', icon: 'Atom' }, 
      { name: 'TypeScript', icon: 'FileCode2' }, 
      { name: 'Next.js', icon: 'FastForward' }, 
      { name: 'CSS / Sass', icon: 'Paintbrush' }, 
      { name: 'Framer Motion', icon: 'Wand2' }
    ] 
  },
  { 
    category: 'Integrations', 
    items: [
      { name: 'Shopify Functions', icon: 'Settings2' }, 
      { name: 'GraphQL API', icon: 'Network' }, 
      { name: 'REST Admin API', icon: 'ServerCog' }, 
      { name: 'Webhooks', icon: 'Webhook' }, 
      { name: 'Klaviyo', icon: 'Mail' }, 
      { name: 'Recharge', icon: 'Repeat' }
    ] 
  },
  { 
    category: 'Tools & Workflow', 
    items: [
      { name: 'Git', icon: 'GitBranch' }, 
      { name: 'Shopify CLI', icon: 'Terminal' }, 
      { name: 'Python', icon: 'TerminalSquare' }, 
      { name: 'Figma', icon: 'PenTool' }, 
      { name: 'Postman', icon: 'Send' }, 
      { name: 'VS Code', icon: 'Code' }
    ] 
  },
];

export const SERVICES = [
  {
    icon: 'ShoppingBag',
    title: 'Custom Theme Development',
    description: 'Pixel-perfect Shopify themes built from scratch or customised from a base — optimised for conversion and Core Web Vitals.',
  },
  {
    icon: 'Zap',
    title: 'Platform Migration',
    description: 'Seamless replatforming from Magento, WooCommerce, or custom solutions to Shopify — preserving SEO, data, and UX.',
  },
  {
    icon: 'Globe',
    title: 'Shopify Markets & Internationalisation',
    description: 'Multi-currency, multi-language, and multi-market setups for brands expanding across Southeast Asia and beyond.',
  },
  {
    icon: 'Package',
    title: 'App & Integration Development',
    description: 'Custom Shopify apps, Shopify Functions, and third-party integrations (ERP, PIM, 3PL, payment gateways).',
  },
  {
    icon: 'BarChart3',
    title: 'CRO & Performance Optimisation',
    description: 'Conversion rate audits, A/B testing setups, Core Web Vitals improvements, and checkout flow optimisation.',
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Ongoing Retainer & Support',
    description: 'Monthly development support, priority bug fixes, and strategic Shopify roadmap planning for growing brands.',
  },
];
