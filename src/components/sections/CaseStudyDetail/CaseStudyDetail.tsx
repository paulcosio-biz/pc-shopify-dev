'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Coffee, Shirt, Utensils, Armchair, Footprints, Package, TerminalSquare } from 'lucide-react';
import { type Project, INDUSTRY_LABELS, type Industry } from '@/data/projects';
import styles from './CaseStudyDetail.module.css';

interface Props {
  project: Project;
}

const INDUSTRY_ICONS: Record<Industry, React.ElementType> = {
  coffee: Coffee,
  fashion: Shirt,
  apparel: Shirt,
  food: Utensils,
  furniture: Armchair,
  footwear: Footprints,
  essentials: Package,
  development: TerminalSquare,
};

const MetricsChart = () => {
  const bars = [40, 70, 50, 90, 65, 100, 80];
  return (
    <div className={styles.metricsChart} aria-hidden="true">
      {bars.map((h, i) => (
        <div key={i} className={styles.metricTrack}>
          <motion.div 
            className={styles.metricFill}
            initial={{ height: '0%' }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      ))}
    </div>
  );
};

export function CaseStudyDetail({ project }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yMockup = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <article ref={ref} className={`section ${styles.article}`} aria-label={`Case study: ${project.label}`}>
      <div className="container">
        {/* Back link */}
        <Link href="/work" className={styles.back}>
          <ArrowLeft size={16} /> All Projects
        </Link>

        {/* Dynamic Atmospheric Background Industry Icon */}
        {(() => {
          const Icon = INDUSTRY_ICONS[project.industry] || Package;
          return (
            <div className={styles.pageBgIconContainer} aria-hidden="true">
              <Icon size={460} className={styles.pageBgIcon} strokeWidth={0.5} />
            </div>
          );
        })()}

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
          <motion.div 
            className={styles.stats}
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
          >
            {project.results.map(r => (
              <motion.div 
                key={r.label} 
                className={`glass ${styles.stat}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
              >
                <span className={styles.statValue}>{r.value}</span>
                <span className={styles.statLabel}>{r.label}</span>
              </motion.div>
            ))}


          </motion.div>
        </motion.header>

        {/* Body */}
        <div className={styles.body}>
          <motion.div className={styles.orbFar} style={{ y: yBackground }} aria-hidden="true" />
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
              The Solution & Results
            </h2>
            <div className={styles.solutionGrid}>
              <p className={styles.blockText}>{project.solution}</p>
              <MetricsChart />
            </div>
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
