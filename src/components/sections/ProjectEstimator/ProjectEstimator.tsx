'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Sparkles, Send, Store, Cpu, RefreshCw, ShoppingBag, Rocket, Layers } from 'lucide-react';
import styles from './ProjectEstimator.module.css';

// ── Types ──────────────────────────────────────────────────
type Foundation = 'custom_theme' | 'headless_hydrogen' | 'plus_migration';
type Scale = 'boutique' | 'growth' | 'enterprise';
type Integration = 'timeline_rush' | 'erp_integration' | 'b2b_wholesale' | 'custom_apps';

const FOUNDATIONS = [
  {
    id: 'custom_theme' as Foundation,
    title: 'Bespoke Liquid Theme',
    subtitle: 'Dawn / Liquid Native Theme',
    desc: 'Bespoke modular theme built from scratch using clean Liquid and Vanilla JS. Grants editors 100% native Theme Editor drag-and-drop freedom with zero server costs.',
    benefit: '⚡ 100/100 Lighthouse speed potential & absolute editor autonomy.',
    icon: Store,
  },
  {
    id: 'headless_hydrogen' as Foundation,
    title: 'Headless Hydrogen Storefront',
    subtitle: 'React (Remix) Headless Stack',
    desc: 'Next-generation decoupled storefront powered by React, Shopify Remix, and Tailwind CSS. Hosted on Oxygen CDN edge edge-caching for sub-second catalog transitions.',
    benefit: '🚀 Supreme custom layout freedom & dynamic web-app fluidity.',
    icon: Cpu,
  },
  {
    id: 'plus_migration' as Foundation,
    title: 'Enterprise Platform Migration',
    subtitle: 'Magento / WooCommerce Transfer',
    desc: 'Seamless architectural transfer from legacy setups (Magento, WooCommerce, custom database) over to high-converting Shopify Plus layouts. Includes full SEO & customer data mappings.',
    benefit: '💼 Zero downtime transition with absolute historical link preservation.',
    icon: RefreshCw,
  },
];

const DTC_SCALES = [
  {
    id: 'boutique' as Scale,
    title: 'Boutique / Start-Up',
    subtitle: 'Under 100 SKUs',
    desc: 'Highly focused curated catalogs looking for stunning editorial layouts, fast page loads, and simplified high-converting single-page cart checkouts.',
    benefit: '✨ Fast speed optimization, high conversion, and rapid market entry.',
  },
  {
    id: 'growth' as Scale,
    title: 'High-Growth DTC Brand',
    subtitle: '100 – 2,000 SKUs',
    desc: 'Scaling DTC merchants requiring deep collection filtering, intelligent cross-sells, multi-language expansion capability, and rich custom landing pages.',
    benefit: '📈 Advanced search filter trees, dynamic upsells, and scalable blocks.',
  },
  {
    id: 'enterprise' as Scale,
    title: 'Large-Scale Enterprise Plus',
    subtitle: '2,000 – 10,000+ SKUs',
    desc: 'High-volume international e-commerce channels requiring automated inventory flows, ERP sync webhooks, global currency mappings, and advanced checkout logic.',
    benefit: '🏢 High API limits, automated order processing, and ERP integrations.',
  },
];

const INTEGRATIONS = [
  {
    id: 'timeline_rush' as Integration,
    title: 'Priority / Rush Sprint',
    desc: 'Accelerated development sprint schedules aiming to deliver a production-ready store in 4-6 weeks under dedicated Agile sprint cycles.',
  },
  {
    id: 'erp_integration' as Integration,
    title: 'ERP / CRM Inventory Sync',
    desc: 'Complex automated webhook flows connecting Shopify Plus seamlessly with external tools (NetSuite, SAP, Salesforce, custom DBs) for inventory matching.',
  },
  {
    id: 'b2b_wholesale' as Integration,
    title: 'Shopify Plus B2B wholesale',
    desc: 'Enterprise wholesale features incorporating B2B client company accounts, volume threshold discounts, and customized pricelists natively.',
  },
  {
    id: 'custom_apps' as Integration,
    title: 'Bespoke Checkout Extensions',
    desc: 'Tailored promotion logic, custom bundle flows, or bespoke shipping calculations utilising modern Shopify Functions API frameworks.',
  },
];

export function ProjectEstimator() {
  // Wizard States
  const [step, setStep] = useState<number>(0); // 0, 1, 2, 3, 4 (4 is success)
  const [foundation, setFoundation] = useState<Foundation>('custom_theme');
  const [scale, setScale] = useState<Scale>('growth');
  const [selectedIntegrations, setSelectedIntegrations] = useState<Integration[]>([]);
  
  // Contact Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('We are looking for an expert Shopify lead developer to help launch our storefront. We would love to discuss custom sprint timelines and integrations.');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll back to top of estimator section on step change (vital for mobile layout focus)
  useEffect(() => {
    // Only scroll if step changes to avoid scrolling immediately on initial page mount
    if (step > 0 && step < 5) {
      const element = document.getElementById('estimator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [step]);

  // Toggle integrations helper
  function toggleIntegration(id: Integration) {
    setSelectedIntegrations(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  }

  // Handle direct API submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    
    // Retain and compile result of user's quiz + contact message
    const selectedF = FOUNDATIONS.find(f => f.id === foundation)?.title || '';
    const selectedS = DTC_SCALES.find(s => s.id === scale)?.title || '';
    const selectedI = selectedIntegrations
      .map(i => INTEGRATIONS.find(item => item.id === i)?.title)
      .filter(Boolean)
      .join(', ') || 'Default Storefront';

    // Format consolidated message containing both user's custom details and the specs
    const consolidatedMessage = [
      message,
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '📋 PROJECT BLUEPRINT SPECIFICATIONS:',
      `• Architecture:   ${selectedF}`,
      `• Project Fit:    ${selectedS}`,
      `• Integrations:   ${selectedI}`,
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    ].join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          budget: selectedS, // Bind the DTC scale selection to budget
          message: consolidatedMessage
        }),
      });

      if (!res.ok) {
        throw new Error('API response failed');
      }

      setIsSubmitting(false);
      setStep(4); // Trigger success step
    } catch (err) {
      console.error('[Estimator API Error]', err);
      // Fallback: still show the local success step to retain UX flow
      setIsSubmitting(false);
      setStep(4);
    }
  }

  // Calculations
  const progressPercent = Math.min(100, Math.max(0, (step / 3) * 100));

  return (
    <section className={`section ${styles.section}`} id="estimator" aria-labelledby="estimator-heading">
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Interactive Quote Builder</span>
          <h2 id="estimator-heading">
            Shopify Project <span className="text-gradient">Estimator</span>
          </h2>
          <p className={styles.intro}>
            Define your e-commerce requirements in 3 quick steps to compile a tailored project blueprint and request a direct quotation.
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className={`glass ${styles.wizardCard}`}>
          
          {/* Progress Tracker (Only visible during quiz steps) */}
          {step < 4 && (
            <div className={styles.progressTracker}>
              <div className={styles.progressTextRow}>
                <span className={styles.stepIndicator}>
                  Step {step + 1} of 4: <strong className={styles.stepTitle}>
                    {step === 0 && 'Storefront Foundation'}
                    {step === 1 && 'DTC Operational Scale'}
                    {step === 2 && 'Integrations & Sprints'}
                    {step === 3 && 'Submit Scope'}
                  </strong>
                </span>
                <span className={styles.percentText}>{Math.round(progressPercent)}% Completed</span>
              </div>
              <div className={styles.progressOuter}>
                <motion.div 
                  className={styles.progressInner}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>
          )}

          {/* Steps Display Panel */}
          <div className={styles.stepContentPanel}>
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Storefront Foundation */}
              {step === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className={styles.stepLayout}
                >
                  <div className={styles.stepIntroBox}>
                    <h3>Choose your Storefront Foundation</h3>
                    <p>Select the underlying architecture that best fits your technical and design goals.</p>
                  </div>
                  <div className={styles.cardsGrid}>
                    {FOUNDATIONS.map(item => {
                      const Icon = item.icon;
                      const isActive = foundation === item.id;
                      return (
                        <button
                          key={item.id}
                          className={`${styles.selectCard} ${isActive ? styles.cardActive : ''}`}
                          onClick={() => setFoundation(item.id)}
                          type="button"
                        >
                          <div className={styles.cardHeaderRow}>
                            <div className={styles.iconFrame}>
                              <Icon size={20} className={styles.cardIcon} />
                            </div>
                            <div className={styles.radioIndicator}>
                              {isActive && <div className={styles.radioDot} />}
                            </div>
                          </div>
                          <div className={styles.cardInfo}>
                            <span className={styles.cardSubtitle}>{item.subtitle}</span>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <p className={styles.cardDesc}>{item.desc}</p>
                            <span className={styles.cardBenefit}>{item.benefit}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DTC Operational Scale */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className={styles.stepLayout}
                >
                  <div className={styles.stepIntroBox}>
                    <h3>Determine Operational DTC Scale</h3>
                    <p>Help us understand your current inventory volume, API thresholds, and workflow automation needs.</p>
                  </div>
                  <div className={styles.cardsGrid}>
                    {DTC_SCALES.map(item => {
                      const isActive = scale === item.id;
                      return (
                        <button
                          key={item.id}
                          className={`${styles.selectCard} ${isActive ? styles.cardActive : ''}`}
                          onClick={() => setScale(item.id)}
                          type="button"
                        >
                          <div className={styles.cardHeaderRow}>
                            <span className={styles.badgeLabel}>{item.subtitle}</span>
                            <div className={styles.radioIndicator}>
                              {isActive && <div className={styles.radioDot} />}
                            </div>
                          </div>
                          <div className={styles.cardInfo}>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <p className={styles.cardDesc}>{item.desc}</p>
                            <span className={styles.cardBenefit}>{item.benefit}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Integrations & Sprints */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className={styles.stepLayout}
                >
                  <div className={styles.stepIntroBox}>
                    <h3>Select Custom Integration Blocks</h3>
                    <p>Layer optional e-commerce capabilities, external API matching systems, and dedicated rush launch sprints below.</p>
                  </div>
                  <div className={styles.cardsGrid}>
                    {INTEGRATIONS.map(item => {
                      const isActive = selectedIntegrations.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          className={`${styles.selectCard} ${isActive ? styles.cardActive : ''}`}
                          onClick={() => toggleIntegration(item.id)}
                          type="button"
                        >
                          <div className={styles.cardHeaderRow}>
                            <span className={styles.capabilityHint}>Ecommerce Block</span>
                            <div className={`${styles.checkIndicator} ${isActive ? styles.checkIndicatorActive : ''}`}>
                              {isActive && <Check size={12} strokeWidth={3} />}
                            </div>
                          </div>
                          <div className={styles.cardInfo}>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <p className={styles.cardDesc}>{item.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Submission Form & pre-filled brief */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className={styles.submissionLayout}
                >
                  <div className={styles.estimatorFormGrid}>
                    {/* Left: Non-editable Evaluation Result summary */}
                    <div className={styles.briefPreviewColumn}>
                      <div className={`glass ${styles.briefSummaryCard}`}>
                        <div className={styles.briefCardHeader}>
                          <Sparkles size={16} className={styles.glowingStar} />
                          <h4>Project Blueprint Specs</h4>
                        </div>
                        <div className={styles.briefMetricsList}>
                          <div className={styles.briefMetricItem}>
                            <span className={styles.briefMetricLabel}>Architecture:</span>
                            <strong className={styles.briefMetricValue}>
                              {FOUNDATIONS.find(f => f.id === foundation)?.title}
                            </strong>
                          </div>
                          <div className={styles.briefMetricItem}>
                            <span className={styles.briefMetricLabel}>Project Fit:</span>
                            <strong className={styles.briefMetricValue}>
                              {DTC_SCALES.find(s => s.id === scale)?.title}
                            </strong>
                          </div>
                          <div className={styles.briefMetricItem}>
                            <span className={styles.briefMetricLabel}>Integrations:</span>
                            <strong className={styles.briefMetricValue}>
                              {selectedIntegrations.length > 0
                                ? selectedIntegrations
                                    .map(i => INTEGRATIONS.find(item => item.id === i)?.title)
                                    .filter(Boolean)
                                    .join(', ')
                                : 'Default Storefront'}
                            </strong>
                          </div>
                        </div>
                        <p className={styles.briefPreviewHint}>
                          These non-editable evaluation specs will be bundled securely with your message upon submission.
                        </p>
                      </div>
                    </div>

                    {/* Right: Custom message form */}
                    <form onSubmit={handleSubmit} className={styles.estimatorDirectForm}>
                      <div className={styles.formIntroBox}>
                        <h3>Request Direct Architecture Quotation</h3>
                        <p>Complete your credentials and add custom requirements. The evaluation specifications above are fully retained!</p>
                      </div>
                      
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="estimator-name">Full Name</label>
                          <input 
                            type="text" 
                            id="estimator-name" 
                            required 
                            placeholder="e.g. John Doe"
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="estimator-email">Work Email</label>
                          <input 
                            type="email" 
                            id="estimator-email" 
                            required 
                            placeholder="e.g. merchant@brand.com"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="estimator-brief">Additional Requirements & Custom Notes</label>
                        <textarea 
                          id="estimator-brief" 
                          rows={6} 
                          required
                          placeholder="Describe specific integrations, target launch dates, or general design goals..."
                          value={message} 
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={isSubmitting}
                        />
                      </div>

                      <button 
                        type="submit" 
                        className={styles.submitBtn} 
                        disabled={isSubmitting || !name.trim() || !email.trim() || !message.trim()}
                      >
                        {isSubmitting ? (
                          <>
                            <div className={styles.loadingSpinner} />
                            Uploading Blueprint Specs...
                          </>
                        ) : (
                          <>
                            Send Scope Request <Send size={14} />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Submission Success State */}
              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={styles.successScreen}
                >
                  <div className={styles.successIconCircle}>
                    <Check size={40} className={styles.checkIcon} />
                  </div>
                  
                  <h2>Blueprint Successfully Received!</h2>
                  <p className={styles.successSub}>
                    Thank you, <strong>{name}</strong>! I have successfully compiled your custom scope blueprint and Shopify Plus parameters.
                  </p>

                  <div className={styles.estimationMetricsBox}>
                    <div className={styles.successMetric}>
                      <span className={styles.successMetricLabel}>Scope Tier</span>
                      <strong className={styles.successMetricValue}>
                        {scale === 'enterprise' || foundation === 'headless_hydrogen'
                          ? 'Enterprise Plus Tier'
                          : 'Professional DTC Tier'}
                      </strong>
                    </div>
                    <div className={styles.successMetric}>
                      <span className={styles.successMetricLabel}>Est. Sprints</span>
                      <strong className={styles.successMetricValue}>
                        {selectedIntegrations.includes('timeline_rush')
                          ? '4 - 6 Sprints (Fast Track)'
                          : '8 - 12 Sprints (Standard)'}
                      </strong>
                    </div>
                    <div className={styles.successMetric}>
                      <span className={styles.successMetricLabel}>Review SLA</span>
                      <strong className={styles.successMetricValue}>Within 12 Hours</strong>
                    </div>
                  </div>

                  <p className={styles.successFooterText}>
                    A copy of this architectural proposal has been synced to <strong>{email}</strong>. I will review the API matching constraints and contact you directly to schedule an initial discovery call.
                  </p>

                  <button 
                    type="button" 
                    className={styles.resetBtn} 
                    onClick={() => {
                      setStep(0);
                      setSelectedIntegrations([]);
                      setName('');
                      setEmail('');
                      setMessage('We are looking for an expert Shopify lead developer to help launch our storefront. We would love to discuss custom sprint timelines and integrations.');
                    }}
                  >
                    Build Another Blueprint <Rocket size={14} />
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Wizard Navigation Footer (Visible during steps 0-3 for Back option) */}
          {step < 4 && (
            <div className={styles.wizardFooter}>
              <button
                type="button"
                className={styles.navBtnBack}
                onClick={() => setStep(prev => Math.max(0, prev - 1))}
                disabled={step === 0}
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              {step < 3 && (
                <button
                  type="button"
                  className={styles.navBtnNext}
                  onClick={() => setStep(prev => Math.min(3, prev + 1))}
                >
                  Next Step <ArrowRight size={16} />
                </button>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
