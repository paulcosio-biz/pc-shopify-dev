import type { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent/AboutContent';

export const metadata: Metadata = {
  title: 'About — Shopify Development Lead',
  description:
    'Shopify ecommerce developer based in Southeast Asia with expertise in custom themes, Shopify Plus, Liquid, and headless commerce.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <AboutContent />
    </div>
  );
}
