'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Code2, ShoppingBag, Zap, ShoppingCart, Activity } from 'lucide-react';
import styles from './HeroSection.module.css';

const STATS = [
  { value: '7+', label: 'Industries served' },
  { value: '50+', label: 'Shopify stores launched' },
  { value: '99%', label: 'Client satisfaction' },
];

const FLOATING_TAGS = [
  { icon: <Code2 size={14} />, text: 'Liquid Expert',    delay: 0    },
  { icon: <ShoppingBag size={14} />, text: 'Shopify Plus', delay: 0.3 },
  { icon: <Zap size={14} />, text: 'Hydrogen Ready',      delay: 0.6 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
};

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Background glow orbs */}
      <div className={styles.orbOrange} aria-hidden="true" />
      <div className={styles.orbFar} aria-hidden="true" />

      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Floating Graphics for Visual Engagement */}
      <motion.div 
        className={styles.floatingGraphic1}
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className={`glass ${styles.graphicCard}`}>
          <ShoppingCart size={24} className={styles.graphicIconAccent} />
          <div className={styles.graphicText}>
            <span>Conversion Rate</span>
            <strong>+24%</strong>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className={styles.floatingGraphic2}
        animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      >
        <div className={`glass ${styles.graphicCard}`}>
          <Activity size={24} className={styles.graphicIconSuccess} />
          <div className={styles.graphicText}>
            <span>Performance</span>
            <strong className={styles.textSuccess}>99/100</strong>
          </div>
        </div>
      </motion.div>

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className={styles.labelRow}>
            <span className="section-label">Available for projects</span>
            <span className={styles.statusDot} aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <motion.h1 id="hero-heading" variants={fadeUp} className={styles.heading}>
            Shopify
            <span className={styles.headingAccent}> Commerce</span>
            <br />
            <span className="text-gradient">Dev Lead</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p variants={fadeUp} className={styles.sub}>
            I build high-converting Shopify stores, custom themes, and headless
            experiences for brands across Southeast Asia — from fashion to food,
            furniture to footwear.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className={styles.ctas}>
            <Link href="/work" className={styles.ctaPrimary}>
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Let&apos;s Talk
            </Link>
          </motion.div>

          {/* Floating skill tags */}
          <motion.div variants={fadeUp} className={styles.tags}>
            {FLOATING_TAGS.map(tag => (
              <motion.span
                key={tag.text}
                className={`glass ${styles.tag}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + tag.delay, duration: 0.4 }}
              >
                {tag.icon}
                {tag.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats column */}
        <motion.aside
          className={styles.stats}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-label="Key statistics"
        >
          {STATS.map(stat => (
            <div key={stat.label} className={`glass ${styles.statCard}`}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.aside>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
