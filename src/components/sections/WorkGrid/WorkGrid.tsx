'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Coffee, Shirt, Utensils, Armchair, Footprints, Package, TerminalSquare, ArrowRight } from 'lucide-react';
import { PROJECTS, INDUSTRY_LABELS, type Industry } from '@/data/projects';
import styles from './WorkGrid.module.css';

type Filter = 'all' | Industry;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all',        label: 'All Projects' },
  { id: 'fashion',    label: 'Fashion'      },
  { id: 'food',       label: 'Food'         },
  { id: 'apparel',    label: 'Apparel'      },
  { id: 'furniture',  label: 'Furniture'    },
  { id: 'footwear',   label: 'Footwear'     },
  { id: 'coffee',     label: 'Coffee'       },
  { id: 'essentials', label: 'Essentials'   },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit:   { opacity: 0, y: -12, scale: 0.97,
    transition: { duration: 0.18, ease: 'easeIn' }
  },
  hover:  { y: -4, transition: { duration: 0.2 } },
};


const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const MiniChart = () => {
  const bars = [30, 60, 45, 85, 65, 100];
  return (
    <div className={styles.miniChart} aria-hidden="true">
      {bars.map((h, i) => (
        <div key={i} className={styles.barTrack}>
          <motion.div 
            className={styles.barFill}
            variants={{
              hidden: { height: '15%' },
              show: { height: '15%' },
              hover: { height: `${h}%`, transition: { duration: 0.4, delay: i * 0.05, ease: 'easeOut' } }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export function WorkGrid() {
  const [active, setActive] = useState<Filter>('all');
  const [key, setKey] = useState(0);

  const filtered = active === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.industry === active);

  function handleFilter(id: Filter) {
    if (id === active) return;
    setActive(id);
    // Increment key forces AnimatePresence to remount the grid,
    // giving a clean exit → enter instead of layout-jumping
    setKey(k => k + 1);
  }

  return (
    <section className={`section ${styles.section}`} aria-labelledby="work-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Portfolio</span>
          <h1 id="work-heading">
            Projects & <span className="text-gradient">Case Studies</span>
          </h1>
          <p className={styles.sub}>
            Ecommerce challenges solved across 7 industries — all built on Shopify.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters} role="tablist" aria-label="Filter projects by industry">
          {FILTERS.map(f => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              className={`${styles.filter} ${active === f.id ? styles.filterActive : ''}`}
              onClick={() => handleFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid — key prop forces a clean remount on filter change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            className={styles.grid}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {filtered.map(project => (
              <motion.article
                key={project.slug}
                className={`glass ${styles.card}`}
                variants={cardVariants as any}
                whileHover="hover"
              >
                {/* Subtle dynamic background icon */}
                {(() => {
                  const Icon = INDUSTRY_ICONS[project.industry] || Package;
                  return <Icon size={220} className={styles.cardBgIcon} strokeWidth={0.5} aria-hidden="true" />;
                })()}

                <div className={styles.cardTop}>
                  <span className={styles.badge}>
                    {INDUSTRY_LABELS[project.industry]}
                  </span>
                  <span className={styles.year}>{project.year}</span>
                </div>

                <h2 className={styles.cardTitle}>{project.label}</h2>
                <p className={styles.cardTagline}>{project.tagline}</p>

                {/* Results row */}
                <div className={styles.results}>
                  <div className={styles.resultsMetrics}>
                    {project.results.map(r => (
                      <div key={r.label} className={styles.result}>
                        <span className={styles.resultValue}>{r.value}</span>
                        <span className={styles.resultLabel}>{r.label}</span>
                      </div>
                    ))}
                  </div>
                  <MiniChart />
                </div>

                {/* Tech */}
                <div className={styles.tech}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techPill}>{t}</span>
                  ))}
                </div>

                <Link href={`/work/${project.slug}`} className={styles.link}>
                  Full Case Study <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
