'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Terminal, ShieldAlert, Sparkles, Check, AlertCircle, ChevronUp, X
} from 'lucide-react';
import styles from './StackContent.module.css';

interface StackItem {
  id: string;
  name: string;
  category: 'foundation' | 'capability' | 'shield';
  description: string;
  benefit: string;
}

const STOREFRONT_FOUNDATIONS: StackItem[] = [
  {
    id: 'liquid_theme',
    name: 'Custom Liquid & Theme Architecture',
    category: 'foundation',
    description: 'Shopify\'s native theme engine. Bespoke modular Dawn development, giving content editors 100% native Theme Editor control with lightning-fast speeds.',
    benefit: 'Native Shopify Admin controls, zero server maintenance costs, fast loads.',
  },
  {
    id: 'hydrogen_headless',
    name: 'Hydrogen (Headless Remix)',
    category: 'foundation',
    description: 'Shopify\'s native headless framework. Decouples the frontend using React (Remix) hosted on global Oxygen CDN to yield supreme custom user design speeds.',
    benefit: 'Ultimate layout freedom, dynamic web app fluidity, optimal indexable SEO.',
  },
  {
    id: 'nextjs_headless',
    name: 'Next.js & Storefront API',
    category: 'foundation',
    description: 'Bespoke React storefront powered by Next.js Server Components and serverless edge functions, connecting directly to Shopify via Storefront APIs.',
    benefit: 'Sub-second initial loads, omnichannel catalog scaling, robust Vercel caching.',
  },
];

const ECOMMERCE_CAPABILITIES: StackItem[] = [
  {
    id: 'plus_b2b',
    name: 'Shopify Plus & B2B Wholesale',
    category: 'capability',
    description: 'Enterprise wholesale gates, corporate buyer profiles, customized checkout scripts, and multi-market localization structures.',
    benefit: 'Enterprise B2B billing and global expansion capabilities.',
  },
  {
    id: 'functions_promo',
    name: 'Shopify Functions & Promo Logic',
    category: 'capability',
    description: 'Custom discount algorithms, shipping overrides, and dynamic cart validation rules compiled directly into Shopify\'s backend.',
    benefit: 'Protects gross margins and automates complex promotional campaigns.',
  },
  {
    id: 'custom_apps',
    name: 'Custom Shopify Apps & APIs',
    category: 'capability',
    description: 'Tailored backend app portals bridging administrative ERPs, custom inventory managers, and third-party logistics databases.',
    benefit: 'Unifies warehouse distributions with native admin storefronts.',
  },
];

const SECURITY_SPEED_SHIELDS: StackItem[] = [
  {
    id: 'cdn_distribution',
    name: 'Shopify CDN & Edge Caching',
    category: 'shield',
    description: 'Distributed image compression, responsive caching policies, and serverless network routes optimized to defeat initial load latency.',
    benefit: 'Maximizes mobile conversions by removing layout bottlenecks.',
  },
  {
    id: 'checkout_security',
    name: 'Checkout Security & API Shields',
    category: 'shield',
    description: 'Serverless HoneyPot protections, IP rate-limiting, and sanitized inputs protecting custom application endpoints from transactional spam.',
    benefit: 'Blocks automated checkout bots and protects serverless endpoints.',
  },
];

export function StackContent() {
  const [activeFoundation, setActiveFoundation] = useState<string>('liquid_theme');
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>(['plus_b2b', 'cdn_distribution']);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);

  // Toggle Checkbox in Capabilities/Shields
  const handleToggleCapability = (id: string) => {
    setSelectedCapabilities(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  // Evaluate Stack Selection (Architect Verdict Compiler)
  const evaluateStack = () => {
    const isLiquid = activeFoundation === 'liquid_theme';
    const isHydrogen = activeFoundation === 'hydrogen_headless';
    const isNext = activeFoundation === 'nextjs_headless';
    
    const hasPlus = selectedCapabilities.includes('plus_b2b');
    const hasFunctions = selectedCapabilities.includes('functions_promo');
    const hasApps = selectedCapabilities.includes('custom_apps');
    const hasCdn = selectedCapabilities.includes('cdn_distribution');
    const hasSecurity = selectedCapabilities.includes('checkout_security');

    // Calculate score dynamically
    let baseScore = 90;
    if (isHydrogen) baseScore = 97;
    if (isNext) baseScore = 98;

    let scoreBoost = 0;
    if (hasCdn) scoreBoost += 2;
    if (hasSecurity) scoreBoost += 1;
    if (hasPlus) scoreBoost += 2;
    if (hasFunctions) scoreBoost += 2;
    if (hasApps) scoreBoost += 1;

    const finalScore = Math.min(baseScore + scoreBoost, 100);

    // Determine segments & verdicts
    let title = '';
    let segment = '';
    let verdict = '';
    let badge = '⚙️ CONFIGURATION COMPILED';

    if (isLiquid) {
      title = 'Enterprise Custom Liquid Theme';
      segment = 'High-Growth DTC & Enterprise B2B';
      badge = '🚀 HIGH PERFORMANCE & NATIVE EDITING';
      
      let extrasText = '';
      if (hasPlus) extrasText += ' leveraging advanced Shopify Plus B2B wholesale portals and custom checkout scripts.';
      if (hasFunctions) extrasText += ' Dynamic cart validation rules and discount logic are natively layered.';
      if (hasApps) extrasText += ' Tailored inventory integrations synchronize catalogs seamlessly.';
      
      verdict = `A highly optimized, custom theme architecture built cleanly on Dawn.${extrasText} Perfect for merchants prioritizing full, drag-and-drop Theme Customizer control, bulletproof reliability, and zero ongoing server maintenance.`;
    } else if (isHydrogen) {
      title = 'Headless Hydrogen (Remix) Storefront';
      segment = 'Omnichannel Headless E-commerce';
      badge = '⚡ HEADLESS EXCELLENCE & EXTREME SPEED';

      let extrasText = '';
      if (hasPlus) extrasText += ' Powered by Shopify Plus B2B wholesale parameters.';
      if (hasCdn) extrasText += ' Leverages edge CDN caching for global routing speed.';
      
      verdict = `The gold standard for high-performance commerce. Decouples the frontend using Shopify Hydrogen (Remix) hosted on global Oxygen CDN servers.${extrasText} Yields sub-second loading speeds, flawless design fluidity, and high-performance React component scalability.`;
    } else {
      title = 'Bespoke Next.js Headless Architecture';
      segment = 'Omnichannel & Modern Headless Retail';
      badge = '⚡ LIGHTNING SPEED & SEO SUPERIORITY';

      let extrasText = '';
      if (hasSecurity) extrasText += ' Dynamic serverless shields rate-limit endpoints against bots.';
      if (hasApps) extrasText += ' Connects customized administrative sync portals.';

      verdict = `Enterprise-grade headless stack. Built with Next.js App Router and React Server Components connecting to Shopify via the Storefront API.${extrasText} Yields exceptional SEO optimization, blazing-fast edge cache distributions, and unlimited design autonomy.`;
    }

    return {
      title,
      score: finalScore,
      badge,
      segment,
      verdict
    };
  };

  const stackEvaluation = evaluateStack();

  return (
    <section className={`section ${styles.section}`} aria-labelledby="stack-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className="section-label">Interactive Sandbox Terminal</span>
          <h2 id="stack-heading">
            Tools of the <span className="text-gradient">Trade</span>
          </h2>
          <p className={styles.intro}>
            Configure and compile your ideal Shopify architecture. Select a foundation block and layer optional enterprise capabilities below.
          </p>
        </div>

        {/* Dynamic Display Panel */}
        <div className={styles.displayPanel}>
          <div className={styles.configuratorGrid}>
            
            {/* Left: Building Blocks Selector */}
            <div className={styles.blocksColumn}>
              
              {/* Category 1: Storefront Foundation (RADIO BUTTONS) */}
              <div className={styles.categoryBlock}>
                <div className={styles.columnTitleBox}>
                  <ShoppingBag size={16} className="text-accent" />
                  <h3>1. Storefront Foundation</h3>
                  <span className={styles.typeHint}>Select One</span>
                </div>
                <div className={styles.checkboxGrid}>
                  {STOREFRONT_FOUNDATIONS.map(item => {
                    const isSelected = activeFoundation === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveFoundation(item.id)}
                        className={`${styles.checkboxCard} ${isSelected ? styles.checkboxActive : ''}`}
                      >
                        {/* Circular Radio Indicator */}
                        <div className={`${styles.radioIndicator} ${isSelected ? styles.radioIndicatorActive : ''}`}>
                          <div className={styles.radioDot} />
                        </div>
                        <div className={styles.checkContent}>
                          <span className={styles.checkName}>{item.name}</span>
                          <span className={styles.checkDesc}>{item.description}</span>
                          <span className={styles.benefitHint}>Benefit: {item.benefit}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category 2: E-Commerce Capabilities (CHECKBOXES) */}
              <div className={styles.categoryBlock}>
                <div className={styles.columnTitleBox}>
                  <Terminal size={16} className="text-accent" />
                  <h3>2. E-Commerce Capabilities</h3>
                  <span className={styles.typeHint}>Select Multiple</span>
                </div>
                <div className={styles.checkboxGrid}>
                  {ECOMMERCE_CAPABILITIES.map(item => {
                    const isSelected = selectedCapabilities.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleToggleCapability(item.id)}
                        className={`${styles.checkboxCard} ${isSelected ? styles.checkboxActive : ''}`}
                      >
                        {/* Square Checkbox Indicator */}
                        <div className={`${styles.checkIndicator} ${isSelected ? styles.checkIndicatorActive : ''}`}>
                          <Check size={12} className={styles.checkMark} />
                        </div>
                        <div className={styles.checkContent}>
                          <span className={styles.checkName}>{item.name}</span>
                          <span className={styles.checkDesc}>{item.description}</span>
                          <span className={styles.benefitHint}>Benefit: {item.benefit}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category 3: Security & Speed Shields (CHECKBOXES) */}
              <div className={styles.categoryBlock}>
                <div className={styles.columnTitleBox}>
                  <ShieldAlert size={16} className="text-accent" />
                  <h3>3. Security &amp; Speed Shields</h3>
                  <span className={styles.typeHint}>Select Multiple</span>
                </div>
                <div className={styles.checkboxGrid}>
                  {SECURITY_SPEED_SHIELDS.map(item => {
                    const isSelected = selectedCapabilities.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleToggleCapability(item.id)}
                        className={`${styles.checkboxCard} ${isSelected ? styles.checkboxActive : ''}`}
                      >
                        {/* Square Checkbox Indicator */}
                        <div className={`${styles.checkIndicator} ${isSelected ? styles.checkIndicatorActive : ''}`}>
                          <Check size={12} className={styles.checkMark} />
                        </div>
                        <div className={styles.checkContent}>
                          <span className={styles.checkName}>{item.name}</span>
                          <span className={styles.checkDesc}>{item.description}</span>
                          <span className={styles.benefitHint}>Benefit: {item.benefit}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right: Architecture Advisor Dashboard (Desktop Only Viewport) */}
            <div className={styles.dashboardContainer}>
              <div className={`glass ${styles.advisorDashboard}`}>
                
                {/* Background Glow */}
                <div className={styles.cardGlow} />

                <div className={styles.dashboardHeader}>
                  <span className={styles.dashboardStatus}>{stackEvaluation.badge}</span>
                  <h3 className={styles.dashboardTitle}>{stackEvaluation.title}</h3>
                </div>

                <div className={styles.metricsBox}>
                  <div className={styles.dialMetric}>
                    <div className={styles.dialCircle}>
                      {/* Circular SVG Gauge */}
                      <svg className={styles.gaugeSvg} viewBox="0 0 100 100">
                        <circle className={styles.gaugeBg} cx="50" cy="50" r="40" />
                        <motion.circle 
                          className={styles.gaugeValue} 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          strokeDasharray="251.2"
                          strokeDashoffset={251.2 - (251.2 * stackEvaluation.score) / 100}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                      </svg>
                      <span className={styles.gaugeText}>{stackEvaluation.score}%</span>
                    </div>
                    <span className={styles.metricLabel}>Lighthouse Rating</span>
                  </div>

                  <div className={styles.segmentInfo}>
                    <span className={styles.segmentLabel}>BEST SUITED FOR:</span>
                    <span className={styles.segmentValue}>{stackEvaluation.segment}</span>
                  </div>
                </div>

                <div className={styles.dashboardBody}>
                  <span className={styles.verdictLabel}>ARCHITECT&apos;S VERDICT:</span>
                  <p className={styles.verdictText}>{stackEvaluation.verdict}</p>
                </div>

                <div className={styles.dashboardFooter}>
                  <div className={styles.integrationHint}>
                    <AlertCircle size={14} />
                    <span>Verdicts are compiled dynamically based on active stacks.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── Mobile Sticky Bottom Summary Bar ────────────────────── */}
        <div 
          className={`glass ${styles.mobileSummaryBar}`} 
          onClick={() => setIsMobileDrawerOpen(true)}
        >
          <div className={styles.mobileSummaryLeft}>
            {/* Small Glowing Score Indicator */}
            <div className={styles.miniDial}>
              <svg viewBox="0 0 100 100" className={styles.miniGaugeSvg}>
                <circle cx="50" cy="50" r="40" className={styles.miniGaugeBg} />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  className={styles.miniGaugeValue} 
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * stackEvaluation.score) / 100}
                />
              </svg>
              <span className={styles.miniGaugeText}>{stackEvaluation.score}%</span>
            </div>
            <div className={styles.mobileSummaryText}>
              <span className={styles.mobileSummaryTitle}>{stackEvaluation.title}</span>
              <span className={styles.mobileSummarySegment}>{stackEvaluation.segment}</span>
            </div>
          </div>
          <button className={styles.mobileSummaryExpandBtn}>
            <span className={styles.expandLabel}>Verdict</span>
            <ChevronUp size={16} className={styles.chevronIcon} />
          </button>
        </div>

        {/* ── Mobile Slide-Up Drawer Overlay Sheet ────────────────── */}
        <AnimatePresence>
          {isMobileDrawerOpen && (
            <>
              {/* Backdrop Shield */}
              <motion.div 
                className={styles.drawerBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileDrawerOpen(false)}
              />
              
              {/* slide up sheet panel */}
              <motion.div 
                className={`glass ${styles.mobileDrawerPanel}`}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              >
                {/* Drag / Touch Handle indicator */}
                <div className={styles.drawerHandle} onClick={() => setIsMobileDrawerOpen(false)} />
                
                <div className={styles.drawerHeaderBox}>
                  <div className={styles.drawerTitleRow}>
                    <span className={styles.dashboardStatus}>{stackEvaluation.badge}</span>
                    <button 
                      className={styles.drawerCloseBtn} 
                      onClick={() => setIsMobileDrawerOpen(false)}
                      aria-label="Close details"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <h3 className={styles.drawerPanelTitle}>{stackEvaluation.title}</h3>
                </div>

                <div className={styles.drawerBodyScroll}>
                  
                  {/* Performance Indicators Grid */}
                  <div className={styles.metricsBox}>
                    <div className={styles.dialMetric}>
                      <div className={styles.dialCircle}>
                        <svg className={styles.gaugeSvg} viewBox="0 0 100 100">
                          <circle className={styles.gaugeBg} cx="50" cy="50" r="40" />
                          <circle 
                            className={styles.gaugeValue} 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            strokeDasharray="251.2"
                            strokeDashoffset={251.2 - (251.2 * stackEvaluation.score) / 100}
                          />
                        </svg>
                        <span className={styles.gaugeText}>{stackEvaluation.score}%</span>
                      </div>
                      <span className={styles.metricLabel}>Lighthouse Rating</span>
                    </div>

                    <div className={styles.segmentInfo}>
                      <span className={styles.segmentLabel}>BEST SUITED FOR:</span>
                      <span className={styles.segmentValue}>{stackEvaluation.segment}</span>
                    </div>
                  </div>

                  {/* Verdict Paragraph */}
                  <div className={styles.dashboardBody} style={{ marginTop: 'var(--space-6)' }}>
                    <span className={styles.verdictLabel}>ARCHITECT&apos;S VERDICT:</span>
                    <p className={styles.verdictText}>{stackEvaluation.verdict}</p>
                  </div>

                  <div className={styles.drawerFooterHint}>
                    <AlertCircle size={14} />
                    <span>Verdicts are compiled dynamically based on active stacks.</span>
                  </div>

                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
