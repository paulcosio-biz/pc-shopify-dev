'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { type Project, INDUSTRY_LABELS } from '@/data/projects';
import styles from './CaseStudyDetail.module.css';

interface Props {
  project: Project;
}

export function CaseStudyDetail({ project }: Props) {
  return (
    <article className={`section ${styles.article}`} aria-label={`Case study: ${project.label}`}>
      <div className="container">
        {/* Back link */}
        <Link href="/work" className={styles.back}>
          <ArrowLeft size={16} /> All Projects
        </Link>

        {/* Hero */}
        <motion.header
          className={styles.hero}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>{INDUSTRY_LABELS[project.industry]}</span>
          <h1 className={styles.title}>{project.label}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          {/* Stats */}
          <div className={styles.stats}>
            {project.results.map(r => (
              <div key={r.label} className={`glass ${styles.stat}`}>
                <span className={styles.statValue}>{r.value}</span>
                <span className={styles.statLabel}>{r.label}</span>
              </div>
            ))}
          </div>
        </motion.header>

        {/* Body */}
        <div className={styles.body}>
          {/* Challenge */}
          <motion.section
            className={`glass ${styles.block}`}
            aria-labelledby="challenge-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="challenge-heading" className={styles.blockTitle}>
              <span className={styles.blockNum}>01</span>
              The Challenge
            </h2>
            <p className={styles.blockText}>{project.challenge}</p>
          </motion.section>

          {/* Solution */}
          <motion.section
            className={`glass ${styles.block}`}
            aria-labelledby="solution-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 id="solution-heading" className={styles.blockTitle}>
              <span className={styles.blockNum}>02</span>
              The Solution
            </h2>
            <p className={styles.blockText}>{project.solution}</p>
          </motion.section>

          {/* Tech stack */}
          <motion.section
            className={`glass ${styles.block}`}
            aria-labelledby="tech-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 id="tech-heading" className={styles.blockTitle}>
              <span className={styles.blockNum}>03</span>
              Technologies Used
            </h2>
            <ul className={styles.techList} role="list">
              {project.tech.map(t => (
                <li key={t} className={styles.techItem}>
                  <CheckCircle2 size={14} className={styles.techIcon} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Next project */}
        <div className={styles.nav}>
          <Link href="/work" className={styles.navBtn}>
            ← Back to all projects
          </Link>
          <Link href="/contact" className={styles.contactBtn}>
            Work with me on a similar project →
          </Link>
        </div>
      </div>
    </article>
  );
}
