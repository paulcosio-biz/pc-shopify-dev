import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { FeaturedWork } from '@/components/sections/FeaturedWork/FeaturedWork';
import { SkillsBar } from '@/components/sections/SkillsBar/SkillsBar';
import { ServicesSection } from '@/components/sections/ServicesSection/ServicesSection';
import { ContactCta } from '@/components/sections/ContactCta/ContactCta';

export const metadata: Metadata = {
  title: 'Shopify Development Lead Portfolio — Ecommerce Expert',
  description:
    'Shopify ecommerce developer specialising in custom themes, Shopify Plus, platform migrations, and headless commerce across Southeast Asia.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <SkillsBar />
      <ServicesSection />
      <ContactCta />
    </>
  );
}
