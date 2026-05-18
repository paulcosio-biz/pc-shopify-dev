import type { Metadata } from 'next';
import { WorkGrid } from '@/components/sections/WorkGrid/WorkGrid';

export const metadata: Metadata = {
  title: 'Work — Shopify Projects',
  description:
    'Case studies across 7 industries — fashion, food, apparel, furniture, footwear, coffee, and daily essentials. Shopify Plus, custom themes, and platform migrations.',
};

export default function WorkPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <WorkGrid />
    </div>
  );
}
