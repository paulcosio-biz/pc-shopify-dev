import Link from 'next/link';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { href: '/about',    label: 'About'    },
  { href: '/work',     label: 'Work'     },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact'  },
];

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const SOCIAL_LINKS = [
  { href: 'https://ph.linkedin.com/in/paulcosio', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: '/contact',                             label: 'Email me', Icon: Mail         },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand + tagline */}
        <div className={styles.brand}>
          <div className={styles.logoMark}>PC</div>
          <p className={styles.tagline}>
            Shopify ecommerce developer based in the Philippines, building
            high-converting stores for brands across Southeast Asia.
          </p>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialLink}
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {s.label === 'LinkedIn' ? <LinkedInIcon /> : <Mail size={18} />}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className={styles.links} role="list">
            {FOOTER_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Status */}
        <div className={styles.status}>
          <div className={`glass ${styles.statusCard}`}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Open to new projects</span>
          </div>
          <Link href="/contact" className={styles.contactCta}>
            Start a conversation →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © {year} Paul Cosio. All rights reserved.
          </p>
          <p className={styles.copy}>
            Shopify Development Lead · Philippines · GMT+8
          </p>
        </div>
      </div>
    </footer>
  );
}
