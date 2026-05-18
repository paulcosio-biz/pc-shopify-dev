'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/data/projects';
import styles from './SkillsBar.module.css';

export function SkillsBar() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="skills-heading">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Expertise</span>
          <h2 id="skills-heading">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              className={`glass ${styles.group}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <ul className={styles.items} role="list">
                {group.items.map(item => (
                  <li key={item} className={styles.item}>
                    <span className={styles.itemDot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
