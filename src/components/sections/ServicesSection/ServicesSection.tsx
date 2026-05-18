'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Globe, Package, BarChart3, MessageCircle } from 'lucide-react';
import { SERVICES } from '@/data/projects';
import styles from './ServicesSection.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShoppingBag:    <ShoppingBag size={24} />,
  Zap:            <Zap size={24} />,
  Globe:          <Globe size={24} />,
  Package:        <Package size={24} />,
  BarChart3:      <BarChart3 size={24} />,
  HeadphonesIcon: <MessageCircle size={24} />,
};

export function ServicesSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="services-heading">
      {/* Background Visuals */}
      <div className={styles.orbPurple} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
      
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">What I offer</span>
          <h2 id="services-heading">
            Services built for <span className="text-gradient">growth</span>
          </h2>
          <p className={styles.sub}>
            From a fresh Shopify launch to a complex Shopify Plus migration — I partner
            with brands to build commerce that converts and scales.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
