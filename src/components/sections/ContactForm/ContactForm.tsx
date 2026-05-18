'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Send } from 'lucide-react';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

const BUDGETS = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $10,000',
  '$10,000+',
  'Let\'s discuss',
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      setError('root', { message: 'Something went wrong — please try LinkedIn instead.' });
      return;
    }

    reset();
  };

  return (
    <section className={`section ${styles.section}`} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left — info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Get in touch</span>
            <h1 id="contact-heading">
              Let&apos;s build something<br />
              <span className="text-gradient">great together</span>
            </h1>
            <p className={styles.sub}>
              Have a Shopify project in mind? I&apos;d love to hear about it.
              Fill in the form and I&apos;ll respond within 24 hours.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} aria-hidden="true" />
                <span>Philippines &middot; GMT+8</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} aria-hidden="true" />
                <a
                  href="mailto:biz.paulcosio@gmail.com"
                  className={styles.emailLink}
                >
                  biz.paulcosio@gmail.com
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div className={`glass ${styles.availability}`}>
              <span className={styles.availDot} />
              <div>
                <p className={styles.availTitle}>Open to new projects</p>
                <p className={styles.availSub}>Typically responds within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className={`glass ${styles.formCard}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {isSubmitSuccessful ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Message sent!</h2>
                <p className={styles.successText}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
                <h2 className={styles.formTitle}>Send a message</h2>

                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Jane Smith"
                    autoComplete="name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <span className={styles.error} role="alert">{errors.name.message}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="jane@brand.com"
                    autoComplete="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
                    })}
                  />
                  {errors.email && <span className={styles.error} role="alert">{errors.email.message}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-budget" className={styles.label}>Project budget</label>
                  <select
                    id="contact-budget"
                    className={styles.input}
                    {...register('budget')}
                  >
                    <option value="">Select a range...</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Tell me about your project <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Describe your project, goals, and timeline..."
                    rows={5}
                    {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please write at least 20 characters' } })}
                  />
                  {errors.message && <span className={styles.error} role="alert">{errors.message.message}</span>}
                </div>

                <button type="submit" className={styles.submit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className={styles.spinner} aria-label="Sending…" />
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                {errors.root && (
                  <p className={styles.rootError} role="alert">
                    {errors.root.message}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
