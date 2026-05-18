import type { Metadata, Viewport } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import '@/styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-var',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Paul Cosio — Shopify Development Lead',
    template: '%s | Paul Cosio',
  },
  description:
    'Paul Cosio is a Shopify ecommerce developer based in the Philippines, specialising in custom themes, Shopify Plus, platform migrations, and headless commerce for brands across Southeast Asia.',
  keywords: ['Paul Cosio', 'Shopify developer Philippines', 'Shopify Plus', 'ecommerce developer', 'Liquid developer', 'Shopify theme', 'Southeast Asia'],
  openGraph: {
    title: 'Paul Cosio — Shopify Development Lead',
    description: 'Custom Shopify themes, migrations, and headless commerce for growing brands across Southeast Asia.',
    type: 'website',
    locale: 'en_PH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Cosio — Shopify Development Lead',
    description: 'Custom Shopify themes, migrations, and headless commerce for growing brands across Southeast Asia.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080808',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="glass" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme') || 'glass';
                  var mode = localStorage.getItem('portfolio-mode') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.setAttribute('data-mode', mode);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} noise-overlay`} suppressHydrationWarning>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
