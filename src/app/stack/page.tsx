import { Metadata } from 'next';
import { StackContent } from '@/components/sections/StackContent/StackContent';
import { ContactCta } from '@/components/sections/ContactCta/ContactCta';

export const metadata: Metadata = {
  title: 'Stack — Shopify Development Lead',
  description: 'A deep dive into the technologies, frameworks, and tools I use to build high-converting ecommerce experiences.',
};

export default function StackPage() {
  return (
    <main>
      <StackContent />
      <ContactCta />
    </main>
  );
}
