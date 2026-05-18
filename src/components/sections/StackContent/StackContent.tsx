'use client';

import { motion } from 'framer-motion';
import styles from './StackContent.module.css';

const STACK_DATA = [
  {
    category: 'The Shopify Ecosystem',
    items: [
      {
        name: 'Liquid & Theme Architecture',
        description: 'The foundation of Shopify storefronts. I use advanced Liquid techniques to build highly customisable, performant themes (like Dawn and Horizon) that merchants can easily manage via the Theme Editor. It is the gold standard for reliable, high-speed commerce.',
      },
      {
        name: 'Shopify Plus & B2B',
        description: 'For enterprise clients, I leverage Shopify Plus features like custom checkout scripts, B2B wholesale portals, and Shopify Functions to create complex, multi-tiered pricing and promotional logic that scales globally.',
      },
      {
        name: 'Hydrogen (Headless)',
        description: 'When a brand needs ultimate control over performance and omnichannel experiences, I use Shopify Hydrogen (Remix) and the Storefront API to decouple the frontend from the backend, delivering sub-second page loads.',
      },
    ],
  },
  {
    category: 'Frontend Engineering',
    items: [
      {
        name: 'Next.js & React',
        description: 'My go-to framework for creating dynamic web applications outside the standard Shopify theme engine. This very portfolio is built with Next.js App Router to leverage Server Components, ensuring incredibly fast initial loads and optimal SEO.',
      },
      {
        name: 'TypeScript',
        description: 'I use TypeScript strictly across all custom apps and headless builds. It catches errors during development and acts as living documentation for complex ecommerce data structures (like cart lines and product variants).',
      },
      {
        name: 'Framer Motion',
        description: 'A powerful animation library for React. I use it (as seen on this site) to craft micro-interactions, smooth page transitions, and scroll animations that elevate the user experience from standard to premium.',
      },
    ],
  },
  {
    category: 'Styling & Design Systems',
    items: [
      {
        name: 'CSS Modules & Vanilla CSS',
        description: 'For this portfolio, I opted for Vanilla CSS with CSS Modules and a custom token system (tokens.css) rather than Tailwind. This allowed me to create a highly specific, dual-theme architecture (Glassmorphism & Minimal Dark) with granular control over complex pseudo-element lighting effects.',
      },
      {
        name: 'Tailwind CSS',
        description: 'For rapid prototyping and standard headless projects (like Hydrogen builds), I frequently use Tailwind CSS for its utility-first approach and seamless integration with modern component libraries.',
      },
    ],
  },
  {
    category: 'Infrastructure & Tooling',
    items: [
      {
        name: 'Vercel',
        description: 'The platform hosting this portfolio. It provides seamless CI/CD, Edge Network caching, and edge-function capabilities like dynamically generating the OpenGraph social images you see when sharing my links.',
      },
      {
        name: 'GitHub',
        description: 'Essential for version control and collaborative development. I document my processes meticulously, using branching strategies and code reviews to ensure production stability. (Check out this portfolio\'s source code on my GitHub!)',
      },
      {
        name: 'Resend API',
        description: 'Used on this site to power the serverless contact form, reliably delivering emails directly to my inbox without needing a traditional backend server.',
      },
    ],
  },
];

export function StackContent() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="stack-heading">
      <div className="container">
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Tech Stack</span>
          <h1 id="stack-heading" className={styles.heading}>
            Tools of the <span className="text-gradient">Trade</span>
          </h1>
          <p className={styles.intro}>
            A deep dive into the technologies, frameworks, and architectural choices I use 
            to build high-converting ecommerce experiences and modern web applications.
          </p>
        </motion.div>

        <div className={styles.categories}>
          {STACK_DATA.map((group, groupIdx) => (
            <motion.div 
              key={group.category}
              className={styles.categoryBlock}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <h2 className={styles.categoryTitle}>{group.category}</h2>
              <div className={styles.itemsGrid}>
                {group.items.map((item, itemIdx) => (
                  <div key={item.name} className={`glass ${styles.itemCard}`}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
