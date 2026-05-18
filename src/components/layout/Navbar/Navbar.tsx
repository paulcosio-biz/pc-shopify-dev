'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher/ThemeSwitcher';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/work',     label: 'Work'     },
  { href: '/services', label: 'Services' },
  { href: '/stack',    label: 'Stack'    },
  { href: '/contact',  label: 'Contact'  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { 
    setMenuOpen(false); 
    setExpanded(false);
  }, [pathname]);

  return (
    <>
      <header 
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''} ${scrolled && expanded ? styles.headerExpanded : ''} ${menuOpen ? styles.headerOpen : ''}`} 
      role="banner"
      onMouseLeave={() => scrolled && setExpanded(false)}
    >
      <nav className={`container ${styles.nav} ${scrolled ? styles.navScrolled : ''}`} aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Paul Cosio — Go to homepage">
          <span className={styles.logoMark} aria-hidden="true">PC</span>
          <span className={`${styles.logoText} ${scrolled ? styles.logoTextScrolled : ''}`}>Paul Cosio</span>
        </Link>

        {/* Dynamic Desktop Scrolled Controller Trigger */}
        <button 
          className={styles.controllerTrigger} 
          onClick={() => setExpanded(o => !o)}
          aria-label={expanded ? "Collapse menu" : "Expand navigation menu"}
          aria-expanded={expanded}
        >
          <span className={styles.triggerText}>Explore Menu</span>
          <svg className={`${styles.triggerChevron} ${expanded ? styles.triggerChevronOpen : ''}`} width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Desktop links */}
        <ul className={`${styles.links} ${scrolled ? styles.linksScrolled : ''}`} role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.linkActive : ''}`}
              >
                {link.label}
                {pathname === link.href && <span className={styles.linkDot} aria-hidden="true" />}
              </Link>
            </li>
          ))}
          {/* Internal Collapse Button for expanded state */}
          <li className={styles.collapseItem}>
            <button 
              className={styles.collapseBtn} 
              onClick={() => setExpanded(false)}
              aria-label="Collapse menu"
            >
              Collapse ▴
            </button>
          </li>
        </ul>

        {/* Standard controls (Desktop full / Mobile always) */}
        <div className={`${styles.controls} ${scrolled ? styles.controlsScrolled : ''}`}>
          <ThemeSwitcher />
          <Link href="/contact" className={styles.cta} aria-label="Hire me — go to contact">
            Hire Me
          </Link>

          {/* Mobile hamburger menu toggle (always visible on mobile) */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen1 : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen2 : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen3 : ''}`} />
          </button>
        </div>

        {/* Compact Scrolled Controls (only theme switcher, visible when scrolled & collapsed on desktop) */}
        <div className={styles.scrolledControlsCompact}>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>

    {/* Mobile drawer (rendered outside header as direct sibling to bypass nested WebKit fixed stacking context bugs) */}
    <div
      id="mobile-menu"
      className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
      aria-hidden={!menuOpen}
    >
      <ul className={styles.drawerLinks} role="list">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${styles.drawerLink} ${pathname === link.href ? styles.drawerLinkActive : ''}`}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={styles.drawerCta}
        tabIndex={menuOpen ? 0 : -1}
      >
        Hire Me
      </Link>
    </div>
  </>
);
}
