import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Shopify Development Lead',
  description: 'Get in touch to discuss your Shopify project. Available for new client work.',
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <ContactForm />
    </div>
  );
}
