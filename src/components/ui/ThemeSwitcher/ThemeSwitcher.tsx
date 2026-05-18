'use client';

import { useState, useEffect } from 'react';
import { THEMES, type Theme } from '@/data/projects';
import styles from './ThemeSwitcher.module.css';

const STORAGE_KEY = 'portfolio-theme';

export function ThemeSwitcher() {
  const [current, setCurrent] = useState<Theme>('glass');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Theme) || 'glass';
    setCurrent(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const setTheme = (theme: Theme) => {
    setCurrent(theme);
    setOpen(false);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(o => !o)}
        aria-label="Switch theme"
        aria-expanded={open}
      >
        <span className={styles.triggerIcon}>
          {THEMES.find(t => t.id === current)?.emoji}
        </span>
        <span className={styles.triggerLabel}>Theme</span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className={styles.panel} role="listbox" aria-label="Theme options">
          {THEMES.map(theme => (
            <button
              key={theme.id}
              className={`${styles.option} ${current === theme.id ? styles.optionActive : ''}`}
              onClick={() => setTheme(theme.id)}
              role="option"
              aria-selected={current === theme.id}
            >
              <span className={styles.optionEmoji}>{theme.emoji}</span>
              <span className={styles.optionText}>
                <span className={styles.optionLabel}>{theme.label}</span>
                <span className={styles.optionDesc}>{theme.description}</span>
              </span>
              {current === theme.id && (
                <span className={styles.optionCheck}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
