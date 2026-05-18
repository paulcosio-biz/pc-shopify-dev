'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, INDUSTRY_LABELS } from '@/data/projects';
import styles from './FeaturedWork.module.css';

const featured = PROJECTS.filter(p => p.featured);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
};

export function FeaturedWork() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="featured-heading">
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={fadeUp} className="section-label">Selected Projects</motion.span>
          <motion.h2 variants={fadeUp} id="featured-heading">
            Work that <span className="text-gradient">speaks</span>
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.sub}>
            A selection of ecommerce challenges I&apos;ve solved — across industries,
            platforms, and scale.
          </motion.p>
        </motion.div>

        {/* Project cards */}
        <div className={styles.grid}>
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* Industry badge */}
              <span className={styles.badge}>
                {INDUSTRY_LABELS[project.industry]}
              </span>

              <h3 className={styles.cardTitle}>{project.label}</h3>
              <p className={styles.cardTagline}>{project.tagline}</p>

              {/* Results */}
              <div className={styles.results}>
                {project.results.slice(0, 2).map(r => (
                  <div key={r.label} className={styles.result}>
                    <span className={styles.resultValue}>{r.value}</span>
                    <span className={styles.resultLabel}>{r.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div className={styles.tech}>
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className={styles.techPill}>{t}</span>
                ))}
              </div>

              <Link href={`/work/${project.slug}`} className={styles.cardLink}>
                View Case Study <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/work" className={styles.viewAllBtn}>
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
