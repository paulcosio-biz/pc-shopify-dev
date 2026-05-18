import type { Metadata } from 'next';
import { ServicesSection } from '@/components/sections/ServicesSection/ServicesSection';
import { ContactCta } from '@/components/sections/ContactCta/ContactCta';

export const metadata: Metadata = {
  title: 'Services — Shopify Development Lead',
  description:
    'Shopify development services: custom themes, platform migrations, Shopify Markets, app integrations, and CRO.',
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <ServicesSection />
      <ContactCta />
    </div>
  );
}
