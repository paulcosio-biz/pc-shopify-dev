'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/data/projects';
import styles from './AboutContent.module.css';

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
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
      {/* ── Hero ── */}
      <section className={`section ${styles.hero}`} aria-labelledby="about-heading">
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
              <a
                href="https://ph.linkedin.com/in/paulcosio"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
                aria-label="Connect on LinkedIn"
              >
                <LinkedInIcon />
                linkedin.com/in/paulcosio
              </a>
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
            Skills & <span className="text-gradient">toolset</span>
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
                <ul role="list" className={styles.groupItems}>
                  {group.items.map(item => (
                    <li key={item} className={styles.groupItem}>
                      <span className={styles.dot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
