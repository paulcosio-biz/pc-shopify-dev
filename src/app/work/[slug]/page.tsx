import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS, INDUSTRY_LABELS } from '@/data/projects';
import { CaseStudyDetail } from '@/components/sections/CaseStudyDetail/CaseStudyDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(p => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.label} — Case Study`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find(p => p.slug === slug);
  if (!project) notFound();
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <CaseStudyDetail project={project} />
    </div>
  );
}
