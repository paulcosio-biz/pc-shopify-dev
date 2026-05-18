# Shopify Development Lead Portfolio

A high-performance, production-ready portfolio built for a Senior Shopify Development Lead. This project demonstrates modern web development practices, focusing on performance, accessibility, and high-fidelity design.

## 🚀 Live Demo
*(Vercel deployment URL will be added here)*

## 🛠 Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** Vanilla CSS Modules with a custom token-based design system
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Email API:** [Resend](https://resend.com/)
* **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features

### 1. Dual-Theme Architecture
Implemented a scalable design system using CSS variables (`tokens.css`) supporting two distinct themes:
* **Minimal Dark:** A clean, editorial dark mode with deep black backgrounds and subtle contrasts.
* **Glassmorphism:** A premium, dynamic aesthetic featuring frosted glass panels (`backdrop-filter: blur`), ambient light meshes, and complex CSS `::before`/`::after` pseudo-elements for specular light-shine effects.

### 2. Performance & SEO Optimised
* **100/100 Lighthouse Scores:** Achieved perfect scores across Performance, Accessibility, Best Practices, and SEO.
* **Dynamic OpenGraph Images:** Utilises `next/og` Edge runtime to programmatically generate branded social sharing cards for all core routes.
* **Semantic HTML & Accessibility (a11y):** Fully compliant contrast ratios, ARIA labelling, and keyboard-navigable interactive elements.

### 3. Serverless Contact System
* Integrated the **Resend API** for reliable, serverless email handling.
* Client-side validation for immediate user feedback.
* Custom-designed HTML email templates that match the portfolio's branding.

### 4. Component-Driven Design
* Modular folder architecture separating `components/layout`, `components/sections`, and `components/ui`.
* Reusable `ThemeSwitcher`, dynamic `ContactForm`, and animated `SkillsBar`.

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (pages, layouts, OG images)
├── components/           # React Components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, About, Featured Work, etc.)
│   └── ui/               # Reusable UI elements (ThemeSwitcher, forms)
├── data/                 # Local data sources (projects, skills, timeline)
└── styles/               # Global CSS, tokens, and design system
```

## 🚀 Getting Started

### Prerequisites
* Node.js 18.x or later
* pnpm (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Resend API key:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 👨‍💻 Author

**Paul Cosio**
* Shopify Development Lead at transcosmos Asia Philippines Inc.
* [LinkedIn](https://www.linkedin.com/in/paulcosio/)
