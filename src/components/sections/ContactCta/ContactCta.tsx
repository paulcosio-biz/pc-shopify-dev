'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import styles from './ContactCta.module.css';

export function ContactCta() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="cta-heading">
      <div className="container">
        <motion.div
          className={`glass ${styles.card}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.content}>
            <span className="section-label">Ready to start?</span>
            <h2 id="cta-heading">
              Let&apos;s build your next<br />
              <span className="text-gradient">Shopify store</span>
            </h2>
            <p className={styles.sub}>
              Whether you&apos;re launching a new brand or scaling an existing store —
              I&apos;d love to hear about your project and how I can help.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>
                <Mail size={18} />
                Get in Touch
              </Link>
              <Link href="/work" className={styles.secondary}>
                See My Work <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
