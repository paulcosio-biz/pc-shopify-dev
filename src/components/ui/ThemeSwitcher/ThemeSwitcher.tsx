'use client';

import { useState, useEffect } from 'react';
import { THEMES, type Theme } from '@/data/projects';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeSwitcher.module.css';

const STORAGE_KEY = 'portfolio-theme';
const MODE_KEY = 'portfolio-mode';

export function ThemeSwitcher() {
  const [current, setCurrent] = useState<Theme>('glass');
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem(STORAGE_KEY) as Theme) || 'glass';
    const savedMode = (localStorage.getItem(MODE_KEY) as 'light' | 'dark') || 'dark';
    
    setCurrent(savedTheme);
    setMode(savedMode);
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-mode', savedMode);
  }, []);

  const setTheme = (theme: Theme) => {
    setCurrent(theme);
    setOpen(false);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.setAttribute('data-mode', newMode);
    localStorage.setItem(MODE_KEY, newMode);
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.modeToggle} 
        onClick={toggleMode}
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'light' ? <Moon size={16} strokeWidth={2.5} /> : <Sun size={16} strokeWidth={2.5} />}
      </button>
      
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
    </div>
  );
}
