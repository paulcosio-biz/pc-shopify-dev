'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Coffee, Shirt, Utensils, Armchair, Footprints, Package, TerminalSquare, ArrowRight } from 'lucide-react';
import { PROJECTS, INDUSTRY_LABELS, type Industry } from '@/data/projects';
import styles from './FeaturedWork.module.css';

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

export function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const allProjects = PROJECTS;
  const activeProject = allProjects[activeIndex];

  return (
    <section className={`section ${styles.section}`} aria-labelledby="featured-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Expertise &amp; Case Studies</span>
          <h2 id="featured-heading">
            Work that <span className="text-gradient">speaks</span>
          </h2>
          <p className={styles.sub}>
            A selection of e-commerce challenges I&apos;ve solved — click any industry to explore its highlights.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className={styles.showcaseGrid}>
          
          {/* Left: Directory list */}
          <div className={styles.list} role="tablist" aria-label="Industries index">
            {allProjects.map((project, i) => {
              const Icon = INDUSTRY_ICONS[project.industry] || Package;
              const isActive = i === activeIndex;

              return (
                <div key={project.slug} className={styles.rowWrapper}>
                  <button
                    className={`${styles.row} ${isActive ? styles.rowActive : ''}`}
                    onClick={() => setActiveIndex(i)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`project-panel-${project.slug}`}
                    id={`project-tab-${project.slug}`}
                  >
                    <div className={styles.rowContent}>
                      <div className={styles.rowLeft}>
                        <span className={`${styles.rowIcon} ${isActive ? styles.rowIconActive : ''}`}>
                          <Icon size={18} strokeWidth={2.5} />
                        </span>
                        <span className={styles.rowTitle}>{project.label}</span>
                      </div>
                      
                      {/* Monospace Platform Tag */}
                      <span className={styles.rowPlatformTag}>{project.tech[0]}</span>
                    </div>
                  </button>

                  {/* Inline Accordion Preview for Mobile ONLY */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className={styles.mobileAccordion}
                      >
                        <div className={styles.accordionInner}>
                          <p className={styles.cardTagline}>{project.tagline}</p>
                          
                          {/* Results Metrics grid */}
                          <div className={styles.resultsGrid}>
                            {project.results.map(r => (
                              <div key={r.label} className={styles.resultItem}>
                                <span className={styles.resultValue}>{r.value}</span>
                                <span className={styles.resultLabel}>{r.label}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech stack */}
                          <div className={styles.techStack}>
                            <span className={styles.techTitle}>Tech Stack:</span>
                            <div className={styles.techPills}>
                              {project.tech.slice(0, 4).map(t => (
                                <span key={t} className={styles.techPill}>{t}</span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <div className={styles.cardFooter}>
                            <Link href={`/work/${project.slug}`} className={styles.ctaButton}>
                              View Case Study <ArrowRight size={16} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Sneak Peek Preview Window (DESKTOP ONLY) */}
          <div className={styles.previewContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={`glass ${styles.previewCard}`}
                role="tabpanel"
                id={`project-panel-${activeProject.slug}`}
                aria-labelledby={`project-tab-${activeProject.slug}`}
              >
                {/* Background Glow */}
                <div className={styles.cardGlow} />

                {/* Top Badge */}
                <div className={styles.cardHeader}>
                  <span className={styles.cardIconBox}>
                    {(() => {
                      const ActiveIcon = INDUSTRY_ICONS[activeProject.industry] || Package;
                      return <ActiveIcon size={24} strokeWidth={2} />;
                    })()}
                  </span>
                  <span className={styles.cardBadge}>
                    {INDUSTRY_LABELS[activeProject.industry]}
                  </span>
                </div>

                {/* Desktop Real Content */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{activeProject.label}</h3>
                  <p className={styles.cardTagline}>{activeProject.tagline}</p>
                  
                  {/* Results Metrics grid */}
                  <div className={styles.resultsGrid}>
                    {activeProject.results.map(r => (
                      <div key={r.label} className={styles.resultItem}>
                        <span className={styles.resultValue}>{r.value}</span>
                        <span className={styles.resultLabel}>{r.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className={styles.techStack}>
                    <span className={styles.techTitle}>Tech Stack:</span>
                    <div className={styles.techPills}>
                      {activeProject.tech.slice(0, 4).map(t => (
                        <span key={t} className={styles.techPill}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className={styles.cardFooter}>
                  <Link href={`/work/${activeProject.slug}`} className={styles.ctaButton}>
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
