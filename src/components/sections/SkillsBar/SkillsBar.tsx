'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/data/projects';
import { ShoppingBag, Store, Globe, Briefcase, Cpu, Droplet, FileJson, LayoutTemplate, LayoutDashboard, Layers, Atom, FileCode2, FastForward, Paintbrush, Wand2, Settings2, Network, ServerCog, Webhook, Mail, Repeat, GitBranch, Terminal, TerminalSquare, PenTool, Send, Code } from 'lucide-react';
import styles from './SkillsBar.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag size={16} />,
  Store: <Store size={16} />,
  Globe: <Globe size={16} />,
  Briefcase: <Briefcase size={16} />,
  Cpu: <Cpu size={16} />,
  Droplet: <Droplet size={16} />,
  FileJson: <FileJson size={16} />,
  LayoutTemplate: <LayoutTemplate size={16} />,
  LayoutDashboard: <LayoutDashboard size={16} />,
  Layers: <Layers size={16} />,
  Atom: <Atom size={16} />,
  FileCode2: <FileCode2 size={16} />,
  FastForward: <FastForward size={16} />,
  Paintbrush: <Paintbrush size={16} />,
  Wand2: <Wand2 size={16} />,
  Settings2: <Settings2 size={16} />,
  Network: <Network size={16} />,
  ServerCog: <ServerCog size={16} />,
  Webhook: <Webhook size={16} />,
  Mail: <Mail size={16} />,
  Repeat: <Repeat size={16} />,
  GitBranch: <GitBranch size={16} />,
  Terminal: <Terminal size={16} />,
  TerminalSquare: <TerminalSquare size={16} />,
  PenTool: <PenTool size={16} />,
  Send: <Send size={16} />,
  Code: <Code size={16} />,
};

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
              <div className={styles.items}>
                {group.items.map(item => (
                  <motion.div 
                    key={item.name} 
                    className={styles.badge}
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <span className={styles.badgeIcon}>{ICON_MAP[item.icon]}</span>
                    <span className={styles.badgeText}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
