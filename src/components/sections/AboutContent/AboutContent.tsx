'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/data/projects';
import { Code2, TerminalSquare, ShoppingBag, Store, Globe, Briefcase, Cpu, Droplet, FileJson, LayoutTemplate, LayoutDashboard, Layers, Atom, FileCode2, FastForward, Paintbrush, Wand2, Settings2, Network, ServerCog, Webhook, Mail, Repeat, GitBranch, Terminal, PenTool, Send, Code } from 'lucide-react';
import styles from './AboutContent.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag size={16} />,
  Store: <Store size={16} />,
  Globe: <Globe size={16} />,
  Briefcase: <Briefcase size={16} />,
  Cpu: <Cpu size={16} />,
  Droplet: <Droplet size={16} />,
  FileJson: <FileJson size={16} />,
  LayoutTemplate: <LayoutTemplate size={16} />,
  LayoutDashboard: <LayoutDashboard size={16} />,
  Layers: <Layers size={16} />,
  Atom: <Atom size={16} />,
  FileCode2: <FileCode2 size={16} />,
  FastForward: <FastForward size={16} />,
  Paintbrush: <Paintbrush size={16} />,
  Wand2: <Wand2 size={16} />,
  Settings2: <Settings2 size={16} />,
  Network: <Network size={16} />,
  ServerCog: <ServerCog size={16} />,
  Webhook: <Webhook size={16} />,
  Mail: <Mail size={16} />,
  Repeat: <Repeat size={16} />,
  GitBranch: <GitBranch size={16} />,
  Terminal: <Terminal size={16} />,
  TerminalSquare: <TerminalSquare size={16} />,
  PenTool: <PenTool size={16} />,
  Send: <Send size={16} />,
  Code: <Code size={16} />,
};

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TIMELINE = [
  { year: '2026', event: 'Promoted to Shopify Development Lead at transcosmos Asia Philippines Inc. (May)' },
  { year: '2024', event: 'Shopify Plus partner certification & multi-market deployments across PH, MY & SG' },
  { year: '2023', event: 'Led 10+ Shopify migrations from Magento & WooCommerce for SEA brands' },
  { year: '2022', event: 'Began specialising in Shopify Liquid, custom theme architecture & headless' },
  { year: '2021', event: 'Deepened ecommerce expertise — Shopify Plus, B2B, and multi-market builds' },
  { year: '2020', event: 'Launched first Shopify store — started ecommerce development full time' },
];

export function AboutContent() {
  return (
    <div className={styles.wrapper}>
      {/* Background Graphic */}
      <div className={styles.orbFar} aria-hidden="true" />
      
      {/* ── Hero ── */}
      <section className={`section ${styles.hero}`} aria-labelledby="about-heading">
        <motion.div 
          className={styles.floatingGraphic}
          animate={{ y: [0, -20, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className={`glass ${styles.graphicCard}`}>
            <Code2 size={24} className={styles.graphicIcon} />
            <div className={styles.graphicText}>
              <span>Code Quality</span>
              <strong>100%</strong>
            </div>
          </div>
        </motion.div>

        <div className="container">
          <div className={styles.heroInner}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">About me</span>
              <h1 id="about-heading">
                Paul Cosio<br />
                <span className="text-gradient">Shopify Dev Lead</span>
              </h1>
              <p className={styles.bio}>
                I&apos;m a Shopify Development Lead based in the Philippines, currently
                driving ecommerce innovation at transcosmos Asia Philippines Inc. With
                hands-on experience building high-converting online stores across diverse
                industries — from premium lingerie to everyday FMCG — I partner with
                growing brands to design, develop, and optimise their Shopify presence.
              </p>
              <p className={styles.bio}>
                My approach combines strong leadership with deep technical expertise in Liquid,
                React, and the full Shopify ecosystem — from basic storefronts to complex
                Shopify Plus enterprise setups and headless Hydrogen builds.
              </p>
            </motion.div>

            {/* Avatar */}
            <motion.div
              className={`glass ${styles.avatar}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              aria-label="Paul Cosio profile"
            >
              {/* Real LinkedIn photo */}
              <div className={styles.avatarInner}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/paul-cosio.jpg"
                  alt="Paul Cosio"
                  className={styles.avatarPhoto}
                  width={160}
                  height={160}
                />
              </div>
              <div className={styles.avatarBadge}>
                <span className={styles.avatarDot} />
                Shopify Partner
              </div>
              <div className={styles.socialLinksRow}>
                <a
                  href="https://ph.linkedin.com/in/paulcosio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Connect on LinkedIn"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/paulcosio-biz/pc-shopify-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="View GitHub Repository"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className={`section ${styles.timeline}`} aria-labelledby="timeline-heading">
        <div className="container">
          <h2 id="timeline-heading" className={styles.sectionHeading}>
            Career <span className="text-gradient">timeline</span>
          </h2>
          <div className={styles.timelineList}>
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                className={`glass ${styles.timelineItem}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.timelineYear}>{item.year}</span>
                <p className={styles.timelineEvent}>{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className={`section ${styles.skills}`} aria-labelledby="about-skills-heading">
        <div className="container">
          <h2 id="about-skills-heading" className={styles.sectionHeading}>
            Technical <span className="text-gradient">directory</span>
          </h2>
          <div className={styles.skillsGrid}>
            {SKILLS.map((group, gi) => (
              <motion.div
                key={group.category}
                className={`glass ${styles.skillGroup}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08 }}
              >
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <div className={styles.groupItems}>
                  {group.items.map(item => (
                    <motion.div 
                      key={item.name} 
                      className={styles.badge}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                      <span className={styles.badgeIcon}>{ICON_MAP[item.icon]}</span>
                      <span className={styles.badgeText}>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
